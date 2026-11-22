import Image from "next/image"
import ButtonLink from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import Skyline from "@/lib/components/ui/skyline"
import { business, primaryCta } from "@/lib/site-data"

// Other lines from the reviews, so none repeat the highlights further down the page.
// Each one appears word for word in that client's full story in site-data.
const floating = [
  {
    name: "Stephanie Benson, M.A.",
    line: "She is caring beyond limits and truly cares for her clients and their owners.",
    place: "lg:ml-0 -rotate-[2.5deg]",
  },
  {
    name: "Jobanny Estrella-Elmonis",
    line: "She has taught us very kind and simple ways to have well behaved dogs at home and in public.",
    place: "lg:ml-[22%] rotate-[2deg]",
  },
  {
    name: "Nicholas Phillips",
    line: "Andrea Smith did a fantastic job with our dog, Busy.",
    place: "lg:ml-[6%] -rotate-[1.5deg]",
  },
]

export default function TestimonialsHero() {
  return (
    <section aria-labelledby="testimonials-heading" className="relative isolate overflow-hidden">
      <Image
        src="/images/drea-stoop.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div aria-hidden="true" className="hero-wash absolute inset-0" />
      {/* Extra wash behind the quote cards so the background photo stays quiet */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_25%,color-mix(in_srgb,var(--color-paper)_78%,transparent)_48%,color-mix(in_srgb,var(--color-paper)_60%,transparent)_100%)] lg:block"
      />

      <div className="relative z-[2] mx-auto grid max-w-content items-center gap-12 px-gutter pb-[150px] pt-14 lg:grid-cols-[1fr_1fr] lg:pb-[max(210px,calc(14vw_+_30px))] lg:pt-20">
        <div>
          <Eyebrow>Testimonials</Eyebrow>
          <h1 id="testimonials-heading" className="text-display">
            Their words, <span className="accent block">not ours.</span>
          </h1>
          <p className="my-6 max-w-[32em] text-lead">
            Real clients, real dogs. Seven stories from people who called {business.nickname} when walks, potty
            training, or plain old chaos got to be too much.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href="#stories" variant="secondary">
              Read the stories
            </ButtonLink>
          </div>
        </div>

        <ul aria-label="A few words from clients" className="grid gap-5">
          {floating.map(({ name, line, place }) => (
            <li key={name} className={`max-w-[360px] rounded-frame bg-sheet px-6 py-5 shadow-lift ${place}`}>
              <p className="font-display text-lg font-semibold leading-snug">“{line}”</p>
              <p className="mt-2 text-small text-steel">{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <Skyline />
    </section>
  )
}
