import { combineReducers } from 'redux';
import loginReducer from '../pages/login/reducers/loginReducer';
import registerReducer from '../pages/register/reducers/registerReducer';
import cartSlice from '../pages/cart/slice/cartSlice';
import globalAlertSlice from '../components/globalAlert/slice/globalAlertSlice';
import categoriesSlice from '../pages/category/slice/categoriesSlice';
import bookSlice from '../pages/book/slice/bookSlice';
import customersSlice from '../pages/customers/slice/customersSlice';
import routeSlice from '../reducer/routeSlice';
import couponSlice from '../pages/order/slice/couponSlice';
import orderSlice from '../pages/order/slice/orderSlice';

export const allReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  cart: cartSlice,
  globalAlert: globalAlertSlice,
  categories: categoriesSlice,
  book: bookSlice,
  customer: customersSlice,
  route: routeSlice,
  coupon: couponSlice,
  order: orderSlice,
});
