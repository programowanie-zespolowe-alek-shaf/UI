import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import LoginDropdown from './LoginDropdown';
import AvatarDropdown from './AvatarDropdown';

import { Box } from '@material-ui/core';

import useLoginStyles from './LoginStyles';

const Login = () => {
  const classes = useLoginStyles();
  const isAuthenticated = useSelector(
    (state) => state.login.isAuthenticated,
    shallowEqual
  );
  const userName = useSelector((state) => state.login.userName, shallowEqual);

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <AvatarDropdown userName={userName} />
      ) : (
        <LoginDropdown />
      )}
    </React.Fragment>
  );
};

export default Login;
