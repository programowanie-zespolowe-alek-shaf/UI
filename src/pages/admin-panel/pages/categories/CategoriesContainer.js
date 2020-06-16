import React from 'react';
import { api } from 'global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';
import { ADMIN_PAGE_CATEGORIES } from 'global/constants/pages';

import WithPagination from 'components/withPagination/WithPagination';

import CategoriesManager from './components/manager/CategoriesManager';

const CategoriesManagerWithPagination = WithPagination(CategoriesManager);

const CategoriesContainer = () => {
  const fetchBaseUrl = `${api.categories}?`;
  const clientBaseUrl = `${ADMIN_PAGE_CATEGORIES}`;

  return (
    <CategoriesManagerWithPagination
      fetchBaseUrl={fetchBaseUrl}
      clientBaseUrl={clientBaseUrl}
      itemsPerPage={itemsPerPage.ADMIN_LIST}
    />
  );
};

export default CategoriesContainer;
