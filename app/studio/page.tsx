"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import { projects, studioCases } from "../data/content";

const studioProjects = projects.filter((p) =>
  ["Video", "Fotografie", "Events", "Design", "AR Filters", "Graphic Design", "Marketing & Social", "Web Design", "Podcasts"].includes(p.type)
);

const filters = [
  { label: "Alles",              type: null },
  { label: "Video & Productie",  type: "Productie" },
  { label: "Fotografie",         type: "Fotografie" },
  { label: "Events",             type: "Events" },
  { label: "AR Filters",         type: "AR Filters" },
  { label: "Graphic Design",     type: "Graphic Design" },
  { label: "Marketing & Social", type: "Marketing & Social" },
  { label: "Web Design",         type: "Web Design" },
  { label: "Podcasts",           type: "Podcasts" },
];

const CASE_ORDER = [
  "de-bennies-podcast",
  "tantoe-muzikaal",
  "vrouwmibo-podcast",
  "dionne-slagter",
  "open-kaart",
  "stuktv-fotografie",
  "kinderpostzegelactie",
  "lash-paris",
  "taboe-nesim",
  "paul-sinha",
  "milans-throwback-thursday",
  "britt-scholte-graphic-design",
  "kp-active-fotografie",
  "ronnie-flex-8-tour",
  "boef-tour",
  "gogo-podcast-vormgeving",
  "logos",
  "sophie-milzink-fotografie",
  "nickelodeon-festival",
  "oscar-jane-britt-scholte",
  "the-roast-of-ali-b",
  "fotografie",
  "bootje-antoon-paul-sinha",
  "whip-my-hair",
  "kes-van-den-broek",
  "getekend-voor-het-leven",
  "the-roast-of-dutch-performante",
  "youtune",
  "grote-jongens",
  "snelle-in-mn-bloed",
  "nick-simon-waarom",
  "nina-warink-wazig",
  "miljuschka-magazine",
  "nina-warink-simpel-sexy",
  "nina-warink-mijn-tweede-liefde",
  "mollenstreken-lavezzi-rutjes",
  "viral-festival-amsterdam",
  "the-wardrobe-organizer",
  "wout",
  "tante-soof",
  "iconic-by-dyson",
  "dutch-performante-emma-sleep",
  "dutch-performante-vpcars-bmw",
  "milan-knol-focus-drink",
  "bram-in-controle",
  "milan-knol-world-of-warships",
];

const orderedCases = [
  ...CASE_ORDER.map((slug) => studioCases.find((c) => c.slug === slug)).filter(Boolean) as typeof studioCases,
  ...studioCases.filter((c) => !c.slug || !CASE_ORDER.includes(c.slug)),
];

const LOAD_MORE_INITIAL = 12;

function StudioContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(
    searchParams.get("filter") ?? null
  );
  const [visibleCount, setVisibleCount] = useState(LOAD_MORE_INITIAL);

  function handleFilter(type: string | null) {
    setActiveFilter(type);
    setVisibleCount(LOAD_MORE_INITIAL);
    const url = type ? `/studio?filter=${encodeURIComponent(type)}` : "/studio";
    router.replace(url, { scroll: false });
  }

  const filteredCases = activeFilter === null
    ? orderedCases
    : orderedCases.filter((c) => c.tags.includes(activeFilter));

  const shownCases = activeFilter !== null
    ? filteredCases
    : filteredCases.slice(0, visibleCount);

  const shown = activeFilter === null
    ? studioProjects
    : studioProjects.filter((p) => p.type === activeFilter);

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Header */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24 md:pt-36 pb-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: "1", color: "white" }}>
              Concess <span className="italic" style={{ color: "var(--color-taupe-300)" }}>studio</span>
            </h1>
            <p className="text-linen-300/40 text-sm leading-relaxed max-w-xs">
              Naast onze management en partnership tak heeft Concess een creative studio. Van podcasts en producties tot AR Filters en graphic design.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header + filters */}
          <div className="mb-10">
            <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-3">Concess Studio</span>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", lineHeight: "1.1", color: "var(--color-dark-900)" }} className="mb-8">
              Producties & Projecten <span className="italic">waar we trots op zijn</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => {
                const isActive = activeFilter === f.type;
                return (
                  <button
                    key={f.label}
                    onClick={() => handleFilter(f.type)}
                    className="text-[10px] tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200"
                    style={{
                      background: isActive ? "var(--color-dark-900)" : "transparent",
                      color: isActive ? "var(--color-linen-200)" : "var(--color-taupe-500)",
                      borderColor: isActive ? "var(--color-dark-900)" : "var(--color-linen-300)",
                    }}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid — studio cases bovenaan, dan reguliere projecten */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {shownCases.map((c) => {
              const tileInner = (
                <>
                  <img src={c.cover} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* Frosted glass balk */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 px-3 py-2.5 md:px-4 md:py-3" style={{ background: "rgba(14,11,9,0.58)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ minWidth: 0 }}>
                      <span className="text-[8px] md:text-[9px] tracking-wider uppercase block mb-0.5" style={{ color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>
                        <span className="md:hidden">{c.tags[0]}</span>
                        <span className="hidden md:inline">{c.tags.slice(0, 2).join(" · ")}{c.tags.length > 2 ? ` +${c.tags.length - 2}` : ""}</span>
                      </span>
                      <h3 className="text-white" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(0.82rem, 3.8vw, 1.15rem)", lineHeight: 1.2, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {c.tileTitle ?? (c.title + (c.subtitle ? ` – ${c.subtitle}` : ""))}
                      </h3>
                    </div>
                    {c.slug && (
                      <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.06)" }}>
                        <svg width="9" height="9" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    )}
                  </div>
                </>
              );
              return c.slug ? (
                <Link key={c.slug} href={`/studio/${c.slug}`} className="relative overflow-hidden rounded-xl group" style={{ aspectRatio: "4/3" }}>
                  {tileInner}
                </Link>
              ) : (
                <div key={c.title} className="relative overflow-hidden rounded-xl group" style={{ aspectRatio: "4/3" }}>
                  {tileInner}
                </div>
              );
            })}

            {shown.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group"
                style={{ aspectRatio: "4/3" }}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.brand}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                )}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[8px] tracking-widest uppercase text-white/40 block mb-0.5">{p.type}</span>
                  <h3 className="text-white text-sm" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>{p.brand}</h3>
                  {p.creator && <p className="text-white/35 text-[10px] mt-0.5">{p.creator}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Laad Meer knop */}
          {activeFilter === null && visibleCount < filteredCases.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setVisibleCount((v) => v + LOAD_MORE_INITIAL)}
                className="text-[10px] tracking-widest uppercase px-8 py-3 rounded-full border transition-all duration-200"
                style={{ borderColor: "var(--color-linen-300)", color: "var(--color-taupe-500)", background: "transparent" }}
              >
                Laad Meer
              </button>
            </div>
          )}
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}

export default function StudioPage() {
  return (
    <Suspense>
      <StudioContent />
    </Suspense>
  );
}
