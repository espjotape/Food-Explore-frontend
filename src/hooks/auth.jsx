import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

import { api } from "../services/api"

export const AuthContext = createContext()

function AuthProvider({ children }) {
  /*const [user, setUser] = useState({
    isAdmin: false, // Defina se o usuário é admin ou não
  });*/

  const [ data, setData ] = useState({})

  async function signIn({ email, password}){
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@foodexploerer:user", JSON.stringify(user));
      localStorage.setItem("@foodexploerer:token", token);
      
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel entrar.")
        console.log(error)
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@rocketnotes:token")
    localStorage.removeItem("@rocketnotes:user")

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexploerer:token")
    const user = localStorage.getItem("@foodexploerer:user")

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
    });
    }
  }, [])

  return(
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: data.user
      }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
 const context = useContext(AuthContext)
 return context
}

export { AuthProvider, useAuth }