import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "ghost" | "blue";
  type?: "button" | "submit";
  className?: string;
};

export default function Button({ children, href, onClick, variant = "gold", type = "button", className = "" }: Props) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black tracking-wide transition duration-300 focus:outline-none focus:ring-2 focus:ring-igniteGold/60";
  const styles = {
    gold: "bg-igniteGold text-igniteNavy shadow-glow hover:-translate-y-0.5 hover:bg-[#ffe889]",
    ghost: "border border-white/15 bg-white/[0.04] text-igniteCream backdrop-blur hover:-translate-y-0.5 hover:bg-white/[0.09]",
    blue: "bg-igniteBlue text-white shadow-blueglow hover:-translate-y-0.5 hover:bg-blue-500",
  }[variant];

  const finalClass = `${base} ${styles} ${className}`;

  if (href) return <Link href={href} className={finalClass}>{children}</Link>;
  return <button type={type} onClick={onClick} className={finalClass}>{children}</button>;
}
