import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alex Tyulyupo",
  description:
    "Personal website of Alex Tyulyupo, researcher in organizational behavior, categories, and entrepreneurship.",
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
      </body>
    </html>
  );
}
