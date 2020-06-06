import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';

export const initialState = {
  loading: false,
  error: undefined,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    requestUpdateCustomer(state, action) {
      state.loading = true;
      state.error = undefined;
    },
    updateCustomerSuccess(state, action) {
      state.loading = true;
    },
    updateCustomerError(state, action) {
      state.loading = true;
      state.error = action.payload;
    },
  },
});
const { actions, reducer } = customersSlice;
export const {
  requestUpdateCustomer,
  updateCustomerError,
  updateCustomerSuccess
} = actions;

export const updateCustomer = (body, userName) => (dispatch) => {
  const update = () => {
    return request({
      url: `${api.customersUsers}/${userName}`,
      method: 'put',
      data: body,
    });
  };

  dispatch(requestUpdateCustomer());
  return update().then((response) => {
    dispatch(updateCustomerSuccess(response.data));
  }).catch((error) => { updateCustomerError(error.response && error.response.data.error); });
};

export default reducer;
