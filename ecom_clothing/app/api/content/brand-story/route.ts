import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import BrandStory from "@/models/BrandStory";

export async function GET() {
  try {
    await dbConnect();

    // Fetch the first brand story document
    const brandStory = await BrandStory.findOne({});

    if (!brandStory) {
      return NextResponse.json(
        { status: false, message: "Brand story content not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: true, brandStory });
  } catch (error: any) {
    console.error("❌ API Error [GET /api/content/brand-story]:", error);
    return NextResponse.json(
      { status: false, message: "Failed to fetch brand story", error: error.message },
      { status: 500 }
    );
  }
}
