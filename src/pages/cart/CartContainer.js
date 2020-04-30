import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getUsersCart, deleteFromCart } from './slice/cartSlice';
import styles from './styles/cartContainer.scss';
import CartItemList from './components/CartItemList';
import CartSummary from './components/CartSummary';

const CartContainer = (props) => {
  const cartStore = useSelector((state) => state.cart, shallowEqual);
  // const userStore = useSelector((state) => state.login, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getUsersCart(0)); }, []);

  return (
    <div className={styles.container}>
      <CartItemList
        loading={cartStore.loading}
        items={cartStore.items}
        onDelete={(id, item) => dispatch(deleteFromCart(id, item))}
      />
      <CartSummary
        totalCost={cartStore.totalCost}
        coupon={cartStore.coupon}
      />
    </div>);
};

export default CartContainer;
