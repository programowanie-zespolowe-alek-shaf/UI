import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import PropTypes from "prop-types";

const CartContainer = (props) => {
  const store = useSelector((state) => state.cart, shallowEqual);
  const dispatch = useDispatch();

  return <h3>Cart Container</h3>;
};

CartContainer.propTypes = {};

export default CartContainer;
