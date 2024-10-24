import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'

export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route path='*' element={ <Navigate to="/"/> }/>
    </Routes>
  )
}