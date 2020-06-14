import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'components/grid/Grid';
import BookCard from 'components/bookCard/BookCard';

import { Typography } from '@material-ui/core';
import useCategoryStyles from './CategoryStyles';

const Category = ({ books, name }) => {
  const classes = useCategoryStyles();

  return (
    <React.Fragment>
      <Typography variant='h6' className={classes.title}>
        {name}
      </Typography>
      <Grid>
        {books.map((book, index) => {
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
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

Category.propTypes = {
  count: PropTypes.number.isRequired,
  books: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Category;

