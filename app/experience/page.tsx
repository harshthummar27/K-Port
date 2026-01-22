import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Experience - Kunal Chavada",
  description: "My professional experience in SEO, technical SEO, and digital marketing with 1.5 years of proven track record",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Experience />
      <Footer />
    </main>
  );
}

