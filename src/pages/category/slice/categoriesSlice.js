import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';

export const initialState = {
  items: [],
  count: 0,
  loading: false,
  error: undefined,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    requestCategories(state, action) {
      state.loading = true;
    },
    receiveCategories(state, action) {
      state.items = action.payload.list;
      state.count = action.payload.count;
    },
    receiveCategoriesError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
const { actions, reducer } = categoriesSlice;
export const {
  requestCategories,
  receiveCategories,
  receiveCategoriesError
} = actions;

export const getCategories = () => (dispatch) => {
  dispatch(requestCategories());
  request({ url: api.categories, method: 'get', }).then((response) => {
    dispatch(receiveCategories(response.data));
  }).catch((error) => {
    dispatch(receiveCategoriesError(error.response && error.response.data.error));
  });
};

export default reducer;
