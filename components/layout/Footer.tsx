"use client";

import {
  Linkedin,
  Mail,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Technology", href: "/technology" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:kunalsinh009@gmail.com" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kunalsinh-chavda-3a567b250/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/chavda_kunalsinh",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        {/* Professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-gray-950/50 to-transparent"></div>
        {/* Subtle accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Footer Card */}
        <div className="bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden mb-8">
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
          {/* Inner border */}
          <div className="absolute inset-[1px] rounded-2xl border border-white/5"></div>

          <div className="relative z-10">
            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* First Column - Brand Highlight */}
              <div className="text-center md:text-left">
                {/* Profile Image */}
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-white/20 backdrop-blur-sm p-0.5 overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <Image
                        src="/1737433149000.jpg"
                        alt="Kunal Chavada"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full grayscale"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <h2 className="text-white font-bold text-xl md:text-2xl mb-2 tracking-tight">
                  Kunal Chavada
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  SEO Engineer & Digital Marketing Specialist
                </p>
              </div>

              {/* Second Column - Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm group flex items-center gap-2 cursor-pointer font-medium"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200 text-purple-400/60 group-hover:text-purple-400">
                          →
                        </span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Third Column - Social Links */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
                  Connect
                </h3>

                {/* Social Icons */}
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200 group"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Professional Styling */}
        <div className="border-t border-white/5 bg-gradient-to-r from-transparent via-white/5 to-transparent py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Copyright */}
            <div className="text-white/50 text-sm font-medium">
              © {currentYear} Kunal Chavada. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
