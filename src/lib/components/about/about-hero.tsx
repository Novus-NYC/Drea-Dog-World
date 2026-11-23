import Image from "next/image"
import ButtonLink from "@/lib/components/ui/button-link"
import PageHero from "@/lib/components/ui/page-hero"
import { business } from "@/lib/site-data"

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
    <PageHero
      id="about-hero-heading"
      eyebrow={`About ${business.nickname}`}
      tone="sunset"
      title={
        <>
          Meet <span className="accent">{business.owner.split(" ")[0]}.</span>
        </>
      }
      lead={`${business.ownerRole}. ${business.slogan}`}
      action={
        <ButtonLink href="#press" variant="secondary">
          Press and credentials
        </ButtonLink>
      }
    >
      <div className="relative mx-auto aspect-[27/20] w-full max-w-[460px]">
        <div className="about-enter relative z-[1] mx-auto w-[41%] pt-[3%]">
          <figure className="rounded-t-[999px] rounded-b-[8px] bg-deep p-[4.5%] shadow-lift">
            <span className="relative block aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b border-[3px] border-blush">
              <Image
                src="/images/drea-sidewalk-pit-bull.jpg"
                alt="Andrea on a tree-lined Brooklyn sidewalk with a pit bull at her feet"
                fill
                preload
                sizes="190px"
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
                    <Image src={window.src} alt={window.alt} fill sizes="100px" className={`object-cover ${window.focus}`} />
                  </span>
                  <span aria-hidden="true" className={`absolute -inset-x-[6%] -bottom-1 h-[5%] min-h-1.5 rounded-sm ${trim}`} />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageHero>
  )
}
