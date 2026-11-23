import Image from "next/image"

// A photo-booth style divider between sections: a dark band with a row of everyday moments, no heading.
// Desktop: seven photos fill the width. Phones: the strip scrolls sideways.
const photos = [
  {
    src: "/images/drea-vintage-fifth-avenue.jpg",
    alt: "An old photo of a young Andrea with two friends on a city sidewalk",
    focus: "object-[center_40%]",
  },
  {
    src: "/images/drea-home-session-aussie.jpg",
    alt: "Andrea in a red cap at a dining table, working with an Australian shepherd",
    focus: "object-[40%_center]",
  },
  {
    src: "/images/drea-street-fair-obstacle-course.jpg",
    alt: "Andrea with a poodle beside a dog obstacle course on a closed Brooklyn street",
    focus: "object-[center_45%]",
  },
  {
    src: "/images/drea-fall-market-dog.jpg",
    alt: "Andrea in a black hoodie with a brown dog at a fall market",
    focus: "object-center",
  },
  {
    src: "/images/drea-tee-spotted-pointer.jpg",
    alt: "Andrea in a Drea Dog World tee with a spotted pointer",
    focus: "object-top",
  },
  {
    src: "/images/drea-festival-lawn-chair.jpg",
    alt: "Andrea relaxing in a lawn chair at a crowded outdoor festival",
    focus: "object-[center_60%]",
  },
  {
    src: "/images/drea-park-walk-poodle.jpg",
    alt: "Andrea in the park with a red poodle on a leash",
    focus: "object-center",
  },
]

export default function PhotoStrip() {
  return (
    <section aria-label="Andrea around the neighborhood" className="bg-ink py-2.5">
      <ul className="no-scrollbar flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-2.5 lg:grid lg:snap-none lg:grid-cols-7 lg:overflow-visible">
        {photos.map((photo) => (
          <li
            key={photo.src}
            className="relative aspect-[4/5] w-[42vw] shrink-0 snap-start overflow-hidden rounded-sm sm:w-[28vw] lg:w-auto"
          >
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 15vw, 42vw" className={`object-cover ${photo.focus}`} />
          </li>
        ))}
      </ul>
    </section>
  )
}
