import React from 'react';
import { api } from 'global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';
import { ADMIN_PAGE_BOOKS } from 'global/constants/pages';

import BooksManager from './components/manager/BooksManager';
import WithPagination from 'components/withPagination/WithPagination';

const BooksManagerWithPagination = WithPagination(BooksManager);

const BooksContainer = () => {
  const fetchBaseUrl = `${api.books}?`;
  const clientBaseUrl = `${ADMIN_PAGE_BOOKS}`;
  return (
    <BooksManagerWithPagination
      itemsPerPage={itemsPerPage.ADMIN_LIST}
      fetchBaseUrl={fetchBaseUrl}
      clientBaseUrl={clientBaseUrl}
    />
  );
};

export default BooksContainer;
