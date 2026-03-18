import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Me - Kunalsinh Chavda",
  description: "Get in touch with Kunalsinh Chavda for your SEO projects. Let's discuss your organic growth strategy.",
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

