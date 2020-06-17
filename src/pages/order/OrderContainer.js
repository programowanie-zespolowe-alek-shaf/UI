import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderData from './components/OrderData';
import styles from './styles/orderStyles.scss';
import Payment from './components/Payment';
import { restartOrder } from './slice/orderSlice';
import { CART_PAGE } from '../../global/constants/pages';

function OrderContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart, shallowEqual);
  const order = useSelector((state) => state.order, shallowEqual);
  
  React.useEffect(() => {
    
    if(cart.items.length === 0) history.push('/');
    
    return () => {
      dispatch(restartOrder());
    };
  }, [cart.items.length]);

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
