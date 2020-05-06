import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import RegisterManager from './manager/RegisterManager';
import Alert from '@material-ui/lab/Alert';

import { registerAction } from './actions/registerActions';

import { Snackbar } from '@material-ui/core';

const RegisterContainer = () => {
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const error = useSelector((state) => state.register.error, shallowEqual);
  const isRegistering = useSelector(
    (state) => state.register.loading,
    shallowEqual
  );

  useEffect(() => {
    if (error) {
      setIsAlertOpen(true);
    }
  }, [error]);

  const dispatch = useDispatch();
  const dispatchRegisterAction = (payload, callback) => {
    dispatch(registerAction(payload, callback));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsAlertOpen(false);
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
      <Alert variant='filled' onClose={handleClose} severity='error'>
        {error}
      </Alert>
    </Snackbar>
  );

  return (
    <React.Fragment>
      {notification}
      <RegisterManager
        onSubmit={dispatchRegisterAction}
        isRegistering={isRegistering}
      />
    </React.Fragment>
  );
};

export default RegisterContainer;
