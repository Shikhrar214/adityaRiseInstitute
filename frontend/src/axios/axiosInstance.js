import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // No need to write full backend URL due to Vite proxy
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // If using authentication (cookies)
});

export default axiosInstance;
