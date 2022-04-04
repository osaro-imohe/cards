import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Home from '../pages/home';
import Admin from '../pages/admin';

const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route
        path="*"
        element={<Navigate to="" />}
      />
    </Routes>
  </BrowserRouter>
);

export default Navigation;
