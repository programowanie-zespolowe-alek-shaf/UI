import React from 'react';
import PropTypes from 'prop-types';
import CartItemList from './CartItemList';
import CartSummary from './CartSummary';
import styles from '../styles/cartContainer.scss';

function CartWrapper(props) {
  const { cartStore, onNextStep, onDelete, onUpdate } = props;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <CartItemList
          loading={cartStore.loading}
          items={cartStore.items}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
        <CartSummary totalCost={cartStore.totalCost} coupon={cartStore.coupon} onNext={onNextStep} />
      </div>
    </div>
  );
}


CartWrapper.propTypes = {
  cartStore: PropTypes.object,
  onNextStep: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default CartWrapper;