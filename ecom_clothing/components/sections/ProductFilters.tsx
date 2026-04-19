"use client";

import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";

interface ProductFiltersProps {
  categories: string[];
  sizes: string[];
  colors: string[];
  selectedCategories: string[];
  toggleCategory: (cat: string) => void;
  selectedSizes: string[];
  toggleSize: (size: string) => void;
  selectedColors: number[];
  toggleColor: (idx: number) => void;
}

export default function ProductFilters({
  categories,
  sizes,
  colors,
  selectedCategories,
  toggleCategory,
  selectedSizes,
  toggleSize,
  selectedColors,
  toggleColor,
}: ProductFiltersProps) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="hidden lg:block sticky top-28 space-y-2">
        {/* Category Filter */}
        <Accordion title="Category" open>
          <div className="space-y-3">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 cursor-pointer group/label"
              >
                <div className="relative flex items-center justify-center w-4 h-4 rounded-sm border border-zinc-300 bg-white group-hover/label:border-zinc-900 transition-colors">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <svg
                    className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-zinc-900 rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
                <span
                  className={`text-sm transition-colors ${
                    selectedCategories.includes(cat)
                      ? "text-zinc-900"
                      : "text-zinc-600 group-hover/label:text-zinc-900"
                  }`}
                >
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </Accordion>

        {/* Size Filter */}
        <Accordion title="Size" open>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={selectedSizes.includes(size)}
                  onChange={() => toggleSize(size)}
                />
                <span className="flex items-center justify-center w-full aspect-square border border-zinc-200 rounded-sm text-xs text-zinc-600 hover:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-colors">
                  {size}
                </span>
              </label>
            ))}
            <label className="cursor-pointer opacity-40">
              <input type="checkbox" className="peer sr-only" disabled />
              <span className="flex items-center justify-center w-full aspect-square border border-zinc-100 bg-zinc-50 rounded-sm text-xs text-zinc-400 relative overflow-hidden">
                XXL
                <div className="absolute w-full h-px bg-zinc-200 rotate-45"></div>
              </span>
            </label>
          </div>
        </Accordion>

        {/* Color Filter */}
        <Accordion title="Color" open>
          <div className="flex flex-wrap gap-3">
            {colors.map((color, i) => (
              <label key={i} className="cursor-pointer relative group/color">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={selectedColors.includes(i)}
                  onChange={() => toggleColor(i)}
                />
                <span
                  className={`block w-7 h-7 rounded-full ${color} border border-zinc-200 peer-checked:ring-1 peer-checked:ring-offset-2 peer-checked:ring-zinc-900 transition-all group-hover/color:scale-110`}
                ></span>
              </label>
            ))}
          </div>
        </Accordion>

        {/* Price Filter */}
        <Accordion title="Price" open>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
                $
              </span>
              <input
                type="number"
                placeholder="Min"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-sm py-2 pl-7 pr-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors"
                onChange={(e) => console.log("Min price:", e.target.value)}
              />
            </div>
            <span className="text-zinc-400">-</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
                $
              </span>
              <input
                type="number"
                placeholder="Max"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-sm py-2 pl-7 pr-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white transition-colors"
                onChange={(e) => console.log("Max price:", e.target.value)}
              />
            </div>
          </div>
        </Accordion>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <Button className="w-full">
            Apply Filters
          </Button>
          <Button variant="outline" className="w-full">
            Clear All
          </Button>
        </div>
      </div>
    </aside>
  );
}
