"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/tools", label: "Instruments" },
  { href: "/teaching", label: "Teaching" },
  { href: "/presentations", label: "Presentations" },
  { href: "/cv", label: "CV" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-3 sm:h-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <Link href="/" className="font-semibold text-gray-900 tracking-tight">
          Alex Tyulyupo
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
