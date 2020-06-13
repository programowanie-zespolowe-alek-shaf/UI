import { createSlice } from '@reduxjs/toolkit';
import { api } from 'global/connection/backend/endpoints';
import request from 'global/connection/backend/request';

export const initialState = {
  item: null,
  isLoading: false,
  isAdding: false,
  isDeleting: false,
  error: undefined,
};

const adminPanelSingleSlice = createSlice({
  name: 'adminPanel',
  initialState,
  reducers: {
    fetchItemStart(state) {
      state.isLoading = true;
      state.error = undefined;
    },
    addItemStart(state) {
      state.isAdding = true;
      state.error = undefined;
    },
    deleteItemStart(state) {
      state.isDeleting = true;
      state.error = undefined;
    },
    fetchItemSuccess(state, action) {
      state.isLoading = false;
      state.item = action.payload;
      state.error = undefined;
    },
    addItemSuccess(state) {
      state.isAdding = false;
      state.error = undefined;
    },
    deleteItemSuccess(state) {
      state.isDeleting = false;
      state.error = undefined;
    },
    fetchItemFailure(state, action) {
      state.isLoading = false;
      state.item = null;
      state.error = action.payload;
    },
    addItemFailure(state, action) {
      state.isAdding = false;
      state.error = action.payload;
    },
    deleteItemFailure(state, action) {
      state.isDeleting = false;
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = adminPanelSingleSlice;

const {
  fetchItemStart,
  fetchItemSuccess,
  fetchItemFailure,
  addItemStart,
  addItemSuccess,
  addItemFailure,
  deleteItemStart,
  deleteItemSuccess,
  deleteItemFailure,
} = actions;

const urlsMap = {
  book: api.books,
  user: api.customersUsers,
  order: api.orders,
};

export const getItem = async (dispatch, destination, id) => {
  try {
    dispatch(fetchItemStart());

    const response = await request({
      url: `${urlsMap[destination]}/${id}`,
      method: 'get',
    });

    const item = response.data;

    dispatch(fetchItemSuccess(item));
  } catch (error) {
    const message = error.response.data.error;
    dispatch(fetchItemFailure(message));
  }
};

export const addItem = async (dispatch, destination, data, callback) => {
  try {
    dispatch(addItemStart());
    await request({
      url: `${urlsMap[destination]}`,
      method: 'post',
      data: {
        ...data,
      },
    });
    dispatch(addItemSuccess());
    callback();
  } catch (error) {
    const message = error.response.data.error;
    dispatch(addItemFailure(message));
  }
};

export const deleteItem = async (dispatch, destination, id, onSuccess) => {
  try {
    dispatch(deleteItemStart());
    await request({
      url: `${urlsMap[destination]}/${id}`,
      method: 'delete',
    });
    dispatch(deleteItemSuccess());
    onSuccess();
  } catch (error) {
    const message = error.response.data.error;
    dispatch(deleteItemFailure(message));
  }
};
