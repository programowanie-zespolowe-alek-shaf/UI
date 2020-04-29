import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getPage } from './slice/paginationSlice';
import WithLoading from '../withLoading/WithLoading';

import Pagination from './Pagination';
const PaginationWithLoading = WithLoading(Pagination);

const PaginationContainer = (props) => {
  const { isLoaded, isLoading, error } = useSelector(
    (state) => state.pagination,
    shallowEqual
  );
  const pageNumber = props.match.params.pageNumber;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPage('/', pageNumber));
  }, []);

  return (
    <PaginationWithLoading
      isLoading={isLoading}
      isLoaded={isLoaded}
      error={error}
    />
  );
};

export default withRouter(PaginationContainer);
