import { combineReducers } from 'redux';
import loginReducer from '../pages/login/reducers/loginReducer';
import registerReducer from '../pages/register/reducers/registerReducer';
import cartReducer from '../pages/cart/reducer/cartReducer';

export const allReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  cart: cartReducer,
});
