import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderPlacement } from '../slice/orderSlice';

const StripeCheckoutButton = ({ price, couponCode }) => {
  const dispatch = useDispatch();

  const publishableKey = 'pk_test_dKJqK9ot67ciIROxXUfKBF3k00Q30DGBGL';

  const onToken = (token) => {
    console.log(token);

    const address = token.card.address_line1 + ', ' + token.card.address_zip + ', ' + token.card.address_city + ', ' + token.card.address_country;
    dispatch(orderPlacement(address, couponCode));
  };

  return (
    <StripeCheckout
      label='Zapłać'
      billingAddress
      name={'Zamówienie'}
      description={`Do zapłaty: ${price}zł`}
      amount={price * 100}
      currency='PLN'
      panelLabel='Zapłać'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
