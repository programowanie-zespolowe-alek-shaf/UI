import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  Link,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { BOOK_PAGE } from 'global/constants/pages';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addItemToCart } from 'pages/cart/slice/cartSlice';

import useBookCardStyles from './BookCardStyles';

const BookCard = (props) => {
  const classes = useBookCardStyles();
  const { id, title, author, description, price, year, photoUrl } = props;
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addItemToCart(id));
  };

  return (
    <Card variant='outlined' classes={{ root: classes.root }}>
      <CardActionArea classes={{ root: classes.actionArea }}>
        <Link to={`${BOOK_PAGE}/${id}`} component={RouterLink}>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            image={photoUrl}
            title='Contemplative Reptile'
            className={classes.image}
          />
        </Link>
      </CardActionArea>
      <CardContent classes={{ root: classes.content }}>
        <Link to={`${BOOK_PAGE}/${id}`} component={RouterLink}>
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
        </Link>
        <Typography variant='subtitle2' className={classes.author}>
          {author}, {year}
        </Typography>

        <Typography variant='caption' className={classes.description}>
          {description}
        </Typography>
        <Box display='flex' justifyContent='space-between' mt={'auto'}>
          <Typography variant='subtitle1' className={classes.price}>
            {price} zł
          </Typography>
          <Button
            size='small'
            variant='contained'
            color='primary'
            startIcon={<AddShoppingCartIcon />}
            classes={{ root: classes.addToCart }}
            onClick={() => handleAddToCart(id)}
          >
            <Typography variant='caption'>Do koszyka</Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default BookCard;

