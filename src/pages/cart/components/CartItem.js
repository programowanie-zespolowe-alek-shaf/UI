import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '@material-ui/core';
import styles from '../styles/cartItem.scss';

function CartItem(props) {
  return (
    <div className={styles.container}>
      <div className={styles.itemDetails}>
        <img alt={props.imageURL} src={props.photoUrl} height={200} width={150}  />
        <section className={styles.info}>
          <header className={styles.title}>{props.title}</header>
          <span>{props.author}</span>
          <span>{props.year}</span>
          <span>{props.price}</span>
        </section>
      </div>
      <div className={styles.deleteButton}>
        <Button onClick={() => props.onDelete(props.id)}>USUŃ</Button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  amount: PropTypes.string,
  price: PropTypes.number,
  photoUrl: PropTypes.string,
  onDelete: PropTypes.func,
};

export default CartItem;
