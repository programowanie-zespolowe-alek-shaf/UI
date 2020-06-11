import React from 'react';
import { PropTypes as pt, bool } from 'prop-types';
import {   
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Link, } 
  from '@material-ui/core';
import styles from '../styles/BookDetails.scss';
import useFeaturedStyles from '../../main/components/featured/FeaturedStyles';


const BookDetails = ({ book }) => {
  const classes = useFeaturedStyles();

  const index = 1; // TODO: CHANGE to general case !!!
  console.log(book);
  return (
    <div className={styles.container}>
      <div className={styles.itemDetails}>
        <img alt={book.imageURL} src={book.photoUrl} height={200} width={150}  />
        <section className={styles.info}>
          <header className={styles.title}>{book.title}</header>
          <span>Loading: {book.loading}</span>
          <span>Autor: {book.author}</span>
          <span>Rok: {book.year}</span>
          <span>Opis: {book.description}</span>
          <span>Dostępna: {book.available}</span>
          <span>Kategoria: {book.category.name}</span>
          <span><strong>Cena: {book.price}</strong></span>
        </section>
      </div>
      <div className={styles.deleteButton}>
        <Button 
        // onClick={() => props.onAdd(props.id)}
        >
          Dodaj do koszyka
          </Button>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  loading: bool,
  id: pt.number,
  title: pt.string,
  category: pt.shape({
    id: pt.number, 
    name: pt.string
  }),
  author: pt.string,
  description: pt.string,
  amount: pt.number,
  price: pt.number,
  available: pt.bool,
  photoUrl: pt.string,
  onAdd: pt.func,
};

export default BookDetails;
