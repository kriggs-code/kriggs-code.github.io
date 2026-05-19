import { ReactNode } from "react";

export default function GlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-igniteGold/25 hover:bg-white/[0.065] ${className}`}>
      {children}
    </div>
  );
}
