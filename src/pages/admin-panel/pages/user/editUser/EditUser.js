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
import userInputs from '../inputs/UserInputs';

import WithLoading from 'components/withLoading/WithLoading';
import { ADMIN_PAGE_USERS } from "../../../../../global/constants/pages";

const EditFormWithLoading = WithLoading(Form);

const inputs = userInputs();

const EditUser = () => {
  const [defaults, setDefaults] = useState(false);
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  //FETCH USER DATA FOR ENTRY INPUT VALUES
  useEffect(() => {
    getItem(dispatchLocal, 'user', id);
  }, [id]);

  //ADD DEFAULT VALUES TO INPUTS FILE FOR FORM COMPONENT AFTER FETCHING THEM
  useEffect(() => {
    const item = state.item;
    if (item) {
      for (let input in item) {
        if ( input !== 'id' && input !== 'lastShoppingCardId' && input !== 'roles' && input !== 'enabled') {
          inputs[input].defaultValue = item[input];
        }

        if (input === 'roles') {
          inputs['roles'].defaultValue =item[input].value;
          inputs['roles'].defaultName = item[input];
        }
      }
      setDefaults(true);
    }
  }, [state.item]);

  //ADD STATUSES OPTIONS TO INPUTS FILE
  useEffect(() => {
    // inputs['status'].options = statusOptions;
  });

  //TRIGGER ERROR WHEN ERROR WITH REQUEST
  useEffect(() => {
    if (state.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Podczas edytowania danych użytkownika wystąpił błąd: ${state.error}`
        )
      );
    }
  }, [state.error]);

  //FUNCTION TRIGGERING IF EDIT REQUEST WAS SUCCESFUL
  const onSuccess = () => {
    dispatch(
      triggerGlobalAlert('success', 'Dane użytkownika zostały edytowane pomyślnie!')
    );
    history.push(ADMIN_PAGE_USERS);
  };

  const onEditUser = (userData) => {
    // userData['shoppingCardId']=state.item.shoppingCardId;
    editItem(dispatchLocal, 'user', id, userData, onSuccess);
  };

  return (
    <Box maxWidth={500}>
      <EditFormWithLoading
        isLoading={state.isLoading || !defaults}
        error={state.error}
        title={`Edytuj dane użytkownika  ${state.item ? `"${state.item.id}"` : null}`}
        onSubmit={onEditUser}
        submitButtonText='Zapisz'
        isMakingRequest={state.isEditing}
        inputs={inputs}
      />
    </Box>
  );
};

export default EditUser;
