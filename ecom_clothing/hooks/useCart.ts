"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cartApi } from "@/lib/api";
import { toast } from "sonner";
import { Product } from "./useProducts";

// The cart item as returned from the API
export interface CartItem {
  _id: string; // The cart item's ID in the cart.items array
  product: Product; // Populated product document
  color: string;
  size: string;
  quantity: number;
}

export interface Cart {
  _id: string;
  user: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
}

export function useCartQuery(isAuthenticated: boolean) {
  return useQuery<{ status: boolean; cart: Cart | null }>({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await cartApi.getCart();
      return data;
    },
    enabled: isAuthenticated, // Only fetch if the user is logged in
  });
}

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { productId: string; color: string; size: string; quantity?: number }) => {
      const { data } = await cartApi.addToCart(payload);
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
      toast.success("Item added to bag");
    },
  });
}

export function useUpdateCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { itemId: string; quantity: number }) => {
      const { data } = await cartApi.updateItemQuantity(payload.itemId, payload.quantity);
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
    },
  });
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (itemId: string) => {
      const { data } = await cartApi.removeItem(itemId);
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
      toast.success("Item removed");
    },
  });
}
