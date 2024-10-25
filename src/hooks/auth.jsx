import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token, role } = response.data;
      //console.log('User role:', role)

      //console.log('Response data:', response.data)
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token, role: user.role });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
        console.log(error);
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");
  
    if (token && user) {
      const parsedUser = JSON.parse(user);
      console.log('Parsed User:', parsedUser)

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user: parsedUser, role: parsedUser.role });
    }
  }, []);
  

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
      user: data.user, 
      role: data.user?.role 
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };

