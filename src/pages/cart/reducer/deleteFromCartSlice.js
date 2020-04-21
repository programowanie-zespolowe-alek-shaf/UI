import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';

const deleteFromCartSlice = createSlice({
  name: 'cart',
  initialState: { loading: false, error: undefined, data: undefined },
  reducers: {
    requestDeleteFromCart(state, action) {
      state.loading = true;
      state.error = undefined;
    },
    deleteFromCartSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    deleteFromCartError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

const { actions, reducer } = deleteFromCartSlice;
export const { requestDeleteFromCart, deleteFromCartSuccess, deleteFromCartError } = actions;

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
