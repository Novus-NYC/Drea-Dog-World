import Image from "next/image"
import ButtonLink from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import Skyline from "@/lib/components/ui/skyline"
import { business, primaryCta } from "@/lib/site-data"

// Each window floats at its own spot, size, and tilt around the doorway, without touching it.
const windows = [
  {
    src: "/images/drea-vintage-fifth-avenue.jpg",
    alt: "A young Andrea with friends on Fifth Avenue in an old photo",
    focus: "object-[60%_32%]",
    place: "left-[6%] top-[3%] w-[21%] -rotate-[4deg]",
  },
  {
    src: "/images/drea-home-session-aussie.jpg",
    alt: "Andrea working with an Australian shepherd during a home session",
    focus: "object-[40%_40%]",
    place: "left-[6.5%] top-[58%] w-[19%] rotate-3",
  },
  {
    src: "/images/drea-apartment-pit-bull-hug.jpg",
    alt: "Andrea sitting on her apartment floor hugging a pit bull",
    focus: "object-[68%_50%]",
    place: "right-[6%] top-[6%] w-[21%] rotate-[4deg]",
  },
  {
    src: "/images/drea-dog-mural-poodle.jpg",
    alt: "Andrea holding a poodle in front of an astronaut dog mural",
    focus: "object-[50%_45%]",
    place: "right-[6.5%] top-[61%] w-[19%] -rotate-3",
  },
]

const trim = "bg-paper shadow-[0_22px_34px_rgba(43,35,33,0.22),inset_0_0_0_1.5px_var(--color-line)]"

export default function AboutHero() {
  return (
    <section aria-labelledby="about-hero-heading" className="relative isolate overflow-hidden">
      <Image
        src="/images/drea-stoop.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div aria-hidden="true" className="hero-wash absolute inset-0" />
      {/* Extra wash behind the photo scene so the background Andrea doesn’t compete with the windows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_25%,color-mix(in_srgb,var(--color-paper)_78%,transparent)_48%,color-mix(in_srgb,var(--color-paper)_60%,transparent)_100%)] lg:block"
      />

      <div className="relative z-[2] mx-auto grid max-w-content items-center gap-12 px-gutter pb-[150px] pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-[max(210px,calc(14vw_+_30px))] lg:pt-20">
        <div>
          <Eyebrow>About {business.nickname}</Eyebrow>
          <h1 id="about-hero-heading" className="text-display">
            Meet <span className="accent">{business.owner.split(" ")[0]}.</span>
          </h1>
          <p className="my-6 max-w-[34ch] text-lead">
            {business.ownerRole}. {business.slogan}
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href="#press" variant="secondary">
              Press and credentials
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-[27/20] w-full max-w-[560px]">
          <div className="about-enter relative z-[1] mx-auto w-[41%] pt-[3%]">
            <figure className="rounded-t-[999px] rounded-b-[8px] bg-deep p-[4.5%] shadow-lift">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b border-[3px] border-blush">
                <Image
                  src="/images/drea-sidewalk-pit-bull.jpg"
                  alt="Andrea on a tree-lined Brooklyn sidewalk with a pit bull at her feet"
                  fill
                  preload
                  sizes="(min-width: 1024px) 290px, 41vw"
                  className="object-cover object-[center_30%]"
                />
              </span>
            </figure>

            <div aria-hidden="true" className="mx-[-7%] mt-1 grid justify-items-center">
              <span className="block h-2 w-[84%] bg-red sm:h-3" />
              <span className="block h-2 w-[92%] bg-red-deep sm:h-3" />
              <span className="block h-2 w-full bg-[color-mix(in_srgb,var(--color-red-deep)_85%,black)] sm:h-3" />
            </div>
          </div>

          <ul aria-label="Moments from Andrea’s life with dogs">
            {windows.map((window, index) => (
              <li key={window.src} className={`absolute ${window.place}`}>
                <div className="about-enter" style={{ animationDelay: `${350 + index * 130}ms` }}>
                  <figure
                    className={`window-float relative rounded-t-[999px] rounded-b p-[5%] ${trim}`}
                    style={{ animationDuration: `${6 + index * 0.7}s`, animationDelay: `${-index * 1.6}s` }}
                  >
                    <span className="relative block aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-sm">
                      <Image src={window.src} alt={window.alt} fill sizes="(min-width: 1024px) 150px, 21vw" className={`object-cover ${window.focus}`} />
                    </span>
                    <span aria-hidden="true" className={`absolute -inset-x-[6%] -bottom-1 h-[5%] min-h-1.5 rounded-sm ${trim}`} />
                  </figure>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Skyline />
    </section>
  )
}
