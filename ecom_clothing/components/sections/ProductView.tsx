"use client";

import { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductDetailsInfo from "./ProductDetailsInfo";

interface ProductViewProps {
  thumbnails: string[];
  colorOptions: any[];
  sizeOptions: any[];
}

export default function ProductView({
  thumbnails,
  colorOptions,
  sizeOptions,
}: ProductViewProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(1); // M default

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <ProductGallery
        thumbnails={thumbnails}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
      <ProductDetailsInfo
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
