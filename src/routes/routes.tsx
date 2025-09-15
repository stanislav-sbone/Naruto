import type { FC } from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Character from '../pages/Character';
import TailtedBeasts from '../pages/TailedBeasts';

const AppRoutes: FC = () => {
  const navigationRoutes = [
    { path: '/', element: <Home /> },
    { path: '/tailed-beasts', element: <TailtedBeasts /> },
    { path: '/about', element: <About /> },
    { path: 'character/:param', element: <Character /> },
  ];
  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
