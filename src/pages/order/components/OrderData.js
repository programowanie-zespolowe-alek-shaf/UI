import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { CartWrapperWithLoading } from '../../cart/CartContainer';
import { shallowEqual, useSelector } from 'react-redux';
import styles from '../styles/cartWrapper.scss';

function OrderData() {
  const cartStore = useSelector((state) => state.cart, shallowEqual);

  return (
    <Box maxWidth={500}>
      <div className={styles.wrapper}>
        <CartWrapperWithLoading
          cartStore={cartStore}
          isLoading={cartStore.loading}
          disabled
        />
      </div>
    </Box>
  );
}

export default OrderData;
