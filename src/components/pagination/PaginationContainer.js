import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getPage } from './slice/paginationSlice';

import Pagination from './Pagination';

const PaginationContainer = (props) => {
  // const paginationStore = useSelector(
  //   (state) => state.pagination.loaded,
  //   shallowEqual
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPage('../../../utils/mocks/books/books.json', ''));
  }, []);

  return <Pagination />;
};

export default PaginationContainer;
