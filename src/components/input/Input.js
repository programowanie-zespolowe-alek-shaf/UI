import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.scss';

const Input = (props) => {

  const { name, type, value, onChange, className, placeholder, disabled } = props;

  const typeStyle = {
    text: (styles.inputText),
    password: (styles.inputPassword),
    submit: (styles.inputSubmit),
  };

  return (
    <div className={styles.inputWrapper}>
      <input className={typeStyle[type] + ` ${ className } + ${ props.error ? (styles.error) : '' }`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div className={styles.inputErrorMessage}>
        {props.error}
      </div>
    </div>);
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'submit']).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
