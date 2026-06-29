import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import CTAFooter from "../../components/CTAFooter";
import { partnershipCases } from "../../data/content";

export function generateStaticParams() {
  return partnershipCases.map((p) => ({ slug: p.slug }));
}

export default async function PartnershipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = partnershipCases.find((p) => p.slug === slug);
  if (!project) notFound();

  const images = project.gallery.filter((g) => g.type === "image");
  const extraImages = images.slice(1);

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        {/* Vage achtergrond van de cover */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${project.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px)",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(30,28,26,0.6) 0%, var(--color-dark-900) 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16">
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-2 hover:text-white/60 transition-colors text-xs tracking-widest uppercase mb-12"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Partnerships
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">
            {/* Artwork / cover */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ width: "clamp(160px, 25vw, 260px)", aspectRatio: "1/1" }}>
                <img src={project.cover} alt={project.brand} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 pb-2">
              {project.tagline && (
                <span className="text-[10px] tracking-widest uppercase mb-3 block" style={{ color: "var(--color-taupe-400)" }}>
                  {project.tagline}
                </span>
              )}
              <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: "1", color: "white" }}>
                {project.brand}{" "}
                <span className="italic" style={{ color: "var(--color-taupe-300)" }}>
                  × {project.creator}
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                {project.platformLink && (
                  <a
                    href={project.platformLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all"
                    style={{ background: "white", color: "var(--color-dark-900)", fontWeight: 600 }}
                  >
                    {project.platformLinkLabel ?? "Bekijk"}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {project.category} · {project.year}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.services.map((s) => (
                  <span key={s} className="text-[9px] tracking-wider uppercase px-3 py-1 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.35)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      {project.stats && project.stats.length > 0 && (
        <section style={{ background: "var(--color-dark-800)" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.stats.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase mt-1" style={{ color: "var(--color-taupe-500)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CREATORS ── */}
      {project.creatorProfiles && project.creatorProfiles.length > 0 && (
        <section className="py-14 md:py-20 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-8">De hosts</span>
          <div className="flex gap-6 flex-wrap">
            {project.creatorProfiles.map((c) => (
              <div key={c.name} className="flex items-center gap-4">
                <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: 56, height: 56 }}>
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1rem" }} className="text-dark-900">
                    {c.name}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase text-taupe-500">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── GALERIJ ── */}
      {extraImages.length > 0 && (
        <section className="pb-16 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-8">Beeldmateriaal</span>
          <div className={`grid gap-3 ${extraImages.length === 1 ? "grid-cols-1" : extraImages.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3"}`}>
            {extraImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
                <img
                  src={img.src}
                  alt={"alt" in img ? img.alt ?? project.brand : project.brand}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <CTAFooter />
    </main>
  );
}
