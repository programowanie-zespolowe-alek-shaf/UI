import React, { useEffect, useReducer } from 'react';
import WithLoading from 'components/withLoading/WithLoading';
import { initialState, getFeatured, reducer } from './slice/featuredSlice';

import Featured from './Featured';
const FeaturedWithLoading = WithLoading(Featured);

const FeaturedContainer = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);

  useEffect(() => {
    getFeatured(dispatchLocal);
  }, []);

  return (
    <FeaturedWithLoading
      isLoading={state.isLoading}
      isLoaded={state.isLoaded}
      items={state.items}
      error={state.error}
    />
  );
};

export default FeaturedContainer;
