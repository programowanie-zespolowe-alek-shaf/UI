import React, { useEffect, useReducer } from 'react';
import {
  initialState,
  reducer,
  getAdminPanelItems,
} from '../../slice/AdminPanelSlice';

import WithLoading from 'components/withLoading/WithLoading';

import Users from './Users';

const UsersWithLoading = WithLoading(Users);

const BookContainer = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);

  useEffect(() => {
    getAdminPanelItems(dispatchLocal, 'users');
  }, []);

  return (
    <UsersWithLoading
      users={state.items}
      isLoading={state.isLoading}
      isLoaded={state.isLoaded}
      error={state.error}
    />
  );
};

export default BookContainer;
