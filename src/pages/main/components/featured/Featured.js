import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from 'pages/cart/slice/cartSlice';
import { BOOK_PAGE } from 'global/constants/pages';

import {
  Paper,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Link,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import useFeaturedStyles from './FeaturedStyles';

const Featured = ({ items }) => {
  const classes = useFeaturedStyles();

  const dispatch = useDispatch();
  const handleAddToCart = (itemId) => {
    dispatch(addItemToCart(itemId));
  };

  return (
    <Paper className={classes.container}>
      <Typography variant='h6' component='h6' className={classes.title}>
        Polecane
      </Typography>
      <Grid container justify='center' spacing={3} className={classes.grid}>
        {items.map((item, index) => (
          <Card
            key={`cart-item-${index}`}
            variant='outlined'
            classes={{ root: classes.featuredCardRoot }}
          >
            <CardActionArea classes={{ root: classes.cartItemCardActionArea }}>
              <Link to={`${BOOK_PAGE}/1`} component={RouterLink}>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  image={item.photoUrl}
                  title='Contemplative Reptile'
                  className={classes.cartItemCardImage}
                />
              </Link>
            </CardActionArea>
            <CardContent>
              <Link to={`${BOOK_PAGE}/1`} component={RouterLink}>
                <Typography variant='h6'>{item.title}</Typography>
              </Link>
              <Button
                size='small'
                variant='contained'
                color='secondary'
                startIcon={<AddShoppingCartIcon />}
              >
                <Typography
                  variant='caption'
                  onClick={() => handleAddToCart(item.id)}
                >
                  Do koszyka
                </Typography>
              </Button>
            </CardContent>
            {/* <CardContent classes={{ root: classes.cartItemCardContentRoot }}>
                <Typography
                  variant='subtitle1'
                  className={classes.cartItemCardTitle}
                >
                  {item.title}
                </Typography>
                <Typography variant='caption' component='p'>
                  {item.author}
                </Typography>
                <Typography variant='caption' component='p'>
                  Ilość: {item.amount}
                </Typography>
                <Typography variant='caption' component='p'>
                  Cena: {item.price * item.amount} zł
                </Typography>
              </CardContent>
            <CardActions classes={{ root: classes.cartItemCardActions }}>
              <Button
                size='small'
                variant='contained'
                color='secondary'
                startIcon={<AddShoppingCartIcon />}
                className={classes.cartItemCardDeleteButton}
              >
                <Typography
                  variant='caption'
                  onClick={() => handleAddToCart(item.id)}
                >
                  Do koszyka
                </Typography>
              </Button>
            </CardActions> */}
          </Card>
        ))}
      </Grid>
    </Paper>
  );
};

export default Featured;
