import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { deleteFromCart } from '../../../../pages/cart/slice/cartSlice';
import { CART_PAGE } from '../../../../global/constants/pages';
import { v4 as uuidv4 } from 'uuid';

import {
  Box,
  Menu,
  IconButton,
  Badge,
  Button,
  Link,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
} from '@material-ui/core';
import LocalMallSharpIcon from '@material-ui/icons/LocalMallSharp';
import DeleteIcon from '@material-ui/icons/Delete';

import useCartStyles from './CartStyles';

//TODO : ADD CART LOADING

const Cart = () => {
  const classes = useCartStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const cartCount = useSelector((state) => state.cart.count, shallowEqual);
  const cartItems = useSelector((state) => state.cart.items, shallowEqual);
  const totalCost = useSelector((state) => state.cart.totalValue, shallowEqual);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <IconButton
        size='small'
        className={classes.iconButton}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Badge badgeContent={cartCount} color='secondary'>
          <LocalMallSharpIcon className={classes.icon} />
        </Badge>
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        classes={
          cartItems.length > 0
            ? { list: classes.menuWithItems }
            : { list: classes.menuNoItems }
        }
      >
        {cartItems.map((item) => {
          return (
            <Card
              key={uuidv4()}
              variant='outlined'
              classes={{ root: classes.cartItemCardRoot }}
            >
              <CardActionArea
                classes={{ root: classes.cartItemCardActionArea }}
              >
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  image={item.book.photoUrl}
                  title='Contemplative Reptile'
                  className={classes.cartItemCardImage}
                />
                <CardContent
                  classes={{ root: classes.cartItemCardContentRoot }}
                >
                  <Typography
                    variant='subtitle1'
                    className={classes.cartItemCardTitle}
                  >
                    {item.book.title}
                  </Typography>
                  <Typography variant='caption' component='p'>
                    {item.book.author}
                  </Typography>
                  <Typography variant='caption' component='p'>
                    Ilość: {item.quantity}
                  </Typography>
                  <Typography variant='caption' component='p'>
                    Cena: {item.book.price.toFixed(2)} zł
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions classes={{ root: classes.cartItemCardActions }}>
                <Button
                  size='small'
                  variant='contained'
                  color='secondary'
                  startIcon={<DeleteIcon />}
                  className={classes.cartItemCardDeleteButton}
                  onClick={() => dispatch(deleteFromCart(item.id))}
                >
                  <Typography variant='caption'>Usuń</Typography>
                </Button>
              </CardActions>
            </Card>
          );
        })}
        <Box className={classes.cartTotalPrice}>
          <Typography variant='subtitle1'>Łączna kwota:</Typography>
          <Typography variant='subtitle1'>{totalCost} zł</Typography>
        </Box>
        <Link
          to={CART_PAGE}
          component={RouterLink}
          className={classes.cartLink}
        >
          <Button
            size='small'
            variant='contained'
            color='primary'
            className={classes.button}
            startIcon={<LocalMallSharpIcon />}
          >
            Koszyk
          </Button>
        </Link>
      </Menu>
    </React.Fragment>
  );
};

export default Cart;
