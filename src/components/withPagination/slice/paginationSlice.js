import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from 'global/connection/backend/endpoints';

export const initialState = {
  items: [],
  count: null,
  loading: true,
  error: null,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    getPaginationPageStart(state, action) {
      state.items = [];
      state.count = 0;
      state.loading = true;
      state.error = null;
    },
    getPaginationPageSuccess(state, action) {
      state.items = action.payload.items;
      state.count = action.payload.count;
      state.error = null;
      state.loading = false;
    },
    getPaginationPageFailure(state, action) {
      state.items = [];
      state.count = 0;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { actions, reducer } = paginationSlice;
export const {
  getPaginationPageStart,
  getPaginationPageSuccess,
  getPaginationPageFailure,
} = actions;

export const getPaginationPage = async (
  dispatch,
  baseUrl,
  currentPage,
  itemsPerPage
) => {
  try {
    dispatch(getPaginationPageStart());

    const offset = (currentPage - 1) * itemsPerPage;
    const limit = itemsPerPage;
    const response = await request({
      url: `${baseUrl}offset=${offset}&limit=${limit}`,
    });
    const data = response.data;
    const pageData = {};

    if (baseUrl === `${api.orders}?`) {
      pageData.items = data;
      pageData.count = data.length;
    } else {
      pageData.items = data.list;
      pageData.count = data.count;
    }

    dispatch(getPaginationPageSuccess(pageData));
  } catch (error) {
    const message = error.response.data.error;
    dispatch(getPaginationPageFailure(message));
  }
};

export default reducer;
