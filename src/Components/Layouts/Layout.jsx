import React, { useEffect } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Layout = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Add your effect logic here
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
