import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Me - Kunal Chavada",
  description: "Get in touch with Kunal Chavada for your SEO projects. Let's discuss your organic growth strategy.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}

