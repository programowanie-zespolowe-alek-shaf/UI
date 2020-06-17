import React from 'react';
import useFeaturedStyles from "../../../../../main/components/featured/FeaturedStyles";
import styles from "../../../../../book/styles/BookDetails.scss";
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Link, Typography} from "@material-ui/core";
import {bool, PropTypes as pt} from "prop-types";
import MainLayout from "../../../../../../components/mainLayout/MainLayout";
import {BOOK_PAGE} from "../../../../../../global/constants/pages";
import {Link as RouterLink} from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useBookDetailsStyles from "../../../../../book/components/BookDetailsStyles";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../../../../cart/slice/cartSlice";

const BookDetails = ({book}) => {
  const classes = useBookDetailsStyles();
  const {
    id,
    title,
    author,
    description,
    price,
    year,
    photoUrl,
    available,
    coverType,
    numPages,
  } = book;
  const dispatch = useDispatch();

  const InfoElement = ({ label, content }) => {
    return (
        <Box display='flex' flexDirection={'column'} mr={3}>
          <Typography variant='caption'  gutterBottom>
            {label}
          </Typography>
          <Typography variant='subtitle2'>{content}</Typography>
        </Box>
    );
  };

  return (
        <Box display='flex' justifyContent='center' alignSelf='center' mt={1}>
          <Card variant='outlined' classes={{ root: classes.root }}>
            <CardActionArea classes={{ root: classes.actionArea }}>
              <Link to={`${BOOK_PAGE}/${id}`} component={RouterLink}>
                <CardMedia
                    component='img'
                    alt={title}
                    image={photoUrl}
                    title={title}
                    className={classes.image}
                />
              </Link>
            </CardActionArea>
            <CardContent classes={{ root: classes.content }}>
              <Typography variant='h6' className={classes.title}>
                {title}
              </Typography>

              <Box display='flex' mt={1.5}>
                <InfoElement label='Autor' content={author} />
                <InfoElement label='Rok wydania' content={year} />
              </Box>
              <Box mt={1}>
                <InfoElement label='Opis' content={description} />
              </Box>
              <Box display='flex' mt={1.5}>
                <InfoElement label='Liczba stron' content={numPages} />
                <InfoElement label='Typ okładki' content={coverType} />
              </Box>
              <Box mt={1.5}>
                <InfoElement
                    label='Cena'
                    content={`${Number.parseFloat(price).toFixed(2)} zł`}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>


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
