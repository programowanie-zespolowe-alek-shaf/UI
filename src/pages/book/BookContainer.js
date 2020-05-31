import React, { useEffect, useReducer } from 'react';
import styles from './styles/BookContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
import BookDetails from './components/BookDetails';
import SimilarList from './components/SimilarList';
import { initialState, getBookById, reducer} from './slice/bookSlice';


const DetailsWithLoading = WithLoading(BookDetails);
const BookContainer = () => {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  
  useEffect(() => {
    console.log('useEffect');
    getBookById(dispatchLocal);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Book Page</h3>
      <DetailsWithLoading
        // {...book}
        book={state.book}
        isLoading={state.isLoading}
        isLoaded={state.isLoaded}
        error={state.error}
        // onAdd={(id, item) => dispatch(addToCart(id, item))}
      />
      {/* <SimilarList id = {book.id} 
                 category = {book.category}/> */}
    </div>
  );
};

export default BookContainer;
