// singleton class
import axiosInstance from '../config/axios';

interface HttpType {
  url: string;
  data?: { [key: string]: any }
  [key: string]: any;
}

class Http {
  static instance: {};

  constructor() {
    if (Http.instance instanceof Http) {
      return Http.instance;
    }
    Http.instance = Object.freeze(this);
  }

  get({ url, query }: HttpType) {
    return axiosInstance({
      url,
      params: { ...query },
      method: 'get',
    });
  }
  post({ url, data }: HttpType) {
    return axiosInstance({
      url,
      data,
      method: 'post',
    });
  }
}
export const $http = new Http();
