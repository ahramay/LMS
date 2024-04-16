// PrivateRoute.js
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isAuthenticated = useSelector(state => state.auth.user.isAuthenticated);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard/sign-in" replace={true} />
  );
};

export default PrivateRoute;
