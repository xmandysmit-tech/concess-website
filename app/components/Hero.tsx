"use client";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #161210 0%, rgba(22,18,16,0.4) 50%, rgba(30,25,22,0.6) 100%)" }} />
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #3D3330 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #2C2420 0%, transparent 50%)`,
          }}
        />
        {/* Placeholder — replace with <video> or <Image> */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-white text-xs tracking-widest uppercase">
            Hero video / foto hier
          </span>
        </div>
      </div>

      {/* Label top-left */}
      <div className="absolute top-32 left-8 md:left-12">
        <span className="text-[10px] tracking-widest2 uppercase text-taupe-300 opacity-70">
          Creative Partnerships
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
        <div className="max-w-3xl">
          <h1
            className="text-white mb-6 leading-[0.95]"
            style={{
              fontFamily: "var(--font-serif), 'DM Serif Display', Georgia, serif",
              fontSize: "clamp(3.2rem, 7vw, 7.5rem)",
            }}
          >
            Campagnes die
            <br />
            <span className="italic">mensen</span> onthouden.
          </h1>
          <p className="text-linen-300/70 text-sm md:text-base leading-relaxed mb-10 max-w-md">
            Wij creëren strategische samenwerkingen tussen merken en creators
            die impact maken en resultaten opleveren.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#werk"
              className="inline-flex items-center gap-3 bg-linen-200 text-dark-900 px-6 py-3.5 rounded-full text-xs tracking-widest uppercase font-sans transition-all duration-300 hover:bg-white"
            >
              Bekijk ons werk
              <span className="text-base">→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-linen-300/30 text-linen-200 px-6 py-3.5 rounded-full text-xs tracking-widest uppercase font-sans transition-all duration-300 hover:border-linen-300/70"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 md:left-12 flex items-center gap-3 text-linen-300/40">
        <div className="w-5 h-8 border border-linen-300/20 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-linen-300/40 rounded-full animate-bounce" />
        </div>
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
      </div>
    </section>
  );
}
