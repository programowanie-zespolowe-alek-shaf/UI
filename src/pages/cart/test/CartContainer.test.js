import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import CartContainer from '../CartContainer';
import CartItemList from '../components/CartItemList';
import CartSummary from '../components/CartSummary';

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const getActionTypes = (actions) => actions.map(action => action.type);

describe.skip('CartContainer test', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    //creates the store with any initial state or middleware needed
    store = mockStore({ cart: { items: [], loading: false, coupon: undefined, totalCost: 0, error: undefined } });
    wrapper = mount(<Provider store={store}><CartContainer  /></Provider>);
  });

  it.skip('should render CartItemList and CartItemSummary', () => {
    expect(wrapper.find(CartItemList).length).toEqual(1);
    expect(wrapper.find(CartSummary).length).toEqual(1);
  });

  it.skip('should dispatch fetchItems at start', () => {
    const expectedActions = ['cart/requestCart', 'cart/receiveCart'];
    expect(getActionTypes(store.getActions())).toEqual(expectedActions);
  });

  it.skip('should call onDelete action', () => {
    const expectedActions = [
      'cart/requestCart',
      'cart/receiveCart',
      'cart/requestDeleteFromCart',
      'cart/deleteFromCartSuccess'
    ];
    wrapper.find(CartItemList).prop('onDelete')();
    expect(getActionTypes(store.getActions())).toEqual(expectedActions);
  });
});
