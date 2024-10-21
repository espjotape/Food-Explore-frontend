import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    isAdmin: false, // Defina se o usuário é admin ou não
  });

 return(
  <AuthContext.Provider 
  value={{ user }}>
   {children}
  </AuthContext.Provider>
 )
}

function useAuth(){
 const context = useContext(AuthContext)
 return context
}

export { AuthProvider, useAuth }