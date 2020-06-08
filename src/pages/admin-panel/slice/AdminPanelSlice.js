import { createSlice } from '@reduxjs/toolkit';
import { api } from 'global/connection/backend/endpoints';
import { adminBooks } from 'global/connection/backend/settings';
import axios from 'axios';

export const initialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: undefined,
};

const adminPanelSlice = createSlice({
  name: 'adminPanel',
  initialState,
  reducers: {
    fetchAdminPanelItemsStart(state) {
      state.isLoading = true;
      state.isLoaded = false;
      state.error = undefined;
    },
    fetchAdminPanelItemsSuccess(state, action) {
      state.isLoading = false;
      state.isLoaded = true;
      state.items = action.payload;
      state.error = undefined;
    },
    fetchAdminPanelItemsFailure(state, action) {
      state.isLoading = false;
      state.isLoaded = false;
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

export const getAdminPanelItems = async (dispatch) => {
  try {
    dispatch(fetchAdminPanelItemsStart());
    const { offset, limit } = adminBooks;

    const response = await axios.get(
      `${api.books}?offset=${offset}&limit=${limit}`
    );
    const books = response.data;

    dispatch(fetchAdminPanelItemsSuccess(books.list));
  } catch (error) {
    const message = error.response.data;
    dispatch(fetchAdminPanelItemsFailure(message));
  }
};
