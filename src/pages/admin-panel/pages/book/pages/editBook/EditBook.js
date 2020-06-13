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
} from '../../../../slice/AdminPanelSingleSlice';
import bookInputs from '../../inputs/bookInputs';
import { ADMIN_PAGE_BOOKS } from 'global/constants/pages';

import WithLoading from 'components/withLoading/WithLoading';

const EditFormWithLoading = WithLoading(Form);

const inputs = bookInputs();

const EditBook = () => {
  const [defaults, setDefaults] = useState(false);
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const categories = useSelector((state) => state.categories, shallowEqual);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  //FETCH BOOK DATA FOR ENTRY INPUT VALUES
  useEffect(() => {
    getItem(dispatchLocal, 'book', id);
  }, [id]);

  //ADD DEFAULT VALUES TO INPUTS FILE FOR FORM COMPONENT AFTER FETCHING THEM
  useEffect(() => {
    const item = state.item;
    if (item) {
      for (let input in item) {
        if (input !== 'category' && input !== 'id' && input !== 'dateAdded') {
          inputs[input].defaultValue = item[input];
        }

        if (input === 'category') {
          inputs['categoryId'].defaultValue = item[input].id;
          inputs['categoryId'].defaultName = item[input].name;
        }
      }
      setDefaults(true);
    }
  }, [state.item]);

  //ADD CATEGORIES OPTIONS TO INPUTS FILE AFTER FETCHING THEM
  useEffect(() => {
    const categoryOptions = categories.items.map((item) => {
      return { name: item.name, value: item.id };
    });
    inputs['categoryId'].options = categoryOptions;
  }, [categories]);

  //TRIGGER ERROR WHEN ERROR WITH REQUEST
  useEffect(() => {
    if (state.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Podczas edytowania ksiażki wystąpił błąd: ${state.error}`
        )
      );
    }
  }, [state.error]);

  //FUNCTION TRIGGERING IF EDIT REQUEST WAS SUCCESFUL
  const onSuccess = () => {
    dispatch(
      triggerGlobalAlert('success', 'Książka została edytowana pomyślnie!')
    );
    history.push(ADMIN_PAGE_BOOKS);
  };

  const onEditBook = (bookData) => {
    editItem(dispatchLocal, 'book', id, bookData, onSuccess);
  };

  return (
    <Box maxWidth={500}>
      <EditFormWithLoading
        isLoading={state.isLoading || !defaults}
        error={state.error}
        title={`Edytuj ${state.item ? `"${state.item.title}"` : null}`}
        onSubmit={onEditBook}
        submitButtonText='Zapisz'
        isMakingRequest={state.isEditing}
        inputs={inputs}
      />
    </Box>
  );
};

export default EditBook;
