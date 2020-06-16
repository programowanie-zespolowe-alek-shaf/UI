import { createSlice } from '@reduxjs/toolkit';
import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import { triggerGlobalAlert } from '../../../components/globalAlert/slice/globalAlertSlice';


export const initialState = {
  details: {
    id: undefined,
    code: undefined,
    discountMultiplayer: 1,
    amountLeft: 0
  },
  loading: false,
  isValid: false,
};


const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    requestValidate(state, action) {
      state.loading = true;
    },
    setCoupon(state, action) {
      state.details = action.payload.details;
      state.isValid = action.payload.isValid;
      state.loading = false;
    },
    resetCoupon(state,action) {
      return initialState;
    }
  }
});

const { actions, reducer } = couponSlice;

export const {
  setCoupon,
  resetCoupon,
  requestValidate
} = actions;

export const validateCoupon = (code) => (dispatch) => {
  const validate = (code) => {
    return request({
      url: `${api.coupons}/validate/${code}`,
      method: 'get' });
  };

  dispatch(requestValidate());
  return validate(code).then((response) => {
    const details = response.data;
    dispatch(triggerGlobalAlert('success', `Wprowadzono poprawny kupon! Dostępne użycia: ${details.amountLeft}`));
    dispatch(setCoupon( { details: details, isValid: true }));
  }).catch((error) => {
    dispatch(resetCoupon());
    if(error.response.status === 404 || error.response.status === 400) {
      dispatch(triggerGlobalAlert('error', 'Nie ma takiego kuponu'));
    }

    if(error.response.status === 403) {
      dispatch(triggerGlobalAlert('error', 'Kupon nie ma więcej dostępnych użyć'));
    }
  });
};

export default reducer;
