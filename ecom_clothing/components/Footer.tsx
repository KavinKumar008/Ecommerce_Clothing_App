import Link from "next/link";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8 mt-auto">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/products" className="hover:text-zinc-900 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-zinc-900 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-zinc-900 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  Shipping &amp; Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Social
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  TikTok
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-semibold tracking-tighter text-xl block mb-4"
            >
              AURA
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
              Defining the modern silhouette through texture, form, and function.
              <br />
              <br />
              © 2024 Aura Studios.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 text-xs text-zinc-400">
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="#" className="hover:text-zinc-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-600">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Systems Operational</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
