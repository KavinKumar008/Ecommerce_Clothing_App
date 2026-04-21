"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import { loginSchema, type LoginInput } from "@/lib/validations/auth.schema";

interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginInput) => {
    console.log("Login Data:", data);
    // Mimic API call
    setTimeout(() => {
      onSuccess?.();
    }, 1000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="mb-8">
        <h1 className="text-2xl font-medium tracking-tight text-zinc-900">Welcome back</h1>
        <p className="text-sm text-zinc-500 mt-2 font-sans">Enter your credentials to access your uniform.</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-[10px] font-medium text-zinc-500 mb-1.5 uppercase tracking-[0.1em]">
            Email address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Mail className={`w-4 h-4 transition-colors ${errors.email ? "text-red-500" : "text-zinc-400 group-focus-within:text-zinc-900"}`} />
            </div>
            <input
              {...register("email")}
              type="email"
              className={`w-full bg-zinc-50 border rounded-sm py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-zinc-400 ${
                errors.email ? "border-red-500 focus:bg-red-50/30" : "border-zinc-200 focus:border-zinc-400 focus:bg-white"
              }`}
              placeholder="hello@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-600 font-medium animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-[10px] font-medium text-zinc-500 uppercase tracking-[0.1em]">
              Password
            </label>
            <Link
              href="#"
              className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-200"
            >
              Forgot?
            </Link>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Lock className={`w-4 h-4 transition-colors ${errors.password ? "text-red-500" : "text-zinc-400 group-focus-within:text-zinc-900"}`} />
            </div>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className={`w-full bg-zinc-50 border rounded-sm py-3 pl-10 pr-10 text-sm outline-none transition-all placeholder:text-zinc-400 ${
                errors.password ? "border-red-500 focus:bg-red-50/30" : "border-zinc-200 focus:border-zinc-400 focus:bg-white"
              }`}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-600 font-medium animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-3 h-3" />
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full py-4 mt-2">
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
}
