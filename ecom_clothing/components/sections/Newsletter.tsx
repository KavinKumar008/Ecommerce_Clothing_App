import { Mail, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <Mail className="w-6 h-6 text-zinc-400 mx-auto mb-4" />
        <h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">
          Join the list
        </h3>
        <p className="text-zinc-500 text-sm mb-8">
          Receive early access to collections and exclusive editorial content.
        </p>

        <form className="flex w-full max-w-sm mx-auto relative group">
          <input
            type="email"
            placeholder="email@address.com"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-3 pl-4 pr-12 text-sm outline-none focus:border-zinc-400 focus:bg-white transition-all placeholder:text-zinc-400"
          />
          <Button
            type="button"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
