import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_ACTION,
  REQUEST_USER_INFO,
  RECEIVE_USER_INFO,
  RECEIVE_USER_INFO_ERROR,
} from '../actions/loginActions';

export const initialUser = {
  userName: undefined,
  isAuthenticated: false,
};

const initialState = {
  isLoggingIn: false,
  isFetchingUser: true,
  loginError: undefined,
  userError: undefined,
  ...initialUser,
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
  case LOGIN_REQUEST:
    return { ...state, isLoggingIn: true };
  case LOGIN_SUCCESS:
    return { ...state, isLoggingIn: false, loginError: undefined, };
  case LOGIN_ERROR:
    return { ...state, isLoggingIn: false, loginError: action.error };
  case REQUEST_USER_INFO:
    return { ...state, isFetchingUser: true };
  case RECEIVE_USER_INFO:
    return { ...state, userName: action.userName, isAuthenticated: true, isFetchingUser: false, userError: undefined };
  case RECEIVE_USER_INFO_ERROR:
    return { ...state, isAuthenticated: false, isFetchingUser: false, userError: action.error };
  case LOGOUT_ACTION:
    return { ...initialState, isFetchingUser: false };
  default:
    return {
      ...state,
    };
  }
};

export default loginReducer;
