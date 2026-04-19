import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav className={`flex items-center text-xs text-zinc-500 space-x-2 ${className}`}>
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center space-x-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-zinc-900 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className={index === items.length - 1 ? "text-zinc-900" : "text-zinc-400"}>
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="w-2.5 h-2.5" />
          )}
        </div>
      ))}
    </nav>
  );
}
