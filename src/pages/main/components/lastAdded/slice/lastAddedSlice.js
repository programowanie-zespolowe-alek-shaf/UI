import { createSlice } from '@reduxjs/toolkit';
import { api } from 'global/connection/backend/endpoints';
import { lastAdded } from 'global/connection/backend/settings';
import axios from 'axios';

export const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const lastAddedSlice = createSlice({
  name: 'lastAdded',
  initialState,
  reducers: {
    fetchLastAddedStart(state) {
      state.isLoading = true;
      state.error = undefined;
    },
    fetchLastAddedSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = undefined;
    },
    fetchLastAddedFailure(state, action) {
      state.isLoading = false;
      state.items = [];
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = lastAddedSlice;

const {
  fetchLastAddedStart,
  fetchLastAddedSuccess,
  fetchLastAddedFailure,
} = actions;

export const getLastAdded = async (dispatch) => {
  try {
    dispatch(fetchLastAddedStart());
    const { offset, limit } = lastAdded;

    const response = await axios.get(
      `${api.books}?offset=${offset}&limit=${limit}&sort=dateAdded;desc`
    );
    const books = response.data;

    dispatch(fetchLastAddedSuccess(books.list));
  } catch (error) {
    const message = error.response.data;
    dispatch(fetchLastAddedFailure(message));
  }
};
