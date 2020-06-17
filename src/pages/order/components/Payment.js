import React from 'react';
import styles from '../styles/payment.scss';
import StripeCheckoutButton from './StripeCheckoutButton';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { validateCoupon } from '../slice/couponSlice';
import { Button, Typography, Input } from '@material-ui/core';

function Payment(props) {
  const dispatch = useDispatch();

  const [couponCode, setCouponCode] = React.useState('');

  const cartStore = useSelector((state) => state.cart, shallowEqual);
  const couponStore = useSelector((state) => state.coupon, shallowEqual);
  const isCouponValid = couponStore.isValid;
  const couponMultiplier = couponStore.details.discountMultiplayer;
  const price = cartStore.totalValue;
  const discount = (1 - couponMultiplier) * 100;
  const finalPrice = price * couponMultiplier;
  
  const validateCouponCode = (code) => {
    dispatch(validateCoupon(code));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>PŁATNOŚĆ</h3>
      <div className={styles.coupon}>
        <div>Wprowadź kupon zniżkowy: </div>
        <div className={styles.couponSetup}>
          <Input type="text" value={props.quantity} onChange={(e) => {
            setCouponCode(e.target.value);
          }}/>
          <Button
            size='small'
            variant='contained'
            color='secondary'
            disabled={couponCode === ''}
            onClick={() => validateCouponCode(couponCode)}
          >
            <Typography
              variant='caption'
            >
              Wprowadź
            </Typography>
          </Button>
        </div>
      </div>
      {isCouponValid &&
      <React.Fragment>
        <div className={styles.price}>{`Cena: ${price} zł`}</div>
        <div className={styles.price}>{`Zniżka: ${discount.toFixed(0)} %`}</div>
      </React.Fragment>}
      <div className={styles.price}>{`Do zapłaty: ${finalPrice.toFixed(2)} zł`}</div>
      <StripeCheckoutButton
        price={finalPrice}
        couponCode={couponStore.details.code}
      />
    </div>
  );
}

export default Payment;