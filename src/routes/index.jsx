import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes.jsx"

export function Routes(){
  const { user } = useAuth();

  return(
    <BrowserRouter>
     <AppRoutes/> 
    </BrowserRouter>
  )
}