import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reducer as singleReducer,
  initialState as singleInitialState,
  deleteItem,
} from '../../../../slice/AdminPanelSingleSlice';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

import Coupons from '../coupons/Coupons';
import ConfirmationModal from 'components/confirmationModal/ConfirmationModal';

const CouponsManager = ({ items, updateItems }) => {
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [deletedCouponName, setDeletedCouponName] = useState(undefined);
  const [deletedCouponId, setDeletedCouponId] = useState(undefined);
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
          `Wystąpił błąd podczas usuwania kuponu "${deletedCouponName}:" ${singleState.error}`
        )
      );
    }
  }, [singleState.error]);

  const onCouponDelete = (couponId, couponName) => {
    setDeletedCouponName(couponName);
    setDeletedCouponId(couponId);
    setIsConfirmDeleteOpen(true);
  };

  const deleteCoupon = (couponId) => {
    const onSuccess = () => {
      dispatch(
        triggerGlobalAlert(
          'success',
          `Kupon "${deletedCouponName}" został usunięty pomyślnie!`
        )
      );
      updateItems();
    };

    deleteItem(singleDispatchLocal, 'coupon', couponId, onSuccess);
    setIsConfirmDeleteOpen(false);
    setDeletedCouponName(undefined);
    setDeletedCouponId(undefined);
  };

  return (
    <React.Fragment>
      <ConfirmationModal
        isOpen={isConfirmDeleteOpen}
        setOpen={setIsConfirmDeleteOpen}
        title={'Potwierdź operację usunięcia'}
        text={`Czy na pewno chcesz usunąć kupon "${deletedCouponName}"?`}
        aggreeText={'Usuń'}
        cancelText={'Anuluj'}
        aggreeCallback={() => deleteCoupon(deletedCouponId)}
      />
      <Coupons items={items} onCouponDelete={onCouponDelete} />
    </React.Fragment>
  );
};

CouponsManager.propTypes = {
  items: PropTypes.array.isRequired,
  updateItems: PropTypes.func.isRequired,
};

export default CouponsManager;
