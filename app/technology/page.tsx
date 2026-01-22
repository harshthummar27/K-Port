import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Technology from "@/components/sections/Technology";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Technology Stack - Kunal Chavada",
  description: "Explore the SEO tools, technical tools, and strategies I use to drive organic growth",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Technology />
      <Footer />
    </main>
  );
}

