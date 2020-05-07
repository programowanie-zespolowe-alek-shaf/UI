import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import styles from '../styles/cartSummary.scss';
import {useHistory} from "react-router-dom";

function CartSummary(props) {
  const history = useHistory();

  const onNextStep = () => {
    history.push('/order');
  }

  return (
    <div className={styles.container}>
      <span>{`Zniżka: ${props.coupon}`}</span>
      <span>{`Do zapłaty: ${props.totalCost}`}</span>
      <Button onClick={onNextStep} className={styles.button}>Przejdź dalej</Button>
    </div>
  );
}

CartSummary.propTypes = {
  totalCost: PropTypes.number,
  coupon: PropTypes.string,
};

export default CartSummary;