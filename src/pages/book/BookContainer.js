import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import styles from "./styles/BookContainer.scss";

import BookDetails from './components/BookDetails';
import { getBookById } from './slice/bookSlice';


const BookContainer = () => {
  const book = useSelector((state) => state.book, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookById(0));
  }, []);

  return (
    <div className={styles.container}>
      <h3>Book Page</h3>
      <BookDetails {...book}
                   onAdd={(id, item) => dispatch(addToCart(id, item))}/>
    </div>
  );
};

export default BookContainer;
