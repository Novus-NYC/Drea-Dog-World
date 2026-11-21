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

const badges = [
  { src: "/images/badge-akc-cgc.png", alt: "AKC Canine Good Citizen Evaluator badge" },
  { src: "/images/badge-apdt.png", alt: "Association of Professional Dog Trainers member badge" },
]

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="torn-edges relative -mt-[22px] bg-sheet py-20 lg:py-[90px]"
    >
      <div className="mx-auto grid max-w-content items-center gap-14 px-gutter lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mb-28 mr-[8%] lg:mb-[130px] lg:mt-12">
          <figure className="frame frame-inset frame-brick aspect-[4/5] shadow-soft outline-sheet [--frame-x:-16px] [--frame-y:16px]">
            <Image
              src="/images/drea-park-snow.jpg"
              alt="Andrea training two dogs in a snowy Brooklyn dog park"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover object-[95%_center]"
            />
            <figcaption className="absolute bottom-5 left-5 z-[2] rounded bg-sheet px-2 py-0.5 text-[0.8125rem] font-semibold text-steel">
              Photo by Jane Teeling
            </figcaption>
          </figure>

          <figure className="frame frame-inset absolute -bottom-[18%] -right-[8%] aspect-[4/5] w-[57%] shadow-lift outline-sheet before:hidden">
            <Image
              src="/images/drea-bench-puppy.jpg"
              alt="Andrea Smith smiling on a bench with a tan pit bull puppy on a red leash"
              fill
              sizes="(min-width: 1024px) 290px, 57vw"
              className="object-cover object-[50%_40%]"
            />
          </figure>
        </div>

        <div>
          <Eyebrow>About {business.nickname}</Eyebrow>
          <h2 id="about-heading" className="text-[clamp(2.5rem,5.4vw,4.5rem)]">
            Hi. I’m <span className="accent">Andrea.</span>
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

          <p className="accent mt-7 text-[2rem] leading-tight">
            Your best friend’s best friend,
          </p>
          <p className="mt-1 font-semibold">
            {business.owner}, {business.ownerTitle.toLowerCase()}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <ButtonLink href={routes.about}>Read Andrea’s story</ButtonLink>

            <ul aria-label="Credentials" className="flex items-center gap-4">
              {badges.map((badge) => (
                <li key={badge.src}>
                  <Image src={badge.src} alt={badge.alt} width={84} height={84} className="mix-blend-multiply" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
