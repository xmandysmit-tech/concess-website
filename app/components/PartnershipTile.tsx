"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { PartnershipCase } from "../data/content";

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function PartnershipTile({ p }: { p: PartnershipCase }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [showIframe, setShowIframe] = useState(!!p.alwaysPlay);

  const youtubeId = p.hoverVideo ? getYouTubeId(p.hoverVideo) : null;
  const isYouTube = !!youtubeId;

  function handleMouseEnter() {
    if (isYouTube) {
      setShowIframe(true);
    } else if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }

  function handleMouseLeave() {
    if (isYouTube && !p.alwaysPlay) {
      setShowIframe(false);
      setVideoReady(false);
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setVideoReady(false);
    }
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

      {/* YouTube iframe hover */}
      {isYouTube && showIframe && (
        <>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&fs=0`}
            allow="autoplay"
            className="absolute pointer-events-none"
            style={{
              border: "none",
              opacity: videoReady ? 1 : 0,
              transition: "opacity 0.6s ease 0.8s",
              width: "177.78%",
              height: "177.78%",
              top: "-38.89%",
              left: "-38.89%",
            }}
            onLoad={() => setTimeout(() => setVideoReady(true), 800)}
          />
          {/* Maskeert YouTube UI die bovenin/onderin verschijnt */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
            <div className="absolute top-0 left-0 right-0 h-12" style={{ background: "rgba(0,0,0,0.6)" }} />
          </div>
        </>
      )}

      {/* Directe video hover (Cloudinary etc.) */}
      {p.hoverVideo && !isYouTube && (
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

      {/* Gradient overlay — altijd zichtbaar zodat tekst leesbaar blijft */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 50%, transparent 75%)" }}
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
