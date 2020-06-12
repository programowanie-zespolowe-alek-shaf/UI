import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PAGE } from '../../global/constants/pages';
import LoadingPage from '../../pages/loading/LoadingPage';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';
import AdminRequired from '../../pages/admin-panel/pages/adminRequired/AdminRequired';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.login, shallowEqual);
  const customer = useSelector((state) => state.customer, shallowEqual);
  const dispatch = useDispatch();

  const { adminNeeded } = rest;
  const isAdmin = customer.details.isAdmin;
  
  const renderAdminContent = (props) => {

    if (isAdmin) {
      return <Component {...props} />;
    }

    dispatch(triggerGlobalAlert('error', 'Wymagana rola administratora'));
    return <AdminRequired />;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if(user.isAuthenticated) {
          if (customer.loading) return <LoadingPage />;
          if (adminNeeded) return renderAdminContent(props);
          return <Component {...props} />;
        }
        if(user.isFetchingUser) return <LoadingPage />;
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

