import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE, MAIN_PAGE } from '../../global/constants/pages';
import LoadingPage from '../../pages/loading/LoadingPage';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.login, shallowEqual);
  const customer = useSelector((state) => state.customer, shallowEqual);
  const dispatch = useDispatch();

  const { adminNeeded } = rest;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.isFetchingUser) return <LoadingPage />;
        if (user.isAuthenticated) {
          if (adminNeeded) {
            if (customer.loading || !customer.checked) {
              return <LoadingPage />;
            } else if (!customer.error) {
              if (customer.details.roles.includes('ROLE_ADMIN')) {
                return <Component {...props} />;
              } else {
                return <Redirect to={MAIN_PAGE} />;
              }
            }
          } else {
            dispatch(triggerGlobalAlert('error', customer.error.message));
          }
        } else {
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

