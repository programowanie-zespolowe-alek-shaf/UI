import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import styles from '../styles/cartSummary.scss';
import DeleteIcon from '@material-ui/icons/Delete';

function CartSummary(props) {

  return (
    <div className={styles.container}>
      {/*<span>{`Zniżka: ${props.coupon}`}</span>*/}
      {/*<span>{`Do zapłaty: ${props.totalCost}`}</span>*/}
      <Button
        size='small'
        variant='contained'
        color='primary'
        onClick={props.onNext}
      >
        <Typography
          variant='caption'
        >
          Zapłać
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