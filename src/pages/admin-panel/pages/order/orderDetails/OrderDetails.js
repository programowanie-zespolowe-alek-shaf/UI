import React from 'react';
import useFeaturedStyles from "../../../../main/components/featured/FeaturedStyles";
import styles from "./styles/OrderDetails.scss";
import {Button} from "@material-ui/core";
import {bool, PropTypes as pt} from "prop-types";

const OrderDetails = ({order}) => {
  const classes = useFeaturedStyles();
  return (
      <div className={styles.container}>
        <div className={styles.itemDetails}>
          <section className={styles.info}>
            <header className={styles.title}>Szczegóły zamówienia</header>
            <span>Id koszyka: {order.shoppingCardId}</span>
            <span>Data dostawy: {order.shipDate}</span>
            <span>Status: {order.status}</span>
          </section>
        </div>
      </div>
  );
};

OrderDetails.propTypes = {

};


export default OrderDetails;
