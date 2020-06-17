import React, { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from 'components/form/Form';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';
import { Box } from '@material-ui/core';

import {
  initialState,
  reducer,
  editItem,
  getItem,
} from '../../../../slice/AdminPanelSingleSlice';
import couponInputs from '../../inputs/couponInputs';
import { ADMIN_PAGE_COUPONS } from 'global/constants/pages';

import WithLoading from 'components/withLoading/WithLoading';

const EditFormWithLoading = WithLoading(Form);

const inputs = couponInputs();

const EditCoupon = () => {
  const [defaults, setDefaults] = useState(false);
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getItem(dispatchLocal, 'coupon', id);
  }, [id]);

  console.log(state.item);

  useEffect(() => {
    const item = state.item;
    if (item) {
      for (let input in item) {
        if (input !== 'id') {
          if (input === 'discountMultiplayer') {
            inputs[input].defaultValue = item[input] * 100;
          } else {
            inputs[input].defaultValue = item[input];
          }
        }
      }
      setDefaults(true);
    }
  }, [state.item]);

  useEffect(() => {
    if (state.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Podczas edytowania kuponu wystąpił błąd: ${state.error}`
        )
      );
    }
  }, [state.error]);

  const onSuccess = () => {
    dispatch(
      triggerGlobalAlert('success', 'Kupon został edytowany pomyślnie!')
    );
    history.push(ADMIN_PAGE_COUPONS);
  };

  const onEditCoupon = (couponData) => {
    couponData.discountMultiplayer =
      (100 - couponData.discountMultiplayer) / 100;
    editItem(dispatchLocal, 'coupon', id, couponData, onSuccess);
  };

  return (
    <Box maxWidth={500}>
      <EditFormWithLoading
        isLoading={state.isLoading || !defaults}
        error={state.error}
        title={`Edytuj kupon ${state.item ? `"${state.item.code}"` : null}`}
        onSubmit={onEditCoupon}
        submitButtonText='Zapisz'
        isMakingRequest={state.isEditing}
        inputs={inputs}
      />
    </Box>
  );
};

export default EditCoupon;
