import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import LogInIcon from './LoginIcon';
import WithDropdown from 'components/withDropdown/WithDropdown';

import { Avatar, Box, MenuItem } from '@material-ui/core';

import useLoginStyles from './LoginStyles';

const LogInIconWithDropdown = WithDropdown(LogInIcon);

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
        <Avatar className={classes.avatar}>
          {userName.charAt(0).toUpperCase()}
        </Avatar>
      ) : (
        <LogInIconWithDropdown>
          <MenuItem>Zaloguj się</MenuItem>
          <MenuItem>Rejestracja</MenuItem>
        </LogInIconWithDropdown>
      )}
    </Box>
  );
};

export default Login;
