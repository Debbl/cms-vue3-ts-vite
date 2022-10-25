import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface DRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: <T = AxiosResponse>(response: T) => T;
  responseINterceptorCatch?: (error: any) => any;
}

export interface DAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: DRequestInterceptors;
  showLoading?: boolean;
}
