"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, User, Code, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "/about", icon: User, hasDropdown: false },
  { name: "Technology", href: "/technology", icon: Code, hasDropdown: false },
  { name: "Experience", href: "/experience", icon: Briefcase, hasDropdown: false },
  { name: "Contact", href: "/contact", icon: Mail, hasDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setIsMounted(true);

    // Force dark theme for design
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("dark");
    }

    // Handle hash navigation after route change
    const handleHashNavigation = () => {
      if (
        typeof window !== "undefined" &&
        window.location.hash === "#contact" &&
        pathname === "/"
      ) {
        setTimeout(() => {
          const element = document.querySelector("#contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    handleHashNavigation();

    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScrollY = window.scrollY;

      // Update scrolled state for header styling
      setIsScrolled(currentScrollY > 20);

      // Show/hide bottom nav based on scroll direction (mobile only)
      if (window.innerWidth < 1280) {
        // xl breakpoint
        if (currentScrollY < 10) {
          // At the top, always show
          setShowBottomNav(true);
        } else if (currentScrollY > lastScrollY.current) {
          // Scrolling down - hide
          setShowBottomNav(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - show
          setShowBottomNav(true);
        }
      } else {
        // Desktop - always show
        setShowBottomNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      const element = document.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Container with padding - Left and Right padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-3 md:pt-4">
          {/* Professional Navigation Bar */}
          <nav
            className={`rounded-full transition-all duration-500 ${
              isScrolled
                ? "bg-gradient-to-br from-gray-900/95 via-gray-950/95 to-black/95 backdrop-blur-2xl shadow-2xl border border-white/5"
                : "bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 backdrop-blur-xl border border-white/5"
            }`}
            style={{
              boxShadow: isScrolled
                ? "0 8px 32px 0 rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
                : "0 4px 24px 0 rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03) inset",
            }}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 rounded-full transition-all duration-500 bg-gradient-to-r from-purple-500/3 via-transparent to-blue-500/3 pointer-events-none"></div>

            <div className="relative px-6 sm:px-8 py-3 md:py-4 flex items-center justify-between">
              {/* Logo/Brand */}
              <Link
                href="/"
                className="text-lg md:text-xl font-bold text-white hover:text-purple-400 transition-colors z-10"
              >
                KC
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden xl:flex items-center justify-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.href ||
                    (item.href === "/" && pathname === "");

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden z-10 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="xl:hidden mt-2 bg-gradient-to-br from-gray-900/95 via-gray-950/95 to-black/95 backdrop-blur-2xl border border-white/5 rounded-2xl overflow-hidden">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </header>
    </>
  );
}

