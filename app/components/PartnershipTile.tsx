"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { PartnershipCase } from "../data/content";

export default function PartnershipTile({ p }: { p: PartnershipCase }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  function handleMouseEnter() {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
  }

  function handleMouseLeave() {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setVideoReady(false);
  }

  return (
    <Link
      href={`/partnerships/${p.slug}`}
      className="group relative overflow-hidden rounded-2xl"
      style={{ aspectRatio: "4/3", display: "block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient fallback */}
      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />

      {/* Cover foto */}
      <img
        src={p.cover}
        alt={p.brand}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: videoReady ? 0 : 1 }}
      />

      {/* Hover video */}
      {p.hoverVideo && (
        <video
          ref={videoRef}
          src={p.hoverVideo}
          muted
          playsInline
          loop
          preload="none"
          onCanPlay={() => setVideoReady(true)}
          onPause={() => setVideoReady(false)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: videoReady ? 1 : 0 }}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, transparent 75%)" }}
      />

      {/* Hover label */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(0,0,0,0.15)" }}
      >
        <span className="text-[10px] tracking-widest uppercase text-white border border-white/40 px-4 py-2 rounded-full">
          Bekijk project
        </span>
      </div>

      {/* Tekst */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-[9px] tracking-widest uppercase text-white/60 block mb-0.5" style={{ fontWeight: 600 }}>
          {p.creator} · {p.year}
        </span>
        <h3 className="text-white" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", lineHeight: 1.2 }}>
          {p.brand}
        </h3>
      </div>
    </Link>
  );
}
