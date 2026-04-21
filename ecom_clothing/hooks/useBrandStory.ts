"use client";

import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";

export interface BrandStoryData {
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
}

/**
 * Hook to fetch brand story content from the database.
 */
export function useBrandStory() {
  return useQuery<BrandStoryData>({
    queryKey: ["content", "brand-story"],
    queryFn: async () => {
      const { data } = await contentApi.getBrandStory();
      // Extract the content from the { status: true, brandStory: {...} } format
      return data.brandStory;
    },
  });
}
