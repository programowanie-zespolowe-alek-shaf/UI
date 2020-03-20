const prodBase = 'api';
const devBase = 'http://localhost:8090/api';

const endpoint = (baseUrl) => {
  return {
    base: baseUrl,
    signIn: baseUrl + '/auth/signin',
    signUp: baseUrl + '/auth/signup',
    getUserInfo: baseUrl + '/user/me'
  };
};

export const api = process.env.NODE_ENV === 'production' ? endpoint(prodBase) : endpoint(devBase);
