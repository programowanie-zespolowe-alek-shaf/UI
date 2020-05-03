const prodBase = 'api';
const devBase = 'http://localhost:8080/api';

const endpoint = (baseUrl) => {
  return {
    base: baseUrl,
    signIn: baseUrl + '/login-ms/login',
    loginTest: baseUrl + '/login-ms/test',
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
