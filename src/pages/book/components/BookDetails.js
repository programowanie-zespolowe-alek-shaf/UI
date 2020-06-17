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
import MainLayout from 'components/mainLayout/MainLayout';

import useBookDetailsStyles from './BookDetailsStyles';

const BookDetails = ({ book }) => {
  const classes = useBookDetailsStyles();
  const {
    id,
    title,
    author,
    description,
    price,
    year,
    photoUrl,
    available,
    coverType,
    numPages,
  } = book;
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addItemToCart(id));
  };

  const InfoElement = ({ label, content }) => {
    return (
      <Box display='flex' flexDirection={'column'} mr={3}>
        <Typography variant='caption' gutterBottom>
          {label}
        </Typography>
        <Typography variant='subtitle2'>{content}</Typography>
      </Box>
    );
  };

  return (
    <MainLayout>
      <Box display='flex' justifyContent='center' alignSelf='center' mt={1}>
        <Card variant='outlined' classes={{ root: classes.root }}>
          <CardActionArea classes={{ root: classes.actionArea }}>
            <Link to={`${BOOK_PAGE}/${id}`} component={RouterLink}>
              <CardMedia
                component='img'
                alt={title}
                image={photoUrl}
                title={title}
                className={classes.image}
              />
            </Link>
          </CardActionArea>
          <CardContent classes={{ root: classes.content }}>
            <Typography variant='h6' className={classes.title}>
              {title}
            </Typography>

            <Box display='flex' mt={1.5}>
              <InfoElement label='Autor' content={author} />
              <InfoElement label='Rok wydania' content={year} />
            </Box>
            <Box mt={1}>
              <InfoElement label='Opis' content={description} />
            </Box>
            <Box display='flex' mt={1.5}>
              <InfoElement label='Liczba stron' content={numPages} />
              <InfoElement label='Typ okładki' content={coverType} />
            </Box>
            <Box mt={1.5}>
              <InfoElement
                label='Cena'
                content={`${Number.parseFloat(price).toFixed(2)} zł`}
              />
            </Box>
            <Button
              size='small'
              variant='contained'
              color='primary'
              startIcon={<AddShoppingCartIcon />}
              classes={
                available
                  ? { root: classes.addToCartAvailable }
                  : { root: classes.addToCartUnavailable }
              }
              onClick={() => handleAddToCart(id)}
              disabled={!available}
            >
              <Typography variant='caption'>
                {available ? 'Do koszyka' : 'Niedostępna'}
              </Typography>
            </Button>
          </CardContent>
        </Card>
      </Box>
    </MainLayout>
  );
};

BookDetails.propTypes = {
  book: PropTypes.object,
};

export default BookDetails;
