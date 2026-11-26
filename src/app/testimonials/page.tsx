import type { Metadata } from "next"
import Letters from "@/lib/components/testimonials/letters"
import PullQuote from "@/lib/components/testimonials/pull-quote"
import TestimonialsHero from "@/lib/components/testimonials/testimonials-hero"
import ContactCta from "@/lib/components/ui/contact-cta"
import { business } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Testimonials",
  description: `What Brooklyn dog owners say about training with ${business.owner}: calmer walks, happier rescues, and dogs that finally listen.`,
}

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <PullQuote />
      <Letters />
      <ContactCta
        eyebrow="Your turn"
        title="Start your"
        accent="story."
        text={`Tell ${business.nickname} what’s going on with your dog.`}
      />
    </>
  )
}
