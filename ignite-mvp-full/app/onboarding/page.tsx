"use client";

import Button from "@/components/Button";
import GlowCard from "@/components/GlowCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
  {
    key: "worldview",
    eyebrow: "Starting point",
    title: "Where are you starting from?",
    helper: "No judgment. This just helps Ignite speak to your actual questions.",
    options: [
      { label: "I do not believe in God", value: "atheist" },
      { label: "I am unsure or open", value: "agnostic" },
      { label: "I am Muslim", value: "islam" },
      { label: "I am Jewish", value: "judaism" },
      { label: "I am Christian, but not Catholic", value: "christian" },
    ],
  },
  {
    key: "openness",
    eyebrow: "Openness",
    title: "How open do you feel right now?",
    helper: "It is okay if the honest answer is complicated.",
    options: [
      { label: "Curious but skeptical", value: "skeptical" },
      { label: "Open but confused", value: "open" },
      { label: "Searching seriously", value: "searching" },
      { label: "I genuinely want to grow closer to God", value: "ready" },
    ],
  },
  {
    key: "struggle",
    eyebrow: "Real life",
    title: "What feels most real lately?",
    helper: "This helps shape the tone of your daily reflections.",
    options: [
      { label: "I feel spiritually numb", value: "numb" },
      { label: "I feel overwhelmed", value: "overwhelmed" },
      { label: "I have questions no one answers well", value: "questions" },
      { label: "I want discipline and consistency", value: "discipline" },
    ],
  },
  {
    key: "goal",
    eyebrow: "Goal",
    title: "What do you want Ignite to help you build?",
    helper: "Start simple. One daily habit can change your spiritual life.",
    options: [
      { label: "Pray daily", value: "prayer" },
      { label: "Read scripture daily", value: "scripture" },
      { label: "Understand Catholicism", value: "catholicism" },
      { label: "Feel emotionally connected to God", value: "relationship" },
    ],
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  function select(value: string) {
    const updated = { ...answers, [current.key]: value };
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    } else {
      localStorage.setItem("ignite_onboarding", JSON.stringify(updated));
      router.push(`/pathways/${updated.worldview}`);
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12 pb-28 text-igniteCream">
      <div className="w-full max-w-3xl">
        <div className="mb-7">
          <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            <span>Ignite onboarding</span><span>{step + 1}/{questions.length}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-igniteGold transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <GlowCard className="p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-igniteGold">{current.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">{current.title}</h1>
          <p className="mt-4 text-lg leading-8 text-white/60">{current.helper}</p>
          <div className="mt-8 grid gap-4">
            {current.options.map((option) => (
              <button key={option.value} onClick={() => select(option.value)} className="group rounded-3xl border border-white/10 bg-igniteNavy/70 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-igniteGold/40 hover:bg-white/[0.07]">
                <span className="text-lg font-black tracking-[-0.02em] text-white/88 group-hover:text-igniteGold">{option.label}</span>
              </button>
            ))}
          </div>
          {step > 0 && <div className="mt-8"><Button variant="ghost" onClick={() => setStep(step - 1)}>Back</Button></div>}
        </GlowCard>
      </div>
    </main>
  );
}
