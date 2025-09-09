import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';

const AppRoutes = () => {
  const navigationRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
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
