import axios, {  AxiosResponse, AxiosError } from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError<any>) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error: AxiosError<any>) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default API;
