import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

function CartItemList(props) {

  const items = props.items.map((item) => (
    <CartItem key={item.id} {...item} onDelete={() => props.onDelete(item.id)} />
  ));
  
  return (
    <div>
      {items}
    </div>
  );
}

CartItemList.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
};

export default CartItemList;