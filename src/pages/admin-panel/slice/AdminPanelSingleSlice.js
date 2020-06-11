import { createSlice } from '@reduxjs/toolkit';
import { api } from 'global/connection/backend/endpoints';
import request from 'global/connection/backend/request';

export const initialState = {
  item: null,
  isLoading: false,
  error: undefined,
};

const adminPanelSingleSlice = createSlice({
  name: 'adminPanel',
  initialState,
  reducers: {
    fetchAdminPanelItemStart(state) {
      state.isLoading = true;
      state.error = undefined;
    },
    fetchAdminPanelItemSuccess(state, action) {
      state.isLoading = false;
      state.item = action.payload;
      state.error = undefined;
    },
    fetchAdminPanelItemFailure(state, action) {
      state.isLoading = false;
      state.item = null;
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = adminPanelSingleSlice;

const {
  fetchAdminPanelItemStart,
  fetchAdminPanelItemSuccess,
  fetchAdminPanelItemFailure,
} = actions;

const urlsMap = {
  book: api.books,
  user: api.customersUsers,
  order: api.orders,
};

export const getAdminPanelItem = async (dispatch, destination, id) => {
  try {
    dispatch(fetchAdminPanelItemStart());

    const response = await request({
      url: `${urlsMap[destination]}/${id}`,
      method: 'get',
    });

    const item = response.data;

    dispatch(fetchAdminPanelItemSuccess(item));
  } catch (error) {
    const message = error.response.data;
    dispatch(fetchAdminPanelItemFailure(message));
  }
};
