import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import BookCard from 'components/bookCard/BookCard';
import Grid from 'components/grid/Grid';

const useLastAddedStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}));

const LastAdded = ({ items }) => {
  const classes = useLastAddedStyles();
  return (
    <React.Fragment>
      <Typography variant='h6' component='h6' className={classes.title}>
        Ostatnio Dodane
      </Typography>
      <Grid>
        {items.map((item, index) => (
          <BookCard
            key={`book-card-lastAdded-${index}`}
            id={item.id}
            title={item.title}
            author={item.author}
            year={item.year}
            photoUrl={item.photoUrl}
            description={item.description}
            price={item.price}
            available={item.available}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default LastAdded;
