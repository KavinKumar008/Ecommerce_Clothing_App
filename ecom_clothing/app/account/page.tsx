import AccountSidebar from "@/components/sections/AccountSidebar";
import ProfileOverview from "@/components/sections/ProfileOverview";
import OrderHistory from "@/components/sections/OrderHistory";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { User, ShoppingBag, MapPin, CreditCard, Settings } from "lucide-react";

const sidebarLinks = [
  { label: "Profile", icon: User, href: "#" },
  { label: "Orders", icon: ShoppingBag, href: "#", active: true },
  { label: "Addresses", icon: MapPin, href: "#" },
  { label: "Payment Methods", icon: CreditCard, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
];

const orders = [
  {
    id: "ORD-100234",
    date: "October 24, 2023",
    total: "$320.00",
    status: "Delivered",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    dotColor: "bg-green-500",
    product: {
      name: "Structure Wool Coat",
      variant: "Charcoal / M",
      qty: 1,
      price: "$320.00",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop",
    },
    action: "Buy Again",
    actionEnabled: true,
  },
  {
    id: "ORD-100182",
    date: "October 12, 2023",
    total: "$185.00",
    status: "Processing",
    statusColor: "bg-orange-50 text-orange-700 border-orange-100",
    dotColor: "bg-orange-500 animate-pulse",
    product: {
      name: "Merino Knit Sweater",
      variant: "Oatmeal / L",
      qty: 1,
      price: "$185.00",
      image:
        "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1869&auto=format&fit=crop",
    },
    action: "Track Order",
    actionEnabled: false,
  },
];

export default function AccountPage() {
  return (
    <div className="pb-20">
      <Container className="pt-8">
        <Breadcrumbs
          className="mb-8"
          items={[
            { label: "Home", href: "/" },
            { label: "Account" },
            { label: "Profile & Orders" },
          ]}
        />

        <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-10">
          My Account
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <AccountSidebar sidebarLinks={sidebarLinks} />

          <div className="lg:col-span-9 flex flex-col">
            <ProfileOverview
              name="John Doe"
              email="johndoe@example.com"
              initials="JD"
            />

            <OrderHistory orders={orders} />
          </div>
        </div>
      </Container>
    </div>
  );
}
