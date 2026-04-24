import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api, { AUTH_TOKEN_KEY, USER_DATA_KEY } from "@/lib/api";
import { type LoginInput, type SignupInput } from "@/lib/validations/auth.schema";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

// Query keys for auth
export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
};

/**
 * Login mutation hook
 */
export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (credentials: LoginInput) => {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    },
    onSuccess: (data) => {
      // Store token and user data
      localStorage.setItem(AUTH_TOKEN_KEY, data.token);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(data.user));

      // Invalidate user queries to refetch or update state immediately
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
    // Errors are currently caught globally by api.ts interceptor
  });
}

/**
 * Logout mutation hook
 */
export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(USER_DATA_KEY);
    },
    onSuccess: () => {
      // Clear all queries
      queryClient.clear();
      window.location.href = "/"; // redirect to home
    },
  });
}

/**
 * Get current user hook
 */
export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: (): User | null => {
      if (typeof window !== "undefined") {
        const userData = localStorage.getItem(USER_DATA_KEY);
        if (userData) {
          try {
            return JSON.parse(userData) as User;
          } catch {
            return null;
          }
        }
      }
      return null;
    },
    staleTime: Infinity, // User data doesn't change implicitly
  });
}

/**
 * Check if user is authenticated hook
 */
export function useIsAuthenticated() {
  return useQuery({
    queryKey: [...authKeys.all, "isAuthenticated"],
    queryFn: () => {
      if (typeof window !== "undefined") {
        return !!localStorage.getItem(AUTH_TOKEN_KEY);
      }
      return false;
    },
    staleTime: Infinity,
  });
}

/**
 * Signup mutation hook
 */
export function useSignup() {
  return useMutation({
    mutationFn: async (data: SignupInput) => {
      const response = await api.post("/auth/register", data);
      return response.data;
    },
  });
}
