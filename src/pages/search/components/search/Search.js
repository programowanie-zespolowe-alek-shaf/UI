import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'components/grid/Grid';
import BookCard from 'components/bookCard/BookCard';
import { makeStyles } from '@material-ui/styles';

const useSearchStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
}));

import { Typography } from '@material-ui/core';

const Search = ({ items, phrase, category }) => {
  const classes = useSearchStyles();

  return (
    <React.Fragment>
      <Typography variant='h6' className={classes.title}>
        Wyniki wyszukiwania dla {`"${phrase}":`}
      </Typography>
      <Grid>
        {items.map((item, index) => {
          return (
            <BookCard
              key={`item-card-main-${index}`}
              id={item.id}
              title={item.title}
              author={item.author}
              year={item.year}
              photoUrl={item.photoUrl}
              description={item.description}
              price={item.price}
              available={item.available}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

Search.propTypes = {
  items: PropTypes.array.isRequired,
  phrase: PropTypes.string.isRequired,
  category: PropTypes.string,
};

export default Search;
