import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import LoginManager from './manager/LoginManager';
import { getUserInfoAction, loginAction } from './actions/loginActions';
import styles from './styles/loginManager.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EXPLORE_PAGE } from '../../global/constants/pages';

const LoginContainer = (props) => {

  const history = useHistory();
  const user = useSelector(state => state.login);

  useEffect(() => {
    if(user.isAuthenticated) history.push(EXPLORE_PAGE);
  }, []);

  const loader = <Loader type="Puff" color="#AC3814" height={32} width={32} visible={props.isLoggingIn} className={styles.loader} />;

  return (
    <React.Fragment>
      {loader}
      <LoginManager onSubmit={props.dispatchLoginAction} loading={props.isLoggingIn} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  loginError: state.login.loginError,
  isLoggingIn: state.login.isLoggingIn,
});

const mapDispatchToProps = dispatch => ({
  dispatchLoginAction: (login, password, callback) => dispatch(loginAction(login, password, callback)),
  dispatchGetUserInfoAction: () => dispatch(getUserInfoAction())
});

LoginContainer.propTypes = {
  dispatchLoginAction: PropTypes.func,
  dispatchGetUserInfoAction: PropTypes.func,
  loginError: PropTypes.string,
  isLoggingIn: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
