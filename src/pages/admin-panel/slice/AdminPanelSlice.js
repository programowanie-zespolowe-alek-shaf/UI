import { createSlice } from '@reduxjs/toolkit';
import { api } from 'global/connection/backend/endpoints';
import { adminBooks } from 'global/connection/backend/settings';
import axios from 'axios';

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
  'books': `${api.books}?offset=${adminBooks.offset}&limit=${adminBooks.limit}`,
  'users': `${api.customersUsers}`,
  'orders': `${api.orders}`,
}

export const getAdminPanelItems = async (dispatch, destination) => {
  try {
    dispatch(fetchAdminPanelItemsStart());
    // const { offset, limit } = adminBooks;
    const response = await axios.get(
      urlsMap[destination]
    );

    console.log(response);

    const books = response.data;

    dispatch(fetchAdminPanelItemsSuccess(books.list));
  } catch (error) {
    const message = error.response.data;
    dispatch(fetchAdminPanelItemsFailure(message));
  }
};
