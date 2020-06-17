import React from 'react';
import { api } from 'global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';
import { ADMIN_PAGE_USERS } from 'global/constants/pages';

import WithPagination from 'components/withPagination/WithPagination';

import UsersManager from './components/manager/UsersManager';

const UsersManagerWithPagination = WithPagination(UsersManager);

const fetchBaseUrl = `${api.customersUsers}?`;
const clientBaseUrl = `${ADMIN_PAGE_USERS}`;

const UsersContainer = () => {
  return (
    <UsersManagerWithPagination
      fetchBaseUrl={fetchBaseUrl}
      clientBaseUrl={clientBaseUrl}
      itemsPerPage={itemsPerPage.ADMIN_LIST}
    />
  );
};

export default UsersContainer;
