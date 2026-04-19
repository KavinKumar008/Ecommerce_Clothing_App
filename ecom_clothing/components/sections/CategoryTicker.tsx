import { Globe } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CategoryTicker() {
  return (
    <section className="border-b border-zinc-100 bg-white sticky top-16 z-40">
      <Container as="nav" className="h-14 flex items-center justify-between overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-6 text-xs font-medium text-zinc-500 whitespace-nowrap">
          <button className="text-zinc-900 border-b border-zinc-900 pb-0.5">
            All Products
          </button>
          <button className="hover:text-zinc-900 transition-colors">
            Outerwear
          </button>
          <button className="hover:text-zinc-900 transition-colors">
            Knitwear
          </button>
          <button className="hover:text-zinc-900 transition-colors">
            Trousers
          </button>
          <button className="hover:text-zinc-900 transition-colors">
            Accessories
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3" /> Worldwide Shipping
          </span>
          <span className="w-px h-3 bg-zinc-200"></span>
          <span>Designed in Tokyo</span>
        </div>
      </Container>
    </section>
  );
}
