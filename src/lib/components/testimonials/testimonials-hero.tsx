import ButtonLink from "@/lib/components/ui/button-link"
import PageHero from "@/lib/components/ui/page-hero"
import { business } from "@/lib/site-data"

// Other lines from the reviews, so none repeat the highlights further down the page.
// Each one appears word for word in that client's full story in site-data.
const notes = [
  {
    name: "Stephanie Benson, M.A.",
    line: "She is caring beyond limits and truly cares for her clients and their owners.",
    place: "-rotate-[2.5deg]",
  },
  {
    name: "Jobanny Estrella-Elmonis",
    line: "She has taught us very kind and simple ways to have well behaved dogs at home and in public.",
    place: "-mt-4 ml-auto rotate-[2deg]",
  },
]

export default function TestimonialsHero() {
  return (
    <PageHero
      id="testimonials-heading"
      eyebrow="Testimonials"
      tone="morning"
      title={
        <>
          Their words, <span className="accent whitespace-nowrap">not ours.</span>
        </>
      }
      lead={`Real clients, real dogs. Seven stories from people who called ${business.nickname} when walks, potty training, or plain old chaos got to be too much.`}
      action={
        <ButtonLink href="#stories" variant="secondary">
          Read the stories
        </ButtonLink>
      }
    >
      <ul aria-label="A few words from clients" className="grid">
        {notes.map(({ name, line, place }) => (
          <li key={name} className={`about-enter relative max-w-[340px] rounded-frame bg-sheet px-6 py-5 shadow-lift ${place}`}>
            <p className="font-display text-lg font-semibold leading-snug">“{line}”</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-red-deep">{name}</p>
          </li>
        ))}
      </ul>
    </PageHero>
  )
}
