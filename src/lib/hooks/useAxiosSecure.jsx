import axios from "axios";
import { useMemo } from "react";
import useBackendUri from "./useBackendUri";

export default function useAxiosSecure() {
  const backendURI = useBackendUri();
  const axiosSecure = useMemo(() => {
    const instance = axios.create({
      baseURL: backendURI,
    });

    instance.interceptors.request.use(
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
      (error) => Promise.reject(error)
    );

    return instance;
  }, [backendURI]);

  return axiosSecure;
}
