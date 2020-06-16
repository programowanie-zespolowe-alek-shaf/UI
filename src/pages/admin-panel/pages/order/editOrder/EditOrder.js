import React, { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import Form from 'components/form/Form';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';
import { Box } from '@material-ui/core';

import {
  initialState,
  reducer,
  editItem,
  getItem,
} from '../../../slice/AdminPanelSingleSlice';
import orderInputs from '../inputs/orderInputs';

import WithLoading from 'components/withLoading/WithLoading';
import {ADMIN_PAGE_ORDERS} from "../../../../../global/constants/pages";

const EditFormWithLoading = WithLoading(Form);

const inputs = orderInputs();

const EditOrder = () => {
  const [defaults, setDefaults] = useState(false);
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const statusOptions = [
    {name: 'PLACED', value: 1},
    {name: 'APPROVED', value: 2},
    {name: 'DELIVERED', value: 3},
    {name: 'DISAPPROVED', value: 4},
  ];

  //FETCH ORDER DATA FOR ENTRY INPUT VALUES
  useEffect(() => {
    getItem(dispatchLocal, 'order', id);
  }, [id]);

  //ADD DEFAULT VALUES TO INPUTS FILE FOR FORM COMPONENT AFTER FETCHING THEM
  useEffect(() => {
    const item = state.item;
    if (item) {
      for (let input in item) {
        if ( input !== 'id' && input !== 'shoppingCardId' && input !== 'status') {
          inputs[input].defaultValue = item[input];
        }

        if (input === 'status') {
          inputs['status'].defaultValue = statusOptions.find(el => el.name === item[input]).value;
          inputs['status'].defaultName = item[input];
        }
      }
      setDefaults(true);
    }
  }, [state.item]);

  //ADD STATUSES OPTIONS TO INPUTS FILE
  useEffect(() => {
    inputs['status'].options = statusOptions;
  });

  //TRIGGER ERROR WHEN ERROR WITH REQUEST
  useEffect(() => {
    if (state.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Podczas edytowania zamówienia wystąpił błąd: ${state.error}`
        )
      );
    }
  }, [state.error]);

  //FUNCTION TRIGGERING IF EDIT REQUEST WAS SUCCESFUL
  const onSuccess = () => {
    dispatch(
      triggerGlobalAlert('success', 'Zamówienie zostało edytowane pomyślnie!')
    );
    history.push(ADMIN_PAGE_ORDERS);
  };

  const onEditOrder = (orderData) => {
    console.log(orderData);
    orderData['shoppingCardId']=state.item.shoppingCardId;
    editItem(dispatchLocal, 'order', id, orderData, onSuccess);
  };

  return (
    <Box maxWidth={500}>
      <EditFormWithLoading
        isLoading={state.isLoading || !defaults}
        error={state.error}
        title={`Edytuj zamówienie  ${state.item ? `"${state.item.id}"` : null}`}
        onSubmit={onEditOrder}
        submitButtonText='Zapisz'
        isMakingRequest={state.isEditing}
        inputs={inputs}
      />
    </Box>
  );
};

export default EditOrder;
