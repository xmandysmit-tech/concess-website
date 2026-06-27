"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || forceDark;
  const pathname = usePathname();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        dark ? "border-b border-linen-300" : "bg-transparent"
      }`}
      style={dark ? { backgroundColor: "rgba(250,248,245,0.96)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.25rem", color: dark ? "var(--color-dark-900)" : "white" }}
        >
          Concess.
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {["Home", "Creators", "Partnerships", "Studio", "Over ons"].map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`;
            const isActive = pathname === href;
            return (
              <li key={item}>
                <Link
                  href={href}
                  className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                  style={{ color: dark ? "var(--color-dark-700)" : "white", fontWeight: isActive ? "700" : "400" }}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-300"
          style={
            dark
              ? { borderColor: "var(--color-dark-900)", color: "var(--color-dark-900)" }
              : { borderColor: "rgba(255,255,255,0.5)", color: "white" }
          }
        >
          Contact
          <span className="text-sm leading-none">→</span>
        </Link>
      </div>
    </nav>
  );
}
