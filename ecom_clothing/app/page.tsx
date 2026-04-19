import Hero from "@/components/sections/Hero";
import CategoryTicker from "@/components/sections/CategoryTicker";
import CuratedSelection from "@/components/sections/CuratedSelection";
import BrandStory from "@/components/sections/BrandStory";
import Newsletter from "@/components/sections/Newsletter";

export const metadata = {
  title: "AURA | Essential Wear",
  description:
    "A study in reduction. Curated essentials crafted from premium heavyweight organic cotton.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryTicker />
      <CuratedSelection />
      <BrandStory />
      <Newsletter />
    </>
  );
}
