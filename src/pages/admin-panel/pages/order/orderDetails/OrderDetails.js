import React from 'react';
import useFeaturedStyles from "../../../../main/components/featured/FeaturedStyles";
import styles from "./styles/OrderDetails.scss";
import {Box, Button, Card, CardContent, Typography} from "@material-ui/core";
import {bool, PropTypes as pt} from "prop-types";
import BookDetails from "../../book/pages/bookDetails/BookDetails";
import useBookDetailsStyles from "../../../../book/components/BookDetailsStyles";

const OrderDetails = ({order}) => {
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
      <Box display='flex' justifyContent='center' alignSelf='center' mt={1}>
        <Card variant='outlined' classes={{ root: classes.root }}>

          <CardContent classes={{ root: classes.content }}>


            <Box display='flex' mt={1.5}>
              <InfoElement label='Id koszyka' content={order.shoppingCardId} />
              <InfoElement label='Status' content={order.status} />
            </Box>
            <Box mt={1}>
              <InfoElement label='Adres' content={order.address} />
            </Box>
            <Box display='flex' mt={1.5}>
              <InfoElement label='Data dostawy' content={order.shipDate} />
            </Box>
            <Box display='flex' mt={1.5}>
              <InfoElement label='Adres' content={order.address} />
            </Box>
            <Box mt={1.5}>
            </Box>
          </CardContent>
        </Card>
      </Box>
  );
};

// OrderDetails.propTypes = {
//   loading: bool,
//   error
// };


export default OrderDetails;
