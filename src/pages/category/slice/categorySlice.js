import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';

export const initialState = {
  books: [],
  page: null,
  count: null,
  loading: true,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategoryStart(state, action) {
      state.books = [];
      state.count = 0;
      state.loading = true;
      state.error = null;
    },
    getCategorySuccess(state, action) {
      state.books = action.payload.books;
      state.count = action.payload.count;
      state.error = null;
      state.loading = false;
    },
    getCategoryFailure(state, action) {
      state.books = [];
      state.count = 0;
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { actions, reducer } = categorySlice;
export const {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,
} = actions;

export const getCategoryPage = async (dispatch, id, currentPage) => {
  try {
    dispatch(getCategoryStart());
    let offset = 0;

    if (currentPage) {
      offset = (currentPage - 1) * itemsPerPage.CATEGORY;
    }
    const limit = itemsPerPage.CATEGORY;
    const response = await request({
      url: `${api.books}?offset=${offset}&limit=${limit}&category=${id}`,
    });
    const data = response.data;

    const pageData = {
      books: data.list,
      count: data.count,
    };
    dispatch(getCategorySuccess(pageData));
  } catch (error) {
    const message = error.response.data.error;
    dispatch(getCategoryFailure(message));
  }
};

export default reducer;
