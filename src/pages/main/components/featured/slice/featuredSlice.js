import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import { default as response } from 'global/mock/books/featured';

const featuredSlice = createSlice({
  name: 'featured',
  initialState: {
    items: [],
    isLoading: false,
    isLoaded: false,
    error: undefined,
  },
  reducers: {
    fetchFeaturedStart(state) {
      state.isLoading = true;
      state.isLoaded = false;
      state.error = undefined;
    },
    fetchFeaturedSuccess(state, action) {
      state.isLoading = false;
      state.isLoaded = true;
      state.items = action.payload.items;
      state.error = undefined;
    },
    fetchFeaturedFailure(state, action) {
      state.isLoading = false;
      state.isLoaded = false;
      state.items = [];
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = featuredSlice;
export const {
  fetchFeaturedStart,
  fetchFeaturedSuccess,
  fetchFeaturedFailure,
} = actions;

export const getFeatured = () => (dispatch) => {
  dispatch(fetchFeaturedStart());
  dispatch(fetchFeaturedSuccess({ items: response.results }));
};

export default reducer;
