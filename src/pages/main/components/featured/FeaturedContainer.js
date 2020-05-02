import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getFeatured } from './slice/featuredSlice';
import WithLoading from 'components/withLoading/WithLoading';

import Featured from './components/Featured';
const FeaturedWithLoading = WithLoading(Featured);

const FeaturedContainer = () => {
  const { isLoaded, isLoading, error } = useSelector(
    (state) => state.featured,
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeatured());
  }, []);

  return (
    <FeaturedWithLoading
      isLoading={isLoading}
      isLoaded={isLoaded}
      error={error}
    />
  );
};

export default FeaturedContainer;
