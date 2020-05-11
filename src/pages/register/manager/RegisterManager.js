import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { LOGIN_PAGE } from '../../../global/constants/pages';
import globalMessages from 'global/messages/globalMessages';
import { registerSlice, initialState } from './slice/registerSlice';
import inputs from './inputs/inputs';
import INPUT_NAMES from './inputs/names';
import INPUT_ERRORS from './inputs/errors';
import INPUT_REGEXPS from './inputs/regexps';
import REGISTER_MESSAGES from '../messages/messages.js';

import SubmitButton from 'components/submitButton/SubmitButton';

import { Typography, TextField, Grid, Box, Link } from '@material-ui/core';

import useRegisterManagerStyles from './RegisterManagerStyles';

const RegisterManager = (props) => {
  const classes = useRegisterManagerStyles();

  const history = useHistory();
  const actions = registerSlice.actions;
  const [state, dispatchLocal] = useReducer(
    registerSlice.reducer,
    initialState
  );

  useEffect(() => {
    const input = state[INPUT_NAMES.passwordRepeat];
    if (input.tested) {
      validatePasswordRepeat(input.value);
    }
  }, [state[INPUT_NAMES.password]]);

  const redirectToSignIn = () => {
    history.push(LOGIN_PAGE);
  };

  const validatePasswordRepeat = (value) => {
    let isCorrect;
    if (value === state[INPUT_NAMES.password].value) {
      isCorrect = true;
    } else {
      isCorrect = false;
    }
    dispatchLocal(
      actions.setCorrect({
        field: INPUT_NAMES.passwordRepeat,
        correct: isCorrect,
      })
    );
  };

  const validateInput = (inputName, inputValue) => {
    if (inputName === INPUT_NAMES.passwordRepeat)
      validatePasswordRepeat(inputValue);
    else {
      let isCorrect = INPUT_REGEXPS[inputName].test(inputValue);
      dispatchLocal(
        actions.setCorrect({
          field: inputName,
          correct: isCorrect,
        })
      );
    }
  };

  const validateForm = () => {
    let isCorrect = true;
    for (let input of inputs) {
      if (!state[input.input.name].correct) {
        isCorrect = false;
        break;
      }
    }

    return isCorrect;
  };

  const onChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    dispatchLocal(actions.setValue({ field: inputName, value: inputValue }));

    if (state[inputName].tested) {
      validateInput(inputName, inputValue);
    }
  };

  const onBlur = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    validateInput(inputName, inputValue);

    dispatchLocal(
      actions.setTested({
        field: inputName,
        tested: true,
      })
    );
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

    const isFormValid = validateForm();

    console.log(isFormValid);

    if (isFormValid) {
      props.onSubmit(payload, redirectToSignIn);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Typography component='h1' variant='h5' className={classes.title}>
        {REGISTER_MESSAGES.signUp}
      </Typography>
      <form onSubmit={onSubmit} className={classes.form}>
        <Grid container spacing={2}>
          {inputs.map((input, index) => {
            const inputName = input.input.name;
            return (
              <Grid key={`register-input-${index}`} item {...input.sizes}>
                <TextField
                  {...input.input}
                  variant='outlined'
                  required
                  fullWidth
                  value={state[inputName].value}
                  error={state[inputName].tested && !state[inputName].correct}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={classes.input}
                  disabled={state.disabled}
                  helperText={
                    state[inputName].tested && !state[inputName].correct
                      ? INPUT_ERRORS[inputName]
                      : false
                  }
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
              {REGISTER_MESSAGES.signUp}
            </SubmitButton>
          </Grid>
        </Grid>
      </form>
      <Box mt={4} display='flex' justifyContent='center'>
        <Typography display='inline' variant='body1'>
          {REGISTER_MESSAGES.haveAnAccount}&nbsp;
        </Typography>
        <Link to={LOGIN_PAGE} component={RouterLink} variant='body1'>
          {REGISTER_MESSAGES.signIn}
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
