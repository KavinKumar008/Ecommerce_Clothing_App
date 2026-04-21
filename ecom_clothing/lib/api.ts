import { toast } from "sonner";
import axios from "axios";

// Create a centralized axios instance
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for generic error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message || "An unexpected error occurred";

    // Global Error Notifications using sonner
    if (status === 401 || status === 403) {
      toast.error("Session expired. Please log in again.");
    } else if (status === 404) {
      toast.error("The requested resource was not found. (404)");
    } else if (status === 400) {
      toast.error(message || "Invalid request.");
    } else if (status >= 500) {
      toast.error("Server error. Our team is working on it.");
    } else {
      toast.error(message);
    }

    console.error(`❌ API Error [${status}]:`, message);
    return Promise.reject(error);
  }
);

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

export default api;
