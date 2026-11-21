import Image from "next/image"
import ButtonLink from "@/lib/components/button-link"
import Eyebrow from "@/lib/components/eyebrow"
import PawIcon from "@/lib/components/paw-icon"
import VideoPlayer from "@/lib/components/video-player"
import { business, heroVideo, primaryCta, routes } from "@/lib/site-data"

const quickFacts = [
  "30+ years serving Brooklyn’s pups",
  "In The New York Times",
  "Never a shock collar",
]

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="grain overflow-hidden">
      <div className="relative z-[1] mx-auto grid max-w-content items-center gap-12 px-gutter pb-[150px] pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-11 lg:pb-[215px] lg:pt-14">
        <div>
          <Eyebrow>Brooklyn dog trainer</Eyebrow>

          <h1 id="hero-heading" className="text-display">
            Smart love for{" "}
            <span className="mt-1.5 block font-tag text-[1.06em] normal-case text-red [text-shadow:3px_3px_0_var(--color-ink)]">
              Brooklyn dogs.
            </span>
          </h1>

          <p className="my-6 max-w-[40ch] text-lead">
            {business.owner} teaches dogs and the people on the leash.
            Positive, reward-based, and never a shock collar. Press play to meet
            her.
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href={routes.about} variant="secondary">
              Meet {business.nickname}
            </ButtonLink>
          </div>
        </div>

        <div>
          <div className="relative rotate-[0.6deg] border-4 border-ink bg-ink lg:rotate-[1.4deg]">
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 z-10 h-[26px] w-[92px] -rotate-[28deg] bg-[rgba(250,250,248,0.85)] shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 -top-3 z-10 h-[26px] w-[92px] rotate-[26deg] bg-[rgba(250,250,248,0.85)] shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            />

            <VideoPlayer
              video={heroVideo}
              preload
              sticker={
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-7 -left-2.5 z-10 -rotate-6 border-[3px] border-ink bg-sheet px-3.5 py-2 font-tag text-[26px] leading-none text-red shadow-[5px_5px_0_var(--color-ink)] [text-shadow:2px_2px_0_var(--color-ink)] lg:-left-[26px]"
                >
                  Start here!
                </span>
              }
            />
          </div>

          <ul
            aria-label="Quick facts"
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t-[3px] border-ink pt-3.5 text-small font-semibold"
          >
            {quickFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <PawIcon className="w-4 shrink-0 text-red" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] lg:h-[200px]">
        <Image src="/images/skyline.svg" alt="" fill unoptimized className="object-cover object-bottom" />
      </div>
    </section>
  )
}
