import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import { getCartFromStorage, getUsersCart } from '../../cart/slice/cartSlice';
import { getUserDetails } from '../../login/actions/loginActions';

const initialDetails = {
  address: undefined,
  email: undefined,
  enabled: false,
  firstName: undefined,
  lastName: undefined,
  lastShoppingCardId: null,
  phone: undefined,
  roles: [],
  username: undefined,
};

export const initialState = {
  loading: false,
  checked: false,
  error: null,
  details: {
    ...initialDetails,
  },
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    requestUpdateCustomer(state, action) {
      state.loading = true;
      state.checked = false;
      state.error = null;
    },
    updateCustomerSuccess(state, action) {
      state.loading = false;
      state.checked = true;
      state.details = action.payload;
    },
    updateCustomerError(state, action) {
      state.loading = false;
      state.checked = true;
      state.error = action.payload;
    },
    requestCustomerDetails(state, action) {
      state.loading = true;
      state.checked = false;
      state.error = null;
    },
    receiveCustomerDetails(state, action) {
      state.loading = false;
      state.checked = true;
      state.details = action.payload;
    },
    receiveCustomerDetailsError(state, action) {
      state.loading = false;
      state.checked = true;
      state.error = action.payload;
    },
    clearCustomer(state, action) {
      return initialState;
    },
  },
});
const { actions, reducer } = customersSlice;
export const {
  requestUpdateCustomer,
  updateCustomerError,
  updateCustomerSuccess,
  requestCustomerDetails,
  receiveCustomerDetails,
  receiveCustomerDetailsError,
  clearCustomer,
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
  return update()
    .then((response) => {
      dispatch(updateCustomerSuccess(response.data));
    })
    .catch((error) => {
      updateCustomerError(error.response && error.response.data.error);
    });
};

/** Fetches user details */
export const getUserDetailsAction = (userName) => (dispatch) => {
  const storageCartId = getCartFromStorage();
  dispatch(requestCustomerDetails());

  return getUserDetails(userName)
    .then((response) => {
      dispatch(receiveCustomerDetails(response.data));
      dispatch(getUsersCart(storageCartId));

      if (storageCartId !== response.data.id) {
        const userDetailsWithUpdatedCartId = {
          ...response.data,
          lastShoppingCardId: storageCartId,
        };
        dispatch(updateCustomer(userDetailsWithUpdatedCartId, userName));
      }
    })
    .catch((error) => {
      dispatch(
        receiveCustomerDetailsError(error.response && error.response.data.error)
      );
    });
};

export default reducer;
