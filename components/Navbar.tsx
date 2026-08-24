"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/presentations", label: "Presentations" },
  { href: "/cv", label: "CV" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [isObscured, setIsObscured] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsObscured(false);
      return;
    }

    const obscurers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-obscurer]")
    );
    let animationFrame = 0;

    const updateObscuredState = () => {
      const nav = navRef.current;
      if (!nav) return;

      const navBottom = nav.getBoundingClientRect().bottom;
      const cloudCrossesNav = obscurers.some((obscurer) => {
        const styles = window.getComputedStyle(obscurer);
        if (styles.display === "none" || styles.visibility === "hidden") {
          return false;
        }

        const rect = obscurer.getBoundingClientRect();
        return rect.top < navBottom && rect.bottom > 0;
      });

      setIsObscured((current) =>
        current === cloudCrossesNav ? current : cloudCrossesNav
      );
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateObscuredState);
    };

    updateObscuredState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    obscurers.forEach((obscurer) =>
      obscurer.addEventListener("load", scheduleUpdate)
    );

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      obscurers.forEach((obscurer) =>
        obscurer.removeEventListener("load", scheduleUpdate)
      );
    };
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-hidden={isObscured || undefined}
      className={`sticky top-0 border-b border-gray-100 bg-white transition-opacity duration-150 ${
        isObscured
          ? "pointer-events-none z-0 opacity-0"
          : "z-50 opacity-100"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-3 sm:h-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <Link
          href="/"
          tabIndex={isObscured ? -1 : undefined}
          className="font-semibold text-gray-900 tracking-tight"
        >
          Alex Tyulyupo
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              tabIndex={isObscured ? -1 : undefined}
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
