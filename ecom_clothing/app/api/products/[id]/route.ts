import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    // Look up by the slug field (id), not the MongoDB _id
    const product = await Product.findOne({ id });

    if (!product) {
      return NextResponse.json(
        { status: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: true, product });
  } catch (error: any) {
    console.error("❌ API Error [GET /api/products/[id]]:", error);
    return NextResponse.json(
      { status: false, message: "Failed to fetch product", error: error.message },
      { status: 500 }
    );
  }
}
