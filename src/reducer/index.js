import { combineReducers } from 'redux';
import loginReducer from '../pages/login/reducers/loginReducer';
import registerReducer from '../pages/register/reducers/registerReducer';
import cartSlice from '../pages/cart/slice/cartSlice';
import paginationSlice from '../components/pagination/slice/paginationSlice';
import categoriesSlice from '../pages/category/slice/categoriesSlice';
import featuredSlice from '../pages/main/components/featured/slice/featuredSlice';

export const allReducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  cart: cartSlice,
  pagination: paginationSlice,
  featured: featuredSlice,
  categories: categoriesSlice
});
