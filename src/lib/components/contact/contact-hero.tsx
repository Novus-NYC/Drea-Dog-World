import BadgeLogo from "@/lib/components/ui/badge-logo"
import PageHero from "@/lib/components/ui/page-hero"

export default function ContactHero() {
  return (
    <PageHero
      id="contact-hero-heading"
      eyebrow="Contact"
      tone="night"
      title={
        <>
          Let’s talk <span className="accent">dogs.</span>
        </>
      }
      lead="Tell Andrea what’s going on with your dog. She’ll tell you where she’d start."
    >
      {/* The letterpress badge, tilted like a seal */}
      <BadgeLogo className="about-enter mx-auto w-48 rotate-[8deg] drop-shadow-[0_14px_22px_rgba(43,35,33,0.25)]" />
    </PageHero>
  )
}
