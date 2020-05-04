import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { getUsersCart } from '../../../../pages/cart/slice/cartSlice';
import { shallow } from 'enzyme';
import { CART_PAGE } from '../../../../global/constants/pages';

import { Link } from '@material-ui/core';
import LocalMallSharpIcon from '@material-ui/icons/LocalMallSharp';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import useCartStyles from './CartStyles';

const Cart = () => {
  const classes = useCartStyles();
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.items, shallowEqual);
  const totalCost = useSelector(
    ((state) => state.cart.totalCost, shallowEqual)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersCart(0));
  }, []);

  return (
    <React.Fragment>
      <Link
        to={CART_PAGE}
        component={RouterLink}
        color='inherit'
        underline='none'
        className={classes.link}
      >
        <IconButton size='small' className={classes.iconButton}>
          <Badge badgeContent={cartItems.length} color='secondary'>
            <LocalMallSharpIcon className={classes.icon} />
          </Badge>
        </IconButton>
      </Link>
    </React.Fragment>
  );
};

export default Cart;
