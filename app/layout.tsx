import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alextyulyupo.com"),
  title: "Alex Tyulyupo",
  description:
    "Personal website of Alex Tyulyupo, researcher in organizational behavior, categories, and entrepreneurship.",
  authors: [{ name: "Alex Tyulyupo", url: "https://alextyulyupo.com" }],
  creator: "Alex Tyulyupo",
  publisher: "Alex Tyulyupo",
  openGraph: {
    title: "Alex Tyulyupo",
    description:
      "Research on organizational reconnaissance, categories, search, and entrepreneurship.",
    siteName: "Alex Tyulyupo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/alex-tyulyupo.jpg",
        width: 1122,
        height: 1402,
        alt: "Alex Tyulyupo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Alex Tyulyupo",
    description:
      "Research on organizational reconnaissance, categories, search, and entrepreneurship.",
    images: ["/alex-tyulyupo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-gray-100 py-8 mt-24">
          <div className="max-w-3xl mx-auto px-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Alex Tyulyupo
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
