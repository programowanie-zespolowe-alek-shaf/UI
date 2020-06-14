import React, { useEffect, useReducer } from 'react';
import styles from './styles/OrderContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
import OrderDetails from './OrderDetails';
import { initialState, getOrderById, reducer} from '../../../slice/AdminPanelOrderDetailsSlice';
import {Button} from "@material-ui/core";
import { useHistory } from 'react-router-dom';


const DetailsWithLoading = WithLoading(OrderDetails);
const OrderDetailsContainer = (props) => {
  const history = useHistory();
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  
  useEffect(() => {
    console.log('hehe');

    const orderId = props.match.params.id;

    getOrderById(dispatchLocal, orderId);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Szczegóły zamówienia</h3>
      <span>Id zamówienia: {props.match.params.id}</span>

      <DetailsWithLoading
        order={state.order}
        isLoading={state.isLoading}
        isLoaded={state.isLoaded}
        error={state.error}
      />
      <Button
          onClick={() => history.goBack()}
      >
        Wróć do listy zamówień
      </Button>
    </div>
  );
};

export default OrderDetailsContainer;
