import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { CircularProgress } from '@material-ui/core';
import styles from '../styles/cartItemList.scss';

function CartItemList(props) {

  const items = props.items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onDelete={() => props.onDelete(item.id)}
      onUpdate={(quantity) => props.onUpdate(item.id, item.book.id, quantity)}
    />
  ));

  if(props.loading) return <div className={styles.container}><CircularProgress color="secondary" /></div>;
  
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>TWÓJ KOSZYK</h3>
      <div className={styles.items}>
        {items}
      </div>
    </div>
  );
}

CartItemList.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
  loading: PropTypes.bool,
};

export default CartItemList;