import { createSlice } from '@reduxjs/toolkit';
import { api } from 'global/connection/backend/endpoints';
import { adminBooks } from 'global/connection/backend/settings';
import request from 'global/connection/backend/request';

export const initialState = {
  items: [],
  isLoading: false,
  error: undefined,
};

const adminPanelSlice = createSlice({
  name: 'adminPanel',
  initialState,
  reducers: {
    fetchAdminPanelItemsStart(state) {
      state.isLoading = true;
      state.error = undefined;
    },
    fetchAdminPanelItemsSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = undefined;
    },
    fetchAdminPanelItemsFailure(state, action) {
      state.isLoading = false;
      state.items = [];
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = adminPanelSlice;

const {
  fetchAdminPanelItemsStart,
  fetchAdminPanelItemsSuccess,
  fetchAdminPanelItemsFailure,
} = actions;

const urlsMap = {
  books: `${api.books}?offset=${adminBooks.offset}&limit=${adminBooks.limit}`,
  users: `${api.customersUsers}?offset=0&limit=100`,
  orders: `${api.orders}?offset=0&limit=10`,
};

export const getAdminPanelItems = async (dispatch, destination) => {
  try {
    dispatch(fetchAdminPanelItemsStart());

    const response = await request({
      url: urlsMap[destination],
      method: 'get',
    });

    const items = response.data;

    if (destination === 'orders') {
      dispatch(fetchAdminPanelItemsSuccess(items));
    } else {
      dispatch(fetchAdminPanelItemsSuccess(items.list));
    }
  } catch (error) {
    const message = error.response.data;
    dispatch(fetchAdminPanelItemsFailure(message));
  }
};
