import PawIcon from "@/lib/components/icons/paw-icon"
import ButtonLink from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import { routes, testimonials } from "@/lib/site-data"

// Three short, varied reviews; the Testimonials page has the rest.
const featured = ["Liz Maccie", "Erin Fox", "Jobanny Estrella-Elmonis"]

export default function Reviews() {
  const reviews = featured.flatMap((name) => testimonials.filter((t) => t.name === name))

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-paper py-24 lg:py-[110px]">
      <div className="mx-auto max-w-content px-gutter">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Kind words</Eyebrow>
            <h2 id="reviews-heading" className="text-heading">
              What clients <span className="accent">say.</span>
            </h2>
          </div>
          <ButtonLink href={routes.testimonials} variant="secondary">
            Read all the reviews
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-10 border-t-2 border-ink pt-10 md:grid-cols-3 md:gap-12">
          {reviews.map((review) => (
            <li key={review.name}>
              <figure>
                <blockquote className="font-display text-xl font-semibold leading-snug">
                  <p>
                    <span className="text-red">“</span>
                    {review.quote}
                    <span className="text-red">”</span>
                  </p>
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em]">
                  <PawIcon className="w-4 shrink-0 text-red" />
                  {review.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
