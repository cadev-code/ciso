import { Login, SetPassword } from '@/pages';
import { Navigate, Route, Routes } from 'react-router';

export const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="set-password" element={<SetPassword />} />

      {/* Redirige al navegar por rutas no declaradas. */}
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
