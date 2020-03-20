import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../../../components/form/Form';
import messages from '../messages/messages';
import globalMessages from '../../../global/messages/globalMessages';
import styles from '../styles/loginManager.scss';

const LoginManager = (props) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const inputs = [
    {
      type: 'text',
      placeholder: globalMessages.loginSentenceCase,
      name: 'login',
      error: loginError,
      onChange: (event) => onChange(event)
    },
    {
      type: 'password',
      placeholder: globalMessages.passwordSentenceCase,
      name: 'password',
      error: passwordError,
      onChange: (event) => onChange(event)
    },  
  ];

  const clearErrors = () => { setLoginError(''); setPasswordError(''); setDisabled(false); };

  const onChange = (event) => {
    if(event.target.name === 'login') setLogin(event.target.value);
    if(event.target.name === 'password') setPassword(event.target.value);
    clearErrors();
  };

  const isInputValid = () => {
    if(login === '') { setLoginError(messages.loginError); setDisabled(true); return false; }
    if(password === '') { setPasswordError(messages.passwordError); setDisabled(true); return false; }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if(isInputValid()) {
      props.onSubmit(login, password, () => {});
    }
  };

  return (
    <div className={styles.formWrapper || 'loginManager__form-wrapper'}>
      <Form
        inputs={inputs}
        onSubmit={(event) => onSubmit(event) }
        redirect={{ message: messages.doNotHaveAccount, linkText: globalMessages.signUpSentenceCase, linkUrl: '/register' }}
        submitText={globalMessages.signInSentenceCase}
        title={messages.signInToApp}
        disabled={disabled || props.loading}
      />
    </div>
  );
};

LoginManager.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default LoginManager;
