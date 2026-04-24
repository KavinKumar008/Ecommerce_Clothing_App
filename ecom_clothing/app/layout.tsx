import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QueryProvider from "@/components/QueryProvider";
import { Toaster } from "sonner";
import { AuthModalProvider } from "@/context/AuthModalContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: false,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "AURA | Essential Wear",
  description:
    "Defining the modern silhouette through texture, form, and function. Curated essentials crafted from premium materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
        <QueryProvider>
          <AuthModalProvider>
            <Toaster richColors closeButton position="top-right" />
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </AuthModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
