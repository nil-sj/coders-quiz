import axios from 'axios';

import BASE_API_URL from './apiConfig';

const axiosPublicInstance = axios.create({
  baseURL: BASE_API_URL, // backend base URL
});

export default axiosPublicInstance;