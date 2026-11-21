import Image from "next/image"
import ButtonLink from "@/lib/components/button-link"
import Eyebrow from "@/lib/components/eyebrow"
import PawIcon from "@/lib/components/paw-icon"
import { business, routes } from "@/lib/site-data"

const highlights = [
  "Working with dogs for more than 30 years",
  "Featured in The New York Times and recommended by Time",
  "Fair, personalized correction and never a shock collar",
  "Bully breeds need love too",
]

const stamps = ["Canine Good Citizen", "APDT"]

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="torn-edges relative -mt-[22px] bg-sheet py-20 lg:py-[90px]"
    >
      <div className="mx-auto grid max-w-content items-center gap-14 px-gutter lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mb-24 mr-[8%] lg:mb-[110px]">
          <figure className="relative aspect-[4/5] -rotate-2 border-4 border-ink shadow-hard-lg">
            <Image
              src="/images/drea-park-snow.jpg"
              alt="Andrea training two dogs in a snowy Brooklyn dog park"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover object-[64%_center]"
            />
            <figcaption className="absolute bottom-2 left-2 bg-sheet px-2 py-0.5 text-[0.8125rem] font-semibold text-steel">
              Photo by Jane Teeling
            </figcaption>
          </figure>

          <figure className="absolute -bottom-[16%] -right-[8%] aspect-square w-[48%] rotate-3 border-4 border-ink bg-ink shadow-hard-lg">
            <Image
              src="/images/drea-bench-puppy.jpg"
              alt="Andrea Smith smiling on a bench with a tan pit bull puppy on a red leash"
              fill
              sizes="(min-width: 1024px) 240px, 48vw"
              className="object-cover object-[50%_40%]"
            />
          </figure>
        </div>

        <div>
          <Eyebrow>About {business.nickname}</Eyebrow>
          <h2 id="about-heading" className="text-[clamp(2.5rem,5.4vw,4.5rem)]">
            Hi. I’m{" "}
            <span className="font-tag text-[1.1em] normal-case text-red [text-shadow:3px_3px_0_var(--color-ink)]">
              Andrea.
            </span>
          </h2>

          <div className="mt-6 max-w-prose space-y-4">
            <p>
              My mission is to strengthen the partnership between people and
              dogs through positive, reward-based training, rehabilitation, and
              socialization.
            </p>
            <p>
              I specialize in stressed, fearful, and reactive dogs, and in
              rescues. My method fits your dog’s personality, size, age, and
              willingness, and it always starts with praise. Remember the four
              P’s: Practice, Patience, Perseverance, and Praise.
            </p>
          </div>

          <ul className="mt-5 grid gap-2.5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 font-semibold">
                <PawIcon className="mt-1 w-[22px] shrink-0 text-red" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-tag text-[2.5rem] leading-none text-red [text-shadow:2px_2px_0_var(--color-ink)]">
            Your best friend’s best friend,
          </p>
          <p className="mt-1 font-semibold">
            {business.owner}, {business.ownerTitle.toLowerCase()}
          </p>

          <ul aria-label="Credentials" className="mt-6 flex flex-wrap gap-3.5">
            {stamps.map((stamp) => (
              <li
                key={stamp}
                className="-rotate-2 border-[3px] border-double border-red px-3.5 py-2 font-display text-[1.0625rem] uppercase text-red-deep"
              >
                {stamp}
              </li>
            ))}
          </ul>

          <ButtonLink href={routes.about} className="mt-6">
            Read Andrea’s story
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
