import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import CTAFooter from "../../components/CTAFooter";
import TrailerEmbed from "../../components/TrailerEmbed";
import { studioCases } from "../../data/content";

export function generateStaticParams() {
  return studioCases.map((c) => ({ slug: c.slug }));
}

function getYouTubeId(url: string) {
  return url.match(/(?:watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)?.[1] ?? null;
}

export default async function StudioCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = studioCases.find((c) => c.slug === slug);
  if (!project) notFound();

  const youtubeId = project.hoverVideo ? getYouTubeId(project.hoverVideo) : null;

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${project.cover})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(40px)", transform: "scale(1.1)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(30,28,26,0.5) 0%, var(--color-dark-900) 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12">
          <Link href="/studio" className="inline-flex items-center gap-2 hover:text-white/60 transition-colors text-xs tracking-widest uppercase mb-10" style={{ color: "rgba(255,255,255,0.3)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Studio
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-16">
            {/* Artwork */}
            <div className="flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ width: "clamp(200px, 28vw, 340px)", aspectRatio: "1/1" }}>
                <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              {project.tagline && (
                <span className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: "var(--color-taupe-400)" }}>
                  {project.tagline} <span style={{ opacity: 0.4, fontWeight: 700 }}>|</span> {project.tags.join(" · ")} · {project.year}
                </span>
              )}
              <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: "1", color: "white" }}>
                {project.title}{project.subtitle && <span className="italic" style={{ color: "var(--color-taupe-300)" }}>, {project.subtitle}</span>}
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
                {project.platformLink2 && (
                  <a href={project.platformLink2} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                    {project.platformLinkLabel2 ?? "Bekijk"}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((t) => (
                  <span key={t} className="text-[9px] tracking-wider uppercase px-3 py-1 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.3)" }}>{t}</span>
                ))}
              </div>

              {/* Hosts */}
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

              {/* Socials */}
              {project.socials && project.socials.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {project.socials.map((s) => (
                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase transition-colors hover:border-white/40"
                      style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}>
                      {s.platform}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      {project.stats && (
        <section className="py-10 md:py-14 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.stats.map((s, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-1" style={{ background: "var(--color-dark-900)" }}>
                <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "white", lineHeight: 1 }}>{s.value}</span>
                <span className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── THEATERPOSTERS ── */}
      {project.posters && project.posters.length > 0 && (
        <section className="pb-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase block mb-3" style={{ color: "var(--color-taupe-500)" }}>Theatertours</span>
          <div className="grid grid-cols-2 gap-4">
            {project.posters.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ aspectRatio: "2/3" }}>
                <img src={src} alt={`Poster ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── INSTAGRAM EMBED ── */}
      {project.instagramEmbed && (
        <section className="pb-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase block mb-3" style={{ color: "var(--color-taupe-500)" }}>Recap</span>
          <div className="flex justify-center">
            <iframe
              src={`${project.instagramEmbed}embed/`}
              className="rounded-2xl border-0"
              style={{ width: "100%", maxWidth: 540, minHeight: 600 }}
              scrolling="no"
              allowTransparency
            />
          </div>
        </section>
      )}

      {/* ── MILESTONE + GASTEN naast elkaar ── */}
      {(project.milestoneImg || project.guests?.length) && (
        <section className="pb-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-4">

            {/* Milestone */}
            {project.milestoneImg && (
              <div className="flex flex-col gap-3">
                <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--color-taupe-500)" }}>Mijlpaal</span>
                <div className="rounded-2xl overflow-hidden flex flex-row flex-1" style={{ aspectRatio: "16/9", background: "var(--color-dark-900)" }}>
                  <div className="flex-shrink-0" style={{ aspectRatio: "1/1", height: "100%" }}>
                    <img src={project.milestoneImg} alt="Mijlpaal" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 px-6 py-5 flex flex-col justify-center overflow-hidden">
                    <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1rem, 1.6vw, 1.6rem)", color: "white", lineHeight: 1.1 }}>
                      Waar we <span className="italic" style={{ color: "var(--color-taupe-300)" }}>trots</span> op zijn
                    </h2>
                    <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--color-taupe-400)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {project.milestoneText}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Gasten */}
            {project.guests && project.guests.length > 0 && (
              <div className="flex flex-col gap-3 h-full">
                <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--color-taupe-500)" }}>Gasten</span>
                <div className="rounded-2xl p-6 flex flex-col flex-1" style={{ background: "var(--color-dark-900)" }}>
                  <h3 className="mb-1" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", color: "white", lineHeight: 1.2 }}>
                    Spraakmakende gasten<br /><span className="italic" style={{ color: "var(--color-taupe-300)" }}>bij de Bennies</span>
                  </h3>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                    In seizoen 3 en 4 mochten we een aantal spraakmakende gasten verwelkomen in de studio van De Bennies. Van bekende YouTubers tot entertainers uit de Nederlandse scene. Elk gesprek bracht een unieke energie mee en zorgde voor enkele van de meest besproken afleveringen van het seizoen.
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {project.guests.map((g, i) => (
                      <div key={i} className="flex items-center gap-3 min-w-0">
                        <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: 36, height: 36 }}>
                          {g.img && <img src={g.img} alt={g.name} className="w-full h-full object-cover object-top" />}
                        </div>
                        <span className="text-[11px] leading-tight truncate" style={{ color: "rgba(255,255,255,0.6)" }}>{g.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── TRAILER ── */}
      {youtubeId && (
        <section className="pt-4 pb-12 md:pb-16 max-w-7xl mx-auto px-6 md:px-12">
          <TrailerEmbed youtubeId={youtubeId} />
        </section>
      )}

      <CTAFooter />
    </main>
  );
}
