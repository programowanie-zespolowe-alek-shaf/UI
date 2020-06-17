import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reducer as singleReducer,
  initialState as singleInitialState,
  deleteItem,
} from '../../../../slice/AdminPanelSingleSlice';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

import Orders from '../orders/Orders';
import ConfirmationModal from 'components/confirmationModal/ConfirmationModal';

const OrdersManager = ({ items, updateItems }) => {
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [deletedOrderId, setDeletedOrderId] = useState(undefined);
  const dispatch = useDispatch();
  const [singleState, singleDispatchLocal] = useReducer(
    singleReducer,
    singleInitialState
  );

  useEffect(() => {
    if (singleState.error) {
      dispatch(
        triggerGlobalAlert(
          'error',
          `Wystąpił błąd podczas usuwania zamówienia "${deletedOrderId}:" ${singleState.error}`
        )
      );
    }
  }, [singleState.error]);

  const onOrderDelete = (orderId) => {
    setDeletedOrderId(orderId);
    setIsConfirmDeleteOpen(true);
  };

  const deleteOrder = (orderId) => {
    const onSuccess = () => {
      dispatch(
        triggerGlobalAlert(
          'success',
          `Zamówienie "${orderId}" zostało usunięte pomyślnie!`
        )
      );
      updateItems();
    };

    deleteItem(singleDispatchLocal, 'order', orderId, onSuccess);
    setIsConfirmDeleteOpen(false);
    setDeletedOrderId(undefined);
  };

  return (
    <React.Fragment>
      <ConfirmationModal
        isOpen={isConfirmDeleteOpen}
        setOpen={setIsConfirmDeleteOpen}
        title={'Potwierdź operację usunięcia'}
        text={`Czy na pewno chcesz usunąć zamówienie "${deletedOrderId}"?`}
        aggreeText={'Usuń'}
        cancelText={'Anuluj'}
        aggreeCallback={() => deleteOrder(deletedOrderId)}
      />
      <Orders items={items} onOrderDelete={onOrderDelete} />
    </React.Fragment>
  );
};

OrdersManager.propTypes = {
  items: PropTypes.array.isRequired,
  updateItems: PropTypes.func.isRequired,
};

export default OrdersManager;
