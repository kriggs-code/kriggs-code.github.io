import { ReactNode } from "react";

type Props = { eyebrow: string; title: string; children?: ReactNode; center?: boolean };

export default function SectionHeader({ eyebrow, title, children, center = false }: Props) {
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}`}>
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-igniteGold">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.06em] md:text-6xl">{title}</h2>
      {children && <div className="mt-5 text-lg leading-8 text-white/62 md:text-xl">{children}</div>}
    </div>
  );
}
