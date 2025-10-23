import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../helpers/user.helper";
import { BASE_URL } from "./endpoints";

const ApiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

ApiInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.withCredentials = false;
    return config;
  },
  (error) => {
    toast.error("Request Failed");
    return Promise.reject(error);
  },
);

ApiInstance.interceptors.response.use(
  (response) => {
    if (!response.data) {
      toast.error("No data received");
      return Promise.reject(new Error("No data received"));
    }
    return response;
  },
  (error) => {
    !error.response
      ? toast.error("Network Error: Please check your connection")
      : toast.error("Something went wrong");
    return Promise.reject(error);
  },
);

export default ApiInstance;
