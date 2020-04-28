import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    items: [],
    next: undefined,
    previous: undefined,
    loading: false,
    loaded: false,
    error: undefined,
  },
  reducers: {
    fetchPageStart(state) {
      state.loading = true;
      state.loaded = false;
      state.error = undefined;
    },
    fetchPageSuccess(state, action) {
      state.loading = false;
      state.loaded = true;
      state.items = action.payload.items;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.error = undefined;
    },
    fetchPageFailure(state, action) {
      state.loading = false;
      state.loaded = false;
      state.items = [];
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = paginationSlice;
export const { fetchPageStart, fetchPageSuccess, fetchPageFailure } = actions;

export const getPage = (baseUrl, pageNumber) => (dispatch) => {
  //CHANGE TO REAL ENDPOINTS IN THE FUTURE
  baseUrl = '../../../utils/mocks/books/books.json';
  pageNumber = '';

  dispatch(fetchPageStart());

  axios
    .get(`${baseUrl}/${pageNumber}`)
    .then((response) => {
      dispatch(fetchPageSuccess(response));
    })
    .catch((error) => dispatch(fetchPageFailure(error.message)));
};

export default reducer;
