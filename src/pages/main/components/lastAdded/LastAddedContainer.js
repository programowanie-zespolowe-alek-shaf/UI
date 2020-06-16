import React, { useEffect, useReducer } from 'react';
import WithLoading from 'components/withLoading/WithLoading';
import { initialState, getLastAdded, reducer } from './slice/lastAddedSlice';

import LastAdded from './LastAdded';
const LastAddedWithLoading = WithLoading(LastAdded);

const FeaturedContainer = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);

  useEffect(() => {
    getLastAdded(dispatchLocal);
  }, []);

  return (
    <LastAddedWithLoading
      isLoading={state.isLoading}
      items={state.items}
      error={state.error}
    />
  );
};

export default FeaturedContainer;
