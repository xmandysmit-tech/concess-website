"use client";
import { useRef, useState, useEffect, useId } from "react";
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
  const playerId = useId().replace(/:/g, "");

  const youtubeId = p.hoverVideo ? getYouTubeId(p.hoverVideo) : null;
  const isYouTube = !!youtubeId;

  // Luister naar YouTube IFrame API events — zichtbaar zodra video echt speelt
  useEffect(() => {
    if (!isYouTube || !showIframe) return;

    function onMessage(e: MessageEvent) {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        // playerState 1 = playing
        if (data?.event === "onStateChange" && data?.info === 1) {
          setVideoReady(true);
        }
        // State 0 = ended — herlaad iframe voor naadloze loop
        if (data?.event === "onStateChange" && data?.info === 0) {
          setVideoReady(false);
          setShowIframe(false);
          setTimeout(() => setShowIframe(true), 100);
        }
      } catch {}
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [isYouTube, showIframe, playerId]);

  // Reset videoReady als iframe verborgen wordt
  useEffect(() => {
    if (!showIframe) setVideoReady(false);
  }, [showIframe]);

  function handleMouseEnter() {
    if (isYouTube) setShowIframe(true);
    else if (videoRef.current) {
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

  const iframeSrc = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&enablejsapi=1&origin=${encodeURIComponent(typeof window !== "undefined" ? window.location.origin : "")}&widgetid=${playerId}`
    : "";

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

      {/* Cover foto — vervaagt zodra video speelt */}
      <img
        src={p.cover}
        alt={p.brand}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: videoReady ? 0 : 1 }}
      />

      {/* YouTube iframe */}
      {isYouTube && showIframe && (
        <iframe
          src={iframeSrc}
          allow="autoplay; encrypted-media"
          className="absolute pointer-events-none"
          style={{
            border: "none",
            opacity: videoReady ? 1 : 0,
            transition: "opacity 0.7s ease",
            width: "177.78%",
            height: "177.78%",
            top: "-38.89%",
            left: "-38.89%",
          }}
        />
      )}

      {/* Directe video (Cloudinary etc.) */}
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
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: videoReady ? 1 : 0 }}
        />
      )}

      {/* Gradient overlay */}
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
