"use client";

import { Heart, ShoppingBag, Package, RefreshCw, Ruler } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Accordion from "@/components/ui/Accordion";

import { Product } from "@/hooks/useProducts";

interface ColorOption {
  name: string;
  value: string;
}

interface SizeOption {
  label: string;
  available: boolean;
}

interface ProductDetailsInfoProps {
  product: Product;
  colorOptions: ColorOption[];
  selectedColor: number;
  setSelectedColor: (idx: number) => void;
  sizeOptions: SizeOption[];
  selectedSize: number;
  setSelectedSize: (idx: number) => void;
}

export default function ProductDetailsInfo({
  product,
  colorOptions,
  selectedColor,
  setSelectedColor,
  sizeOptions,
  selectedSize,
  setSelectedSize,
}: ProductDetailsInfoProps) {
  // Discount calculation
  const hasDiscount = !!product.originalPrice;
  const currentPrice = parseFloat(product.price.replace(/[^0-9.]/g, ""));
  const oldPrice = hasDiscount ? parseFloat(product.originalPrice.replace(/[^0-9.]/g, "")) : 0;
  const discountPercent = hasDiscount ? Math.round(((oldPrice - currentPrice) / oldPrice) * 100) : 0;

  return (
    <div className="lg:col-span-5 flex flex-col">
      {/* Header & Price */}
      <div className="mb-8">
        {product.badge && (
          <Badge variant="outline" className="mb-3">
            {product.badge}
          </Badge>
        )}
        <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
          {product.name}
        </h1>

        <div className="flex items-center gap-4 mb-5">
          <span className="text-2xl font-medium text-zinc-900">{product.price}</span>
          {hasDiscount && (
            <>
              <span className="text-lg text-zinc-400 line-through decoration-zinc-300">
                {product.originalPrice}
              </span>
              <Badge
                variant="warning"
                className="lowercase tracking-normal bg-red-50 text-red-700 border-red-100"
              >
                {discountPercent}% Off
              </Badge>
            </>
          )}
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-3">
          <div className="flex items-center text-zinc-900 text-sm gap-0.5">
            {[1, 2, 3, 4].map((star) => (
              <svg key={star} className="w-4 h-4 fill-zinc-900" viewBox="0 0 20 20">
                <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.95 5.51L10 13.49l-4.95 2.63.95-5.51-4-3.9 5.61-.87L10 1z" />
              </svg>
            ))}
            <svg className="w-4 h-4" viewBox="0 0 20 20">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#18181b" />
                  <stop offset="50%" stopColor="#e4e4e7" />
                </linearGradient>
              </defs>
              <path
                fill="url(#half)"
                d="M10 1l2.39 4.84L18 6.71l-4 3.9.95 5.51L10 13.49l-4.95 2.63.95-5.51-4-3.9 5.61-.87L10 1z"
              />
            </svg>
          </div>
          <span className="text-xs text-zinc-500 hover:text-zinc-900 cursor-pointer underline underline-offset-4 transition-colors">
            4.8 (124 Reviews)
          </span>
        </div>
      </div>

      <hr className="border-zinc-100 mb-8" />

      {/* Color Selector */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-zinc-500">
            Color:{" "}
            <span className="font-medium text-zinc-900">
              {colorOptions[selectedColor].name}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          {colorOptions.map((color, idx) => (
            <label key={idx} className="cursor-pointer relative group">
              <input
                type="radio"
                name="color"
                className="peer sr-only"
                checked={selectedColor === idx}
                onChange={() => setSelectedColor(idx)}
              />
              <span
                className={`block w-9 h-9 rounded-full ${color.value} border border-zinc-200 peer-checked:ring-1 peer-checked:ring-offset-2 peer-checked:ring-zinc-900 transition-all group-hover:scale-105`}
              ></span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Selector */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-zinc-500">Size</span>
          <Button
            variant="ghost"
            className="text-xs h-auto p-0 gap-1 hover:bg-transparent"
          >
            <Ruler className="w-3.5 h-3.5" />
            <span className="underline underline-offset-4 decoration-zinc-300 group-hover:decoration-zinc-900">
              Size Guide
            </span>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {sizeOptions.map((size, idx) => (
            <label
              key={size.label}
              className={`cursor-pointer ${!size.available ? "opacity-50" : ""}`}
            >
              <input
                type="radio"
                name="size"
                className="peer sr-only"
                checked={selectedSize === idx}
                onChange={() => setSelectedSize(idx)}
                disabled={!size.available}
              />
              {size.available ? (
                <span className="block w-full text-center py-3 text-sm border border-zinc-200 rounded-sm text-zinc-600 hover:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-colors">
                  {size.label}
                </span>
              ) : (
                <span className="block w-full text-center py-3 text-sm border border-zinc-100 bg-zinc-50 rounded-sm text-zinc-400 relative overflow-hidden">
                  {size.label}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-zinc-200 rotate-[-25deg]"></div>
                  </span>
                </span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-10">
        <Button className="flex-grow py-4 gap-2">
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </Button>
        <Button variant="outline" size="icon" className="w-14 h-auto">
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* Value Props */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs text-zinc-600 mb-10 bg-zinc-50 p-4 rounded-sm border border-zinc-100">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-zinc-400" />
          <span>Free worldwide shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-zinc-400" />
          <span>30-day hassle free returns</span>
        </div>
      </div>

      {/* Accordions */}
      <div className="border-t border-zinc-200 flex-grow">
        <Accordion
          title="Description"
          open
          border={false}
          className="border-b border-zinc-200 mb-0 py-5 pt-1"
        >
          <div className="text-sm text-zinc-500 pb-2 leading-relaxed">
            <p className="mb-4">
              A study in reduction. The Structure Wool Coat is constructed from a
              premium heavyweight wool blend, designed with a relaxed,
              dropped-shoulder silhouette that layers effortlessly over
              knitwear.
            </p>
            <p>
              Featuring minimal concealed fastenings, two welt pockets, and a clean
              lapel, this piece strips away the unnecessary to focus purely on
              form and drape. Fully lined for comfort and longevity.
            </p>
          </div>
        </Accordion>

        <Accordion
          title="Details & Fit"
          border={false}
          className="border-b border-zinc-200 mb-0 py-5"
        >
          <div className="text-sm text-zinc-500 pb-2">
            <ul className="space-y-2 list-none">
              {[
                "80% Wool, 20% Polyamide exterior.",
                "100% Cupro lining for smooth layering.",
                "Relaxed, oversized fit. We recommend sizing down if you prefer a standard fit.",
                'Model is 6\'1" (185cm) and wears a size M.',
                "Dry clean only.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-zinc-300 mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Accordion>

        <Accordion
          title="Shipping & Returns"
          border={false}
          className="border-b border-zinc-200 mb-0 py-5"
        >
          <div className="text-sm text-zinc-500 pb-2 leading-relaxed">
            <p className="mb-3">
              Standard delivery takes 3-5 working days. Express delivery (1-2
              working days) is available at checkout.
            </p>
            <p>
              If you are not entirely satisfied with your purchase, you have 30
              days to return it in its original, unworn condition for a full
              refund or exchange. A pre-paid return label is included in every
              order.
            </p>
          </div>
        </Accordion>
      </div>
    </div>
  );
}
