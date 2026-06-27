"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const dark = scrolled || forceDark || menuOpen;

  const navItems = ["Home", "Creators", "Partnerships", "Studio", "Over ons"];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          dark
            ? { backgroundColor: "rgba(250,248,245,0.97)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-linen-300)" }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.25rem", color: dark ? "var(--color-dark-900)" : "white" }}
          >
            Concess.
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
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

          <div className="flex items-center gap-4">
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

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
            >
              <span className="block w-5 h-px transition-all duration-300" style={{ background: dark ? "var(--color-dark-900)" : "white", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "" }} />
              <span className="block w-5 h-px transition-all duration-300" style={{ background: dark ? "var(--color-dark-900)" : "white", opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-5 h-px transition-all duration-300" style={{ background: dark ? "var(--color-dark-900)" : "white", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col" style={{ background: "rgba(250,248,245,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-linen-300)" }}>
          {/* Logo row */}
          <div className="px-6 h-16 flex items-center justify-between">
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.25rem", color: "var(--color-dark-900)" }}>
              Concess.
            </Link>
            <button className="flex flex-col justify-center items-center w-8 h-8 gap-1.5" onClick={() => setMenuOpen(false)}>
              <span className="block w-5 h-px" style={{ background: "var(--color-dark-900)", transform: "rotate(45deg) translate(2px, 2px)" }} />
              <span className="block w-5 h-px" style={{ background: "var(--color-dark-900)", opacity: 0 }} />
              <span className="block w-5 h-px" style={{ background: "var(--color-dark-900)", transform: "rotate(-45deg) translate(2px, -2px)" }} />
            </button>
          </div>
          {/* Nav items */}
          <ul className="flex flex-col px-6 pt-4 pb-2 gap-4">
            {navItems.map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`;
              const isActive = pathname === href;
              return (
                <li key={item}>
                  <Link
                    href={href}
                    className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
                    style={{ color: "var(--color-dark-700)", fontWeight: isActive ? "700" : "400" }}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Contact */}
          <div className="px-6 pt-4 pb-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all"
              style={{ borderColor: "var(--color-dark-900)", color: "var(--color-dark-900)" }}
            >
              Contact <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
