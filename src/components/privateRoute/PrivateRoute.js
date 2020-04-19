import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { LOGIN_PAGE } from "../../global/constants/pages";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />
    }
  />
);
PrivateRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

export default PrivateRoute;
