import Button from "@/components/Button";
import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";
import { formationPillars, journeySteps, landingStats, objections, pathways, resourceTracks, testimonials } from "@/lib/data";
import { ArrowRight, BookOpen, Flame, Quote, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden pb-28 text-igniteCream">
      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.05fr_.95fr] md:px-8 md:pb-28 md:pt-24">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-igniteGold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Not church as usual
          </div>
          <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.075em] md:text-8xl lg:text-9xl">
            For the ones who feel far from God.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66 md:text-xl md:leading-9">
            Ignite is a cinematic Catholic journey for teens who are skeptical, spiritually numb, disconnected, overwhelmed, or tired of fake Christianity — built to guide them through beauty, truth, prayer, scripture, and honest questions.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/onboarding" className="gap-3">Begin the journey <ArrowRight className="h-4 w-4" /></Button>
            <Button href="/about" variant="ghost">Explore the mission</Button>
          </div>
          <p className="mt-7 max-w-xl text-sm leading-6 text-white/42">
            No guilt. No cringe. No pressure tactics. Just a serious invitation to search for God with your whole heart and mind.
          </p>
        </div>

        <div className="relative reveal md:pl-4">
          <div className="absolute inset-0 rounded-[3rem] bg-igniteBlue/20 blur-3xl" />
          <div className="relative rounded-[2.75rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="rounded-[2.25rem] border border-white/10 bg-igniteNavy p-5">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#172554] via-igniteMidnight to-[#050816] p-6">
                <div className="absolute inset-0 noise opacity-20" />
                <div className="relative flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-white/60">Tonight</span>
                  <Flame className="h-5 w-5 text-igniteGold" />
                </div>
                <div className="relative mt-32">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-igniteGold">Daily reflection</p>
                  <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em]">
                    You do not have to fake belief to start searching.
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-white/60">
                    Start with one honest prayer. One scripture. One question. One step closer to truth.
                  </p>
                </div>
                <div className="relative mt-10 grid grid-cols-3 gap-3">
                  {landingStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                      <p className="text-2xl font-black text-igniteGold">{stat.value}</p>
                      <p className="mt-1 text-xs text-white/45">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-7 left-0 rounded-3xl border border-white/10 bg-igniteMidnight/90 p-5 shadow-2xl backdrop-blur md:-left-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">Current streak</p>
            <p className="mt-1 text-4xl font-black text-igniteGold">03</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8" id="mission">
        <SectionHeader eyebrow="The mission" title="A digital movement formed around honesty, beauty, and conversion.">
          Inspired by the clarity of Catholic-Jesuit formation — care for the whole person, purpose, service, and excellence — Ignite adapts that spirit for teenagers who may never click on a traditional church website.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-4">
          {formationPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <GlowCard key={pillar.title}>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-igniteGold/10 text-igniteGold">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-igniteGold/80">{pillar.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/56">{pillar.text}</p>
              </GlowCard>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-[2.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-10">
          <SectionHeader eyebrow="The journey" title="A simple path that feels personal, not preachy." />
          <div className="grid gap-5 md:grid-cols-3">
            {journeySteps.map((step) => (
              <div key={step.number} className="rounded-[2rem] border border-white/10 bg-igniteNavy/70 p-7">
                <p className="text-5xl font-black text-igniteGold/90">{step.number}</p>
                <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/56">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8" id="pathways">
        <SectionHeader eyebrow="Personalized pathways" title="Different starting points. One invitation toward truth.">
          Ignite creates respectful paths for atheists, agnostics, Muslims, Jews, and other Christians. The tone is thoughtful, serious, and never aggressive.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-5">
          {Object.entries(pathways).map(([key, path]) => (
            <Link key={key} href={`/pathways/${key}`} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-igniteGold/30 hover:bg-white/[0.075]">
              <BookOpen className="mb-10 h-6 w-6 text-igniteGold" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/38">Pathway</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.05em]">{path.label}</h3>
              <p className="mt-5 text-sm leading-6 text-white/52">{path.tone}</p>
              <ArrowRight className="mt-8 h-5 w-5 text-white/35 transition group-hover:translate-x-1 group-hover:text-igniteGold" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <SectionHeader eyebrow="Common objections" title="Built for teens who are tired of fake answers.">
            The experience is not argumentative. It acknowledges the emotional and intellectual reasons students may feel distant from God.
          </SectionHeader>
          <div className="grid gap-4">
            {objections.map((item) => (
              <GlowCard key={item.title}>
                <h3 className="text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/58">{item.text}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeader eyebrow="Core experience" title="Prayer, scripture, Catholic thought, and habit formation." center>
          The MVP focuses only on what matters: onboarding, pathways, daily prayer, daily scripture, reflection, basic streak tracking, sign-in, and a dashboard.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-3">
          {resourceTracks.map((track) => {
            const Icon = track.icon;
            return (
              <GlowCard key={track.title} className="text-center">
                <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-igniteGold/10 text-igniteGold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-black tracking-[-0.05em]">{track.title}</h3>
                <p className="mt-4 leading-7 text-white/56">{track.text}</p>
              </GlowCard>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8" id="voices">
        <SectionHeader eyebrow="Voices" title="The reaction Ignite is designed to create." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <GlowCard key={item.name}>
              <Quote className="mb-8 h-8 w-8 text-igniteGold" />
              <p className="text-xl leading-9 text-white/80">“{item.quote}”</p>
              <p className="mt-8 text-sm font-black uppercase tracking-[0.2em] text-igniteGold">{item.name}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 text-center md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-igniteGold">Start honestly</p>
        <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
          You do not have to be ready. You just have to be honest.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Take the onboarding quiz and receive a path based on where you are spiritually, emotionally, and intellectually.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/onboarding" className="gap-3">Begin now <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </section>
    </main>
  );
}
