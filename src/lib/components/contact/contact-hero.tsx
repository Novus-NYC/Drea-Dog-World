import Image from "next/image"
import BadgeLogo from "@/lib/components/ui/badge-logo"
import Eyebrow from "@/lib/components/ui/eyebrow"
import Skyline from "@/lib/components/ui/skyline"

export default function ContactHero() {
  return (
    <section aria-labelledby="contact-hero-heading" className="relative isolate overflow-hidden">
      <Image src="/images/drea-stoop.jpg" alt="" fill preload sizes="100vw" className="object-cover object-[center_35%]" />
      <div aria-hidden="true" className="hero-wash absolute inset-0" />

      <div className="relative z-[2] mx-auto grid max-w-content items-center gap-10 px-gutter pb-[150px] pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pb-[max(210px,calc(14vw_+_30px))] lg:pt-20">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 id="contact-hero-heading" className="text-display">
            Let’s talk <span className="accent">dogs.</span>
          </h1>
          <p className="mt-5 max-w-[30em] text-lead">
            Tell Andrea what’s going on with your dog. She’ll tell you where she’d start.
          </p>
        </div>

        {/* The letterpress badge, tilted like a seal */}
        <BadgeLogo className="about-enter hidden w-52 justify-self-center rotate-[8deg] drop-shadow-[0_14px_22px_rgba(43,35,33,0.25)] lg:block" />
      </div>

      <Skyline />
    </section>
  )
}
