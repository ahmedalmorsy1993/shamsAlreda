import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getBaseUrl } from './baseUrl';
import { getI18n } from 'react-i18next';
import { observer } from '@/utils/observer';
const axiosInstance: AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Accept-Language'] = getI18n().language
  return config
})
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { method } = response.config;
    if (method === 'post' || method === 'put' || method === 'delete') {
      if (response.data.message) {
        observer.fire('notify', {
          type: 'success',
          message: response.data.message,
        });
      }
    }
    return response;
  },
  (error: AxiosError) => {
    const data = error.response?.data as { message: string; errors: any };

    observer.fire('notify', {
      type: 'error',
      message: data?.message,
    });


    return Promise.reject(error);
  },
);

export default axiosInstance;
