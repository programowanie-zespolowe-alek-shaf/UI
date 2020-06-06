import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { deleteFromCart, updateCartItem } from './slice/cartSlice';
import styles from './styles/cartContainer.scss';
import { useHistory } from 'react-router-dom';
import WithLoading from '../../components/withLoading/WithLoading';
import CartWrapper from './components/CartWrapper';


const CartWrapperWithLoading = WithLoading(CartWrapper);

const CartContainer = () => {
  const cartStore = useSelector((state) => state.cart, shallowEqual);
  const history = useHistory();
  const dispatch = useDispatch();
  const isEmpty = cartStore.items.length === 0;

  const onNextStep = () => {
    history.push('/order');
  };
  
  const onUpdate = (itemId, bookId, quantity) => dispatch(updateCartItem(itemId, bookId, quantity));
  
  const onDelete =  (itemId) => dispatch(deleteFromCart(itemId));
  if(isEmpty) return (<h2 className={styles.container}>TWÓJ KOSZYK JEST PUSTY</h2>);

  return (
    <CartWrapperWithLoading
      cartStore={cartStore}
      isLoading={cartStore.loading}
      isLoaded={!cartStore.loading}
      onNextStep={onNextStep}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  );
};

export default CartContainer;
