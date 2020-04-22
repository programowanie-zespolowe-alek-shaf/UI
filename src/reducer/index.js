import { combineReducers } from 'redux';
import loginReducer from '../pages/login/reducers/loginReducer';
import registerReducer from '../pages/register/reducers/registerReducer';
import cartSlice from '../pages/cart/slice/cartSlice';

export const allReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  cart: cartSlice,
});
