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
        deep: "var(--color-deep)",
        sage: "var(--color-sage)",
        paper: "var(--color-paper)",
        sheet: "var(--color-sheet)",
        band: "var(--color-band)",
        steel: "var(--color-steel)",
        line: "var(--color-line)",
        blush: "var(--color-blush)",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        display: ["clamp(2.625rem, 5.4vw, 4.75rem)", { lineHeight: "1.04" }],
        heading: ["clamp(2.125rem, 4vw, 3.375rem)", { lineHeight: "1.06" }],
        title: ["1.5rem", { lineHeight: "1.2" }],
        lead: ["1.1875rem", { lineHeight: "1.55" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        small: ["0.9375rem", { lineHeight: "1.5" }],
        eyebrow: ["0.875rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      lineHeight: {
        display: "1.06",
      },
      maxWidth: {
        content: "73.75rem",
        prose: "52ch",
      },
      spacing: {
        gutter: "1.375rem",
        header: "var(--header-height)",
      },
      borderRadius: {
        frame: "1rem",
        card: "1.25rem",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(43, 35, 33, 0.09)",
        lift: "0 24px 50px rgba(43, 35, 33, 0.18)",
        button: "0 6px 16px rgba(43, 35, 33, 0.14)",
        "button-hover": "0 10px 22px rgba(43, 35, 33, 0.2)",
      },
    },
  },
  plugins: [],
}
export default config
