"use client";

import Image from "next/image";
import { Maximize } from "lucide-react";
import Button from "@/components/ui/Button";

interface ProductGalleryProps {
  thumbnails: string[];
  activeImage: number;
  setActiveImage: (idx: number) => void;
}

export default function ProductGallery({
  thumbnails,
  activeImage,
  setActiveImage,
}: ProductGalleryProps) {
  return (
    <div className="lg:col-span-7 flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 lg:h-[80vh]">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto no-scrollbar lg:w-24 flex-shrink-0">
        {thumbnails.map((thumb, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`w-20 h-24 lg:w-full lg:h-32 flex-shrink-0 relative rounded-sm overflow-hidden transition-all ${
              activeImage === idx
                ? "ring-1 ring-zinc-900 ring-offset-2 opacity-100"
                : "border border-zinc-200 opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={thumb}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-grow bg-zinc-50 rounded-sm relative overflow-hidden aspect-[3/4] lg:aspect-auto">
        <Image
          src={thumbnails[activeImage]}
          alt="Product Full View"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 58vw"
          priority
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:scale-105 transition-all shadow-sm"
        >
          <Maximize className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
