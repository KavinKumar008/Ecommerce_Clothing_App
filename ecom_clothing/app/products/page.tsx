import ProductListing from "@/components/sections/ProductListing";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";

const categories = ["All Outerwear", "Coats", "Jackets", "Blazers"];
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = [
  "bg-zinc-900",
  "bg-white",
  "bg-[#3f3f46]",
  "bg-[#1e1b4b]",
  "bg-[#78716c]",
  "bg-[#7f1d1d]",
];

export default function ProductsPage() {
  return (
    <div className="pb-24">
      <Container className="pt-8">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: "Home", href: "/" },
            { label: "Men" },
            { label: "Outerwear" },
          ]}
        />

        <ProductListing
          categories={categories}
          sizes={sizes}
          colors={colors}
        />
      </Container>
    </div>
  );
}
