import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Cart from "@/models/Cart";
import { verifyToken } from "@/lib/jwt";
import mongoose from "mongoose";

// Middleware helper to authenticate and get user ID
const authenticateUser = (req: Request) => {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  const decoded: any = verifyToken(token);
  
  if (!decoded || !decoded.id) return null;
  // Handle static mock user ID gracefully if needed, or enforce valid ObjectId
  return decoded.id;
};

export async function GET(req: Request) {
  try {
    const userId = authenticateUser(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    // The user might be the static dev userId. Mongoose ObjectId might fail if it's not a hex string.
    let cart;
    if (mongoose.Types.ObjectId.isValid(userId)) {
        cart = await Cart.findOne({ user: userId }).populate("items.product");
    } else {
        // Fallback for mock users testing (might not work well with DB refs, but just in case)
        cart = null; 
    }

    if (!cart) {
      return NextResponse.json({ status: true, cart: { items: [], total: 0 } }, { status: 200 });
    }

    return NextResponse.json({ status: true, cart }, { status: 200 });
  } catch (error: any) {
    console.error("Cart GET Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const userId = authenticateUser(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ message: "Invalid User Session for Database" }, { status: 400 });
    }

    await connectDB();
    const body = await req.json();
    const { productId, color, size, quantity = 1 } = body;

    if (!productId || !color || !size) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      // Create new cart
      cart = await Cart.create({
        user: userId,
        items: [{ product: productId, color, size, quantity }],
      });
    } else {
      // Check if product variant exists
      const itemIndex = cart.items.findIndex(
        (item: any) =>
          item.product.toString() === productId &&
          item.color === color &&
          item.size === size
      );

      if (itemIndex > -1) {
        // Increment quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Append new item
        cart.items.push({ product: productId, color, size, quantity });
      }
      await cart.save();
    }

    // Populate for response
    await cart.populate("items.product");

    return NextResponse.json({ status: true, cart, message: "Added to cart" }, { status: 200 });
  } catch (error: any) {
    console.error("Cart POST Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const userId = authenticateUser(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();
    const { itemId, quantity } = body;

    if (!itemId || typeof quantity !== "number" || quantity < 1) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    const item = cart.items.find((i: any) => i._id.toString() === itemId);
    if (item) {
      item.quantity = quantity;
      await cart.save();
      await cart.populate("items.product");
      return NextResponse.json({ status: true, cart, message: "Cart updated" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Item not found in cart" }, { status: 404 });
    }
  } catch (error: any) {
    console.error("Cart PUT Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const userId = authenticateUser(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const itemId = url.searchParams.get("itemId");

    if (!itemId) {
      return NextResponse.json({ message: "Missing item ID" }, { status: 400 });
    }

    await connectDB();
    
    // Find the cart and remove the specific item from the subdocument array
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { _id: itemId } } },
      { new: true }
    ).populate("items.product");

    if (!cart) {
      return NextResponse.json({ message: "Cart not found" }, { status: 404 });
    }

    return NextResponse.json({ status: true, cart, message: "Item removed" }, { status: 200 });
  } catch (error: any) {
    console.error("Cart DELETE Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
