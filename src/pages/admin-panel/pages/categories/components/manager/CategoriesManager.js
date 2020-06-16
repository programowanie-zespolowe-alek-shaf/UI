import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reducer as singleReducer,
  initialState as singleInitialState,
  deleteItem,
} from '../../../../slice/AdminPanelSingleSlice';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';
import { getCategories } from '../../../../../category/slice/categoriesSlice';

import Categories from '../categories/Categories';
import ConfirmationModal from 'components/confirmationModal/ConfirmationModal';

const CategoriesManager = ({ items, updateItems }) => {
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [deletedCategoryName, setDeletedCategoryName] = useState(undefined);
  const [deletedCategoryId, setDeletedCategoryId] = useState(undefined);
  const dispatch = useDispatch();
  const [singleState, singleDispatchLocal] = useReducer(
    singleReducer,
    singleInitialState
  );

  useEffect(() => {
    if (singleState.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Wystąpił błąd podczas usuwania kategorii "${deletedCategoryName}:" ${singleState.error}`
        )
      );
    }
  }, [singleState.error]);

  const onCategoryDelete = (categoryId, categoryName) => {
    setDeletedCategoryName(categoryName);
    setDeletedCategoryId(categoryId);
    setIsConfirmDeleteOpen(true);
  };

  const deleteCategory = (categoryId) => {
    const onSuccess = () => {
      dispatch(
        triggerGlobalAlert(
          'success',
          `Kategoria "${deletedCategoryName}" została usunięta pomyślnie!`
        )
      );
      updateItems();
      dispatch(getCategories());
    };

    deleteItem(singleDispatchLocal, 'category', categoryId, onSuccess);
    setIsConfirmDeleteOpen(false);
    setDeletedCategoryName(undefined);
    setDeletedCategoryId(undefined);
  };

  return (
    <React.Fragment>
      <ConfirmationModal
        isOpen={isConfirmDeleteOpen}
        setOpen={setIsConfirmDeleteOpen}
        title={'Potwierdź operację usunięcia'}
        text={`Czy na pewno chcesz usunąć kategorię "${deletedCategoryName}"?`}
        aggreeText={'Usuń'}
        cancelText={'Anuluj'}
        aggreeCallback={() => deleteCategory(deletedCategoryId)}
      />
      <Categories items={items} onBookDelete={onCategoryDelete} />
    </React.Fragment>
  );
};

CategoriesManager.propTypes = {
  items: PropTypes.array.isRequired,
  updateItems: PropTypes.func.isRequired,
};

export default CategoriesManager;
