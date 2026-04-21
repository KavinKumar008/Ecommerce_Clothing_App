"use client";

import Link from "next/link";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";
import Container from "./ui/Container";
import AuthModal from "./modals/AuthModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <Container className="h-16 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden -ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Links (Left - Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <Link href="/products" className="hover:text-zinc-900 transition-colors">
            Shop
          </Link>
          <Link href="/products" className="hover:text-zinc-900 transition-colors">
            Collections
          </Link>
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Editorial
          </Link>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold tracking-tighter text-xl"
        >
          AURA
        </Link>

        {/* Icons (Right) */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="w-5 h-5" />
          </Button>
          <Button
            onClick={() => setIsAuthModalOpen(true)}
            variant="ghost"
            size="icon"
            className="hidden lg:flex"
            aria-label="Account"
          >
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="group relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-900"></span>
            </span>
          </Button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-100 bg-white px-6 py-4 space-y-3">
          <Link
            href="/products"
            className="block text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/products"
            className="block text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Collections
          </Link>
          <Link
            href="/"
            className="block text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Editorial
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsAuthModalOpen(true);
            }}
            className="block w-full text-left text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            Account
          </button>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={setIsAuthModalOpen} 
      />
    </nav>
  );
}
