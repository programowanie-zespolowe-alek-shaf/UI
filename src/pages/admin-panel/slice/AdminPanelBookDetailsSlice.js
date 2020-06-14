import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from 'global/connection/backend/endpoints';
import { response, deleteResponse } from '../../../global/mock/book';
import axios from 'axios';
import {number} from "prop-types";


export const initialState = {
  isLoading: false,
  isLoaded: false,
  error: undefined,
  book:  {
    id: null,
    title:  '',
    author:  '',
    category:  '',
    year:  '',
    photoUrl:  '',
    description:  '',
    available:  '',
    price:  '',
  },
};

const adminPanelBookDetailsSlice = createSlice({
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
export const { reducer, actions } = adminPanelBookDetailsSlice;
const {
  fetchBook,
  fetchBookSuccess,
  fetchBookError
} = actions;

export const getBookById = async (dispatch, bookId) => {
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
