"use client";

import { useQuery } from "@tanstack/react-query";
import { productApi } from "@/lib/api";

export interface Product {
  _id: string;
  id: string; // the slug
  name: string;
  subtitle?: string;
  color?: string;
  price: string;
  originalPrice?: string;
  image: string;
  images?: string[];
  badge?: string;
  categories: string[];
  sizes: string[];
  colors?: string[];
  favorited?: boolean;
}

/**
 * Hook to fetch all products from the database.
 */
export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await productApi.getAll();
      return data.products; // Extract the array from the { status: true, products: [] } object
    },
  });
}

/**
 * Hook to fetch a single product by its ID/Slug.
 */
export function useProduct(id: string) {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await productApi.getById(id);
      return data.product; // Extract the object from the { status: true, product: {} } object
    },
    enabled: !!id, // Only run if id is provided
  });
}
