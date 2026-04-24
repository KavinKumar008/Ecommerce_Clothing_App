import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { toast } from "sonner";

// Storage keys
export const AUTH_TOKEN_KEY = "auth_token";
export const USER_DATA_KEY = "user_data";

// Create axios instance
const api = axios.create({
  baseURL: "/api", // Using internal Next.js API routes
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 second timeout
});

// Request interceptor - attach auth token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    // Network error
    if (!error.response) {
      toast.error("Network error. Please check your connection.");
      return Promise.reject(error);
    }

    const { status, data } = error.response;

    // Extract error message
    const errorMessage =
      data?.message || data?.detail || data?.error || "An error occurred";

    switch (status) {
      case 401:
        // Unauthorized - clear auth (but don't redirect here to avoid infinite loops)
        if (typeof window !== "undefined") {
          localStorage.removeItem(AUTH_TOKEN_KEY);
          localStorage.removeItem(USER_DATA_KEY);
        }
        toast.error(errorMessage || "Session expired. Please login again.");
        break;

      case 400:
        toast.error(errorMessage);
        break;

      case 403:
        toast.error("Access denied.");
        break;

      case 404:
        toast.error("Resource not found.");
        break;

      case 500:
      case 502:
      case 503:
        toast.error("Server error. Please try again later.");
        break;

      default:
        toast.error(errorMessage);
    }

    return Promise.reject(error);
  }
);

export default api;

/**
 * Product API Services
 */
export const productApi = {
  getAll: (params?: any) => api.get("/products", { params }),
  getById: (id: string) => api.get(`/products/${id}`),
  seed: () => api.get("/seed"),
};

/**
 * Content API Services (Brand Story, Hero, etc.)
 */
export const contentApi = {
  getBrandStory: () => api.get("/content/brand-story"),
};

/**
 * Account/Order API Services (Future)
 */
export const accountApi = {
  getOrders: () => api.get("/account/orders"),
};

/**
 * Cart API Services
 */
export const cartApi = {
  getCart: () => api.get("/cart"),
  addToCart: (data: { productId: string; color: string; size: string; quantity?: number }) => 
    api.post("/cart", data),
  updateItemQuantity: (itemId: string, quantity: number) => 
    api.put("/cart", { itemId, quantity }),
  removeItem: (itemId: string) => 
    api.delete(`/cart?itemId=${itemId}`),
};
