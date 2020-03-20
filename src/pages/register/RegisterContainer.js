import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterManager from './manager/RegisterManager';
import Loader from 'react-loader-spinner';
import styles from './styles/registerManager.scss';
import { registerAction } from './actions/registerActions';

const RegisterContainer = (props) => {
  const loader = <Loader type="Puff" color="#AC3814" height={32} width={32} visible={props.loading} className={styles.loader} />;

  return (
    <React.Fragment>
      {loader}
      <RegisterManager onSubmit={props.dispatchRegisterAction} loading={props.loading} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  error: state.register.error,
  loading: state.register.loading,
});

const mapDispatchToProps = dispatch => ({
  dispatchRegisterAction: (firstname, lastname, username, email, password, callback) => dispatch(registerAction(firstname, lastname, username, email, password, callback)),
});

RegisterContainer.propTypes = {
  dispatchRegisterAction: PropTypes.func,
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);