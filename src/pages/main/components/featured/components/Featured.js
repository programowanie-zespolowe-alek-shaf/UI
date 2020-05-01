import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Grid } from '@material-ui/core';

import FeaturedItem from './FeaturedItem';

const Featured = () => {
  const { items } = useSelector((state) => state.featured, shallowEqual);
  return (
    <Grid container direction='row'>
      {items.map((item) => (
        <FeaturedItem key={uuid()} item={item} />
      ))}
    </Grid>
  );
};

export default Featured;
