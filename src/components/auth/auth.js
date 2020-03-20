export const ACCESS_TOKEN = 'accessToken';

const auth = {
  logout: function() {
    localStorage.removeItem(ACCESS_TOKEN);
  },
  login: function(token) {
    localStorage.setItem(ACCESS_TOKEN, token);
  },
};

export default auth;
