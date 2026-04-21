import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    // Fetch all products from MongoDB
    const products = await Product.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ status: true, products });
  } catch (error: any) {
    console.error("❌ API Error [GET /api/products]:", error);
    return NextResponse.json(
      { message: "Failed to fetch products", error: error.message },
      { status: 500 }
    );
  }
}
