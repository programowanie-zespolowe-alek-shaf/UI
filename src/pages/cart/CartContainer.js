import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';

const CartContainer = props => {
  const store = useSelector(state => state.cart, shallowEqual);
  const dispatch = useDispatch();
    
  return (
    <div>

    </div>
  );
};

CartContainer.propTypes = {
    
};

export default CartContainer;
