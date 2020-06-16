import React, { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from 'components/form/Form';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';
import { Box } from '@material-ui/core';

import {
  initialState,
  reducer,
  addItem,
} from '../../../../slice/AdminPanelSingleSlice';
import couponInputs from '../../inputs/couponInputs';
import { ADMIN_PAGE_COUPONS } from 'global/constants/pages';

const inputs = couponInputs();

const AddCoupon = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Podczas dodawania kuponu wystąpił błąd: ${state.error}`
        )
      );
    }
  }, [state.error]);

  const onSuccess = () => {
    dispatch(triggerGlobalAlert('success', 'Kupon został dodany pomyślnie!'));
    history.push(ADMIN_PAGE_COUPONS);
  };

  const onAddCoupon = (couponData) => {
    couponData.discountMultiplayer /= 100;
    addItem(dispatchLocal, 'coupon', couponData, onSuccess);
  };

  return (
    <Box maxWidth={500}>
      <Form
        title='Dodaj kupon'
        onSubmit={onAddCoupon}
        submitButtonText='Dodaj kupon'
        isMakingRequest={state.isAdding}
        inputs={inputs}
      />
    </Box>
  );
};

export default AddCoupon;
