import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reducer as singleReducer,
  initialState as singleInitialState,
  deleteItem,
} from '../../../../slice/AdminPanelSingleSlice';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

import Users from '../users/Users';
import ConfirmationModal from 'components/confirmationModal/ConfirmationModal';

const UsersManager = ({ items, updateItems }) => {
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [deletedUserName, setDeletedUserName] = useState(undefined);
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
          `Wystąpił błąd podczas usuwania użytkownika "${deletedUserName}:" ${singleState.error}`
        )
      );
    }
  }, [singleState.error]);

  const onUserDelete = (userName) => {
    setDeletedUserName(userName);
    setIsConfirmDeleteOpen(true);
  };

  const deleteUser = (userName) => {
    const onSuccess = () => {
      dispatch(
        triggerGlobalAlert(
          'success',
          `Użytkownik "${deletedUserName}" została usunięty pomyślnie`
        )
      );
      updateItems();
    };

    deleteItem(singleDispatchLocal, 'user', userName, onSuccess);
    setIsConfirmDeleteOpen(false);
    setDeletedUserName(undefined);
  };

  return (
    <React.Fragment>
      <ConfirmationModal
        isOpen={isConfirmDeleteOpen}
        setOpen={setIsConfirmDeleteOpen}
        title={'Potwierdź operację usunięcia'}
        text={`Czy na pewno chcesz usunąć użytkownika "${deletedUserName}"?`}
        aggreeText={'Usuń'}
        cancelText={'Anuluj'}
        aggreeCallback={() => deleteUser(deletedUserName)}
      />
      <Users items={items} onUserDelete={onUserDelete} />
    </React.Fragment>
  );
};

UsersManager.propTypes = {
  items: PropTypes.array.isRequired,
  updateItems: PropTypes.func.isRequired,
};

export default UsersManager;
