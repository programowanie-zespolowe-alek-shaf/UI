import { CLEAR_CART,DELETE_ITEM_FROM_CART,ADD_ITEM_TO_CART, CART_ERROR } from '../actions/cartActions';


const initialState = {
  items: [],
  coupon: undefined,
  error: undefined,
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
  case ADD_ITEM_TO_CART:
    return { ...state, items: action.items };
  case DELETE_ITEM_FROM_CART:
    return { ...state, items: action.items };
  case CLEAR_CART:
    return { ...state, items: []};
  case CART_ERROR:
    return { ...state, error: action.error };
  default:
    return {
      ...state,
    };
  }
};

export default cartReducer;
