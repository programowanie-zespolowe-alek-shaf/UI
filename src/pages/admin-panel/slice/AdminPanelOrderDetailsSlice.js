import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from 'global/connection/backend/endpoints';
import { response, deleteResponse } from '../../../global/mock/book';
import axios from 'axios';
import {number} from "prop-types";
import {fetchUser, fetchUserError, fetchUserSuccess} from "../../profile/slice/ProfileDetailsSlice";


export const initialState = {
  isLoading: false,
  isLoaded: false,
  error: undefined,
  order:  {
    id: null,
    shoppingCardId:  '',
    shipDate:  '',
    status:  '',
  },
};

const adminPanelOrderDetailsSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetchOrder(state, action) {
      state.isLoading = true;
      state.isLoaded = false;
      state.error = undefined;

    },
    fetchOrderSuccess(state, action) {
      state.isLoading = false;
      state.isLoaded = true;
      state.order = Object.assign(state.order, action.payload);
      state.error = undefined;
    },
    fetchOrderError(state, action) {
      state.isLoading = false;
      state.isLoaded = false;
      state.order = {};
      state.error = action.payload;
    }
  },
});
export const { reducer, actions } = adminPanelOrderDetailsSlice;
export const {
  fetchOrder,
  fetchOrderSuccess,
  fetchOrderError
} = actions;

export const getOrderById = async (dispatch, orderId) => {
  dispatch(fetchOrder());
  const response = request({
    url: `${api.orders}/${orderId}`,
    method: 'get',
  }).then((response) => {
    dispatch(fetchOrderSuccess(response.data));
  }).catch((error) => {
    dispatch(fetchOrderError(error.response && error.response.data.error));
  });
};