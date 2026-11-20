import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        red: {
          DEFAULT: "var(--color-red)",
          deep: "var(--color-red-deep)",
        },
        blue: "var(--color-blue)",
        paper: "var(--color-paper)",
        sheet: "var(--color-sheet)",
        band: "var(--color-band)",
        mist: "var(--color-mist)",
        skyline: "var(--color-skyline)",
        steel: "var(--color-steel)",
        line: "var(--color-line)",
        window: "var(--color-window)",
        blush: "var(--color-blush)",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        tag: ["var(--font-sedgwick)", "Impact", "sans-serif"],
        stencil: ["var(--font-stardos)", "Impact", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95" }],
        display: ["clamp(2.75rem, 6.6vw, 6rem)", { lineHeight: "0.95" }],
        heading: ["clamp(2rem, 3.4vw, 3rem)", { lineHeight: "1" }],
        title: ["1.625rem", { lineHeight: "1.1" }],
        lead: ["1.1875rem", { lineHeight: "1.55" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        small: ["0.9375rem", { lineHeight: "1.5" }],
        eyebrow: ["0.875rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      lineHeight: {
        display: "0.95",
      },
      maxWidth: {
        content: "73.75rem",
        prose: "52ch",
      },
      spacing: {
        gutter: "1.375rem",
        section: "clamp(4rem, 8vw, 6rem)",
        header: "var(--header-height)",
      },
      boxShadow: {
        "hard-sm": "4px 4px 0 var(--color-ink)",
        hard: "6px 6px 0 var(--color-ink)",
        "hard-lg": "8px 8px 0 var(--color-ink)",
        "hard-red": "8px 8px 0 var(--color-red)",
      },
    },
  },
  plugins: [],
}
export default config
