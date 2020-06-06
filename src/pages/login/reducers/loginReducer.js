import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_ACTION,
  REQUEST_USER_INFO,
  RECEIVE_USER_INFO,
  RECEIVE_USER_INFO_ERROR,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS,
  RECEIVE_USER_DETAILS_ERROR
} from '../actions/loginActions';

export const initialUser = {
  userName: undefined,
  isAuthenticated: false,
};

const initialDetails = {
  address: undefined,
  email: undefined,
  enabled: false,
  firstName: undefined,
  lastName: undefined,
  lastShoppingCardId: null,
  phone: undefined,
  roles: [],
  username: undefined,
};

const initialState = {
  isLoggingIn: false,
  isFetchingUser: false,
  loginError: undefined,
  userError: undefined,
  
  isFetchingDetails: false,
  detailsError: undefined,
  
  ...initialUser,
  details: { ...initialDetails }
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
  case REQUEST_USER_DETAILS:
    return { ...state, isFetchingDetails: true };    
  case RECEIVE_USER_DETAILS:
    return { ...state, isFetchingDetails: false, details: action.payload };
  case RECEIVE_USER_DETAILS_ERROR:
    return { ...state, isFetchingDetails: false, detailsError: action.payload };
  case LOGOUT_ACTION:
    return { ...initialState };
  default:
    return {
      ...state,
    };
  }
};

export default loginReducer;
