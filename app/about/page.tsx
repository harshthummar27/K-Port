import { Metadata } from "next";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Me - Kunalsinh Chavda",
  description: "Learn more about Kunalsinh Chavda, an SEO Engineer with 1.5 years of proven experience",
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

