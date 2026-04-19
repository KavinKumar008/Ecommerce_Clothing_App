"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export default function CuratedSelection() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <Container as="section" className="py-20">
        <div className="flex items-end justify-between mb-12">
          <div className="h-8 w-48 bg-zinc-100 animate-pulse rounded"></div>
          <div className="h-4 w-16 bg-zinc-100 animate-pulse rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/4] bg-zinc-50 animate-pulse rounded-sm"></div>
          ))}
        </div>
      </Container>
    );
  }

  if (isError || !products) {
    return null; // The global error interceptor in api.ts will handle the toast notification
  }

  // Show only the first 4 products for the curated section
  const curatedProducts = products.slice(0, 4);

  return (
    <Container as="section" className="py-20">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-2xl font-medium tracking-tight">
          Curated Selection
        </h2>
        <Link
          href="/products"
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors"
        >
          View all <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {curatedProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </Container>
  );
}
