import Image from "next/image";
import Link from "next/link";
import { Scissors, Leaf, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";

export default function BrandStory() {
  return (
    <section className="bg-zinc-50 py-24 border-y border-zinc-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-sm aspect-square md:aspect-[4/3] lg:aspect-square">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                alt="Fabric Detail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-sm border border-white/40">
                  <div className="flex items-center gap-3 mb-2">
                    <Scissors className="w-4 h-4 text-zinc-900" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Craftsmanship
                    </span>
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    Each garment is constructed with high-density threading and
                    reinforced seams to ensure longevity beyond the season.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pl-12">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
              Designed for the
              <br />
              everyday ritual.
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed max-w-md">
              We believe that the clothes you wear should empower your daily
              motion, not hinder it. AURA focuses on the intersection of
              utility and luxury, stripping away the unnecessary to reveal the
              essential.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <Leaf className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-900">
                    Sustainable Sourcing
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    100% Organic Cotton and Recycled Polyesters.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-900">
                    Lifetime Guarantee
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    We stand by the quality of every stitch.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="#"
                className="text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-1 hover:border-zinc-900 transition-colors"
              >
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
