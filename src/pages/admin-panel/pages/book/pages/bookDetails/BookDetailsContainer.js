import React, { useEffect, useReducer } from 'react';
import styles from './styles/BookContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
import BookDetails from './BookDetails';
import { initialState, getBookById, reducer} from '../../../../slice/AdminPanelBookDetailsSlice';
import {Button} from "@material-ui/core";
import { useHistory } from 'react-router-dom';


const DetailsWithLoading = WithLoading(BookDetails);
const BookDetailsContainer = (props) => {
  const history = useHistory()
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const bookId = props.match.params.id;
    getBookById(dispatchLocal, bookId);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Book Page</h3>
      <span>Id książki: {props.match.params.id}</span>

      <DetailsWithLoading
        book={state.book}
        isLoading={state.isLoading}
        isLoaded={state.isLoaded}
        error={state.error}
      />
      <Button
          onClick={() => history.goBack()}
      >
        Wróć do listy książek
      </Button>
    </div>
  );
};

export default BookDetailsContainer;
