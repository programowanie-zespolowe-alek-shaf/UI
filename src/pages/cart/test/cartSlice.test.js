import reducer, {
  requestCart,
  receiveCart,
  receiveCartError,
  requestAddToCart,
  addToCartError,
  addToCartSuccess,
  deleteFromCartSuccess,
  deleteFromCartError,
  requestDeleteFromCart,
  initialState,
} from '../slice/cartSlice';

describe('cart slice', () => {
  it('should return the initial state on first run', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle requestCart', () => {
    expect(reducer(initialState, requestCart()))
      .toEqual({ ...initialState, loading: true });
  });

  it('should handle receiveCart', () => {
    const mockData = { items: [], coupon: 'mockCoupon', totalCost: 122.23 };
    expect(reducer(initialState, receiveCart(mockData)))
      .toEqual({ ...initialState, ...mockData, loading: false });
  });

  it('should handle receiveCartError', () => {
    const mockData = 'mockError';
    expect(reducer(initialState, receiveCartError(mockData)))
      .toEqual({ ...initialState, loading: false, error: mockData });
  });

  it('should handle receiveCartError', () => {
    const mockData = 'mockError';
    expect(reducer(initialState, receiveCartError(mockData)))
      .toEqual({ ...initialState, loading: false, error: mockData });
  });

  it('should handle requestAddToCart', () => {
    expect(reducer(initialState, requestAddToCart()))
      .toEqual({ ...initialState, loading: true, error: undefined });
  });

  it('should handle addToCartSuccess', () => {
    const mockData = { items: [], coupon: 'mockCoupon', totalCost: 122.23 };
    expect(reducer(initialState, addToCartSuccess(mockData)))
      .toEqual({ ...initialState, ...mockData, loading: false });
  });

  it('should handle addToCartError', () => {
    const mockData = 'mockError';
    expect(reducer(initialState, addToCartError(mockData)))
      .toEqual({ ...initialState, loading: false, error: mockData });
  });

  it('should handle requestDeleteFromCart', () => {
    expect(reducer(initialState, requestDeleteFromCart()))
      .toEqual({ ...initialState, loading: true, error: undefined });
  });

  it('should handle deleteFromCartSuccess', () => {
    const mockData = { items: [], coupon: 'mockCoupon', totalCost: 122.23 };
    expect(reducer(initialState, deleteFromCartSuccess(mockData)))
      .toEqual({ ...initialState, ...mockData, loading: false });
  });

  it('should handle deleteFromCartError', () => {
    const mockData = 'mockError';
    expect(reducer(initialState, deleteFromCartError(mockData)))
      .toEqual({ ...initialState, loading: false, error: mockData });
  });
});