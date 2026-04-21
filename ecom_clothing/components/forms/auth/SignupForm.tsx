"use client";

import Link from "next/link";
import { Mail, Lock, User, Check, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import { signupSchema, type SignupInput } from "@/lib/validations/auth.schema";

interface SignupFormProps {
  onSuccess?: () => void;
}

export default function SignupForm({ onSuccess }: SignupFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      agreedToTerms: false,
    }
  });

  const agreedToTerms = watch("agreedToTerms");

  const onSubmit = (data: SignupInput) => {
    console.log("Signup Data:", data);
    // Mimic API call
    setTimeout(() => {
      onSuccess?.();
    }, 1000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-8 font-sans">
        <h1 className="text-2xl font-medium tracking-tight text-zinc-900">Create an account</h1>
        <p className="text-sm text-zinc-500 mt-2">Join AURA to curate your essential wardrobe.</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-[10px] font-medium text-zinc-500 mb-1.5 uppercase tracking-[0.1em]">
            Full Name
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <User className={`w-4 h-4 transition-colors ${errors.name ? "text-red-500" : "text-zinc-400 group-focus-within:text-zinc-900"}`} />
            </div>
            <input
              {...register("name")}
              type="text"
              className={`w-full bg-zinc-50 border rounded-sm py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-zinc-400 ${
                errors.name ? "border-red-500 focus:bg-red-50/30" : "border-zinc-200 focus:border-zinc-400 focus:bg-white"
              }`}
              placeholder="Jane Doe"
            />
          </div>
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-600 font-medium animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name.message}
            </p>
          )}
        </div>

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
          <label className="block text-[10px] font-medium text-zinc-500 mb-1.5 uppercase tracking-[0.1em]">
            Password
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Lock className={`w-4 h-4 transition-colors ${errors.password ? "text-red-500" : "text-zinc-400 group-focus-within:text-zinc-900"}`} />
            </div>
            <input
              {...register("password")}
              type="password"
              className={`w-full bg-zinc-50 border rounded-sm py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-zinc-400 ${
                errors.password ? "border-red-500 focus:bg-red-50/30" : "border-zinc-200 focus:border-zinc-400 focus:bg-white"
              }`}
              placeholder="At least 8 characters"
            />
          </div>
          {errors.password && (
            <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-600 font-medium animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-3 h-3" />
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Custom Checkbox */}
        <div>
          <div 
            className="flex items-start gap-3 pt-2 cursor-pointer group"
            onClick={() => setValue("agreedToTerms", !agreedToTerms, { shouldValidate: true })}
          >
            <div
              className={`w-4 h-4 mt-0.5 rounded-sm border flex items-center justify-center flex-shrink-0 transition-all ${
                errors.agreedToTerms ? "border-red-500 bg-red-50" :
                agreedToTerms 
                  ? "bg-zinc-900 border-zinc-900" 
                  : "bg-white border-zinc-300 group-hover:border-zinc-400"
              }`}
            >
              <Check className={`w-3 h-3 text-white transition-opacity ${agreedToTerms ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
            </div>
            <span className="text-[11px] text-zinc-500 leading-relaxed select-none">
              I agree to the <Link href="/terms-of-service" className="text-zinc-900 font-medium hover:underline underline-offset-2">Terms of Service</Link> and <Link href="/privacy-policy" className="text-zinc-900 font-medium hover:underline underline-offset-2">Privacy Policy</Link>.
            </span>
          </div>
          {errors.agreedToTerms && (
            <p className="mt-1.5 text-[11px] text-red-600 font-medium animate-in fade-in slide-in-from-top-1">
              {errors.agreedToTerms.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full py-4 mt-4">
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </div>
  );
}
