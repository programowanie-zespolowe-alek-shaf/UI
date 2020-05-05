import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Typography, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { compose, spacing } from '@material-ui/system';

import FeaturedItem from './FeaturedItem';

const Title = styled(Typography)(compose(spacing));

const Featured = () => {
  const { items } = useSelector((state) => state.featured, shallowEqual);
  return (
    <React.Fragment>
      <Title variant='h5' pb={2} mt={3}>
        Polecane
      </Title>
      <Grid container direction='row' spacing={7}>
        {items.map((item) => (
          <Grid item key={uuid()}>
            <FeaturedItem item={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Featured;
