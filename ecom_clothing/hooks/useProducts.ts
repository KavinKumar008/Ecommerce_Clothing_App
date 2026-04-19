"use client";

import { useQuery } from "@tanstack/react-query";
import { productApi } from "@/lib/api";

/**
 * Hook to fetch all products from the database.
 */
export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await productApi.getAll();
      return data;
    },
  });
}

/**
 * Hook to fetch a single product by its ID/Slug.
 */
export function useProduct(id: string) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await productApi.getById(id);
      return data;
    },
    enabled: !!id, // Only run if id is provided
  });
}
