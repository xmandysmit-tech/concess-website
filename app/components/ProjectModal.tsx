"use client";
import { useEffect, useState } from "react";
import { PartnershipCase } from "../data/content";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: PartnershipCase;
  onClose: () => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveIdx((i) => Math.min(i + 1, project.gallery.length - 1));
      if (e.key === "ArrowLeft") setActiveIdx((i) => Math.max(i - 1, 0));
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, project.gallery.length]);

  const active = project.gallery[activeIdx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full md:max-w-5xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row"
        style={{ background: "var(--color-dark-900)", maxHeight: "92vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Media viewer */}
        <div className="relative flex-1 bg-black" style={{ minHeight: "240px", maxHeight: "55vh" }}>
          {active.type === "image" ? (
            <img
              src={active.src}
              alt={active.alt ?? project.brand}
              className="w-full h-full object-contain"
              style={{ maxHeight: "55vh" }}
            />
          ) : (
            <video
              src={active.src}
              poster={"poster" in active ? active.poster : undefined}
              controls
              className="w-full h-full object-contain"
              style={{ maxHeight: "55vh" }}
            />
          )}

          {/* Gallery thumbs */}
          {project.gallery.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-4">
              {project.gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="overflow-hidden rounded-lg transition-all"
                  style={{
                    width: 44,
                    height: 30,
                    border: i === activeIdx ? "2px solid white" : "2px solid transparent",
                    opacity: i === activeIdx ? 1 : 0.5,
                  }}
                >
                  {item.type === "image" ? (
                    <img src={item.src} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-white/20 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><path d="M2 1l7 4-7 4V1z"/></svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info panel */}
        <div className="w-full md:w-72 flex flex-col p-7 overflow-y-auto" style={{ minHeight: 0 }}>
          <div className="mb-6">
            <span className="text-[9px] tracking-widest uppercase mb-3 block" style={{ color: "var(--color-taupe-500)" }}>
              {project.category} · {project.year}
            </span>
            <h2
              className="text-white leading-tight mb-1"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.6rem" }}
            >
              {project.brand}
            </h2>
            <p className="text-sm" style={{ color: "var(--color-taupe-500)" }}>
              {project.creator}
            </p>
          </div>

          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-taupe-400)" }}>
            {project.description}
          </p>

          <div>
            <span className="text-[9px] tracking-widest uppercase mb-3 block" style={{ color: "var(--color-taupe-600)" }}>
              Services
            </span>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
