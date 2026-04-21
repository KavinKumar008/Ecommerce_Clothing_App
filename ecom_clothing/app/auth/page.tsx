"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import AuthFormSession from "@/components/sections/AuthFormSession";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Editorial Image (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-100 overflow-hidden flex-col justify-between p-12">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
          alt="Editorial Fashion Texture"
          fill
          className="object-cover object-center grayscale-[20%] brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 font-semibold tracking-tighter text-2xl text-white hover:opacity-80 transition-opacity"
        >
          AURA
        </Link>

        {/* Overlay Content */}
        <div className="relative z-10 max-w-md">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white mb-6 uppercase tracking-wider">
            Curated Access
          </span>
          <h2 className="text-4xl font-medium tracking-tight text-white mb-4 leading-tight">
            Silent forms.<br />Loud texture.
          </h2>
          <p className="text-zinc-300 text-sm font-normal leading-relaxed">
            Join AURA to curate your essential wardrobe. Track orders, save favorites, and access exclusive editorial collections.
          </p>
        </div>
      </div>

      {/* Right Side: Authentication Forms */}
      <div className="w-full lg:w-1/2 flex flex-col relative justify-center items-center px-6 py-12 md:px-12 bg-white">
        
        {/* Back Link / Mobile Logo */}
        <div className="absolute top-8 left-6 md:left-12 flex items-center justify-between w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] lg:w-auto">
          <Link href="/" className="lg:hidden font-semibold tracking-tighter text-xl text-zinc-900">
            AURA
          </Link>
          <Link 
            href="/" 
            className="hidden lg:flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Link>
        </div>

        <AuthFormSession />
      </div>
    </div>
  );
}
