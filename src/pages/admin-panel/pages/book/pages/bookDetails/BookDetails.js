import React from 'react';
import useFeaturedStyles from "../../../../../main/components/featured/FeaturedStyles";
import styles from "../../../../../book/styles/BookDetails.scss";

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


export default BookDetails;
