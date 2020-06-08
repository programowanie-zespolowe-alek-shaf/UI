import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE } from '../../global/constants/pages';
import LoadingPage from '../../pages/loading/LoadingPage';
import { shallowEqual, useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) =>{
  const user = useSelector((state) => state.login, shallowEqual);
  return  (
    <Route {...rest} render={(props) => {
      if(user.isFetchingUser) return <LoadingPage />;
      if(user.isAuthenticated) return <Component {...props} />;
      return <Redirect to={LOGIN_PAGE}/>;
    }
    } />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

export default PrivateRoute;
