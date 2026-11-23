import Eyebrow from "@/lib/components/ui/eyebrow"
import Skyline from "@/lib/components/ui/skyline"

// Each interior page is a different time of day over the same block of brownstones.
// The sky colors are one-off hero moments, so they live here instead of in the main palette.
const tones = {
  // Testimonials: morning, pale blue sky warming to butter light at the rooftops
  morning: {
    sky: "bg-[linear-gradient(180deg,#dde8ee_0%,#eef0e6_45%,#f7e2b4_100%)]",
    dark: false,
  },
  // About: sunset, cream through peach into dusty rose and mauve at the horizon
  sunset: {
    sky: "bg-[linear-gradient(180deg,var(--color-paper)_0%,var(--color-blush)_45%,#e3a294_75%,#b98290_100%)]",
    dark: false,
  },
  // Contact: night, deep navy into a dusky purple glow behind the lit windows
  night: {
    sky: "night-stars bg-[linear-gradient(180deg,#141d30_0%,#22344f_55%,#4d4561_100%)]",
    dark: true,
  },
}

type PageHeroProps = {
  id: string
  eyebrow: string
  title: React.ReactNode
  lead: string
  tone: keyof typeof tones
  action?: React.ReactNode
  // The page's signature object on the right (desktop only)
  children: React.ReactNode
}

// The compact hero used on About, Testimonials, and Contact. The homepage keeps its own full photo hero.
export default function PageHero({ id, eyebrow, title, lead, tone, action, children }: PageHeroProps) {
  const { sky, dark } = tones[tone]

  return (
    <section aria-labelledby={id} className={`relative isolate overflow-hidden ${sky}`}>
      <div className="relative z-[2] mx-auto grid max-w-content items-center gap-10 px-gutter pb-[clamp(110px,10vw,180px)] pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        <div>
          <Eyebrow onDark={dark}>{eyebrow}</Eyebrow>
          {/* On the night sky the heading turns cream and its italic accent turns blush, so both stay readable */}
          <h1 id={id} className={`text-display ${dark ? "text-sheet [&_.accent]:text-blush" : ""}`}>
            {title}
          </h1>
          <p className={`mt-5 max-w-[32em] text-lead ${dark ? "text-[color-mix(in_srgb,var(--color-sheet)_85%,transparent)]" : ""}`}>
            {lead}
          </p>
          {action && <div className="mt-7">{action}</div>}
        </div>

        <div className="relative hidden lg:block">{children}</div>
      </div>

      <Skyline compact />
    </section>
  )
}
