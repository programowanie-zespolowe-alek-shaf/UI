import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getPage } from './slice/paginationSlice';
import WithLoading from '../withLoading/WithLoading';

import Pagination from './Pagination';
const PaginationWithLoading = WithLoading(Pagination);

const PaginationContainer = (props) => {
  const { isLoading, error } = useSelector(
    (state) => state.pagination,
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPage('/', pageNumber));
  }, []);

  const pageNumber = props.match.params.pageNumber;

  return (
    <PaginationWithLoading
      isLoading={isLoading}
      error={error}
    />
  );
};

export default withRouter(PaginationContainer);
