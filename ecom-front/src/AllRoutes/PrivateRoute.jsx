import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const state = useSelector((store) => store.auth);
  if (state.data.isAuth) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
