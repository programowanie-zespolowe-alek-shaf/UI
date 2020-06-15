import React from 'react';
import { api } from 'global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';
import { ADMIN_PAGE_ORDERS } from 'global/constants/pages';

import WithPagination from 'components/withPagination/WithPagination';

import Orders from './Orders';

const OrdersWithPagination = WithPagination(Orders);

const OrdersContainer = () => {
  const fetchBaseUrl = `${api.orders}?`;
  const clientBaseUrl = `${ADMIN_PAGE_ORDERS}`;

  return (
    <OrdersWithPagination
      fetchBaseUrl={fetchBaseUrl}
      clientBaseUrl={clientBaseUrl}
      itemsPerPage={itemsPerPage.ADMIN_LIST}
    />
  );
};

export default OrdersContainer;
