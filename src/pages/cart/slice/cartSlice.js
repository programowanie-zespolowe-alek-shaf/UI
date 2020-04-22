import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';

const cartSlice = createSlice({
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

    requestAddToCart(state, action) {
      state.loading = true;
      state.error = undefined;
    },
    addToCartSuccess(state, action) {
      state.loading = false;
      state.items = action.payload.items;
    },
    addToCartError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    requestDeleteFromCart(state, action) {
      state.loading = true;
      state.error = undefined;
    },
    deleteFromCartSuccess(state, action) {
      state.loading = false;
      state.items = action.payload.items;
    },
    deleteFromCartError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

const { actions, reducer } = cartSlice;
export const {
  requestCart,
  receiveCart,
  receiveCartError,
  requestAddToCart,
  addToCartError,
  addToCartSuccess,
  deleteFromCartSuccess,
  deleteFromCartError,
  requestDeleteFromCart
} = actions;

export const getUsersCart = (userId) => (dispatch) => {

  const getCart = (userId) => {
    return request({ url: `${api.cart}/${userId}`, method: 'get' });
  };

  dispatch(requestCart());
  return getCart(userId).then((response) => {
    dispatch(receiveCart(response.data));
  }).catch((error) => { receiveCartError(error); });
};

export const addItemToCart = (item, userId) => (dispatch) => {

  const addToCart = (item, userId) => {
    return request({ url: api.addToCart, method: 'post', data: { item, userId } });
  };

  dispatch(requestAddToCart());
  return addToCart(item, userId).then((response) => {
    dispatch(addToCartSuccess(response.data));
  }).catch((error) => { addToCartError(error); });
};

export const deleteFromCart = (itemId, userId) => (dispatch) => {

  const deleteFromCart = (itemId, userId) => {
    return request({
      // url: api.addToCart,
      // method: 'delete',
      // data: { userId }
    });
  };

  dispatch(requestDeleteFromCart());
  return deleteFromCart(itemId, userId).then((response) => {
    dispatch(deleteFromCartSuccess(response.data));
  }).catch((error) => { deleteFromCartError(error); });
};

export default reducer;
