import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden flex items-end justify-start">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          fill
          className="object-cover object-center brightness-[0.85] grayscale-[20%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      <Container className="pb-16 md:pb-24">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-6 py-1 px-3 border-white/30 text-white bg-white/10 uppercase tracking-normal"
          >
            Fall / Winter 2024
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.95]">
            Silent forms.
            <br />
            Loud texture.
          </h1>
          <p className="text-zinc-300 text-sm md:text-base font-normal max-w-md mb-8 leading-relaxed">
            A study in reduction. Curated essentials crafted from premium
            heavyweight organic cotton. Designed for the modern uniform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/products" className="gap-2">
              Shop New Arrivals <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href="/products"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              View Lookbook
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
