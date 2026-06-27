import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: {
          50: "#FDFAF5",
          100: "#F7F2E8",
          200: "#F2EDE4",
          300: "#E8E0D0",
          400: "#D4C9B5",
        },
        taupe: {
          300: "#C9B99A",
          400: "#B8A488",
          500: "#9E8B72",
          600: "#7D6D59",
        },
        dark: {
          900: "#161210",
          800: "#1E1916",
          700: "#2C2420",
          600: "#3D3330",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 8rem)", { lineHeight: "0.95" }],
        "display-lg": ["clamp(2.5rem, 5vw, 5.5rem)", { lineHeight: "1" }],
        "display-md": ["clamp(1.8rem, 3vw, 3.2rem)", { lineHeight: "1.1" }],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
    },
  },
  plugins: [],
};

export default config;
