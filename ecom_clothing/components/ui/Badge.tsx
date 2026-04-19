import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "brand" | "outline" | "success" | "warning" | "neutral";
  className?: string;
}

export default function Badge({
  children,
  variant = "neutral",
  className = "",
}: BadgeProps) {
  const baseStyles = "inline-flex items-center px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded-sm shadow-sm";
  
  const variants = {
    brand: "bg-zinc-900 text-white",
    outline: "bg-white/90 backdrop-blur text-zinc-900 border border-zinc-100",
    success: "bg-green-50 text-green-700 border border-green-100",
    warning: "bg-orange-50 text-orange-700 border border-orange-100",
    neutral: "bg-zinc-100 text-zinc-900 border border-zinc-200",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
