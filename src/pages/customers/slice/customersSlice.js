import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import { getCartFromStorage, getUsersCart } from '../../cart/slice/cartSlice';
import { getUserDetails } from '../../login/actions/loginActions';

export const userRoles = {
  admin: 'ROLE_ADMIN',
  user: 'ROLE_USER'
};

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
  isAdmin: false,
  updating: false,
};

export const initialState = {
  loading: true,
  checked: false,
  error: null,
  details: {
    ...initialDetails,
  },
};

const isAdmin = (roles) => roles.includes(userRoles.admin);
const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    requestUpdateCustomer(state, action) {
      state.error = null;
      state.upading = true;
    },
    updateCustomerSuccess(state, action) {
      state.upading = false;
      state.details = action.payload;
      state.details.isAdmin = isAdmin(action.payload.roles);
    },
    updateCustomerError(state, action) {
      state.upading = false;
      state.error = action.payload;
    },
    requestCustomerDetails(state, action) {
      state.loading = true;
      state.error = null;
    },
    receiveCustomerDetails(state, action) {
      state.loading = false;
      state.details = action.payload;
      state.details.isAdmin = isAdmin(action.payload.roles);
    },
    receiveCustomerDetailsError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearCustomer(state, action) {
      return { ...initialState, loading: false };
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
