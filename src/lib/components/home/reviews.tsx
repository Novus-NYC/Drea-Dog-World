import ButtonLink from "@/lib/components/button-link"
import Eyebrow from "@/lib/components/eyebrow"
import ReviewRows from "@/lib/components/home/review-rows"
import { routes, testimonials } from "@/lib/site-data"

export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="pb-24 pt-10 lg:pb-[110px] lg:pt-14">
      <div className="mx-auto flex max-w-content flex-wrap items-end justify-between gap-6 px-gutter">
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

      <ReviewRows reviews={testimonials} />
    </section>
  )
}
