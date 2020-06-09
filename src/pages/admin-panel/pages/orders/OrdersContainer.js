import React, { useEffect, useReducer } from 'react';
import {
  initialState,
  reducer,
  getAdminPanelItems,
} from '../../slice/AdminPanelSlice';

import WithLoading from 'components/withLoading/WithLoading';

import Orders from './Orders';

const OrdersWithLoading = WithLoading(Orders);

const BookContainer = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);

  useEffect(() => {
    getAdminPanelItems(dispatchLocal, 'orders');
  }, []);

  return (
    <OrdersWithLoading
      orders={state.items}
      isLoading={state.isLoading}
      isLoaded={state.isLoaded}
      error={state.error}
    />
  );
};

export default BookContainer;
