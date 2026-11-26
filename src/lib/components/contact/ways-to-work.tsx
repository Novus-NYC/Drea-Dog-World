"use client"

import Image from "next/image"
import { useState } from "react"
import ButtonLink from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import { waysToWork } from "@/lib/site-data"

// The last section on the page. Its band color carries on behind the footer skyline (see data-footer-sky in globals.css).
// Hovering, focusing, or tapping a service swaps the framed photo to that kind of work.
export default function WaysToWork() {
  const [active, setActive] = useState(0)

  return (
    <section aria-labelledby="ways-heading" data-footer-sky="band" className="bg-band pb-16 pt-24 lg:pb-20 lg:pt-[110px]">
      <div className="mx-auto max-w-content px-gutter">
        {/* Phones: heading, photo, then the services. Desktop: photo on the left, heading and services stacked on the right. */}
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-[auto_1fr]">
          <div className="lg:col-start-2 lg:row-start-1">
            <Eyebrow>Ways to work together</Eyebrow>
            <h2 id="ways-heading" className="text-heading">
              Every plan is made for <span className="accent block">your dog.</span>
            </h2>
          </div>

          {/* Same frame as the homepage About photo: cream inset line and a brick offset. All four photos are stacked and the active one fades in. */}
          <figure className="frame frame-inset frame-brick mx-auto aspect-[4/5] self-center lg:col-start-1 lg:row-span-2 lg:row-start-1 w-[min(420px,calc(100%-16px))] shadow-soft outline-sheet [--frame-x:-16px] [--frame-y:16px]">
            {waysToWork.map((way, index) => (
              <Image
                key={way.name}
                src={way.photo.src}
                alt={index === active ? way.photo.alt : ""}
                aria-hidden={index !== active}
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className={`object-cover transition-opacity duration-500 ${index === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <figcaption aria-live="polite" className="sr-only">
              Pictured: {waysToWork[active].name}
            </figcaption>
          </figure>

          <ul data-reveal-stagger className="grid gap-px self-start overflow-hidden rounded-frame lg:col-start-2 lg:row-start-2 bg-[color-mix(in_srgb,var(--color-sheet)_16%,var(--color-deep))] text-sheet sm:grid-cols-2">
            {waysToWork.map((way, index) => {
              const selected = index === active

              return (
                <li key={way.name} className="flex">
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={`w-full px-7 pb-9 pt-10 text-left transition-colors focus-visible:outline-blush focus-visible:-outline-offset-4 ${
                      selected ? "bg-[color-mix(in_srgb,var(--color-red)_28%,var(--color-deep))]" : "bg-deep"
                    }`}
                  >
                    <span className="block font-display text-[1.875rem] font-semibold italic leading-tight">{way.name}</span>
                    <span className="mt-3 block text-[color-mix(in_srgb,var(--color-sheet)_82%,transparent)]">
                      {way.description}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t-2 border-ink pt-8">
          <p className="font-display text-xl font-semibold">
            No price list. <span className="accent">Andrea quotes once she knows your dog.</span>
          </p>
          <ButtonLink href="#get-in-touch">Tell Drea about your dog</ButtonLink>
        </div>
      </div>
    </section>
  )
}
