import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  open?: boolean;
  className?: string;
  border?: boolean;
}

export default function Accordion({
  title,
  children,
  open = false,
  className = "",
  border = true,
}: AccordionProps) {
  return (
    <details className={`group ${border ? "border-b border-zinc-100" : ""} pb-6 mb-6 ${className}`} open={open}>
      <summary className="flex justify-between items-center text-sm font-medium text-zinc-900 cursor-pointer list-none select-none">
        {title}
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 rotate-90 group-open:-rotate-90 transition-transform duration-300" />
      </summary>
      <div className="pt-4">
        {children}
      </div>
    </details>
  );
}
