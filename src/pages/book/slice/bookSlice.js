import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import { response, deleteResponse } from '../../../global/mock/Book';

export const initialState = {
  loading: false,
  id: undefined,
  title: undefined,
  author: undefined,
  category: {id: undefined, name: undefined},
  year: undefined,
  photoUrl: undefined,
  description: undefined,
  available: undefined,
  price: undefined,
  error: undefined,
};

const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    requestBook(state, action) {
      state.loading = true;
    },
    receiveBook(state, action) {
      state.loading = false;
      state = Object.assign(state, action.payload);
    },
    receiveBookError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  },
});
const { actions, reducer } = bookSlice;
export const {
  requestBook,
  receiveBook,
  receiveBookError
} = actions;

export const getBookById = (bookId) => (dispatch) => {
  const getBook = (bookId) => {
    return request({ url: `${api.books}/${bookId}`, method: 'get' });
  };

  dispatch(requestBook());
  dispatch(receiveBook(response));
  // return getBook(userId).then((response) => {
  //   dispatch(receiveBook(response.data));
  // }).catch((error) => { receiveBookError(error); });
};

export default reducer;
