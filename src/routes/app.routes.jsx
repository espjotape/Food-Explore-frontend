import { Routes, Route, Navigate } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Favorites } from '../components/Favorites';
import { Edit } from '../pages/Edit';
import { Cart } from '../pages/Cart';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />}/>
      <Route path='/edit/:id'element={<Edit />}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/details/:id" element={<Details  />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}