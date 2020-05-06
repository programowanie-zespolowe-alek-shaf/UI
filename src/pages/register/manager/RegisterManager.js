import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { LOGIN_PAGE } from '../../../global/constants/pages';
import globalMessages from 'global/messages/globalMessages';
import messages from '../../register/messages/messages';
import { registerSlice, initialState } from './slice/registerSlice';
import inputs from './inputs/inputs';

import SubmitButton from 'components/submitButton/SubmitButton';

import { Typography, TextField, Grid, Box, Link } from '@material-ui/core';

import useRegisterManagerStyles from './RegisterManagerStyles';

const RegisterManager = (props) => {
  const classes = useRegisterManagerStyles();

  const actions = registerSlice.actions;
  const [state, dispatchLocal] = useReducer(
    registerSlice.reducer,
    initialState
  );
  const history = useHistory();

  const clearErrors = () => {
    dispatchLocal(actions.clearErrors());
    dispatchLocal(actions.setDisabled(false));
  };

  const onChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    console.log(inputName, inputValue);
    dispatchLocal(actions.setValue({ field: inputName, value: inputValue }));
    clearErrors();
  };

  const isInputValid = () => {
    let valid = true;

    const standardValidator = (value, field, error) => {
      if (value.length === 0 || value.length > 30) {
        dispatchLocal(actions.setError({ field, error }));
        dispatchLocal(actions.setDisabled(true));
        valid = false;
      }
    };

    const passwordValidator = () => {
      if (state.password.value !== state.passwordRepeat.value) {
        dispatchLocal(
          actions.setError({
            field: 'passwordRepeat',
            error: messages.passwordErrorSentenceCase,
          })
        );
        valid = false;
      }
    };

    passwordValidator();
    const fields = inputs.map((input) => input.input.name);
    fields.forEach((field) => {
      standardValidator(state[field].value, field, messages.emptyField);
    });

    return valid;
  };

  const redirectToSignIn = () => {
    history.push(LOGIN_PAGE);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username: state.login.value,
      password: state.password.value,
      firstName: state.firstName.value,
      lastName: state.lastName.value,
      email: state.email.value,
      phone: state.phone.value,
      address: state.address.value,
      enabled: 'true',
    };

    if (isInputValid()) {
      props.onSubmit(payload, redirectToSignIn);
    }
  };

  console.log('rerender');

  return (
    <div className={classes.wrapper}>
      <Typography component='h1' variant='h5' className={classes.title}>
        {messages.signUp}
      </Typography>
      <form onSubmit={onSubmit} className={classes.form}>
        <Grid container spacing={2}>
          {inputs.map((input, index) => {
            console.log('Halko');
            return (
              <Grid key={`register-input-${index}`} item {...input.sizes}>
                <TextField
                  {...input.input}
                  variant='outlined'
                  required
                  fullWidth
                  value={state[input.input.name].value}
                  error={state[input.input.name].error !== ''}
                  onChange={onChange}
                  className={classes.input}
                  disabled={state.disabled}
                />
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <SubmitButton
              isLoading={props.isRegistering}
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              disableElevation
            >
              {messages.signUp}
            </SubmitButton>
          </Grid>
        </Grid>
      </form>
      <Box mt={4} display='flex' justifyContent='center'>
        <Typography display='inline' variant='body1'>
          {messages.haveAnAccount}&nbsp;
        </Typography>
        <Link to={LOGIN_PAGE} component={RouterLink} variant='body1'>
          {messages.signIn}
        </Link>
      </Box>
      <Box mt={3}>
        <Typography variant='body2' color='textSecondary' align='center'>
          {globalMessages.siteName}
        </Typography>
      </Box>
    </div>
  );
};

RegisterManager.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default RegisterManager;
