import { testimonials } from "@/lib/site-data"

// A different line from Liz's review than her letter's highlight, so it isn't read twice.
const line = "I greatly appreciate her giving me my life back!"
const highlight = "my life back"

export default function PullQuote() {
  const review = testimonials[0]
  const [before, after] = line.split(highlight)

  return (
    <section
      aria-label={`Featured review from ${review.name}`}
      className="bg-ink pb-20 pt-16 text-sheet lg:pb-24 lg:pt-20"
    >
      <figure className="mx-auto grid max-w-content items-end gap-8 px-gutter lg:grid-cols-[1fr_auto] lg:gap-16">
        <blockquote>
          <p className="max-w-[22ch] font-display text-[clamp(1.875rem,4vw,3rem)] font-semibold leading-tight">
            <span className="text-red">“</span>
            {before}
            <span className="text-blush">{highlight}</span>
            {after}
            <span className="text-red">”</span>
          </p>
        </blockquote>
        <figcaption className="lg:text-right">
          <span className="block font-display text-2xl font-semibold italic text-blush">{review.name}</span>
          {review.role && (
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--color-sheet)_75%,transparent)]">
              {review.role}
            </span>
          )}
        </figcaption>
      </figure>
    </section>
  )
}
