import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/cartSummary.scss';

function CartSummary(props) {
  return (
    <div className={styles.container}>
      <span>{`Zniżka: ${props.coupon}`}</span>
      <span>{`Do zapłaty: ${props.totalCost}`}</span>
    </div>
  );
}

CartSummary.propTypes = {
  totalCost: PropTypes.number,
  coupon: PropTypes.string,
};

export default CartSummary;