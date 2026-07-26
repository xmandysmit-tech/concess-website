"use client";
import { useRouter } from "next/navigation";

export default function BackButton({ label = "Studio", dark = false }: { label?: string; dark?: boolean }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 transition-colors text-xs tracking-widest uppercase"
      style={{ color: dark ? "rgba(255,255,255,0.3)" : "var(--color-taupe-400)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {label}
    </button>
  );
}
