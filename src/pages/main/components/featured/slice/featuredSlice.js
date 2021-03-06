import { createSlice } from '@reduxjs/toolkit';
import { api } from 'global/connection/backend/endpoints';
import { featured } from 'global/connection/backend/settings';
import axios from 'axios';

export const initialState = {
  items: [],
  isLoading: false,
  error: undefined,
};

const featuredSlice = createSlice({
  name: 'featured',
  initialState,
  reducers: {
    fetchFeaturedStart(state) {
      state.isLoading = true;
      state.error = undefined;
    },
    fetchFeaturedSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = undefined;
    },
    fetchFeaturedFailure(state, action) {
      state.isLoading = false;
      state.items = [];
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = featuredSlice;

const {
  fetchFeaturedStart,
  fetchFeaturedSuccess,
  fetchFeaturedFailure,
} = actions;

export const getFeatured = async (dispatch) => {
  try {
    dispatch(fetchFeaturedStart());
    const { offset, limit } = featured;

    const response = await axios.get(
      `${api.books}?offset=${offset}&limit=${limit}&recommended=true&sort=dateAdded;desc`
    );
    const books = response.data;

    dispatch(fetchFeaturedSuccess(books.list));
  } catch (error) {
    const message = error.response.data;
    dispatch(fetchFeaturedFailure(message));
  }
};
