import React from 'react';
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = useProfile();

  if (profile) {
    return <Redirect to="/home" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
