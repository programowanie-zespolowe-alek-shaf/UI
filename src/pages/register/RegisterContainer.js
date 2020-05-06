import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import RegisterManager from './manager/RegisterManager';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

import { registerAction } from './actions/registerActions';

const RegisterContainer = () => {
  const error = useSelector((state) => state.register.error, shallowEqual);
  const dispatch = useDispatch();
  const isRegistering = useSelector(
    (state) => state.register.loading,
    shallowEqual
  );

  useEffect(() => {
    if (error) {
      dispatch(triggerGlobalAlert('error', error));
    }
  }, [error]);

  const dispatchRegisterAction = (payload, callback) => {
    dispatch(registerAction(payload, callback));
  };

  return (
    <React.Fragment>
      <RegisterManager
        onSubmit={dispatchRegisterAction}
        isRegistering={isRegistering}
      />
    </React.Fragment>
  );
};

export default RegisterContainer;
