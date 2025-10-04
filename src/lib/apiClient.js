// src/lib/apiClient.js
import axios from "axios";
import { useAuthStore } from "../../store/authStore";
import { toast } from "react-toastify";

const api = axios.create({
  //baseURL: "http://localhost:3000/api/v1",
  baseURL: "https://embozi-backend.onrender.com/api/v1",
  headers: { "Content-Type": "application/json" },
});

// 🔹 Request interceptor: attach token
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response interceptor: auto-logout on 401
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().clearAuth();
      toast.error(error?.response?.data?.message);
      return Promise.reject(new Error("Unauthorized. Please log in again."));
    }
    const message = error.response?.data?.message || "API request failed";
    return Promise.reject(new Error(message));
  }
);

// 🔹 CRUD helpers
export const apiClient = {
  get: (url, config = {}) => api.get(url, config),
  post: (url, data, config = {}) => api.post(url, data, config),
  put: (url, data, config = {}) => api.put(url, data, config),
  patch: (url, data, config = {}) => api.patch(url, data, config),
  delete: (url, config = {}) => api.delete(url, config),
};
