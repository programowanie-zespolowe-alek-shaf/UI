import React from 'react';
import PropTypes from 'prop-types';
import itemsPerPage from 'global/constants/itemsPerPage';
import Grid from 'components/grid/Grid';
import BookCard from 'components/bookCard/BookCard';
import { CATEGORY_PAGE } from 'global/constants/pages';

import { Typography } from '@material-ui/core';
import useCategoryStyles from './CategoryStyles';

const Category = ({ count, books, name, id, pageId }) => {
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
  id: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
};

export default Category;
