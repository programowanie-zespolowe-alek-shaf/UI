import React from 'react';
import { PropTypes as pt, bool } from 'prop-types';
import { Button, Input } from '@material-ui/core';
import styles from '../styles/BookDetails.scss';

function BookDetails(props) {
  return (
    <div className={styles.container}>
      <div className={styles.itemDetails}>
        <img alt={props.imageURL} src={props.photoUrl} height={200} width={150}  />
        <section className={styles.info}>
          <header className={styles.title}>{props.title}</header>
          <span>Loading: {props.loading}</span>
          <span>Autor: {props.author}</span>
          <span>Rok: {props.year}</span>
          <span>Cena: {props.price}</span>
          <span>Opis: {props.description}</span>
          <span>Dostępna: {props.available}</span>
          <span>Kategoria: {props.category.name}</span>
        </section>
      </div>
      <div className={styles.deleteButton}>
        <Button onClick={() => props.onAdd(props.id)}>Dodaj do koszyka</Button>
      </div>
    </div>
  );
}

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
