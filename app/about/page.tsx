import { Metadata } from "next";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Me - Kunal Chavada",
  description: "Learn more about Kunal Chavada, an SEO Engineer with 1.5 years of proven experience",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <About />
      <Footer />
    </main>
  );
}

