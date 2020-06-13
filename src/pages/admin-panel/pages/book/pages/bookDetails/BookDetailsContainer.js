import React, { useEffect, useReducer } from 'react';
import styles from './styles/BookContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
import BookDetails from './BookDetails';
import { initialState, getBookById, reducer} from '../../../../slice/AdminPanelBookDetailsSlice';


const DetailsWithLoading = WithLoading(BookDetails);
const BookDetailsContainer = (props) => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const bookId = props.match.params.bookId;
    getBookById(dispatchLocal, bookId);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Book Page</h3>
      <DetailsWithLoading
        book={state.book}
        isLoading={state.isLoading}
        isLoaded={state.isLoaded}
        error={state.error}
      />
    </div>
  );
};

export default BookDetailsContainer;
