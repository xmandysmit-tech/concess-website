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
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.stats.map((s) => (
                <div key={s.label} className="relative">
                  {/* Subtiele scheidingslijn links, behalve eerste */}
                  <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "white", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase mt-2" style={{ color: "var(--color-taupe-500)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SEIZOENEN TIJDLIJN ── */}
      {project.slug === "podimo-de-bennies" && (
        <section className="py-14 md:py-20 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-10">De samenwerking</span>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Seizoen 2", year: "2024", desc: "Lancering van de exclusieve Podimo samenwerking. Direct een hit — het seizoen stond vrijwel meteen in de top van de charts." },
              { label: "Seizoen 3", year: "2025", desc: "Voortbouwend op het succes van seizoen 2 groeide de fanbase verder. Meer episodes, meer bereik en de eerste grote mijlpaal: 1 miljoen streams." },
              { label: "Seizoen 4", year: "2025 – 2026", desc: "Het meest ambitieuze seizoen tot nu toe. Met een frisse look en vernieuwde productiestijl zette Concess de lat nog hoger." },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-7" style={{ background: "var(--color-dark-900)" }}>
                <span className="text-[9px] tracking-widest uppercase mb-3 block" style={{ color: "var(--color-taupe-600)" }}>{s.year}</span>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.4rem", color: "white" }} className="mb-3">
                  {s.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-taupe-400)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── MILESTONE BANNER ── */}
      {project.stats?.some(s => s.label.toLowerCase().includes("stream")) && (
        <section className="py-14 md:py-20 max-w-7xl mx-auto px-6 md:px-12">
          <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row" style={{ background: "var(--color-dark-900)" }}>
            {/* Artwork blok */}
            <div className="flex-shrink-0 flex items-center justify-center p-10 md:p-14" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ width: "clamp(140px, 18vw, 220px)", aspectRatio: "1/1" }}>
                <img src={project.cover} alt="Milestone" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Tekst */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-14">
              <span className="text-[10px] tracking-widest uppercase mb-4 block" style={{ color: "var(--color-taupe-500)" }}>Mijlpaal</span>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "white", lineHeight: 1.1 }}>
                Waar we <span className="italic" style={{ color: "var(--color-taupe-300)" }}>trots</span> op zijn
              </h2>
              <p className="mt-5 text-sm leading-relaxed max-w-lg" style={{ color: "var(--color-taupe-400)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                De Bennies podcast heeft sinds de lancering indrukwekkend gepresteerd. Het seizoen stond vrijwel direct op #1 in de Top Podcasts Netherlands chart. Ruim 2,5 maand later, met 10 afleveringen online, stond de podcast nog steeds in de top 5. Bovendien behoort De Bennies tot de eerste grote podcastmakers die video toevoegden aan hun podcast op Spotify — en dat alles binnen 5 afleveringen al goed voor <strong style={{ color: "white" }}>1 miljoen streams</strong>.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── HOSTS ── */}
      {project.creatorProfiles && project.creatorProfiles.length > 0 && (
        <section className="pb-14 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-8">De hosts</span>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {project.creatorProfiles.map((c) => (
              <div key={c.name} className="flex flex-col items-center text-center gap-3">
                <div className="rounded-2xl overflow-hidden w-full" style={{ aspectRatio: "3/4" }}>
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "0.9rem" }} className="text-dark-900 leading-tight">
                    {c.name}
                  </p>
                  <p className="text-[9px] tracking-widest uppercase text-taupe-500 mt-0.5">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── GASTEN ── */}
      {project.guests && project.guests.length > 0 && (
        <section className="pb-14 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-8">Seizoensgasten</span>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {project.guests.map((g, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="rounded-2xl overflow-hidden w-full flex items-center justify-center" style={{ aspectRatio: "3/4", background: "var(--color-linen-300)" }}>
                  {g.img
                    ? <img src={g.img} alt={g.name} className="w-full h-full object-cover object-top" />
                    : <span className="text-[10px] tracking-widest uppercase text-taupe-400">Foto volgt</span>
                  }
                </div>
                <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "0.9rem" }} className="text-dark-900 leading-tight">
                  {g.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── TRAILER VIDEO ── */}
      {project.hoverVideo && project.hoverVideo.includes("youtube") && (
        <section className="pb-4 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-8">Trailer</span>
          <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9", background: "var(--color-dark-900)" }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.hoverVideo.match(/(?:watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1]}?rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none" }}
            />
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
