import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import { updateCustomer } from '../../customers/slice/customersSlice';

export const initialState = {
  id: undefined,
  createDate: undefined,
  items: [],
  count: 0,
  loading: false,
  coupon: undefined,
  totalCost: 0,
  error: undefined,
};

export const getCartFromStorage = () => localStorage.getItem('lastShoppingCardId');
export const setCartInStorage = (id) => localStorage.setItem('lastShoppingCardId', id);
export const deleteCartInStorage = () => localStorage.removeItem('lastShoppingCardId');

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    requestCart(state, action) {
      state.loading = true;
      state.error = undefined;
    },
    receiveCart(state, action) {
      state.loading = false;
      state.id = action.payload.id;
      state.createDate = action.payload.createDate;
      state.items = action.payload.items.list;
      state.count = action.payload.items.count;
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
    },
    deleteFromCartError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    requestCreateCart(state, action) {
      state.loading = true;
    },
    createCartSuccess(state, action) {
      state.loading = false;
      state.id = action.payload.id;
      state.createDate = action.payload.createDate;
      state.items = action.payload.items.list;
      state.count = action.payload.items.count;
    },
    createCartError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    requestUpdateCartItem(state, action) {
      // state.loading = true;
    },
    updateCartItemSuccess(state, action) {
      state.loading = false;
    },
    updateCartItemError(state, action) {
      state.error = action.payload;
    },
    resetCartStore(state, action) {
      return initialState;
    }
  },
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
  requestDeleteFromCart,
  requestCreateCart,
  createCartSuccess,
  createCartError,
  updateCartItemError,
  updateCartItemSuccess,
  requestUpdateCartItem,
  resetCartStore
} = actions;

export const getUsersCart = (id) => (dispatch) => {
  const getCart = (id) => {
    return request({
      url: `${api.shoppingCards}/${id}`,
      method: 'get' });
  };

  dispatch(requestCart());
  return getCart(id).then((response) => {
    dispatch(receiveCart(response.data));
  }).catch((error) => { receiveCartError(error.response && error.response.data.error); });
};

export const addItemToCart = (bookId) => (dispatch, getState) => {
  const cartId = getState().login.details.lastShoppingCardId || getCartFromStorage();

  const addToCart = (cartId) => {
    return request({
      url: `${api.shoppingCards}/${cartId}/items`,
      method: 'post',
      data: {
        bookId: bookId,
        quantity: 1
      },
    });
  };

  dispatch(requestAddToCart());
  return addToCart(cartId)
    .then((response) => {
      dispatch(addToCartSuccess(response.data));
      dispatch(getUsersCart(cartId));
    })
    .catch((error) => {
      addToCartError(error.response && error.response.data.error);
    });
};

export const deleteFromCart = (itemId) => (dispatch, getState) => {
  const cartId = getState().login.details.lastShoppingCardId || getCartFromStorage();

  const deleteFromCart = (itemId) => {
    return request({
      url: `${api.shoppingCards}/${cartId}/items/${itemId}`,
      method: 'delete',
    });
  };

  dispatch(requestDeleteFromCart());
  return deleteFromCart(itemId).then((response) => {
    dispatch(deleteFromCartSuccess(response.data));
    dispatch(getUsersCart(cartId));
  }).catch((error) => { deleteFromCartError(error.response && error.response.data.error); });
};

export const createShoppingCart = (userName) => (dispatch, getState) => {
  const userDetails = getState().login.details;

  const createCart = () => {
    return request({
      url: api.shoppingCards,
      method: 'post',
      data: { username: userName }
    });
  };

  dispatch(requestCreateCart());
  return createCart(userName)
    .then((response) => {
      dispatch(createCartSuccess(response.data));
      setCartInStorage(response.data.id);
    })
    .catch((error) => {
      createCartError(error.response && error.response.data.error);
    });
};

export const updateCartItem = (itemId, bookId, quantity) => (dispatch, getState) => {
  const cartId = getState().login.details.lastShoppingCardId || getCartFromStorage();
  console.log(itemId, bookId, quantity);
  const updateItem = (itemId) => {
    return request({
      url: `${api.shoppingCards}/${cartId}/items/${itemId}`,
      method: 'put',
      data: { bookId, quantity }
    });
  };

  dispatch(requestUpdateCartItem());
  return updateItem(itemId).then((response) => {
    dispatch(updateCartItemSuccess());
    dispatch(getUsersCart(cartId));
  }).catch((error) => { dispatch(updateCartItemError(error.response && error.response.data.error)); });
};

export const clearCartData = () => dispatch => {
  dispatch(resetCartStore());
  deleteCartInStorage();
};

export default reducer;
