import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_dKJqK9ot67ciIROxXUfKBF3k00Q30DGBGL';

  const onToken = (token) => {
    //TUTAJ WYSLANIE REQUESTA NA BACKEND JESLI NIE CHCEMY ZEBY NIE REJESTROWALO PLATNOSCI NA STRONIE
    //JESLI NIE CHCEMY TO BEZ TEGO PONIZEJ

    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Płatność zakońcona sukcesem');
        //LUB TUTAJ WYSLANIE REQUESTA DO /PAYMENT (server.js) I ZAREJESTROWANIE PLATNOSCI NA STRONIE
        //AKTUALNIE NIE DZIALA - CANNOT POST TO /payment
      })
      .catch((error) => {
        console.log(error);
        console.log('Wystąpił błąd z płatnością: ', JSON.parse(error));
        alert(
          'Wystąpił błąd z Twoją płatnością. Upewnij się, że to Ty używasz podanej karty kredytowej'
        );
      });
  };

  return (
    <StripeCheckout
      label='Zapłać'
      name='BookStore'
      billingAddress
      shippingAddress
      // image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Do zapłaty: ${price}zł`}
      amount={priceForStripe}
      currency='PLN'
      panelLabel='Zapłać'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
