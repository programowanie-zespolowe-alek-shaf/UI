import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE, MAIN_PAGE } from '../../global/constants/pages';
import LoadingPage from '../../pages/loading/LoadingPage';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { triggerGlobalAlert } from '../globalAlert/slice/globalAlertSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.login, shallowEqual);
  const dispatch = useDispatch();

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
            console.log('Dupa');
            if (customerDetails.loading) return <LoadingPage />;
            if (customerDetails.roles.includes('ROLE_ADMIN')) {
              return <Component {...props} />;
            } else {
              dispatch(triggerGlobalAlert('error', 'Dostęp zabroniony!'));
              return <Redirect to={MAIN_PAGE} />;
            }
          } else {
            return <Component {...props} />;
          }
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
