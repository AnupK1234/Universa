// import Axios, {
//   AxiosError,
//   AxiosRequestConfig,
//   isAxiosError,
//   InternalAxiosRequestConfig,
// } from "axios";
// // import {
// //   getAccessToken,
// //   refreshAccessToken,
// //   clearAuthData,
// // } from "../auth/auth";

// export const AXIOS_INSTANCE = Axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
// });

// export const initApi = () => {
//   // AXIOS_INSTANCE.interceptors.request.use(
//   //   async (config: InternalAxiosRequestConfig) => {
//   //     const token = await getAccessToken();
//   //     if (token) {
//   //       config.headers["Authorization"] = `Bearer ${token}`;
//   //     }
//   //     return config;
//   //   },
//   //   (error) => Promise.reject(error)
//   // );

//   AXIOS_INSTANCE.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
//       if (error.response?.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         try {
//           const newToken = await refreshAccessToken();
//           if (newToken) {
//             originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
//             return AXIOS_INSTANCE(originalRequest);
//           }
//         } catch (refreshError) {
//           console.error("Token refresh failed:", refreshError);
//           clearAuthData();
//           window.dispatchEvent(new CustomEvent("auth:logout"));
//         }
//       }
//       return Promise.reject(error);
//     },
//   );
// };

// export const customInstance = <T>(
//   config: AxiosRequestConfig,
//   options?: AxiosRequestConfig,
// ): Promise<T> => {
//   const controller = new AbortController();
//   const promise = AXIOS_INSTANCE({
//     ...config,
//     ...options,
//     signal: controller.signal,
//   })
//     .then(({ data }) => data)
//     .catch((e) => {
//       if (isAxiosError(e)) {
//         throw e.response?.data;
//       }
//       throw e;
//     });

//   // @ts-expect-error TS2339: Property 'cancel' does not exist on type 'Promise<T>'
//   promise.cancel = () => {
//     controller.abort("Query was cancelled");
//   };

//   return promise;
// };

// export type ErrorType<Error> = AxiosError<Error>;
// export type BodyType<BodyData> = BodyData;

