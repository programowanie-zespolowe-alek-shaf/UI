import { ACCESS_TOKEN } from '../../constants/authentication';
import axios from 'axios';

const request = (body) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const token = localStorage.getItem(ACCESS_TOKEN);
  let options = { headers: { Authorization: `Bearer ${token}` } };
  options = { ...options, ...body };

  return axios(options);
};

export default request;
