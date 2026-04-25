import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,  // this one line tells axios to send cookies automatically
});

export default api;