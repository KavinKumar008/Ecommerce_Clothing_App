"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import LoginForm from "@/components/forms/auth/LoginForm";
import SignupForm from "@/components/forms/auth/SignupForm";

type AuthTab = "login" | "signup";

interface AuthFormSessionProps {
  onSuccess?: () => void;
  initialTab?: AuthTab;
}

export default function AuthFormSession({
  onSuccess,
  initialTab = "login"
}: AuthFormSessionProps) {
  const [activeTab, setActiveTab] = useState<AuthTab>(initialTab);

  return (
    <div className="relative w-full bg-white px-6 py-8 md:px-8 md:py-10">
      {/* Header with Logo and Close */}
      <div className="absolute top-6 left-6 md:left-8">
        <Link href="/" className="text-lg font-semibold tracking-tighter text-zinc-900">
          AURA
        </Link>
      </div>
      
      <button 
        onClick={() => onSuccess?.()}
        className="absolute top-6 right-6 md:right-8 text-zinc-400 hover:text-zinc-900 transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="w-full max-w-[380px] mx-auto mt-8">
        {/* Toggle Component */}
        <div className="flex mb-10 w-full relative border-b border-zinc-200">
          {/* Sliding Bottom Line */}
          <div
            className={`absolute -bottom-[1px] left-0 w-1/2 h-[2px] bg-zinc-900 transition-transform duration-300 ease-out ${activeTab === "signup" ? "translate-x-full" : "translate-x-0"
              }`}
          />

          <button
            className={`relative z-10 w-1/2 pb-3 text-sm font-medium transition-colors ${activeTab === "login" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
              }`}
            onClick={() => setActiveTab("login")}
          >
            Log In
          </button>
          <button
            className={`relative z-10 w-1/2 pb-3 text-sm font-medium transition-colors ${activeTab === "signup" ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
              }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Forms Area */}
        <div className="relative">
          {activeTab === "login" ? (
            <LoginForm onSuccess={onSuccess} />
          ) : (
            <SignupForm onSuccess={onSuccess} />
          )}
        </div>


      </div>
    </div>
  );
}
