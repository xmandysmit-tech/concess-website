import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import CTAFooter from "../../components/CTAFooter";
import TrailerEmbed from "../../components/TrailerEmbed";
import { partnershipCases } from "../../data/content";

export function generateStaticParams() {
  return partnershipCases.map((p) => ({ slug: p.slug }));
}

function getYouTubeId(url: string) {
  return url.match(/(?:watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1] ?? null;
}

export default async function PartnershipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = partnershipCases.find((p) => p.slug === slug);
  if (!project) notFound();

  const images = project.gallery.filter((g) => g.type === "image");
  const extraImages = images.slice(1);
  const youtubeId = project.hoverVideo ? getYouTubeId(project.hoverVideo) : null;

  // Verdeel gasten over seizoenen (max 2 per seizoen)
  const seasons = project.slug === "podimo-de-bennies"
    ? [
        { label: "Seizoen 2", year: "2024", desc: "Lancering exclusieve Podimo samenwerking. Direct in de top van de charts.", guestOffset: -1, guestCount: 0 },
        { label: "Seizoen 3", year: "2025", desc: "Fanbase groeide verder. Eerste grote mijlpaal: 1 miljoen streams.", guestOffset: 0, guestCount: 3 },
        { label: "Seizoen 4", year: "2025–2026", desc: "Meest ambitieuze seizoen met vernieuwde productiestijl.", guestOffset: 3, guestCount: 3 },
      ]
    : [];

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${project.cover})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(40px)", transform: "scale(1.1)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(30,28,26,0.5) 0%, var(--color-dark-900) 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12">
          <Link href="/partnerships" className="inline-flex items-center gap-2 hover:text-white/60 transition-colors text-xs tracking-widest uppercase mb-10" style={{ color: "rgba(255,255,255,0.3)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Partnerships
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-16">
            {/* Artwork */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full" style={{ width: "clamp(200px, 28vw, 340px)", minHeight: 240, aspectRatio: "1/1" }}>
                <img src={project.cover} alt={project.brand} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              {project.tagline && <span className="text-[10px] tracking-widest uppercase mb-2 block" style={{ color: "var(--color-taupe-400)" }}>{project.tagline}</span>}
              <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: "1", color: "white" }}>
                {project.brand} <span className="italic" style={{ color: "var(--color-taupe-300)" }}>× {project.creator}</span>
              </h1>
              <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                {project.platformLink && (
                  <a href={project.platformLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase" style={{ background: "white", color: "var(--color-dark-900)", fontWeight: 600 }}>
                    {project.platformLinkLabel ?? "Bekijk"}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                )}
                <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>{project.category} · {project.year}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.services.map((s) => (
                  <span key={s} className="text-[9px] tracking-wider uppercase px-3 py-1 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}>{s}</span>
                ))}
              </div>

              {/* Hosts inline onder intro */}
              {project.creatorProfiles && (
                <div className="flex items-center gap-5 mt-7 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {project.creatorProfiles.map((c) => (
                    <div key={c.name} className="flex items-center gap-2.5">
                      <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: 36, height: 36 }}>
                        <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top" />
                      </div>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Serif Display', Georgia, serif" }}>{c.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ── SEIZOENEN + GASTEN ── */}
      {seasons.length > 0 && (
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-6">De samenwerking</span>
          <div className="grid md:grid-cols-3 gap-3">
            {seasons.map((s) => {
              const seasonGuests = s.guestCount > 0 ? (project.guests?.slice(s.guestOffset, s.guestOffset + s.guestCount) ?? []) : [];
              return (
                <div key={s.label} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "var(--color-dark-900)" }}>
                  <div>
                    <span className="text-[9px] tracking-widest uppercase mb-2 block" style={{ color: "var(--color-taupe-600)" }}>{s.year}</span>
                    <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.2rem", color: "white" }}>{s.label}</h3>
                    <p className="text-xs leading-relaxed mt-2" style={{ color: "var(--color-taupe-400)", fontFamily: "'Playfair Display', Georgia, serif" }}>{s.desc}</p>
                  </div>
                  {/* Gasten */}
                  {seasonGuests.length > 0 && (
                    <div className="pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                      <span className="text-[9px] tracking-widest uppercase mb-3 block" style={{ color: "var(--color-taupe-600)" }}>Gasten</span>
                      <div className="flex gap-3">
                        {seasonGuests.map((g, i) => (
                          <div key={i} className="flex flex-col items-center gap-1.5" style={{ width: 56 }}>
                            <div className="rounded-xl overflow-hidden w-full flex items-center justify-center" style={{ aspectRatio: "3/4", background: "rgba(255,255,255,0.06)" }}>
                              {g.img
                                ? <img src={g.img} alt={g.name} className="w-full h-full object-cover object-top" />
                                : <span className="text-[8px] text-center px-1" style={{ color: "rgba(255,255,255,0.2)" }}>Foto volgt</span>
                              }
                            </div>
                            <p className="text-[9px] text-center leading-tight" style={{ color: "rgba(255,255,255,0.4)" }}>{g.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── MILESTONE + TRAILER naast elkaar ── */}
      <section className="pb-12 md:pb-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-4">

          {/* Milestone */}
          {project.stats?.some(s => s.label.toLowerCase().includes("stream")) && (
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--color-taupe-500)" }}>Mijlpaal</span>
              <div className="rounded-2xl overflow-hidden flex flex-row" style={{ aspectRatio: "16/9", background: "var(--color-dark-900)" }}>
                {/* Foto links — vierkant (hoogte = kaardhoogte) */}
                <div className="flex-shrink-0" style={{ aspectRatio: "1/1", height: "100%" }}>
                  <img
                    src="/images/Partnerships/de-bennies/podimo-s2/miljoen.jpg"
                    alt="1 Miljoen Streams"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Tekst rechts */}
                <div className="flex-1 px-6 py-5 flex flex-col justify-center overflow-hidden">
                  <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1rem, 1.6vw, 1.6rem)", color: "white", lineHeight: 1.1 }}>
                    Waar we <span className="italic" style={{ color: "var(--color-taupe-300)" }}>trots</span> op zijn
                  </h2>
                  <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--color-taupe-400)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                    De Bennies podcast stond vrijwel direct op #1 in de Top Podcasts Netherlands chart. Met 10 afleveringen online nog steeds top 5 — en als een van de eersten met video op Spotify. Binnen 5 afleveringen al <strong style={{ color: "white" }}>1 miljoen streams</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Trailer */}
          {youtubeId && <TrailerEmbed youtubeId={youtubeId} />}
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
