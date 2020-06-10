import React, { useEffect, useReducer } from 'react';
import {
  initialState,
  reducer,
  getAdminPanelItems,
} from '../../slice/AdminPanelSlice';

import WithLoading from 'components/withLoading/WithLoading';
import Books from './Books';

const BooksWithLoading = WithLoading(Books);

const BookContainer = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);

  useEffect(() => {
    getAdminPanelItems(dispatchLocal);
  }, []);

  return (
    <BooksWithLoading
      books={state.items}
      isLoading={state.isLoading}
      error={state.error}
    />
  );
};

export default BookContainer;
