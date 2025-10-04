/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        crypto: {
          dark: "#0a0a0a",
          accent: "#00d4ff",
          green: "#00ff88",
          purple: "#8b5cf6",
          orange: "#ff6b35",
        }
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff" },
          "100%": { boxShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
};