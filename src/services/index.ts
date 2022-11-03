import { BASE_URL, TIMEOUT } from "./request/config";
import Requester from "./request/requester";
import localCache from "~/utils/localCache";

const requester = new Requester({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token");
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    responseInterceptor: (value) => {
      return value;
    },
  },
});

export default requester;
