"use client";

import { useState, useMemo } from "react";
import { ChevronRight } from "lucide-react";
import ProductFilters from "./ProductFilters";
import ProductListGrid from "./ProductListGrid";
import { useProducts } from "@/hooks/useProducts";

interface ProductListingProps {
  categories: string[];
  sizes: string[];
  colors: string[];
}

export default function ProductListing({
  categories,
  sizes,
  colors,
}: ProductListingProps) {
  // 1. Fetch live products from database
  const { data: dbProducts, isLoading, isError } = useProducts();

  // 2. Filter & Sort States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All Outerwear",
  ]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(["S"]);
  const [selectedColors, setSelectedColors] = useState<number[]>([2]);

  // 3. Filtering Logic (memoized for performance)
  const filteredProducts = useMemo(() => {
    if (!dbProducts) return [];

    return dbProducts.filter((product: any) => {
      // Category Filter (Simplified for demo)
      const matchesCategory = selectedCategories.includes("All Outerwear") || 
        selectedCategories.some(cat => product.categories?.includes(cat));
      
      // We can add more complex filtering for Sizes/Colors here if fields exist in DB
      
      return matchesCategory;
    });
  }, [dbProducts, selectedCategories]);

  // 4. Toggle Handlers
  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (idx: number) => {
    setSelectedColors((prev) =>
      prev.includes(idx) ? prev.filter((c) => c !== idx) : [...prev, idx]
    );
  };

  if (isLoading) {
    return (
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 animate-pulse">
        <div className="w-64 h-96 bg-zinc-50 rounded-sm"></div>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="aspect-[3/4] bg-zinc-50 rounded-sm"></div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) return null;

  return (
    <>
      {/* Header & Count (Moved here for better reactivity) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-3">
            Outerwear
          </h1>
          <p className="text-sm text-zinc-500 max-w-md leading-relaxed">
            Structured coats, lightweight jackets, and versatile layers
            designed for modularity and seasonal transition.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-zinc-600">
          <span className="hidden md:inline-block">
            {filteredProducts.length} Products
          </span>
          <div className="relative group cursor-pointer border border-zinc-200 rounded-sm px-4 py-2 hover:border-zinc-300 transition-colors bg-white flex items-center gap-2">
            <span>
              Sort by: <span className="text-zinc-900 font-medium">Newest</span>
            </span>
            <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
        </div>
      </div>

      <hr className="border-zinc-100 mb-10" />

      <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
        <ProductFilters
          categories={categories}
          sizes={sizes}
          colors={colors}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          selectedSizes={selectedSizes}
          toggleSize={toggleSize}
          selectedColors={selectedColors}
          toggleColor={toggleColor}
        />
        <ProductListGrid products={filteredProducts} />
      </div>
    </>
  );
}
