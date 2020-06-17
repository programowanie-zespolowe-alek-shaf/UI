import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reducer as singleReducer,
  initialState as singleInitialState,
  deleteItem,
} from '../../../../slice/AdminPanelSingleSlice';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

import Books from '../books/Books';
import ConfirmationModal from 'components/confirmationModal/ConfirmationModal';
import {
  getCartFromStorage,
  getUsersCart,
} from '../../../../../cart/slice/cartSlice';

const BookManager = ({ items, updateItems }) => {
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [deletedBookTitle, setDeletedBookTitle] = useState(undefined);
  const [deletedBookId, setDeletedBookId] = useState(undefined);
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
          `Wystąpił błąd podczas usuwania książki "${deletedBookTitle}:" ${singleState.error}`
        )
      );
    }
  }, [singleState.error]);

  const onBookDelete = (bookId, bookTitle) => {
    setDeletedBookTitle(bookTitle);
    setDeletedBookId(bookId);
    setIsConfirmDeleteOpen(true);
  };

  const deleteBook = (bookId) => {
    const onSuccess = () => {
      dispatch(
        triggerGlobalAlert(
          'success',
          `Książka "${deletedBookTitle}" została usunięta pomyślnie!`
        )
      );
      updateItems();
      dispatch(getUsersCart(getCartFromStorage()));
    };

    deleteItem(singleDispatchLocal, 'book', bookId, onSuccess);
    setIsConfirmDeleteOpen(false);
    setDeletedBookTitle(undefined);
    setDeletedBookId(undefined);
  };

  return (
    <React.Fragment>
      <ConfirmationModal
        isOpen={isConfirmDeleteOpen}
        setOpen={setIsConfirmDeleteOpen}
        title={'Potwierdź operację usunięcia'}
        text={`Czy na pewno chcesz usunąć książkę "${deletedBookTitle}"?`}
        aggreeText={'Usuń'}
        cancelText={'Anuluj'}
        aggreeCallback={() => deleteBook(deletedBookId)}
      />
      <Books items={items} onBookDelete={onBookDelete} />
    </React.Fragment>
  );
};

BookManager.propTypes = {
  items: PropTypes.array.isRequired,
  updateItems: PropTypes.func.isRequired,
};

export default BookManager;
