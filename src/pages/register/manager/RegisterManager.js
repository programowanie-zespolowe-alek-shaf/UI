import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Form from '../../../components/form/Form';
import { LOGIN_PAGE } from '../../../global/constants/pages';
import globalMessages from '../../../global/messages/globalMessages';
import messages from '../../register/messages/messages';
import styles from '../styles/registerManager.scss';


const RegisterManager = (props) => {
  // TODO UGLY CHANGE xD
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const inputs = [
    {
      type: 'text',
      placeholder: messages.fistNameSentenceCase,
      name: 'firstname',
      error: firstnameError,
      onChange: (event) => onChange(event)
    },
    {
      type: 'text',
      placeholder: messages.lastNameSentenceCase,
      name: 'lastname',
      error: lastnameError,
      onChange: (event) => onChange(event)
    },
    {
      type: 'text',
      placeholder: messages.userNameSentenceCase,
      name: 'username',
      error: usernameError,
      onChange: (event) => onChange(event)
    },
    {
      type: 'text',
      placeholder: messages.emailSentenceCase,
      name: 'email',
      error: emailError,
      onChange: (event) => onChange(event)
    },
    {
      type: 'password',
      placeholder: messages.passwordSentenceCase,
      name: 'password',
      error: passwordError,
      onChange: (event) => onChange(event)
    },

    {
      type: 'password',
      placeholder: messages.passwordRepeatSentenceCase,
      name: 'passwordRepeat',
      error: passwordRepeatError,
      onChange: (event) => onChange(event)
    },
  ];

  const clearErrors = () => {
    setFirstnameError('');
    setLastnameError('');
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setPasswordRepeatError('');
    setDisabled(false);
  };

  const onChange = (event) => {
    if(event.target.name === 'firstname') setFirstname(event.target.value);
    if(event.target.name === 'lastname') setLastname(event.target.value);
    if(event.target.name === 'username') setUsername(event.target.value);
    if(event.target.name === 'email') setEmail(event.target.value);
    if(event.target.name === 'password') setPassword(event.target.value);
    if(event.target.name === 'passwordRepeat') setPasswordRepeat(event.target.value);
    clearErrors();
  };

  const isInputValid = () => {
    if(firstname === '') { setFirstnameError(messages.firstnameError); setDisabled(true); return false; }
    if(lastname === '') { setLastnameError(messages.lastnameError); setDisabled(true); return false; }
    if(username === '') { setUsernameError(messages.usernameError); setDisabled(true); return false; }
    if(email === '') { setEmailError(messages.emailError); setDisabled(true); return false; }
    if(password === '') { setPasswordError(messages.passwordError); setDisabled(true); return false; }
    if(passwordRepeat === '') { setPasswordRepeatError(messages.passwordRepeatError); setDisabled(true); return false; }
    if(password !== passwordRepeat) {setPasswordRepeatError(messages.passwordsCompareError); setDisabled(true); return false; }
    return true;
  };

  const redirectToSingIn = () => {
    history.push(LOGIN_PAGE);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if(isInputValid()) {
      props.onSubmit(firstname, lastname, username, email, password, redirectToSingIn);
    }
  };

  return (
    <div className={styles.formWrapper || 'registerManager__form-wrapper'}>
      <Form
        inputs={inputs}
        onSubmit={(event) => onSubmit(event) }
        redirect={{ message: messages.haveAccount, linkText: globalMessages.signInSentenceCase, linkUrl: '/login' }}
        submitText={globalMessages.signUpSentenceCase}
        title={messages.signUnToApp}
        disabled={disabled || props.loading}
      />
    </div>
  );
};

RegisterManager.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default RegisterManager;