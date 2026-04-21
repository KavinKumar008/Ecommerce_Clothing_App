"use client";

import { useState } from "react";
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
    // <div className="w-full flex bg-white p-6 md:pt-8 md:pb-4 md:px-8">
    <div className="relative w-full flex bg-white p-6 pt-12 md:pt-12 md:pb-4 md:px-8">
      <div className="w-full max-w-[380px] mx-auto">
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
