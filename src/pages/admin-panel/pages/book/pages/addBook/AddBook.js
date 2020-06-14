import React, { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import Form from '../../../../../../components/form/Form';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';
import { Box } from '@material-ui/core';

import {
  initialState,
  reducer,
  addItem,
} from '../../../../slice/AdminPanelSingleSlice';
import bookInputs from '../../inputs/bookInputs';
import { ADMIN_PAGE_BOOKS } from 'global/constants/pages';

const inputs = bookInputs();

const AddBook = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const categories = useSelector((state) => state.categories, shallowEqual);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Podczas dodawania książki wystąpił błąd: ${state.error}`
        )
      );
    }
  }, [state.error]);

  useEffect(() => {
    const categoryOptions = categories.items.map((item) => {
      return { name: item.name, value: item.id };
    });
    inputs['categoryId'].options = categoryOptions;
  }, [categories]);

  const onSuccess = () => {
    dispatch(
      triggerGlobalAlert('success', 'Książka została dodana pomyślnie!')
    );
    history.push(ADMIN_PAGE_BOOKS);
  };

  const onAddBook = (bookData) => {
    addItem(dispatchLocal, 'book', bookData, onSuccess);
  };

  return (
    <Box maxWidth={500}>
      <Form
        title='Dodaj książkę'
        onSubmit={onAddBook}
        submitButtonText='Dodaj książkę'
        isMakingRequest={state.isLoading}
        inputs={inputs}
      />
    </Box>
  );
};

export default AddBook;
