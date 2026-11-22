"use client"

import { useState } from "react"
import type { Testimonial } from "@/lib/site-data"

type ReviewRowsProps = {
  reviews: Testimonial[]
}

function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col justify-between gap-4 rounded-lg border border-line bg-sheet p-5 sm:w-[340px]">
      <blockquote className="font-display text-[1.0625rem] font-semibold leading-snug">
        <span className="accent">“</span>
        {review.quote}”
      </blockquote>
      <figcaption className="text-small text-steel">
        <span className="font-semibold text-ink">{review.name}</span>
        {review.role && <> · {review.role}</>}
      </figcaption>
    </figure>
  )
}

function Row({ reviews, reverse = false }: { reviews: Testimonial[]; reverse?: boolean }) {
  return (
    <div className={`review-row ${reverse ? "review-row-reverse" : ""}`}>
      <div className="review-track">
        <div className="flex gap-4 pr-4 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-gutter">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
        <div aria-hidden="true" className="flex gap-4 pr-4 motion-reduce:hidden">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ReviewRows({ reviews }: ReviewRowsProps) {
  const [paused, setPaused] = useState(false)
  const reversed = [...reviews].reverse()

  return (
    <div className={`review-rows mt-10 grid grid-cols-1 gap-4 ${paused ? "is-paused" : ""}`}>
      <Row reviews={reviews} />
      <div aria-hidden="true" className="motion-reduce:hidden">
        <Row reviews={reversed} reverse />
      </div>

      <div className="mx-auto flex w-full max-w-content justify-end px-gutter motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          className="rounded-lg px-3 py-2 text-small font-semibold text-steel underline-offset-4 hover:text-ink hover:underline"
        >
          {paused ? "Play reviews" : "Pause reviews"}
        </button>
      </div>
    </div>
  )
}
