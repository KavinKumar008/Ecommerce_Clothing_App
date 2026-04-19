import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ui/ProductCard";

interface Product {
  id: string;
  name: string;
  color: string;
  price: string;
  image: string;
  badge?: string;
  onQuickAdd?: () => void;
}

interface ProductListGridProps {
  products: Product[];
}

export default function ProductListGrid({ products }: ProductListGridProps) {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onQuickAdd={() => console.log("Quick add:", product.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex items-center justify-between border-t border-zinc-100 pt-8">
        <Button variant="ghost" className="gap-2 px-4 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Previous
        </Button>
        <div className="flex items-center gap-1">
          <Button size="icon" className="w-8 h-8 text-xs">
            1
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-xs">
            2
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-xs">
            3
          </Button>
          <span className="text-zinc-400 text-xs px-1">...</span>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-xs">
            8
          </Button>
        </div>
        <Button variant="ghost" className="gap-2 px-4 group">
          Next
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
