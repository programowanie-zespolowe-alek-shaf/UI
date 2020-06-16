import React from 'react';
import { api } from 'global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';
import { ADMIN_PAGE_USERS } from 'global/constants/pages';

import WithPagination from 'components/withPagination/WithPagination';

import Users from './Users';

const UsersWithPagination = WithPagination(Users);

const fetchBaseUrl = `${api.customersUsers}?`;
const clientBaseUrl = `${ADMIN_PAGE_USERS}`;

const UsersContainer = () => {
  return (
    <UsersWithPagination
      fetchBaseUrl={fetchBaseUrl}
      clientBaseUrl={clientBaseUrl}
      itemsPerPage={itemsPerPage.ADMIN_LIST}
    />
  );
};

export default UsersContainer;
