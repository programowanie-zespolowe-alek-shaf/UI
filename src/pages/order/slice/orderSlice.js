import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import { triggerGlobalAlert } from '../../../components/globalAlert/slice/globalAlertSlice';
import { setCartInStorage } from '../../cart/slice/cartSlice';
import { getUserInfoAction } from '../../login/actions/loginActions';


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
  
  const payload = {
    'shoppingCardID': shoppingCartId,
    'address': address,
    'shipDate': '2020-06-16',
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
    const newCartId = response.data.lastShoppingCardId;
    setCartInStorage(newCartId);
    getUserInfoAction();
    dispatch(orderSuccess());
    dispatch(triggerGlobalAlert('success', 'Zamówienie przyjęto do realizacji!'));
  }).catch((error) => {
    dispatch(triggerGlobalAlert('error', 'Błąd podczas składania zamówienia, spróbuj ponownie'));
    dispatch(orderError());
  });
};

export default reducer;
