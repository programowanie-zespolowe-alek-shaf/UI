import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

function CartItem(props) {
  return (
    <div>
      <img alt={props.imageURL} src={props.imageURL}/>
      <span>{props.title}</span>
      <span>{props.author}</span>
      <span>{props.amount}</span>
      <span>{props.price}</span>
      <Button onClick={() => props.onDelete(id)}>DELETE</Button>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  amount: PropTypes.string,
  price: PropTypes.number,
  imageURL: PropTypes.string,
  onDelete: PropTypes.func,
};

export default CartItem;