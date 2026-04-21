"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ScrollArea } from "./ScrollArea";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  full: "max-w-[95vw] lg:max-w-[1200px]",
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  description,
  className,
  maxWidth = "md",
}: ModalProps) {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        {/* Overlay - High end glass effect */}
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-[100] bg-zinc-950/40 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-300"
        />

        {/* Content - Centered Dialog */}
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-[101] flex w-full translate-x-[-50%] translate-y-[-50%] flex-col overflow-hidden bg-white shadow-2xl transition-all duration-300 sm:rounded-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            "max-h-[85vh] h-auto flex flex-col",
            maxWidthClasses[maxWidth],
            className
          )}
        >
          {/* Close Button - Premium Top Right Placement */}
          <DialogPrimitive.Close className="absolute right-6 top-4 z-50 rounded-full bg-white/80 p-2 text-zinc-400 backdrop-blur-sm transition-all hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-zinc-900 focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          {/* Accessibility Titles (Hidden if not provided) */}
          <div className="sr-only">
            <DialogPrimitive.Title>{title || "Modal"}</DialogPrimitive.Title>
            <DialogPrimitive.Description>
              {description || "Modal dialog content"}
            </DialogPrimitive.Description>
          </div>

          {/* Scroll Area inside a restricted height flex-grow container */}
          <div className="flex-1 min-h-0 overflow-hidden h-full">
            <ScrollArea className="h-full">
              {children}
            </ScrollArea>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
