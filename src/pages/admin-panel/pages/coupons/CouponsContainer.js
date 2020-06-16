import React from 'react';
import { api } from 'global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';
import { ADMIN_PAGE_COUPONS } from 'global/constants/pages';

import WithPagination from 'components/withPagination/WithPagination';

import CouponsManager from './components/manager/CouponsManager';

const CouponsManagerWithPagination = WithPagination(CouponsManager);

const CouponsContainer = () => {
  const fetchBaseUrl = `${api.coupons}?`;
  const clientBaseUrl = `${ADMIN_PAGE_COUPONS}`;

  return (
    <CouponsManagerWithPagination
      fetchBaseUrl={fetchBaseUrl}
      clientBaseUrl={clientBaseUrl}
      itemsPerPage={itemsPerPage.ADMIN_LIST}
    />
  );
};

export default CouponsContainer;
