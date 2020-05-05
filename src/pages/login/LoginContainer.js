import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginManager from './manager/LoginManager';
import { loginAction } from './actions/loginActions';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

const LoginContainer = () => {
  const history = useHistory();
  const isAuthenticated = useSelector(
    (state) => state.login.isAuthenticated,
    shallowEqual
  );
  const isLoggingIn = useSelector(
    (state) => state.login.isLoggingIn,
    shallowEqual
  );

  useEffect(() => {
    if (isAuthenticated) history.push('/');
  }, []);

  const dispatch = useDispatch();

  const dispatchLoginAction = (login, password, callback) => {
    dispatch(loginAction(login, password, callback));
  };

  return (
    <React.Fragment>
      <LoginManager onSubmit={dispatchLoginAction} isLoggingIn={isLoggingIn} />
    </React.Fragment>
  );
};

export default LoginContainer;
