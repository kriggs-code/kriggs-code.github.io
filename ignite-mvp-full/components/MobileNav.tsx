import Link from "next/link";
import { BookOpen, Flame, Home, UserRound } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/onboarding", label: "Begin", icon: Flame },
  { href: "/dashboard", label: "Daily", icon: BookOpen },
  { href: "/sign-in", label: "Sign in", icon: UserRound },
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 grid w-[92%] max-w-md -translate-x-1/2 grid-cols-4 rounded-full border border-white/10 bg-igniteNavy/92 px-2 py-2 text-[11px] font-bold text-white/60 shadow-2xl backdrop-blur-xl md:hidden">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link key={link.href} href={link.href} className="flex flex-col items-center gap-1 rounded-full px-2 py-2 transition hover:bg-white/10 hover:text-white">
            <Icon className="h-4 w-4" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
