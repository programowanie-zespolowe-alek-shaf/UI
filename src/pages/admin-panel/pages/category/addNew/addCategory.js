import React, { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from '../../../../../../components/form/Form';
import { triggerGlobalAlert } from './node_modules/components/globalAlert/slice/globalAlertSlice';
import { Box } from '@material-ui/core';
import {
  initialState,
  reducer,
  addItem,
} from '../../../../slice/AdminPanelSingleSlice';
import { ADMIN_PAGE_CATEGORIES } from './node_modules/global/constants/pages';

const categoryInputs = () => {
  return {
    title: {
      type: 'text',
      name: 'name',
      id: 'name',
      label: 'Nazwa',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Nazwa jest wymagana',
    },
  };
};

const inputs = categoryInputs();

const AddCategory = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Podczas dodawania kategorii wystąpił błąd: ${state.error}`
        )
      );
    }
  }, [state.error]);

  const onSuccess = () => {
    dispatch(
      triggerGlobalAlert('success', 'Kategoria została dodana pomyślnie!')
    );
    history.push(ADMIN_PAGE_CATEGORIES);
  };

  const onAddBook = (categoryData) => {
    addItem(dispatchLocal, 'category', categoryData, onSuccess);
  };

  return (
    <Box maxWidth={500}>
      <Form
        title='Dodaj kategorię'
        onSubmit={onAddBook}
        submitButtonText='Dodaj kategorię'
        isMakingRequest={state.isLoading}
        inputs={inputs}
      />
    </Box>
  );
};

export default AddCategory;
