import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  Link,
  Typography,
  Button,
  Box,
  Input,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { BOOK_PAGE } from 'global/constants/pages';
import styles from '../styles/cartItem.scss';
import DeleteIcon from '@material-ui/icons/Delete';

import useBookCardStyles from '../../../components/bookCard/BookCardStyles';

function CartItem(props) {
  const classes = useBookCardStyles();
  
  const card = () => {
    return (
      <Card variant='outlined' classes={{ root: classes.root }}>
        <CardActionArea classes={{ root: classes.actionArea }}>
          <Link to={`${BOOK_PAGE}/${props.book.id}`} component={RouterLink}>
            <CardMedia
              component='img'
              alt={props.book.title}
              image={props.book.photoUrl}
              title={props.book.title}
              className={classes.image}
            />
          </Link>
        </CardActionArea>
        <CardContent classes={{ root: classes.content }}>
          <Link to={`${BOOK_PAGE}/${props.book.id}`} component={RouterLink}>
            <Typography variant='h6' className={classes.title}>
              {props.book.title}
            </Typography>
          </Link>
          <Typography variant='subtitle2' className={classes.author}>
            {props.book.author}, {props.book.year}
          </Typography>
          <Typography variant='subtitle1' className={classes.price}>
            Cena: {Number.parseFloat(props.book.price).toFixed(2)} zł
          </Typography>
          {editable && <div className={styles.actions}>
            <Input type="number" value={props.quantity} onChange={(e) => {
              props.onUpdate(Number(e.target.value));
            }}/>
            <div className={styles.deleteButton}>
              <Button
                size='small'
                variant='contained'
                color='secondary'
                startIcon={<DeleteIcon/>}
                onClick={() => props.onDelete(props.id)}
              >
                <Typography
                  variant='caption'
                >
                  Usuń
                </Typography>
              </Button>
            </div>
          </div>}
        </CardContent>
      </Card>
    );
  };
  

  const editable = !props.disabled;
  return (
    <div className={styles.container}>
      {card()}
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  book: PropTypes.object,
  quantity: PropTypes.number,
  onUpdate: PropTypes.func,
};

export default CartItem;
