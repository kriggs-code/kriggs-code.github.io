"use client";

import Button from "@/components/Button";
import GlowCard from "@/components/GlowCard";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function signIn() {
    if (!supabase) {
      setMessage("Supabase is not connected yet. Add your environment variables in .env.local or Vercel.");
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: typeof window !== "undefined" ? `${window.location.origin}/dashboard` : undefined },
    });
    setMessage(error ? error.message : "Check your email for the sign-in link.");
  }

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-16 pb-28 text-igniteCream">
      <div className="w-full max-w-md">
        <GlowCard className="p-8">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-igniteGold">Sign in</p>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.06em]">Continue your journey.</h1>
          <p className="mt-5 leading-7 text-white/60">Use your email to save your progress, streak, prayers, and reflections.</p>
          <input type="email" placeholder="you@example.com" className="mt-8 w-full rounded-3xl border border-white/10 bg-black/25 p-5 text-white outline-none placeholder:text-white/30 focus:border-igniteGold/50" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="mt-5"><Button onClick={signIn}>Send magic link</Button></div>
          {message && <p className="mt-5 text-sm font-bold text-igniteGold">{message}</p>}
        </GlowCard>
      </div>
    </main>
  );
}
