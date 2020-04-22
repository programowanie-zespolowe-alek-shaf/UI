import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getUsersCart } from './slice/cartSlice';
import styles from './styles/cartContainer.scss';

const CartContainer = (props) => {
  const cartStore = useSelector((state) => state.cart, shallowEqual);
  // const userStore = useSelector((state) => state.login, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getUsersCart(0)); }, []);

  return (
    <div className={styles.container}>
    Cart Container
    </div>);
};

export default CartContainer;
