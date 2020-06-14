import React from 'react';

import { Typography, Grid } from '@material-ui/core';
import BookCard from 'components/bookCard/BookCard';

import useFeaturedStyles from './FeaturedStyles';

const Featured = ({ items }) => {
  const classes = useFeaturedStyles();

  return (
    <React.Fragment>
      <Typography variant='h6' component='h6' className={classes.title}>
        Polecane
      </Typography>
      <Grid container justify='center' spacing={3} className={classes.grid}>
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
