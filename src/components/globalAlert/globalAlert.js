import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { discardGlobalAlert } from './slice/globalAlertSlice';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const GlobalAlert = () => {
  const alert = useSelector((state) => state.globalAlert, shallowEqual);

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(discardGlobalAlert());
  };

  return (
    <Snackbar
      open={alert.isActive}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Alert variant='filled' onClose={handleClose} severity={alert.type}>
        {alert.message ? alert.message : null}
      </Alert>
    </Snackbar>
  );
};

export default GlobalAlert;
