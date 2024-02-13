// singleton class
import axiosInstance from '../config/axios';

type TUrl = { url: string }
type TGet = TUrl & { query?: { [key: string]: any } }
type TPost = TUrl & { data: { [key: string]: any } }

interface IHttp {
  get({ url, query }: TGet): Promise<unknown>
  post(arg: TPost): Promise<unknown>
}

class Http implements IHttp {
  private static instance: Http | null = null;


  static getInstance(): Http {
    if (!Http.instance) {
      Http.instance = new Http();
    }
    return Http.instance;
  }

  get({ url, query }: TGet): Promise<unknown> {
    return axiosInstance({
      url,
      params: { ...query },
      method: 'get',
    });
  }

  post({ url, data }: TPost): Promise<unknown> {
    return axiosInstance({
      url,
      data,
      method: 'post',
    });
  }
}

export const $http = Http.getInstance();
