import { combineReducers } from 'redux';
import loginReducer from '../pages/login/reducers/loginReducer';
import registerReducer from '../pages/register/reducers/registerReducer';

export const allReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
});
