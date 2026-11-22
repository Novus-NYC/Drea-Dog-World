import PawIcon from "@/lib/components/icons/paw-icon"
import { YelpIcon } from "@/lib/components/icons/social-icons"
import Eyebrow from "@/lib/components/ui/eyebrow"
import { contact, testimonials, type Testimonial } from "@/lib/site-data"

// Small alternating tilts so the clippings look laid down by hand.
const tilts = ["-rotate-[0.6deg]", "rotate-[0.5deg]", "rotate-[0.4deg]", "-rotate-[0.5deg]"]

// Display order picked so both columns end at about the same height on desktop:
// Liz leads across both columns, then three cards fill each column.
const order = [
  "Liz Maccie",
  "Erin Fox",
  "Molly Wootton",
  "Jobanny Estrella-Elmonis",
  "Stephanie Benson, M.A.",
  "Nicholas Phillips",
  "Rebecca Gillaspie",
]

// Shows a paragraph of the full review with the short excerpt highlighted inside it.
function StoryParagraph({ text, excerpt }: { text: string; excerpt: string }) {
  if (!text.includes(excerpt)) return <p>{text}</p>
  const [before, after] = text.split(excerpt)

  return (
    <p>
      {before}
      <mark className="pen-mark">{excerpt}</mark>
      {after}
    </p>
  )
}

const cardClass = "relative mb-8 break-inside-avoid rounded-frame bg-sheet px-7 pb-6 pt-8 shadow-soft sm:px-9"

type ClippingProps = { letter: Testimonial; tilt: string; spansColumns: boolean; endsColumn: boolean }

function Clipping({ letter, tilt, spansColumns, endsColumn }: ClippingProps) {
  return (
    <li
      className={`${cardClass} ${tilt} ${spansColumns ? "md:[column-span:all]" : ""} ${endsColumn ? "md:[break-after:column]" : ""}`}
    >
      <h3 className="text-[1.5rem] leading-tight text-red-deep">{letter.headline}</h3>
      <blockquote className="mt-3 font-display text-lg font-semibold leading-snug">
        <p>“{letter.quote}”</p>
      </blockquote>
      <p className="mt-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em]">
        <PawIcon className="w-4 shrink-0 text-red" />
        {letter.name}
      </p>

      <details className="group mt-4 border-t border-line pt-3">
        <summary className="cursor-pointer list-none py-1 font-semibold text-blue hover:underline [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Read the full story +</span>
          <span className="hidden group-open:inline">Close the story −</span>
        </summary>
        <div className="mt-3 grid gap-3 text-small leading-relaxed">
          {letter.story.map((paragraph) => (
            <StoryParagraph key={paragraph.slice(0, 40)} text={paragraph} excerpt={letter.quote} />
          ))}
        </div>
      </details>
    </li>
  )
}

export default function Letters() {
  const letters = order.flatMap((name) => testimonials.filter((t) => t.name === name))

  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="torn-top relative -mt-[22px] bg-band pb-24 pt-28 lg:pb-[120px] lg:pt-[120px]"
    >
      <div className="mx-auto max-w-content px-gutter">
        <Eyebrow>Seven stories</Eyebrow>
        <h2 id="stories-heading" className="text-heading">
          Dogs who got their <span className="accent whitespace-nowrap">world back.</span>
        </h2>

        <ul className="mt-10 columns-1 gap-8 md:columns-2">
          {letters.map((letter, index) => (
            <Clipping
              key={letter.name}
              letter={letter}
              tilt={tilts[index % tilts.length]}
              spansColumns={index === 0}
              endsColumn={index === 3}
            />
          ))}

        </ul>

        <div className="mt-6 flex flex-col items-start gap-4 border-t border-dashed border-[color-mix(in_srgb,var(--color-ink)_25%,transparent)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-semibold">
            Want more? <span className="accent">Read more reviews on Yelp.</span>
          </p>
          <a
            href={contact.yelp.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 font-semibold no-underline shadow-[inset_0_0_0_2px_var(--color-ink)] transition-colors hover:bg-sheet"
          >
            <YelpIcon className="h-5 w-5" />
            Visit Yelp <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
