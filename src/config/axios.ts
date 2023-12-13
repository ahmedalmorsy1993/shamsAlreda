import axios, { AxiosInstance } from 'axios';
import { getBaseUrl } from './baseUrl';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});


export default axiosInstance;
