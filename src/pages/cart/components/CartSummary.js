import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import styles from '../styles/cartSummary.scss';
import { useHistory } from 'react-router-dom';

function CartSummary(props) {

  return (
    <div className={styles.container}>
      <span>{`Zniżka: ${props.coupon}`}</span>
      <span>{`Do zapłaty: ${props.totalCost}`}</span>
      <Button onClick={props.onNext} className={styles.button}>Przejdź dalej</Button>
    </div>
  );
}

CartSummary.propTypes = {
  totalCost: PropTypes.number,
  coupon: PropTypes.string,
  onNext: PropTypes.func,
};

export default CartSummary;