/// <reference types="vite/client" />
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

// _retry 속성 확장
declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

// API 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://localhost:3000',
  withCredentials: true, // 쿠키 자동 포함
});

let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// 요청 인터셉터
api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (import.meta.env.DEV) {
    console.log('[Request]', config.method?.toUpperCase(), config.url);
  }

  return config;
});

// 응답 인터셉터
/* refreshToken은 httpOnly 쿠키로 관리 */
api.interceptors.response.use(
  (res) => {
    if (import.meta.env.DEV) {
      console.log('[Response]', res.config.url, res.status);
    }
    return res;
  },
  async (err: AxiosError) => {
    const originalRequest = err.config as AxiosRequestConfig;
    const status = err.response?.status;
    const data: any = err.response?.data;

    // 401 처리 (accessToken 만료 → refresh 시도)
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          if (typeof token === 'string') {
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer ${token}`,
            };
          }
          return api(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        // 쿠키 기반 refresh 요청 (body 필요 없음)
        // api endpoint는 임의로 작성성
        const response = await axios.post(
          `${api.defaults.baseURL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = response.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);

        api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        processQueue(null, newAccessToken);

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };

        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);

        alert('세션이 만료되어 다시 로그인합니다.');
        localStorage.removeItem('accessToken');
        window.location.href = '/management/signin';

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // 403 처리
    if (status === 403) {
      alert('권한이 없습니다.');
    }

    if (data?.message) {
      alert(data.message);
    }

    return Promise.reject(err);
  }
);

export default api;