export const ADD_ITEM_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const CART_ERROR = 'CART_ERROR';

const addItemToCart = (items) => ({
  type: ADD_ITEM_TO_CART,
  items
});

const deleteItemFromCart = (items) => ({
  type: DELETE_ITEM_FROM_CART,
  items
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const cartError = (error) => ({
  type: CART_ERROR,
  error
});

export const addToCart = (item) => (dispatch, getState) => {
  const cartItems = Array.from(getState().cart.items);
  cartItems.push(item);
  dispatch(addItemToCart(cartItems));
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  const cartItems = Array.from(getState().cart.items);
  const filteredItems = cartItems.filter((it) => item.name !== it.name);
  dispatch(deleteItemFromCart(filteredItems));
};
