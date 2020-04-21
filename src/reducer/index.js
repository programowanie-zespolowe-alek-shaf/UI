import { combineReducers } from 'redux';
import loginReducer from '../pages/login/reducers/loginReducer';
import registerReducer from '../pages/register/reducers/registerReducer';
import getCartSlice from '../pages/cart/reducer/getCartSlice';
import addCartSlice from '../pages/cart/reducer/addToCartSlice';
import

export const allReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
});
