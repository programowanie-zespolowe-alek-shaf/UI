import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addItemToCart } from '../cart/slice/cartSlice';

import styles from './styles/BookContainer.scss';

import BookDetails from './components/BookDetails';
import { getBookById } from './slice/bookSlice';

const BookContainer = (props) => {
  const book = useSelector((state) => state.book, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookById(props.match.params.bookId));
  }, []);

  return (
    <div className={styles.container}>
      <h3>Book Page</h3>
      <BookDetails
        {...book}
        onAdd={(itemId) => dispatch(addItemToCart(itemId))}
      />
      {/* <SimilarList id = {book.id} 
                 category = {book.category}/> */}
    </div>
  );
};

export default BookContainer;
