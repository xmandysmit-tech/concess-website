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
            {["Werk", "Creators", "Partnerships", "Studio", "Over ons", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-[10px] tracking-widest uppercase text-linen-300/50 hover:text-linen-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            {["Instagram", "YouTube", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[10px] tracking-widest uppercase text-linen-300/50 hover:text-linen-300 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-dark-700">
          <p className="text-[10px] text-linen-300/30 tracking-wider">
            © {new Date().getFullYear()} Concess. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
