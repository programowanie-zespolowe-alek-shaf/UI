import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  getUsersCart,
  deleteFromCart,
} from '../../../../pages/cart/slice/cartSlice';
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
  const cartItems = useSelector((state) => state.cart.items, shallowEqual);
  const totalCost = useSelector((state) => state.cart.totalCost, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersCart(0));
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <React.Fragment>
      <IconButton
        size='small'
        className={classes.iconButton}
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <Badge badgeContent={cartItems.length} color='secondary'>
          <LocalMallSharpIcon className={classes.icon} />
        </Badge>
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ list: classes.menuPadding }}
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
                  image={item.photoUrl}
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
              </CardActionArea>
              <CardActions classes={{ root: classes.cartItemCardActions }}>
                <Button
                  size='small'
                  variant='contained'
                  color='secondary'
                  startIcon={<DeleteIcon />}
                  className={classes.cartItemCardDeleteButton}
                >
                  <Typography
                    variant='caption'
                    onClick={() => handleDelete(item.id)}
                  >
                    Usuń
                  </Typography>
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
