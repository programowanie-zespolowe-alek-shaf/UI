import React from 'react';
import useFeaturedStyles from "../../../../main/components/featured/FeaturedStyles";
import styles from "./styles/UserDetails.scss";
import {Button} from "@material-ui/core";
import {bool, PropTypes as pt} from "prop-types";

const UserDetails = ({user}) => {
  const classes = useFeaturedStyles();
  return (
      <div className={styles.container}>
        <div className={styles.itemDetails}>
          {/*<section className={styles.info}>*/}
          {/*  <header className={styles.title}>{user.title}</header>*/}
          {/*  <span>Loading: {user.loading}</span>*/}
          {/*  <span>Autor: {user.author}</span>*/}
          {/*  <span>Rok: {user.year}</span>*/}
          {/*  <span>Opis: {user.description}</span>*/}
          {/*  <span>Dostępna: {user.available}</span>*/}
          {/*  <span>Kategoria: {user.category.name}</span>*/}
          {/*  <span><strong>Cena: {user.price}</strong></span>*/}
          {/*</section>*/}
        </div>
      </div>
  );
};

UserDetails.propTypes = {
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


export default UserDetails;
