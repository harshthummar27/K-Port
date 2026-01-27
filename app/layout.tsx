import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"; // 👈 add this
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Kunal Chavada | SEO Engineer & Digital Marketing Specialist",
  description:
    "SEO Engineer with 1.5 years of proven experience - Specializing in organic growth, technical SEO, and digital marketing strategies",
  keywords: [
    "SEO Engineer",
    "SEO Specialist",
    "Digital Marketing",
    "Organic Growth",
    "Technical SEO",
    "Keyword Research",
    "Link Building",
    "Google Analytics",
  ],
  authors: [{ name: "Kunalsinh Chavada" }],
  icons: {
    icon: "/images/favi-icon.png",
    shortcut: "/1737433149000.jpg",
    apple: "/1737433149000.jpg",
  },
  openGraph: {
    title: "Kunalsinh Chavada | SEO Engineer",
    description:
      "SEO Engineer with 1.5 years of proven experience in driving organic growth and improving search engine rankings",
    type: "website",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} font-sans bg-black text-white`}
        suppressHydrationWarning
      >
        {children}
        <Analytics /> {/* 👈 add this */}
      </body>
    </html>
  );
}
