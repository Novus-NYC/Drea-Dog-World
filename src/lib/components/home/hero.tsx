import Image from "next/image"
import ButtonLink from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import PawIcon from "@/lib/components/icons/paw-icon"
import VideoPlayer from "@/lib/components/ui/video-player"
import { business, heroVideo, primaryCta, routes } from "@/lib/site-data"

const quickFacts = [
  "30+ years serving Brooklyn’s pups",
  "In The New York Times",
  "Never a shock collar",
  "Rescue and reactive dogs",
]

const tapeClass = "absolute -top-3 z-10 h-[26px] w-[92px] bg-[rgba(255,250,245,0.85)] shadow-[0_1px_3px_rgba(0,0,0,0.2)]"

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <Image
        src="/images/drea-stoop.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div aria-hidden="true" className="hero-wash absolute inset-0" />

      <div className="relative z-[1] mx-auto grid max-w-content items-center gap-12 px-gutter pb-[160px] pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-11 lg:pb-[235px] lg:pt-24">
        <div>
          <Eyebrow>Brooklyn dog trainer</Eyebrow>

          <h1 id="hero-heading" className="text-display">
            Smart love for{" "}
            <span className="accent mt-1.5 block">Brooklyn dogs.</span>
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
          <div className="relative rotate-[0.6deg] lg:rotate-[1.4deg]">
            <span aria-hidden="true" className={`${tapeClass} -left-3 -rotate-[28deg]`} />
            <span aria-hidden="true" className={`${tapeClass} -right-3 rotate-[26deg]`} />

            <VideoPlayer
              video={heroVideo}
              preload
              frameClassName="frame"
              sticker={
                <span
                  aria-hidden="true"
                  className="accent pointer-events-none absolute -bottom-7 -left-2.5 z-10 -rotate-6 rounded-xl bg-sheet px-4 py-2 text-[28px] leading-none shadow-soft lg:-left-[26px]"
                >
                  Start here!
                </span>
              }
            />
          </div>

          <ul
            aria-label="Quick facts"
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 rounded-frame bg-[color-mix(in_srgb,var(--color-sheet)_88%,transparent)] px-4 py-3 text-small font-semibold"
          >
            {quickFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-2 whitespace-nowrap">
                <PawIcon className="w-4 shrink-0 text-red" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[120px] lg:h-[200px]">
        <Image src="/images/skyline.svg" alt="" fill unoptimized className="object-cover object-bottom" />
      </div>
    </section>
  )
}
