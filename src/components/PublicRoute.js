import React from 'react';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (profile) {
    return <Redirect to="/home" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
