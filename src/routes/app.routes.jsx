import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Favorites } from '../components/Favorites';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details  />} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}