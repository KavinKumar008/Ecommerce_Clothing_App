import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";
import BrandStory from "@/models/BrandStory";

const productsData = [
  {
    id: "structure-wool-coat",
    name: "Structure Wool Coat",
    subtitle: "Charcoal / Wool Blend",
    color: "Charcoal",
    price: "$320",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    images: [
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=1974&auto=format&fit=crop",
    ],
    badge: "New",
    categories: ["Men", "Outerwear", "Coats"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "relaxed-pleat-trouser",
    name: "Relaxed Pleat Trouser",
    subtitle: "Sand / Heavy Cotton",
    color: "Sand",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1960&auto=format&fit=crop",
    ],
    categories: ["Men", "Trousers"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "boxy-heavyweight-tee",
    name: "Boxy Heavyweight Tee",
    subtitle: "White / 280GSM",
    color: "White",
    price: "$85",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    images: [
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1960&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1954&auto=format&fit=crop",
    ],
    categories: ["Men", "Essentials", "Tees"],
    colors: ["bg-white", "bg-black", "bg-zinc-400"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "essential-hoodie",
    name: "Essential Hoodie",
    subtitle: "Onyx / French Terry",
    color: "Onyx",
    price: "$140",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578768079470-f852104a3469?q=80&w=1974&auto=format&fit=crop",
    ],
    badge: "Limited",
    categories: ["Men", "Essentials", "Hoodies"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: "oversized-mac-coat",
    name: "Oversized Mac Coat",
    color: "Stone",
    price: "$280",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=1974&auto=format&fit=crop",
    ],
    categories: ["Men", "Outerwear", "Coats"],
    sizes: ["S", "M", "L"],
  },
];

const brandStoryData = {
  title: "Designed for the everyday ritual.",
  description: "We believe that the clothes you wear should empower your daily motion, not hinder it. AURA focuses on the intersection of utility and luxury, stripping away the unnecessary to reveal the essential.",
  mainImage: {
    url: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
    alt: "Fabric Detail",
  },
  craftsmanship: {
    icon: "Scissors",
    label: "Craftsmanship",
    text: "Each garment is constructed with high-density threading and reinforced seams to ensure longevity beyond the season.",
  },
  features: [
    {
      icon: "Leaf",
      title: "Sustainable Sourcing",
      text: "100% Organic Cotton and Recycled Polyesters.",
    },
    {
      icon: "ShieldCheck",
      title: "Lifetime Guarantee",
      text: "We stand by the quality of every stitch.",
    },
  ],
  readMoreLink: "#",
};

export async function GET() {
  try {
    await dbConnect();

    // 1. Seed Products
    await Product.deleteMany({});
    const seededProducts = await Product.insertMany(productsData);

    // 2. Seed Brand Story
    await BrandStory.deleteMany({});
    const seededBrandStory = await BrandStory.create(brandStoryData);

    return NextResponse.json({
      status: true,
      message: "Database seeded successfully!",
      results: {
        products: seededProducts.length,
        brandStory: !!seededBrandStory,
      },
    });
  } catch (error: any) {
    console.error("❌ Seeding Error:", error);
    return NextResponse.json(
      { status: false, message: "Seeding failed", error: error.message },
      { status: 500 }
    );
  }
}
