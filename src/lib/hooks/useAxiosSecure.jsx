import axios from "axios";
import useBackendUri from "./useBackendUri";

export default function useAxiosSecure() {
  const backendURI = useBackendUri();
  const axiosSecure = axios.create({
    baseURL: backendURI,
  });

  axiosSecure.interceptors.request.use(
    (config) => {
      const userToken = localStorage.getItem("userToken");
      const role = localStorage.getItem("role");

      if (userToken) {
        config.headers.Authorization = `Bearer ${userToken}`;
      }

      if (role) {
        config.headers["X-User-Role"] = role;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosSecure;
}
