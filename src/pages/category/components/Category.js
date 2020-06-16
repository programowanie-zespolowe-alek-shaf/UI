import React from 'react';
import PropTypes, { bool } from 'prop-types';
import Grid from 'components/grid/Grid';
import BookCard from 'components/bookCard/BookCard';

import { Typography } from '@material-ui/core';
import useCategoryStyles from './CategoryStyles';

const Category = ({ items, name }) => {
  const classes = useCategoryStyles();

  return (
    <React.Fragment>
      <Typography variant='h6' className={classes.title}>
        {name}
      </Typography>
      <Grid>
        {items.map((book, index) => {
          return (
            <BookCard
              key={`book-card-main-${index}`}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              photoUrl={book.photoUrl}
              description={book.description}
              price={book.price}
              available={book.available}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;
