import Image from "next/image"
import ButtonLink from "@/lib/components/ui/button-link"
import PageHero from "@/lib/components/ui/page-hero"
import { business } from "@/lib/site-data"

// One big photo with three smaller ones tucked around its edges, all chosen so Andrea's face reads even when small.
// Big photo: cream inset line, hairline offset, and a patch of halftone dots peeking out behind.
// Small photos: cream inset line and a soft glow (shadow), tilted a touch like prints laid on top.
const bigPhoto = {
  src: "/images/photos/dog-mural-poodle.jpg",
  alt: "Andrea holding a poodle at a picnic table in front of a mural of dogs in astronaut suits",
}

const smallPhotos = [
  {
    src: "/images/photos/rooftop-poodle.jpg",
    alt: "Andrea smiling on a rooftop with a red poodle in her arms",
    place: "right-0 top-0 rotate-[3deg]",
    focus: "object-[35%_35%]",
    aspect: "aspect-square",
  },
  {
    src: "/images/photos/sidewalk-pit-bull-closeup.jpg",
    alt: "Andrea on a tree-lined Brooklyn sidewalk with a pit bull at her feet",
    // Portrait so both her face and the dog at her feet fit
    place: "-bottom-[4%] right-[4%] -rotate-2",
    focus: "object-center",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/photos/street-fair-booth-closeup.jpg",
    alt: "Andrea in a green Drea Dog World sweatshirt at her street fair booth, with dogs waiting at her feet",
    place: "bottom-[2%] left-0 rotate-2",
    focus: "object-center",
    aspect: "aspect-square",
  },
]

const halftone = "bg-[radial-gradient(currentColor_2.8px,transparent_3.2px)] bg-[length:15px_15px]"
const smallFrame = "frame frame-inset shadow-lift outline-sheet before:hidden"

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
      <div className="relative mx-auto aspect-[6/5] w-full max-w-[480px]">
        <span aria-hidden="true" className={`absolute left-[6%] top-0 h-[38%] w-[40%] text-red-deep opacity-40 ${halftone}`} />

        <figure className="about-enter frame frame-inset absolute left-[17%] top-[9%] aspect-square w-[62%] shadow-soft outline-sheet [--frame-x:10px] [--frame-y:10px]">
          <Image src={bigPhoto.src} alt={bigPhoto.alt} fill preload sizes="(min-width: 1024px) 300px, 1px" className="object-cover object-[center_45%]" />
        </figure>

        <ul aria-label="More of Andrea with dogs around Brooklyn">
          {smallPhotos.map((photo, index) => (
            <li
              key={photo.src}
              className={`about-enter absolute w-[30%] ${photo.place}`}
              style={{ animationDelay: `${200 + index * 140}ms` }}
            >
              <figure className={`${smallFrame} ${photo.aspect}`}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 150px, 1px" className={`object-cover ${photo.focus}`} />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </PageHero>
  )
}
