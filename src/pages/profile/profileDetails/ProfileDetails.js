import React from 'react';
import useFeaturedStyles from "../../main/components/featured/FeaturedStyles";
import styles from "./styles/UserDetails.scss";
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Link, Typography} from "@material-ui/core";
import {bool, PropTypes as pt} from "prop-types";
import {ADMIN_PAGE_USER, BOOK_PAGE} from "../../../global/constants/pages";
import {Link as RouterLink} from "react-router-dom";
import useBookDetailsStyles from "../../book/components/BookDetailsStyles";

const ProfileDetails = ({user}) => {
  const classes = useBookDetailsStyles();

  const InfoElement = ({ label, content }) => {
    return (
        <Box display='flex' flexDirection={'column'} mr={3}>
          <Typography variant='h6'  gutterBottom>
            {label}
          </Typography>
          <Typography variant='subtitle2'>{content}</Typography>
        </Box>
    );
  };

  return (
      /*<div className={styles.container}>
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
      </div>*/

  <Box display='flex' justifyContent='center' alignSelf='center' mt={1}>
    <Card variant='outlined' classes={{ root: classes.root }}>

      <CardContent classes={{ root: classes.content }}>
        <Typography variant='h6' className={classes.title}>
          {user.userName}
        </Typography>

        <Box display='flex' mt={1.5}>
          <InfoElement label='Imię' content={user.firstName} />
          <InfoElement label='Nazwisko' content={user.lastName} />
        </Box>
        <Box mt={1}>
          <InfoElement label='E-mail' content={user.email} />
        </Box>
        <Box display='flex' mt={1.5}>
          <InfoElement label='Telefon' content={user.phone} />
        </Box>
        <Box display='flex' mt={1.5}>
          <InfoElement label='Adres' content={user.address} />
        </Box>
        <Box mt={1.5}>
        </Box>
      </CardContent>
    </Card>
  </Box>
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
