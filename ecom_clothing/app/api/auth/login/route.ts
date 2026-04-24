import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { phone, password } = body;

    // --- STATIC DEVELOPMENT CREDENTIALS ---
    if (phone === "9564321778" && password === "Kavin123") {
      const mockUser = {
        id: "000000000000000000000000",
        name: "Kavin Kumar",
        email: "kavin@example.com",
        phone: "9564321778",
      };

      const token = signToken(mockUser);

      return NextResponse.json({
        message: "Login successful (Static Dev Login)",
        token,
        user: mockUser,
      });
    }
    // ----------------------------------------

    // Standard Database Login
    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid phone number or password" },
        { status: 401 }
      );
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid phone number or password" },
        { status: 401 }
      );
    }

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };

    const token = signToken(userData);

    return NextResponse.json({
      message: "Login successful",
      token,
      user: userData,
    });
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
