import { Navigate, Route, Routes } from 'react-router';

export const Routes = () => {
  return (
    <Routes>
      <Route path="login" element={<></>} />
      <Route path="set-password" element={<></>} />

      <Route path="/*" element={<Navigate to="login" />} />
    </Routes>
  );
};
