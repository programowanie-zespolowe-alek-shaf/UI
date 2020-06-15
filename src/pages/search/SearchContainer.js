import React, { useEffect } from 'react';
import Search from './components/search/Search';
import { useHistory, useLocation } from 'react-router-dom';
import { MAIN_PAGE, SEARCH_PAGE } from 'global/constants/pages';
import { api } from 'global/connection/backend/endpoints';
import itemsPerPage from 'global/constants/itemsPerPage';

import WithPagination from 'components/withPagination/WithPagination';
import MainLayout from 'components/mainLayout/MainLayout';

const SearchWithPagination = WithPagination(Search);

const SearchContainer = () => {
  let history = useHistory();
  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let phrases = queryParams.get('phrases');
  let category = queryParams.get('category');

  useEffect(() => {
    if (!phrases) history.push(MAIN_PAGE);
  }, [queryParams]);

  let fetchBaseUrl = `${api.books}?phrases=${phrases}${
    category ? `&category=${category}` : ''
  }&`;
  let clientBaseUrl = `${SEARCH_PAGE}`;
  let afterClientBaseUrl = `?phrases=${phrases}${
    category ? `&category=${category}` : ''
  }`;

  return (
    <MainLayout>
      <SearchWithPagination
        fetchBaseUrl={fetchBaseUrl}
        clientBaseUrl={clientBaseUrl}
        afterClientBaseUrl={afterClientBaseUrl}
        itemsPerPage={itemsPerPage.SEARCH}
        phrase={phrases}
      />
    </MainLayout>
  );
};

export default SearchContainer;
