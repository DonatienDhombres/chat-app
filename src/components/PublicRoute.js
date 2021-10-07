import React from 'react';
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeProps }) => {
  const { profile, isLoading } = useProfile();

  if (!profile && isLoading) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (profile && !isLoading) {
    return <Redirect to="/signin" />;
  }

  if (profile) {
    return <Redirect to="/home" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
