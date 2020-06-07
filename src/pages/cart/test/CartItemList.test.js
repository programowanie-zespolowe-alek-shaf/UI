import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CartItemList from '../components/CartItemList';
import CartItem from '../components/CartItem';
import { Button, CircularProgress } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('CartItemList test', () => {

  const basicProps = {
    items: [
      {
        book: {

        }
      },
      {
        book: {

        }
      }
    ],
    onDelete: jest.fn(),
    loading: false,
  };
  
  const getWrapper = (props) => shallow(<CartItemList {...props} />);

  it('should render loader when fetching data', () => {
    let wrapper = getWrapper({ ...basicProps, loading: true });
    expect(wrapper.find(CircularProgress).length).toEqual(1);
    expect(wrapper.find(CartItem).length).toEqual(0);
    wrapper = getWrapper(basicProps);
    expect(wrapper.find(CircularProgress).length).toEqual(0);
  });

  it('should call delete item', () => {
    let wrapper = getWrapper(basicProps);
    wrapper.find(CartItem).at(0).dive().find(Button).simulate('click');
    expect(basicProps.onDelete).toHaveBeenCalledWith('0');
  });
  
});
