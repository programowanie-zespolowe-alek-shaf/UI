import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';

const getCartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], loading: false, coupon: undefined, error: undefined },
  reducers: {
    requestCart(state, action) {
      state.loading = true;
      state.error = undefined;
    },
    receiveCart(state, action) {
      state.loading = false;
      state.items = action.payload.items;
    },
    receiveCartError(state, action) {
      state.loading = false;
      state.items = [];
      state.error = action.payload;
    },
  }
});

const { actions, reducer } = getCartSlice;
export const { requestCart, receiveCart, receiveCartError } = actions;

export const getUsersCart = (userId) => (dispatch) => {

  const getCart = (userId) => {
    return request({ url: `${api.cart}/${userId}`, method: 'get' });
  };

  dispatch(requestCart());
  return getCart(userId).then((response) => {
    dispatch(receiveCart(response.data));
  }).catch((error) => { receiveCartError(error); });
};

export default reducer;
