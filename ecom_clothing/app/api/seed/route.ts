import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

const productsData = [
  {
    id: "structure-wool-coat",
    name: "Structure Wool Coat",
    subtitle: "Charcoal / Wool Blend",
    color: "Charcoal",
    price: "$320",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
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
    categories: ["Men", "Outerwear", "Coats"],
    sizes: ["S", "M", "L"],
  },
];

export async function GET() {
  try {
    await dbConnect();

    // Clear existing data to avoid duplicates (optional but good for seeding)
    await Product.deleteMany({});

    // Seed the products
    const seededProducts = await Product.insertMany(productsData);

    return NextResponse.json({
      message: "Database seeded successfully!",
      count: seededProducts.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Seeding failed", error: error.message },
      { status: 500 }
    );
  }
}
