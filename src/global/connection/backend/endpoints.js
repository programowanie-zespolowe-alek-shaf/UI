const prodBase = '/api';
const devBase = 'http://34.107.227.129/api';

const endpoint = (baseUrl) => {
  return {
    base: baseUrl,
    signIn: baseUrl + '/customers-ms/login',
    loginTest: baseUrl + '/customers-ms/test',
    customersUsers: baseUrl + '/customers-ms/users',
    shoppingCards: baseUrl + '/shopping-card-ms/shoppingCards',
    books: baseUrl + '/product-catalog-ms/books',
    categories: baseUrl + '/product-catalog-ms/categories',
    orders: baseUrl + '/order-management-ms/orders',
  };
};

export const api =
  process.env.NODE_ENV === 'production'
    ? endpoint(prodBase)
    : endpoint(devBase);
