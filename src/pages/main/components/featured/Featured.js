import React from 'react';

import { Typography } from '@material-ui/core';
import BookCard from 'components/bookCard/BookCard';
import Grid from 'components/grid/Grid';

import useFeaturedStyles from './FeaturedStyles';

const Featured = ({ items }) => {
  const classes = useFeaturedStyles();

  return (
    <React.Fragment>
      <Typography variant='h6' component='h6' className={classes.title}>
        Polecane
      </Typography>
      <Grid>
        {items.map((item, index) => (
          <BookCard
            key={`book-card-main-${index}`}
            id={item.id}
            title={item.title}
            author={item.author}
            year={item.year}
            photoUrl={item.photoUrl}
            description={item.description}
            price={item.price}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Featured;
