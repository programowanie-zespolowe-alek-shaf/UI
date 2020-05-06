import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginManager from './manager/LoginManager';
import { loginAction } from './actions/loginActions';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import messages from './messages/messages';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const LoginContainer = () => {
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  const history = useHistory();
  const register = useSelector((state) => state.register, shallowEqual);
  const isAuthenticated = useSelector(
    (state) => state.login.isAuthenticated,
    shallowEqual
  );
  const isLoggingIn = useSelector(
    (state) => state.login.isLoggingIn,
    shallowEqual
  );

  useEffect(() => {
    if (register.success) {
      setIsAlertOpen(true);
    }
  }, [register]);

  useEffect(() => {
    if (isAuthenticated) history.push('/');
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsAlertOpen(false);
  };

  const dispatch = useDispatch();
  const dispatchLoginAction = (login, password, callback) => {
    dispatch(loginAction(login, password, callback));
  };

  const notification = (
    <Snackbar
      open={isAlertOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Alert variant='filled' onClose={handleClose} severity='success'>
        {messages.successfullyCreatedUser}
      </Alert>
    </Snackbar>
  );

  return (
    <React.Fragment>
      {notification}
      <LoginManager onSubmit={dispatchLoginAction} isLoggingIn={isLoggingIn} />
    </React.Fragment>
  );
};

export default LoginContainer;
