import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { PropTypes as pt, bool } from 'prop-types';
import styles from '../styles/BookDetails.scss';
// import useCartStyles from './CartStyles';
import {
    Box,
    Menu,
    IconButton,
    Badge,
    Button,
    Link,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Typography,
  } from '@material-ui/core';


function SimilarList(props) {
    const bookItems = useSelector((state) => state.id, shallowEqual);

  return (
    /* 
    <div className={styles.container}>
      <div className={styles.itemDetails}>
        <img alt={props.imageURL} src={props.photoUrl} height={200} width={150}  />
        <section className={styles.info}>
          <header className={styles.title}>{props.title}</header>
          <span>Loading: {props.loading}</span>
          <span>Autor: {props.author}</span>
          <span><strong>Cena: {props.price}</strong></span>
        </section>
      </div>
      <div className={styles.deleteButton}>
        <Button onClick={() => props.onAdd(props.id)}>Dodaj do koszyka</Button>
      </div>
    </div>
    */
   <React.Fragment>
   {console.log('state', state)}

   {bookItems.map((item) => {
    return (
      <Card
        key={uuidv4()}
        variant='outlined'
        classes={{ root: classes.cartItemCardRoot }}
      >
        <CardActionArea
          classes={{ root: classes.cartItemCardActionArea }}
        >
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            image={item.photoUrl}
            title='Contemplative Reptile'
            className={classes.cartItemCardImage}
          />
          <CardContent
            classes={{ root: classes.cartItemCardContentRoot }}
          >
            <Typography
              variant='subtitle1'
              className={classes.cartItemCardTitle}
            >
              {item.title}
            </Typography>
            <Typography variant='caption' component='p'>
              {item.author}
            </Typography>
            <Typography variant='caption' component='p'>
              Ilość: {item.amount}
            </Typography>
            <Typography variant='caption' component='p'>
              Cena: {item.price * item.amount} zł
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions classes={{ root: classes.cartItemCardActions }}>
          <Button
            size='small'
            variant='contained'
            color='secondary'
            startIcon={<DeleteIcon />}
            className={classes.cartItemCardDeleteButton}
          >
            <Typography
              variant='caption'
              onClick={() => handleDelete(item.id)}
            >
              Usuń
            </Typography>
          </Button>
        </CardActions>
      </Card>
    );
  })}

  </React.Fragment> 
  );
};

SimilarList.propTypes = {
  id: pt.number,
  category: pt.shape({
    id: pt.number, 
    name: pt.string
  }),
};

export default SimilarList;
