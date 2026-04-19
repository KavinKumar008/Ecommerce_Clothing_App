import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IProduct extends Document {
  id: string; // The URL slug used in the app (e.g., 'structure-wool-coat')
  name: string;
  subtitle?: string;
  color?: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  categories: string[];
  sizes: string[];
  colors?: string[]; // Array of tailwind color classes
  favorited?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    subtitle: String,
    color: String,
    price: {
      type: String,
      required: true,
    },
    originalPrice: String,
    image: {
      type: String,
      required: true,
    },
    badge: String,
    categories: {
      type: [String],
      default: [],
    },
    sizes: {
      type: [String],
      default: [],
    },
    colors: {
      type: [String],
      default: [],
    },
    favorited: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// This ensures we don't redefine the model if it already exists (Next.js hot reloading)
const Product = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
