import Link from "next/link";
import { LogOut, LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";

interface SidebarLink {
  label: string;
  icon: LucideIcon;
  href: string;
  active?: boolean;
}

interface AccountSidebarProps {
  sidebarLinks: SidebarLink[];
}

export default function AccountSidebar({ sidebarLinks }: AccountSidebarProps) {
  return (
    <aside className="lg:col-span-3">
      <nav className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-4 lg:pb-0 border-b border-zinc-100 lg:border-none">
        {sidebarLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`flex items-center gap-3 flex-shrink-0 px-4 py-3 text-sm rounded-sm transition-colors ${
              link.active
                ? "font-medium text-zinc-900 bg-zinc-50"
                : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
            }`}
          >
            <link.icon className="w-4 h-4" />
            {link.label}
          </Link>
        ))}
        <Button
          variant="ghost"
          className="justify-start gap-3 px-4 text-zinc-400 hover:text-red-700 hover:bg-red-50 mt-2 lg:mt-6"
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </Button>
      </nav>
    </aside>
  );
}
