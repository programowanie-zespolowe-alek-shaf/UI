import {createSlice} from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import {api} from 'global/connection/backend/endpoints';
import {response, deleteResponse} from '../../../global/mock/book';
import axios from 'axios';
import {number} from "prop-types";
import {receiveCategoriesError} from "../../category/slice/categoriesSlice";


export const initialState = {
  isLoading: false,
  isLoaded: false,
  error: undefined,
  user: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    enabled: true,
    lastShoppingCardId: -1,
    roles: [],
  },
};

const profileDetailsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser(state, action) {
      state.isLoading = true;
      state.isLoaded = false;
      state.user = {};
    },
    fetchUserSuccess(state, action) {
      state.isLoading = false;
      state.isLoaded = true;
      state.user = Object.assign(state.user, action.payload);
      state.error = undefined;
    },
    fetchUserError(state, action) {
      state.isLoading = false;
      state.isLoaded = false;
      state.user = {};
      state.error = action.payload;
    }
  },
});
export const {reducer, actions} = profileDetailsSlice;
export const {
  fetchUser,
  fetchUserSuccess,
  fetchUserError
} = actions;

export const getUserById = async (dispatch, userName) => {
    dispatch(fetchUser());
    const response = request({
      url: `${api.customersUsers}/${userName}`,
      method: 'get',
    }).then((response) => {
        dispatch(fetchUserSuccess(response.data));
    }).catch((error) => {
        dispatch(fetchUserError(error.response && error.response.data.error));
    });
};