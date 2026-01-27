import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
});

let activeRequests = 0;

axiosInstance.interceptors.request.use((config) => {
  activeRequests++;
  document.body.classList.add("loading");
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    activeRequests--;
    if (activeRequests === 0) {
      document.body.classList.remove("loading");
    }
    return response;
  },
  (error) => {
    activeRequests--;
    document.body.classList.remove("loading");
    return Promise.reject(error);
  },
);

export default axiosInstance;
