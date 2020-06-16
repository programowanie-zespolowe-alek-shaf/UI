import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Typography } from '@material-ui/core';
import styles from '../styles/cartItem.scss';
import DeleteIcon from '@material-ui/icons/Delete';

function CartItem(props) {
  const editable = !props.disabled;

  return (
    <div className={styles.container}>
      <div className={styles.itemDetails}>
        <img alt={props.book.photoUrl} src={props.book.photoUrl} height={200} width={150}  />
        <section className={styles.info}>
          <header className={styles.title}>{props.book.title}</header>
          <span>{`Autor: ${props.book.author}`}</span>
          <span>{`Rok produkcji: ${props.book.year}`}</span>
          <span>{`Cena: ${props.book.price} zł`}</span>
        </section>
      </div>
      {editable && <Input type="number" value={props.quantity} onChange={(e) => {
        props.onUpdate(Number(e.target.value));
      }}/>}
      {editable && <div className={styles.deleteButton}>
        <Button
          size='small'
          variant='contained'
          color='secondary'
          startIcon={<DeleteIcon/>}
          onClick={() => props.onDelete(props.id)}
        >
          <Typography
            variant='caption'
          >
            Usuń
          </Typography>
        </Button>
      </div>}
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  book: PropTypes.object,
  quantity: PropTypes.number,
  onUpdate: PropTypes.func,
};

export default CartItem;
