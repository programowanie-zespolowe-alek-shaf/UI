import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import OrderData from './components/OrderData';
import styles from './styles/orderStyles.scss';
import Payment from './components/Payment';
import { restartOrder } from './slice/orderSlice';

function OrderContainer() {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.details, shallowEqual);
  const order = useSelector((state) => state.order, shallowEqual);
  
  React.useEffect(() => {
    
    return () => {
      dispatch(restartOrder());
    };
  });

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
