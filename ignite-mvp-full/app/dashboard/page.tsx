"use client";

import Button from "@/components/Button";
import GlowCard from "@/components/GlowCard";
import { dashboardCards, scriptures } from "@/lib/data";
import { useEffect, useMemo, useState } from "react";

export default function DashboardPage() {
  const [streak, setStreak] = useState(0);
  const [reflection, setReflection] = useState("");
  const [saved, setSaved] = useState(false);
  const scripture = useMemo(() => scriptures[new Date().getDate() % scriptures.length], []);

  useEffect(() => {
    const stored = localStorage.getItem("ignite_streak");
    if (stored) setStreak(Number(stored));
  }, []);

  function completeToday() {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem("ignite_last_date");
    const newStreak = lastDate === today ? streak : streak + 1;
    setStreak(newStreak);
    localStorage.setItem("ignite_streak", String(newStreak));
    localStorage.setItem("ignite_last_date", today);
    localStorage.setItem("ignite_last_reflection", JSON.stringify({ scripture, reflection, createdAt: new Date().toISOString() }));
    setSaved(true);
  }

  return (
    <main className="pb-28 text-igniteCream">
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-igniteGold">Daily dashboard</p>
        <h1 className="mt-5 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.075em] md:text-8xl">Build the fire slowly.</h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-white/62">One prayer. One scripture. One honest reflection. That is enough for today.</p>

        <div className="mt-12 grid gap-5 md:grid-cols-[.8fr_1.2fr]">
          <GlowCard>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/40">Current streak</p>
            <p className="mt-5 text-7xl font-black text-igniteGold">{streak}</p>
            <p className="mt-2 text-white/50">days of returning</p>
          </GlowCard>

          <GlowCard>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-igniteGold">Today’s scripture</p>
            <p className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em]">“{scripture.verse}”</p>
            <p className="mt-5 font-bold text-white/45">{scripture.reference}</p>
          </GlowCard>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {dashboardCards.map((card) => {
            const Icon = card.icon;
            return (
              <GlowCard key={card.title}>
                <Icon className="mb-7 h-6 w-6 text-igniteGold" />
                <h2 className="text-2xl font-black tracking-[-0.04em]">{card.title}</h2>
                <p className="mt-3 leading-7 text-white/55">{card.text}</p>
              </GlowCard>
            );
          })}
        </div>

        <div className="mt-5">
          <GlowCard className="p-7 md:p-10">
            <label className="text-xs font-bold uppercase tracking-[0.28em] text-igniteGold">Reflection</label>
            <textarea value={reflection} onChange={(e) => setReflection(e.target.value)} placeholder="What stood out? What question are you carrying? What do you want to ask God?" className="mt-5 min-h-44 w-full rounded-3xl border border-white/10 bg-black/25 p-5 leading-7 text-white outline-none placeholder:text-white/30 focus:border-igniteGold/50" />
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button onClick={completeToday}>Complete today</Button>
              {saved && <p className="text-sm font-bold text-igniteGold">Saved. Keep showing up.</p>}
            </div>
          </GlowCard>
        </div>
      </section>
    </main>
  );
}
