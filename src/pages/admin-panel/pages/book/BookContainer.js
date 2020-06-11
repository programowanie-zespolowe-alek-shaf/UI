import React, { useReducer, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
  initialState,
  reducer,
  getAdminPanelItem,
} from '../../slice/AdminPanelSingleSlice';

import WithLoading from 'components/withLoading/WithLoading';

const BookContainer = (props) => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const id = props.match.params.id;

  useEffect(() => {
    getAdminPanelItem(dispatchLocal, 'book', id);
  }, [id]);

  return <div>{id}</div>;
};

export default withRouter(BookContainer);

// import React, { useEffect, useReducer } from 'react';
// import {
//   initialState,
//   reducer,
//   getAdminPanelItems,
// } from '../../slice/AdminPanelSlice';

// import WithLoading from 'components/withLoading/WithLoading';

// const BooksWithLoading = WithLoading(Books);

// const BookContainer = () => {
//   const [state, dispatchLocal] = useReducer(reducer, initialState);

//   useEffect(() => {
//     getAdminPanelItems(dispatchLocal, 'books');
//   }, []);

//   return (
//     <BooksWithLoading
//       books={state.items}
//       isLoading={state.isLoading}
//       error={state.error}
//     />
//   );
// };

// export default BookContainer;
