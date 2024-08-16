import axios from 'axios';

import BASE_API_URL from './apiConfig';

const axiosAuthInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL, // backend base URL
});

export default axiosAuthInstance;