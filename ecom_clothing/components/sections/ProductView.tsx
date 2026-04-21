"use client";

import { useProduct } from "@/hooks/useProducts";
import ProductGallery from "./ProductGallery";
import ProductDetailsInfo from "./ProductDetailsInfo";
import { useState } from "react";

interface ProductViewProps {
  productId: string;
}

export default function ProductView({ productId }: ProductViewProps) {
  const { data: product, isLoading, isError } = useProduct(productId);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(1); // M default

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 animate-pulse">
        <div className="lg:col-span-7 aspect-[4/5] bg-zinc-50 rounded-sm"></div>
        <div className="lg:col-span-5 space-y-6">
          <div className="h-4 w-24 bg-zinc-100 rounded"></div>
          <div className="h-10 w-64 bg-zinc-100 rounded"></div>
          <div className="h-8 w-32 bg-zinc-100 rounded"></div>
          <div className="space-y-4 pt-8">
            <div className="h-4 w-full bg-zinc-50 rounded"></div>
            <div className="h-4 w-full bg-zinc-50 rounded"></div>
            <div className="h-4 w-2/3 bg-zinc-50 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) return null;

  // Map DB data to view format
  const thumbnails = product.images && product.images.length > 0
    ? product.images
    : [product.image];
  const colorOptions = product.colors && product.colors.length > 0
    ? product.colors.map((c: string) => ({
      name: product.color || "Default",
      value: c,
    }))
    : [{ name: product.color || "Default", value: "bg-zinc-900" }];

  const sizeOptions = product.sizes?.map((s: string) => ({
    label: s,
    available: true
  })) || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <ProductGallery
        thumbnails={thumbnails}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
      <ProductDetailsInfo
        product={product}
        colorOptions={colorOptions}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        sizeOptions={sizeOptions}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </div>
  );
}
