import type { AxiosInstance } from 'axios';
import type { DAxiosRequestConfig, DRequestInterceptors } from './type';
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading';
import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';
import { ElLoading } from 'element-plus';

class DRequest {
  instance: AxiosInstance;
  interceptors?: DRequestInterceptors;
  loading?: LoadingInstance;
  showLoading: boolean; // 是否显示 loading
  constructor(config?: DAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config?.showLoading ?? false;
    // 所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (requestConfig: DAxiosRequestConfig) => {
        if (this.showLoading && requestConfig.showLoading) {
          this.loading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '加载中...',
            background: 'rgba(0, 0, 0, .5)',
          });
        }
        return requestConfig;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (response) => {
        this.loading?.close();
        return response.data;
      },
      (err) => {
        this.loading?.close();
        return err;
      }
    );
    // 实例的 interceptors
    this.instance.interceptors.request.use(
      config?.interceptors?.requestInterceptor,
      config?.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      config?.interceptors?.responseInterceptor,
      config?.interceptors?.responseINterceptorCatch
    );
  }
  request<T>(config: DAxiosRequestConfig): Promise<T> {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    let loading: LoadingInstance | undefined;
    if (!this.showLoading && config.showLoading) {
      loading = ElLoading.service({
        fullscreen: true,
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, .5)',
      });
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor<T>(res) as T;
          }
          loading?.close();
          resolve(res);
        })
        .catch((err) => {
          loading?.close();
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: DAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: DAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T>(config: DAxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
}

const dRequest = new DRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      const token = 'token--------';
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: token,
        };
      }
      return config;
    },
    responseInterceptor: (value) => {
      return value;
    },
  },
});

export default dRequest;
export { DRequest };
