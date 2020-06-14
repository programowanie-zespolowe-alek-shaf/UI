import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import OrderData from './components/OrderData';
import styles from './styles/orderStyles.scss';
import { customerDataInputs } from './orderDataInputs';

function OrderContainer() {
  
  const customer = useSelector(state => state.customer.details, shallowEqual);
  const initInputs = {
    firstName: customer.firstName,
    lastName: customer.lastName,
    phone: customer.phone, 
    address: customer.address,
    email: customer.email,
  };

  const inputs = customerDataInputs(initInputs);

  const openPayment = () => {

  };

  return (
    <div className={styles.container}>
      <OrderData
        inputs={inputs}
        customer={customer}
        goToPayment={openPayment}
      />
    </div>
  );
}

OrderContainer.propTypes = {

};

export default OrderContainer;