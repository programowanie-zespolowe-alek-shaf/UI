import React from 'react';
import useFeaturedStyles from "../../main/components/featured/FeaturedStyles";
import styles from "./styles/UserDetails.scss";
import {Button} from "@material-ui/core";
import {bool, PropTypes as pt} from "prop-types";

const ProfileDetails = ({user}) => {
  const classes = useFeaturedStyles();
  return (
      <div className={styles.container}>
        <div className={styles.itemDetails}>
          <section className={styles.info}>
            <header className={styles.title}>{user.userName}</header>
            <span>Imię: {user.firstName}</span>
            <span>Nazwisko: {user.lastName}</span>
            <span>E-mail: {user.email}</span>
            <span>Nr telefonu: {user.phone}</span>
            <span>Adres: {user.address}</span>
          </section>
        </div>
      </div>
  );
};

ProfileDetails.propTypes = {
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


export default ProfileDetails;
