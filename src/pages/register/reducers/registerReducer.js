import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../actions/registerActions';

const initialState = {
  loading: false,
  error: undefined,
};

const registerReducer = (state = initialState, action) => {
  switch(action.type) {
  case REGISTER_REQUEST:
    return {
      ...state,
      loading: true
    };
  case REGISTER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: undefined,
    };
  case REGISTER_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  default:
    return {
      ...state,
    };
  }
};

export default registerReducer;