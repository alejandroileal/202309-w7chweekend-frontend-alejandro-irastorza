import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const FormPage = lazy(() => import('../../pages/login.page/login.page'));

export function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<FormPage></FormPage>}></Route>
      </Routes>
    </main>
  );
}
