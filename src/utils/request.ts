import axiosRetry, { IAxiosRetryConfig } from "axios-retry";
import axios, {
  AxiosError,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const retryConfig = {
  retries: 3,
  retryCondition: (error: AxiosError) => {
    // 请求超时
    if (
      error.code === "ECONNABORTED" ||
      error.message.includes("Network Error")
    ) {
      return true;
    }
    if (
      error.response &&
      error.response.status < 599 &&
      error.response.status >= 500
    ) {
      return true;
    }
    return false;
  },
  retryDelay: () => 1000,
  shouldResetTimeout: true,
};

const request = axios.create({
  baseURL: "https://stylespace.revery.ai",
  timeout: 60000,
});

axiosRetry(request, retryConfig);

type RequestInterceptorsType = (
  config: InternalAxiosRequestConfig
) => InternalAxiosRequestConfig;
const requestInterceptors: RequestInterceptorsType = (config) => {
  return { ...config };
};

const requestError = (error: any) => {
  return Promise.reject(error);
};

// 请求拦截器
request.interceptors.request.use(requestInterceptors, requestError);

// 响应拦截器
// TODO 响应拦截器需要再看一下
const interceptorsResponse = {
  normal: (res: AxiosResponse) => {
    try {
      return res.request && res.data && res.headers ? res.data : res;
    } catch {
      throw new Error("Network Error");
    }
  },
  error: (error: any) => {
    console.log(error.response, "interceptorsResponse=>error.response");

    return Promise.reject(error);
  },
};

request.interceptors.response.use(
  interceptorsResponse.normal,
  interceptorsResponse.error
);

export default request;

export function get<T = any>(
  url: string,
  params?: any,
  axiosRetryConfig?: IAxiosRetryConfig
) {
  return request.get<T, T>(url, {
    params,
    "axios-retry": axiosRetryConfig,
  });
}

export function post<T = any>(
  url: string,
  params?: any,
  axiosRetryConfig?: IAxiosRetryConfig
) {
  return request.post<T, T>(url, {
    ...params,
    "axios-retry": axiosRetryConfig,
  });
}

export function put<T = any>(
  url: string,
  params?: any,
  axiosRetryConfig?: IAxiosRetryConfig
) {
  return request.put<T, T>(url, {
    ...params,
    "axios-retry": axiosRetryConfig,
  });
}

export function patch<T = any>(
  url: string,
  params?: any,
  axiosRetryConfig?: IAxiosRetryConfig
) {
  return request.patch<T, T>(url, {
    ...params,
    "axios-retry": axiosRetryConfig,
  });
}
