import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/input/Input';
import styles from './form.scss';
import { Link } from 'react-router-dom';


const Form = (props) => {

  const inputs = props.inputs.map((input) => (
    <Input
      key={input.name}
      type={input.type}
      placeholder={input.placeholder}
      name={input.name}
      error={input.error}
      onChange={input.onChange}
    />
  ));

  const redirect = (
    <div className={styles.redirectLink}>
      <span>{props.redirect.message}</span>
      <Link to={props.redirect.linkUrl}>{props.redirect.linkText}</Link>
    </div>
  );

  return (
    <form onSubmit={props.onSubmit} className={styles.formInstance}>
      <div className={styles.formTitle}>{props.title}</div>
      {inputs}
      <Input type="submit" name="submit" value={props.submitText} />
      {props.redirect && redirect}
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['text', 'password']),
    placeholder: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
  })),
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
  redirect: PropTypes.shape({
    linkUrl: PropTypes.string,
    linkText: PropTypes.string,
    message: PropTypes.string,
  }),
  disabled: PropTypes.bool,
};

export default Form;
