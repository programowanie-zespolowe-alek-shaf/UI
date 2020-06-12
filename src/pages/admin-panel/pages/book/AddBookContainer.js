import React, { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from './form/Form';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';
import {
  initialState,
  reducer,
  addAdminPanelItem,
} from '../../slice/AdminPanelSingleSlice';
import addBookInputs from './inputs/addBookInputs';
import { ADMIN_PAGE_BOOKS } from 'global/constants/pages';

const addBookContainer = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.error) {
      dispatch(triggerGlobalAlert('error', state.error));
    }
  }, [state.error]);

  //Redirect to bookList on book add success
  const redirectToBookList = () => {
    history.push(ADMIN_PAGE_BOOKS);
  };

  const onAddBook = (bookData) => {
    addAdminPanelItem(dispatchLocal, 'book', bookData, redirectToBookList);
  };

  return (
    <Form
      title='Dodaj książkę'
      onSubmit={onAddBook}
      submitButtonText='Dodaj książkę'
      isMakingRequest={state.isAdding}
      inputs={addBookInputs}
    />
  );
};

export default addBookContainer;

// import React, { useEffect } from 'react';
// import { useSelector, shallowEqual, useDispatch } from 'react-redux';
// import RegisterManager from './form/RegisterManager';
// import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

// import { registerAction } from './actions/registerActions';

// const RegisterContainer = () => {
//   const error = useSelector((state) => state.register.error, shallowEqual);
//   const dispatch = useDispatch();
//   const isRegistering = useSelector(
//     (state) => state.register.loading,
//     shallowEqual
//   );

//   useEffect(() => {
//     if (error) {
//       dispatch(triggerGlobalAlert('error', error));
//     }
//   }, [error]);

//   const dispatchRegisterAction = (payload, callback) => {
//     dispatch(registerAction(payload, callback));
//   };

//   return (
//     <React.Fragment>
//       <RegisterManager
//         onSubmit={dispatchRegisterAction}
//         isRegistering={isRegistering}
//       />
//     </React.Fragment>
//   );
// };

// export default RegisterContainer;
