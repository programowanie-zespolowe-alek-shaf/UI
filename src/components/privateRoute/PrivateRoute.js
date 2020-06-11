import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE, MAIN_PAGE } from '../../global/constants/pages';
import LoadingPage from '../../pages/loading/LoadingPage';
import { shallowEqual, useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.login, shallowEqual);

  const { adminNeeded } = rest;

  const customerDetails = useSelector(
    (state) => state.customer.details,
    shallowEqual
  );

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.isFetchingUser) return <LoadingPage />;
        if (user.isAuthenticated) {
          if (adminNeeded) {
            if (customerDetails.roles.includes('ROLE_ADMIN')) {
              return <Component {...props} />;
            } else {
              return <Redirect to={MAIN_PAGE} />;
            }
          }
          return <Component {...props} />;
        }
        return <Redirect to={LOGIN_PAGE} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  adminNeeded: PropTypes.bool,
};

export default PrivateRoute;
