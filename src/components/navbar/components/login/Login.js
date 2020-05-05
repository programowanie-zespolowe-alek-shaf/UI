import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import {
  LOGIN_PAGE,
  REGISTER_PAGE,
  PROFILE_PAGE,
} from 'global/constants/pages';

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
    <Box className={classes.container}>
      {isAuthenticated ? (
        <AvatarDropdown userName={userName} />
      ) : (
        <LoginDropdown />
      )}
    </Box>
  );
};

export default Login;
