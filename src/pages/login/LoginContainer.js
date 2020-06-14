import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginManager from './manager/LoginManager';
import { loginAction } from './actions/loginActions';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

const LoginContainer = () => {
  const history = useHistory();
  const login = useSelector(state => state.login, shallowEqual);
  const lastRoute = useSelector(state => state.route.lastRoute, shallowEqual);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated, shallowEqual);

  useEffect(() => {
    if (isAuthenticated) history.push(lastRoute);
  }, [isAuthenticated]);

  const dispatch = useDispatch();
  const dispatchLoginAction = (login, password, callback) => {
    dispatch(loginAction(login, password, callback));
  };

  return (
    <React.Fragment>
      <LoginManager onSubmit={dispatchLoginAction} isLoggingIn={login.isLoggingIn} />
    </React.Fragment>
  );
};

export default LoginContainer;
