import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import { triggerGlobalAlert } from '../../../components/globalAlert/slice/globalAlertSlice';
import { createCartSuccess, setCartInStorage } from '../../cart/slice/cartSlice';
import { resetCoupon } from './couponSlice';
import { getUserInfoAction } from '../../login/actions/loginActions';
import moment from 'moment';
import {getUserDetailsAction} from "../../customers/slice/customersSlice";


export const initialState = {
  loading: false,
  isSuccess: false,
  isError: false,
};


const orderSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    requestOrder(state, action) {
      state.loading = true;
    },
    orderSuccess(state, action) {
      state.loading = false;
      state.isSuccess = true;
    },
    orderError(state, action) {
      state.isError = true;
      state.loading = false;
    },
    restartOrder(state, action) {
      return initialState;
    }
  }
});

const { actions, reducer } = orderSlice;

export const {
  requestOrder,
  orderError,
  orderSuccess,
  restartOrder
} = actions;

export const orderPlacement = (address, couponCode) => (dispatch, getState) => {
  const shoppingCartId = getState().customer.details.lastShoppingCardId;

  const date = moment().add(3, 'days').format('YYYY-MM-DD');

  const payload = {
    'shoppingCardID': shoppingCartId,
    'address': address,
    'shipDate': date,
    'couponCode': couponCode
  };
  
  const order = () => {
    return request({
      url: `${api.finalizeOrder}`,
      method: 'post',
      data: payload
    });
  };

  dispatch(requestOrder());
  return order().then((response) => {
    setCartInStorage(response.data.id);
    dispatch(getUserInfoAction());
    dispatch(orderSuccess());
    dispatch(resetCoupon());
    dispatch(triggerGlobalAlert('success', 'Zamówienie przyjęto do realizacji!'));
  }).catch((error) => {
    dispatch(triggerGlobalAlert('error', 'Błąd podczas składania zamówienia, spróbuj ponownie'));
    dispatch(orderError());
  });
};

export default reducer;
