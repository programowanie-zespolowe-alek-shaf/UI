import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import Form from '../../../components/form/Form';
import { LOGIN_PAGE } from '../../../global/constants/pages';
import { useHistory } from 'react-router-dom';
import globalMessages from '../../../global/messages/globalMessages';
import messages from '../../register/messages/messages';
import styles from '../styles/registerManager.scss';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: { value: '', error: '' },
  password: { value: '', error: '' },
  passwordRepeat: { value: '', error: '' },
  firstName: { value: '', error: '' },
  lastName: { value: '', error: '' },
  email: { value: '', error: '' },
  phone: { value: '', error: '' },
  address: { value: '', error: '' },
  disabled: false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setValue(state, action) {
      const { field, value } = action.payload;
      state[field] = { ...state[field], value };
    },
    setError(state, action) {
      const { field, error } = action.payload;
      state[field] = { ...state[field], error };
    },
    setDisabled(state, action) {
      state.disabled = action.payload;
    },
    clearErrors(state, action) {
      Object.keys(state).forEach((key) => {
        state[key] = { ...state[key], error: '' };
      });
      state.disabled = false;
    },
    clearAll(state, action) {
      return initialState;
    },
  },
});

const RegisterManager = (props) => {
  const actions = registerSlice.actions;
  const [state, dispatchLocal] = useReducer(
    registerSlice.reducer,
    initialState
  );
  const history = useHistory();

  const inputs = [
    {
      type: 'text',
      placeholder: messages.fistNameSentenceCase,
      name: 'firstName',
      error: state.firstName.error,
      onChange: (event) => onChange(event),
    },
    {
      type: 'text',
      placeholder: messages.lastNameSentenceCase,
      name: 'lastName',
      error: state.lastName.error,
      onChange: (event) => onChange(event),
    },
    {
      type: 'text',
      placeholder: messages.userNameSentenceCase,
      name: 'userName',
      error: state.userName.error,
      onChange: (event) => onChange(event),
    },
    {
      type: 'text',
      placeholder: messages.emailSentenceCase,
      name: 'email',
      error: state.email.error,
      onChange: (event) => onChange(event),
    },
    {
      type: 'password',
      placeholder: messages.passwordSentenceCase,
      name: 'password',
      error: state.password.error,
      onChange: (event) => onChange(event),
    },
    {
      type: 'password',
      placeholder: messages.passwordRepeatSentenceCase,
      name: 'passwordRepeat',
      error: state.passwordRepeat.error,
      onChange: (event) => onChange(event),
    },
    {
      type: 'number',
      placeholder: messages.phoneSentenceCase,
      name: 'phone',
      error: state.phone.error,
      onChange: (event) => onChange(event),
    },
    {
      type: 'text',
      placeholder: messages.addressSentenceCase,
      name: 'address',
      error: state.address.error,
      onChange: (event) => onChange(event),
    },
  ];

  const clearErrors = () => {
    dispatchLocal(actions.clearErrors());
    dispatchLocal(actions.setDisabled(false));
  };

  const onChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
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
    const fields = inputs.map((input) => input.name);
    fields.forEach((field) =>
      standardValidator(
        state[field].value,
        field,
        messages.emptyFieldSentenceCase
      )
    );
    return valid;
  };

  const redirectToSingIn = () => {
    history.push(LOGIN_PAGE);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username: state.userName.value,
      password: state.password.value,
      firstName: state.firstName.value,
      lastName: state.lastName.value,
      email: state.email.value,
      phone: state.phone.value,
      address: state.address.value,
      enabled: 'true',
    };

    if (isInputValid()) {
      props.onSubmit(payload, redirectToSingIn);
    }
  };

  return (
    <div className={styles.formWrapper || 'registerManager__form-wrapper'}>
      <Form
        inputs={inputs}
        onSubmit={(event) => onSubmit(event)}
        redirect={{
          message: messages.haveAccount,
          linkText: globalMessages.signInSentenceCase,
          linkUrl: '/login',
        }}
        submitText={globalMessages.signUpSentenceCase}
        title={messages.signUnToApp}
        disabled={state.disabled || props.loading}
      />
    </div>
  );
};

RegisterManager.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default RegisterManager;
