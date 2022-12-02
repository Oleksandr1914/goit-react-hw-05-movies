import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box, Cont } from './LayoutStyled';

const Layout = () => {
  return (
    <Cont>
      <Box>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Cont>
  );
};

export default Layout;
