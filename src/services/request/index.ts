import axios from 'axios';
import { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { BASE_URL, TIMEOUT } from './config';

class DRequest {
  instance: AxiosInstance;
  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
    // interceptors
    this.instance.interceptors.request.use((requestConfig) => {
      return requestConfig;
    });
    this.instance.interceptors.response.use((response) => {
      return response.data;
    });
  }
  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'GET' });
  }
  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'POST' });
  }
}

const dRequest = new DRequest({ baseURL: BASE_URL, timeout: TIMEOUT });

export default dRequest;
export { DRequest };
