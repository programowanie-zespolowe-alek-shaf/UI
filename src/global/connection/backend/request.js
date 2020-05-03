import { ACCESS_TOKEN } from '../../constants/authentication';
import axios from 'axios';

const request = (body) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const headers = { 'Authorization': token, 'Content-Type': 'application/json' };

  const options = { headers, ...body };
  console.log(options);

  return axios(options);
};

export default request;
