import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE } from '../../global/constants/pages';
import LoadingPage from '../../pages/loading/LoadingPage';

const PrivateRoute = ({ component: Component, isAuthenticated, loading, ...rest }) => (
  <Route {...rest} render={(props) => {
    if(loading) return <LoadingPage />;
    if(isAuthenticated || loading) return <Component {...props} />;
    return <Redirect to={LOGIN_PAGE}/>;
  }
  } />
);

PrivateRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

export default PrivateRoute;
