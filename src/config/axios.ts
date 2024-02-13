import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getBaseUrl } from './baseUrl';
import { getI18n } from 'react-i18next';
const axiosInstance: AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Accept-Language'] = getI18n().language
  return config
})


export default axiosInstance;
