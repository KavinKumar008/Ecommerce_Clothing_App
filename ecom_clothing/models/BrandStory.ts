import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IBrandStory extends Document {
  title: string;
  description: string;
  mainImage: {
    url: string;
    alt: string;
  };
  craftsmanship: {
    icon: string;
    label: string;
    text: string;
  };
  features: Array<{
    icon: string;
    title: string;
    text: string;
  }>;
  readMoreLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BrandStorySchema = new Schema<IBrandStory>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mainImage: {
      url: { type: String, required: true },
      alt: { type: String, required: true },
    },
    craftsmanship: {
      icon: { type: String, required: true },
      label: { type: String, required: true },
      text: { type: String, required: true },
    },
    features: [
      {
        icon: { type: String, required: true },
        title: { type: String, required: true },
        text: { type: String, required: true },
      },
    ],
    readMoreLink: {
      type: String,
      default: "#",
    },
  },
  {
    timestamps: true,
  }
);

const BrandStory = models.BrandStory || model<IBrandStory>("BrandStory", BrandStorySchema);

export default BrandStory;
