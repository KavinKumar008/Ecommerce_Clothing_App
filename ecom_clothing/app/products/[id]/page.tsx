import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductView from "@/components/sections/ProductView";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="pb-20">
      <Container className="pt-8">
        <Breadcrumbs
          className="mb-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Men" },
            { label: "Outerwear", href: "/products" },
            { label: "Product Details" },
          ]}
        />

        <ProductView productId={id} />
      </Container>
    </div>
  );
}
