import ProductView from "@/components/sections/ProductView";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";

const thumbnails = [
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1869&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&w=1972&auto=format&fit=crop",
];

const colorOptions = [
  { name: "Charcoal", value: "bg-[#3f3f46]" },
  { name: "Navy", value: "bg-[#1e1b4b]" },
  { name: "Stone", value: "bg-[#d6d3d1]" },
];

const sizeOptions = [
  { label: "S", available: true },
  { label: "M", available: true },
  { label: "L", available: true },
  { label: "XL", available: false },
];

export default function ProductDetailPage() {
  return (
    <div className="pb-20">
      <Container className="pt-8">
        <Breadcrumbs
          className="mb-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Men" },
            { label: "Outerwear", href: "/products" },
            { label: "Structure Wool Coat" },
          ]}
        />

        <ProductView
          thumbnails={thumbnails}
          colorOptions={colorOptions}
          sizeOptions={sizeOptions}
        />
      </Container>
    </div>
  );
}
