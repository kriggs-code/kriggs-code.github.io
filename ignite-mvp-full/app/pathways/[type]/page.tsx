import Button from "@/components/Button";
import GlowCard from "@/components/GlowCard";
import { PathwayKey, pathways } from "@/lib/data";
import { ArrowRight, BookOpen, Flame } from "lucide-react";

export default function PathwayPage({ params }: { params: { type: string } }) {
  const type = (params.type in pathways ? params.type : "agnostic") as PathwayKey;
  const pathway = pathways[type];

  return (
    <main className="pb-28 text-igniteCream">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-igniteGold">Your pathway / {pathway.label}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-8xl">{pathway.title}</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">{pathway.subtitle}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <GlowCard>
            <BookOpen className="mb-8 h-7 w-7 text-igniteGold" />
            <h2 className="text-3xl font-black tracking-[-0.05em]">Questions this path explores</h2>
            <div className="mt-6 grid gap-3">
              {pathway.questions.map((question) => (
                <div key={question} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white/72">{question}</div>
              ))}
            </div>
          </GlowCard>

          <GlowCard>
            <Flame className="mb-8 h-7 w-7 text-igniteGold" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-igniteGold">Start with this prayer</p>
            <p className="mt-5 text-3xl font-black leading-tight tracking-[-0.05em]">“{pathway.prayer}”</p>
            <p className="mt-6 leading-8 text-white/55">This is not about pretending to believe. It is about giving God one honest opening.</p>
          </GlowCard>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/dashboard" className="gap-3">Go to daily dashboard <ArrowRight className="h-4 w-4" /></Button>
          <Button href="/onboarding" variant="ghost">Retake onboarding</Button>
        </div>
      </section>
    </main>
  );
}
