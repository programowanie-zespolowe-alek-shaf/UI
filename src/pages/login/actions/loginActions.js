import { api } from '../../../global/connection/backend/endpoints';
import request from '../../../global/connection/backend/request';
import auth from '../../../components/auth/auth';
import { triggerGlobalAlert } from '../../../components/globalAlert/slice/globalAlertSlice';
import {
  createShoppingCart,
  getCartFromStorage,
  getUsersCart, setCartInStorage,
} from '../../cart/slice/cartSlice';
import { updateCustomer } from '../../customers/slice/customersSlice';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const RECEIVE_USER_INFO_ERROR = 'RECEIVE_USER_INFO_ERROR';

export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS';
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';
export const RECEIVE_USER_DETAILS_ERROR = 'RECEIVE_USER_DETAILS_ERROR';

const requestUserDetails = () => ({
  type: REQUEST_USER_DETAILS,
});

const receiveUserDetails = (data) => ({
  type: RECEIVE_USER_DETAILS,
  payload: data
});

const receiveUserDetailsError = (error) => ({
  type: RECEIVE_USER_INFO_ERROR,
  payload: error,
});

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

/** Fetches user details */
export const getUserDetailsAction = (userName) => (dispatch) => {
  const storageCartId = getCartFromStorage();
  dispatch(requestUserDetails());

  return getUserDetails(userName).then((response) => {
    dispatch(receiveUserDetails(response.data));
    dispatch(getUsersCart(storageCartId));

    if (storageCartId !== response.data.id) {
      const userDetailsWithUpdatedCartId = { ...response.data, lastShoppingCardId: storageCartId };
      dispatch(updateCustomer(userDetailsWithUpdatedCartId, userName));
    }

  }).catch((error) => {
    dispatch(receiveUserDetailsError(error.response && error.response.data.error));
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
  const cartId = getState().login.details.lastShoppingCardId;
  setCartInStorage(cartId);
  dispatch(logoutRequest());
  auth.logout();
};
