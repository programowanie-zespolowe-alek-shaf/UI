const prodBase = 'api';
const devBase = 'http://34.107.227.129/api';

const endpoint = (baseUrl) => {
  return {
    base: baseUrl,
    signIn: baseUrl + '/customers-ms/login',
    loginTest: baseUrl + '/customers-ms/test',
    customersUsers: baseUrl + '/customers-ms/users',
    cart: baseUrl + '/shoppingCarts/',
    addToCart: baseUrl + '/shoppingCarts/items',
    books: baseUrl + '/product-catalog-ms/books',
  };
};

export const api =
  process.env.NODE_ENV === 'production'
    ? endpoint(prodBase)
    : endpoint(devBase);
