import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import response from '../../../global/mock/books/books';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    items: [],
    next: undefined,
    previous: undefined,
    isLoading: false,
    error: undefined,
  },
  reducers: {
    fetchPageStart(state) {
      state.isLoading = true;
      state.error = undefined;
    },
    fetchPageSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload.items;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.error = undefined;
    },
    fetchPageFailure(state, action) {
      state.isLoading = false;
      state.items = [];
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = paginationSlice;
export const { fetchPageStart, fetchPageSuccess, fetchPageFailure } = actions;

export const getPage = (baseUrl, pageNumber) => (dispatch) => {
  //CHANGE TO REAL ENDPOINTS IN THE FUTURE

  dispatch(fetchPageStart());
  dispatch(fetchPageSuccess({ items: response }));

  // axios
  //   .get(`${baseUrl}/${pageNumber}`)
  //   .then((response) => {
  //     dispatch(fetchPageSuccess(response));
  //   })
  //   .catch((error) => dispatch(fetchPageFailure(error.message)));
};

export default reducer;
