"use client";

import Image from "next/image";
import Link from "next/link";
import { Scissors, Leaf, ShieldCheck, LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { useBrandStory } from "@/hooks/useBrandStory";

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Leaf,
  ShieldCheck,
};

export default function BrandStory() {
  const { data: content, isLoading, isError } = useBrandStory();

  if (isLoading) {
    return (
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-pulse">
            <div className="order-2 lg:order-1 aspect-square bg-zinc-100 rounded-sm"></div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="h-10 w-3/4 bg-zinc-100 rounded"></div>
              <div className="h-20 w-full bg-zinc-100 rounded"></div>
              <div className="space-y-4">
                <div className="h-10 w-1/2 bg-zinc-100 rounded"></div>
                <div className="h-10 w-1/2 bg-zinc-100 rounded"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (isError || !content) return null;

  const CraftsmanshipIcon = iconMap[content.craftsmanship.icon] || Scissors;

  return (
    <section className="bg-zinc-50 py-24 border-y border-zinc-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-sm aspect-square md:aspect-[4/3] lg:aspect-square">
              <Image
                src={content.mainImage.url}
                alt={content.mainImage.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-sm border border-white/40">
                  <div className="flex items-center gap-3 mb-2">
                    <CraftsmanshipIcon className="w-4 h-4 text-zinc-900" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {content.craftsmanship.label}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    {content.craftsmanship.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pl-12">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6 whitespace-pre-line">
              {content.title}
            </h2>
            <p className="text-zinc-500 mb-8 leading-relaxed max-w-md">
              {content.description}
            </p>

            <div className="space-y-6">
              {content.features.map((feature, idx) => {
                const Icon = iconMap[feature.icon] || Leaf;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-4 h-4 text-zinc-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-900">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-1">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Link
                href={content.readMoreLink || "#"}
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
