import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterManager from './manager/RegisterManager';
import Loader from 'react-loader-spinner';
import styles from './styles/registerManager.scss';
import Alert from '@material-ui/lab/Alert';
import { registerAction } from './actions/registerActions';

const RegisterContainer = (props) => {
  const loader = <Loader type="Puff" color="#AC3814" height={32} width={32} visible={props.loading} className={styles.loader} />;
  const notification = props.error && <Alert severity="error">{props.error}</Alert>;

  return (
    <React.Fragment>
      {notification}
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
  dispatchRegisterAction: (payload, callback) => dispatch(registerAction(payload, callback)),
});

RegisterContainer.propTypes = {
  dispatchRegisterAction: PropTypes.func,
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);