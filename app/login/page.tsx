"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === "web26") {
      document.cookie = `concess_access=web26; path=/; max-age=${60 * 60 * 24 * 30}`;
      router.push("/");
    } else {
      setError(true);
      setValue("");
    }
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "var(--color-dark-900)" }}
    >
      <p
        className="text-linen-200 text-2xl mb-10 tracking-tight"
        style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
      >
        CONCESS.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-64">
        <input
          type="password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false); }}
          placeholder="Wachtwoord"
          autoFocus
          className="w-full px-5 py-3 rounded-full text-sm text-dark-900 outline-none"
          style={{ background: "var(--color-linen-200)", border: error ? "1.5px solid #c0392b" : "none" }}
        />
        {error && <p className="text-red-400 text-xs tracking-wide">Onjuist wachtwoord</p>}
        <button
          type="submit"
          className="w-full px-5 py-3 rounded-full text-xs tracking-widest uppercase transition-all"
          style={{ background: "var(--color-taupe-500)", color: "white" }}
        >
          Toegang →
        </button>
      </form>
    </main>
  );
}
