import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderData from './components/OrderData';
import styles from './styles/orderStyles.scss';
import Payment from './components/Payment';
import { restartOrder } from './slice/orderSlice';
import { CircularProgress } from '@material-ui/core';

function OrderContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart, shallowEqual);
  const order = useSelector((state) => state.order, shallowEqual);
  const customer = useSelector((state) => state.customer, shallowEqual);
  const loading = cart.loading || order.loading || customer.loading;
  
  React.useEffect(() => {
    
    if(cart.items.length === 0) history.push('/');
    
    return () => {
      dispatch(restartOrder());
    };
  }, [cart.items.length]);

  if(loading) return <div className={styles.loader}>
    <CircularProgress color='secondary' />
  </div>;

  return (
    <div className={styles.container}>
      {order.isSuccess ? <h2 className={styles.title}>ZAMÓWIENIE ZOSTAŁO ZŁOŻONE</h2> :
        <React.Fragment>
          <h2 className={styles.title}>PODSUMOWANIE</h2>
          <div className={styles.content}>
            <OrderData />
            <div className={styles.payment}>
              <Payment />
            </div>
          </div>
        </React.Fragment>}
    </div>
  );
}

OrderContainer.propTypes = {};

export default OrderContainer;
