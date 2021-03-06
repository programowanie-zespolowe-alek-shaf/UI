import React, { useEffect, useReducer } from 'react';
import styles from './styles/BookContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
import BookDetails from './components/BookDetails';
import SimilarList from './components/SimilarList';
import { initialState, getBookById, reducer } from './slice/bookSlice';

const DetailsWithLoading = WithLoading(BookDetails);
const BookContainer = (props) => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);

  useEffect(() => {
    const bookId = props.match.params.bookId;
    getBookById(dispatchLocal, bookId);
  }, []);

  return (
    <div className={styles.container}>
      <DetailsWithLoading
        book={state.book}
        isLoading={!state.isLoaded}
        error={state.error}
        // onAdd={(id, item) => dispatch(addToCart(id, item))}
      />
      {/* <SimilarList id = {book.id} 
                 category = {book.category}/> */}
    </div>
  );
};

export default BookContainer;
