import React from 'react';
import useFeaturedStyles from "../../../../../main/components/featured/FeaturedStyles";
import styles from "../../../../../book/styles/BookDetails.scss";
import {Button} from "@material-ui/core";
import {bool, PropTypes as pt} from "prop-types";

const BookDetails = ({book}) => {
  const classes = useFeaturedStyles();
  return (
      <div className={styles.container}>
        <div className={styles.itemDetails}>
          <img alt={book.imageURL} src={book.photoUrl} height={200} width={150}/>
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
