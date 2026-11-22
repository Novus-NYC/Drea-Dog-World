import Image from "next/image"
import { specialties } from "@/lib/site-data"

const featured = specialties.filter((item) => ["Bully breeds", "Rescues", "Reactive dogs"].includes(item))

const halftone = "bg-[radial-gradient(currentColor_2.8px,transparent_3.2px)] bg-[length:15px_15px]"

export default function Specialty() {
  return (
    <section
      aria-labelledby="specialty-heading"
      className="torn-edges relative -mt-[22px] bg-blue pb-24 pt-28 text-sheet lg:pb-[110px] lg:pt-[120px]"
    >
      <div className="mx-auto grid max-w-content items-center gap-16 px-gutter lg:grid-cols-[1.1fr_0.9fr] lg:gap-[60px]">
        <div>
          <h2 id="specialty-heading" className="text-heading">
            Bully breeds need <span className="accent whitespace-nowrap text-blush">love too.</span>
          </h2>
          <p className="mt-4 max-w-[34em] text-lead">
            Stressed, fearful, and reactive dogs are Andrea’s specialty, and so are the rescues and bully breeds who get
            misunderstood the most. Patient, positive, structured work changes how the dog and the neighborhood see each
            other.
          </p>

          <ul aria-label="Andrea’s specialties" className="mt-7 flex flex-wrap gap-2.5">
            {featured.map((specialty) => (
              <li
                key={specialty}
                className="rounded-md border-[1.5px] border-[color-mix(in_srgb,var(--color-sheet)_50%,transparent)] px-3.5 py-1.5 text-small font-semibold"
              >
                {specialty}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-[min(380px,calc(100%-40px))]">
          <span aria-hidden="true" className={`absolute -bottom-6 -right-6 h-[60%] w-[70%] text-blush sm:-bottom-8 sm:-right-8 ${halftone}`} />
          <span
            aria-hidden="true"
            className={`absolute -left-5 -top-5 h-[40%] w-[44%] text-[color-mix(in_srgb,var(--color-sheet)_55%,transparent)] sm:-left-7 sm:-top-7 ${halftone}`}
          />
          <span className="relative block aspect-[4/5] overflow-hidden rounded-frame">
            <Image
              src="/images/drea-bench-puppy.jpg"
              alt="Andrea sitting on a bench with a pit bull puppy on a red leash"
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover object-[center_40%]"
            />
          </span>
        </figure>
      </div>
    </section>
  )
}
