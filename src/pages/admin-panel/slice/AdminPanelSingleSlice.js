import { createSlice } from '@reduxjs/toolkit';
import { api } from 'global/connection/backend/endpoints';
import request from 'global/connection/backend/request';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

export const initialState = {
  item: null,
  isLoading: false,
  isAdding: false,
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
    addAdminPanelItemStart(state) {
      state.isAdding = true;
      state.error = undefined;
    },
    fetchAdminPanelItemSuccess(state, action) {
      state.isLoading = false;
      state.item = action.payload;
      state.error = undefined;
    },
    addAdminPanelItemSuccess(state) {
      state.isAdding = false;
      state.error = undefined;
    },
    fetchAdminPanelItemFailure(state, action) {
      state.isLoading = false;
      state.item = null;
      state.error = action.payload;
    },
    addAdminPanelItemFailure(state, action) {
      state.isAdding = false;
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = adminPanelSingleSlice;

const {
  fetchAdminPanelItemStart,
  fetchAdminPanelItemSuccess,
  fetchAdminPanelItemFailure,
  addAdminPanelItemStart,
  addAdminPanelItemSuccess,
  addAdminPanelItemFailure,
} = actions;

const urlsMap = {
  book: api.books,
  user: api.customersUsers,
  order: api.orders,
};

export const addAdminPanelItem = async (
  dispatch,
  destination,
  data,
  callback
) => {
  try {
    console.log('ACtion fired!');
    dispatch(addAdminPanelItemStart());
    const response = await request({
      url: `${urlsMap[destination]}`,
      method: 'post',
      data: {
        ...data,
      },
    });
    dispatch(addAdminPanelItemSuccess());
    // callback();
  } catch (error) {
    dispatch(addAdminPanelItemFailure(error.response.data.error));
  }
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
