import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from 'global/connection/backend/endpoints';
import { response, deleteResponse } from '../../../global/mock/book';
import axios from 'axios';

export const initialState = {
  isLoading: false,
  isLoaded: false,
  // id: undefined,
  // title: undefined,
  // author: undefined,
  // category: {id: undefined, name: undefined},
  // year: undefined,
  // photoUrl: undefined,
  // description: undefined,
  // available: undefined,
  // price: undefined,
  error: undefined,
  book: {},
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetchBook(state, action) {
      state.isLoading = true;
      state.isLoaded = false;
    },
    fetchBookSuccess(state, action) {
      state.isLoading = false;
      state.isLoaded = true;
      state.book = Object.assign(state.book, action.payload);
      state.error = undefined;
    },
    fetchBookError(state, action) {
      state.isLoading = false;
      state.isLoaded = false;
      state.book = {};
      state.error = action.payload;
    }
  },
});
export const { reducer, actions } = bookSlice;
const {
  fetchBook,
  fetchBookSuccess,
  fetchBookError
} = actions;

export const getBookById = async (dispatch) => {
  const bookId = 1;
  try {
    dispatch(fetchBook());
    const response = await axios.get(
      `${api.books}/${bookId}`
    );
    const book = await response.data;
    dispatch(fetchBookSuccess(book));
  } catch (error) {
    const message = error.response.data;
    dispatch(fetchBookError(message));
  }
};


export default reducer;
