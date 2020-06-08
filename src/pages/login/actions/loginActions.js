import { api } from '../../../global/connection/backend/endpoints';
import request from '../../../global/connection/backend/request';
import auth from '../../../components/auth/auth';
import { triggerGlobalAlert } from '../../../components/globalAlert/slice/globalAlertSlice';
import {
  createShoppingCart, deleteCartInStorage,
  getCartFromStorage,
  getUsersCart,
} from '../../cart/slice/cartSlice';
import { getUserDetailsAction, clearCustomer } from '../../customers/slice/customersSlice';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const RECEIVE_USER_INFO_ERROR = 'RECEIVE_USER_INFO_ERROR';

export const logoutRequest = () => ({
  type: LOGOUT_ACTION,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

const requestUserInfo = () => ({
  type: REQUEST_USER_INFO,
});

const receiveUserInfo = (data) => ({
  type: RECEIVE_USER_INFO,
  userName: data.username
});

const receiveUserError = (error) => ({
  type: RECEIVE_USER_INFO_ERROR,
  error,
});

const signIn =(body) => {
  return request({
    url: api.signIn,
    method: 'post',
    data: body
  });
};

export const getUserInfo = () => {
  return request({
    url: api.loginTest,
    method: 'get',
  });
};

export const getUserDetails = (userName) => {
  return request({
    url: `${api.customersUsers}/${userName}`,
    method: 'get',
  });
};

/** Tests if user is logged in or not, then fetches details */
export const getUserInfoAction = () => (dispatch) => {

  dispatch(requestUserInfo());
  return getUserInfo().then((response) => {
    dispatch(receiveUserInfo(response.data));
    dispatch(getUserDetailsAction(response.data.username));
  }).catch((error) => {

    if(error.response.status === 401) {
      const cartId = getCartFromStorage();
      dispatch(receiveUserError(error.response && error.response.data.error))
      if(cartId) return dispatch(getUsersCart(cartId));
      dispatch(createShoppingCart(null));
    }

    dispatch(receiveUserError(error.response && error.response.data.error));
  });
};

export const loginAction = (login, password, callback) => (dispatch) => {
  dispatch(loginRequest());
  const body = {
    username: login,
    password: password,
  };
  
  return signIn(body)
    .then((res) => {
      auth.login(res.headers.authorization);
      dispatch(loginSuccess());
      dispatch(getUserInfoAction(callback));
    })
    .catch((error) => {
      const errResp = error.response;
      if(errResp && errResp.status === 401){
        dispatch(triggerGlobalAlert('error', 'Błędny login lub hasło'));
        return dispatch(loginError('Błędny login lub hasło'));
      }
      dispatch(triggerGlobalAlert('error', 'Serwis niedostępny'));
      return dispatch(loginError('Serwis niedostępny'));
    });
};

export const logoutAction = () => (dispatch, getState) => {
  deleteCartInStorage();
  dispatch(clearCustomer());
  dispatch(createShoppingCart(null));
  dispatch(logoutRequest());
  auth.logout();
};
