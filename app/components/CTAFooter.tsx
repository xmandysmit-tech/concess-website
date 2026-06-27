export default function CTAFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-dark-900 py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2
            className="text-linen-200 leading-tight"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            }}
          >
            We don&apos;t chase campaigns.
            <br />
            <span className="italic text-taupe-300">
              We build long-term partnerships.
            </span>
          </h2>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-3 bg-linen-200 text-dark-900 px-8 py-4 rounded-full text-xs tracking-widest uppercase font-sans transition-all duration-300 hover:bg-white"
          >
            Contact <span className="text-sm leading-none">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-700 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <span
            className="text-linen-200 text-lg"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            CONCESS.
          </span>

          <div className="flex flex-wrap justify-center gap-8">
            {["Creators", "Partnerships", "Studio", "Over ons", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-[10px] tracking-widest uppercase text-linen-300/50 hover:text-linen-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-5 items-center">
            {[
              { name: "Instagram", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg> },
              { name: "TikTok", href: "#", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 000 12.68 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.02a4.85 4.85 0 01-1-.33z"/></svg> },
              { name: "Facebook", href: "#", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
              { name: "LinkedIn", href: "#", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
            ].map((s) => (
              <a key={s.name} href={s.href} title={s.name} className="text-linen-300/40 hover:text-linen-300 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-700 px-6 md:px-12">
          <p className="text-[10px] text-linen-300/30 tracking-wider" style={{ fontFamily: "var(--font-sans)" }}>
            © {new Date().getFullYear()} Concess. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
