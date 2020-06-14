import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  initialState as listInitialState,
  reducer as listReducer,
  getAdminPanelItems,
} from '../../slice/AdminPanelSlice';
import {
  reducer as singleReducer,
  initialState as singleInitialState,
  deleteItem,
} from '../../slice/AdminPanelSingleSlice';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

import WithLoading from 'components/withLoading/WithLoading';
import Books from './Books';
import ConfirmationModal from 'components/confirmationModal/ConfirmationModal';

const BooksWithLoading = WithLoading(Books);

const BookContainer = () => {
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [deletedBookTitle, setDeletedBookTitle] = useState(undefined);
  const [deletedBookId, setDeletedBookId] = useState(undefined);
  const dispatch = useDispatch();
  const [listState, listDispatchLocal] = useReducer(
    listReducer,
    listInitialState
  );
  const [singleState, singleDispatchLocal] = useReducer(
    singleReducer,
    singleInitialState
  );

  useEffect(() => {
    getAdminPanelItems(listDispatchLocal, 'books');
  }, []);

  useEffect(() => {
    if (singleState.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Wystąpił błąd podczas usuwania książki "${deletedBookTitle}:" ${singleState.error}`
        )
      );
    }
    if (listState.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Wystąpił błąd podczas wczytywania listy książek: ${singleState.error}`
        )
      );
    }
  }, [singleState.error, listState.error]);

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
      getAdminPanelItems(listDispatchLocal, 'books');
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
      <BooksWithLoading
        books={listState.items}
        isLoading={listState.isLoading}
        error={listState.error}
        onBookDelete={onBookDelete}
      />
    </React.Fragment>
  );
};

export default BookContainer;
