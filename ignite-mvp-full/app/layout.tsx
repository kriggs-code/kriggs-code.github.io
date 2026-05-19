import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";
import MobileNav from "@/components/MobileNav";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Ignite | Begin Honestly",
  description: "A cinematic Catholic evangelization platform for spiritually curious teenagers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Background />
        <SiteHeader />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
