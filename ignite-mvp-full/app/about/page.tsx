import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { formationPillars } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="pb-28 text-igniteCream">
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-igniteGold">Mission</p>
        <h1 className="mt-5 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.075em] md:text-8xl">
          Ignite exists to make faith feel worth searching for.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">
          Teenagers are not looking for fake confidence. They are looking for something real enough to hold their questions, pain, doubts, curiosity, and desire for meaning. Ignite is built to be human first: emotionally intelligent, intellectually serious, visually beautiful, and spiritually grounded in Catholic truth.
        </p>
        <div className="mt-10"><Button href="/onboarding">Start the onboarding</Button></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionHeader eyebrow="Formation language" title="A Catholic-Jesuit inspired rhythm for a new generation.">
          Ignite borrows the feel of a strong formation program: mission, identity, personal care, purpose, service, intellectual depth, and spiritual growth.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2">
          {formationPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <GlowCard key={pillar.title}>
                <Icon className="mb-8 h-7 w-7 text-igniteGold" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-igniteGold/80">{pillar.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.05em]">{pillar.title}</h2>
                <p className="mt-4 leading-8 text-white/60">{pillar.text}</p>
              </GlowCard>
            );
          })}
        </div>
      </section>
    </main>
  );
}
