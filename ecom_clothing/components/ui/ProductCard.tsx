"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Heart } from "lucide-react";
import Badge from "./Badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  subtitle?: string;
  color?: string;
  badge?: string;
  originalPrice?: string;
  favorited?: boolean;
  onQuickAdd?: () => void;
  onFavorite?: () => void;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  subtitle,
  color,
  badge,
  originalPrice,
  favorited,
  onQuickAdd,
  onFavorite,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col gap-3">
      <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden rounded-sm">
        <Link href={`/products/${id}`} className="block w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>

        {/* Overlay Actions */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button
            onClick={onQuickAdd}
            className="w-full bg-white/90 backdrop-blur text-zinc-900 py-3 text-xs font-medium shadow-sm hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 rounded-sm"
          >
            <Plus className="w-3 h-3" /> Quick Add
          </button>
        </div>

        <button
          onClick={onFavorite}
          className="absolute top-3 right-3 p-1.5 text-zinc-400 hover:text-zinc-900 bg-white/0 hover:bg-white/90 rounded-full backdrop-blur-sm transition-all z-10"
        >
          <Heart className={`w-5 h-5 ${favorited ? "fill-zinc-900 text-zinc-900" : ""}`} />
        </button>

        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badge === "New" ? "brand" : "outline"}>
              {badge}
            </Badge>
          </div>
        )}
      </div>

      <div className="flex justify-between items-start gap-2">
        <div className="flex flex-col gap-1">
          <Link
            href={`/products/${id}`}
            className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors"
          >
            {name}
          </Link>
          {(subtitle || color) && (
            <span className="text-xs text-zinc-500">
              {subtitle || color}
            </span>
          )}
        </div>

        <div className="flex flex-col items-end">
          <span className={`text-sm font-medium ${originalPrice ? "text-red-700" : "text-zinc-900"}`}>
            {price}
          </span>
          {originalPrice && (
            <span className="text-xs text-zinc-400 line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
