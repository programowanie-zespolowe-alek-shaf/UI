import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';

const addToCartSlice = createSlice({
  name: 'cart',
  initialState: { loading: false, error: undefined, data: undefined },
  reducers: {
    requestAddToCart(state, action) {
      state.loading = true;
      state.error = undefined;
    },
    addToCartSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    addToCartError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

const { actions, reducer } = addToCartSlice;
export const { requestAddToCart, addToCartSuccess, addToCartError } = actions;

export const addItemToCart = (item, userId) => (dispatch) => {

  const addToCart = (item, userId) => {
    return request({ url: api.addToCart, method: 'post', data: { item, userId } });
  };

  dispatch(requestAddToCart());
  return addToCart(item, userId).then((response) => {
    dispatch(addToCartSuccess(response.data));
  }).catch((error) => { addToCartError(error); });
};

export default reducer;
