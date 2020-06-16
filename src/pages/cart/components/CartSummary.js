import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import styles from '../styles/cartSummary.scss';

function CartSummary(props) {

  return (
    <div className={styles.container}>
      <span>{`Do zapłaty: ${props.totalCost}`} zł</span>
      <Button
        size='small'
        variant='contained'
        color='primary'
        onClick={props.onNext}
      >
        <Typography
          variant='caption'
        >
          Zamów
        </Typography>
      </Button>
    </div>
  );
}

CartSummary.propTypes = {
  totalCost: PropTypes.number,
  coupon: PropTypes.string,
  onNext: PropTypes.func,
};

export default CartSummary;