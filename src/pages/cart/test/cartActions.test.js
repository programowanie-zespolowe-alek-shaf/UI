import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mock from 'xhr-mock';
import {
  getUsersCart,
  deleteFromCart,
  addItemToCart,
  requestCart,
  receiveCart,
  receiveCartError,
  requestAddToCart,
  addToCartSuccess,
  addToCartError,
  requestDeleteFromCart,
  deleteFromCartSuccess,
  deleteFromCartError
} from '../slice/cartSlice';
import { api } from '../../../global/connection/backend/endpoints';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



describe('namespaces actions', () => {
  beforeEach(() => mock.setup());
  afterEach(() => mock.teardown());

  const mockData = { items: [], coupon: 'mockCoupon', totalCost: 122.23 };
  const mockError = 'Internal server error';

  it('should dispatch proper actions when fetching cart items', () => {
    const expectedActions = [
      { type: requestAddToCart.type, payload: undefined },
      { type: receiveCart.type, payload: mockData },
    ];
    
    const mockResponse = [];

    mock.get(api.cart, (req, res) => {
      return res.status(200).body(mockResponse);
    });

    const store = mockStore({});
    const mockUserId = 0;

    // return store.dispatch(getUsersCart(0)).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions);
    // });
  });

  it('should dispatch proper actions when fetching cart items error', () => {
    const expectedActions = [
      { type: requestAddToCart.type, payload: undefined },
      { type: receiveCartError.type, payload: mockData },
    ];

    const mockResponse = [];

    mock.get(api.cart, (req, res) => {
      return res.status(500).body(mockResponse);
    });

    const store = mockStore({});
    const mockUserId = 0;

    // return store.dispatch(getUsersCart(0)).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions);
    // });
  });

});