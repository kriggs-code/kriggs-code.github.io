import Link from "next/link";
import { Flame } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "./Button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-igniteGold/30 bg-igniteGold/10 shadow-glow">
            <Flame className="h-5 w-5 text-igniteGold" />
          </div>
          <div>
            <p className="text-xl font-black leading-none tracking-tight">Ignite</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.32em] text-white/40">Faith starts honest</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/60 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">{link.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/onboarding">Start</Button>
        </div>
      </div>
    </header>
  );
}
