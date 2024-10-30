import { Routes, Route, Navigate } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Favorites } from '../components/Favorites';
import { Edit } from '../pages/Edit';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/edit'element={<Edit />}/>
      <Route path="/new" element={<New />}/>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details  />} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}