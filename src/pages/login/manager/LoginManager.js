import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import messages from '../messages/messages';
import globalMessages from '../../../global/messages/globalMessages';
import { REGISTER_PAGE } from 'global/constants/pages';

import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Link,
} from '@material-ui/core';

import useLoginManagerStyles from './LoginManagerStyles';

const LoginManager = (props) => {
  const classes = useLoginManagerStyles();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearErrors = () => {
    setLoginError('');
    setPasswordError('');
  };

  const isInputValid = () => {
    if (login === '') {
      setLoginError(messages.loginError);
      return false;
    }
    if (password === '') {
      setPasswordError(messages.passwordError);
      return false;
    }
    return true;
  };

  const onChange = (event) => {
    if (event.target.name === 'login') setLogin(event.target.value);
    if (event.target.name === 'password') setPassword(event.target.value);
    clearErrors();
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (isInputValid()) {
      props.onSubmit(login, password, () => {});
    }
  };

  return (
    <div className={classes.wrapper}>
      <Typography component='h1' variant='h5' className={classes.title}>
        {globalMessages.signIn}
      </Typography>
      <form onSubmit={onSubmit} className={classes.form}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='login'
          label={globalMessages.login}
          name='login'
          autoComplete='login'
          autoFocus
          onChange={onChange}
          error={loginError !== ''}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label={globalMessages.password}
          type='password'
          id='password'
          autoComplete='current-password'
          onChange={onChange}
          error={passwordError !== ''}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          disableElevation
          className={classes.submit}
        >
          {props.isLoggingIn ? (
            <CircularProgress className={classes.spinner} size={28} />
          ) : (
            globalMessages.signIn
          )}
        </Button>
        <Box mt={4} display='flex' justifyContent='center'>
          <Typography display='inline' variant='body1'>
            {messages.doNotHaveAccount}&nbsp;
          </Typography>
          <Link to={REGISTER_PAGE} component={RouterLink} variant='body1'>
            {messages.createAnAccount}
          </Link>
        </Box>
        <Box mt={3}>
          <Typography variant='body2' color='textSecondary' align='center'>
            {globalMessages.siteName}
          </Typography>
        </Box>
      </form>
    </div>
  );
};

LoginManager.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default LoginManager;
