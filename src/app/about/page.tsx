import type { Metadata } from "next"
import AboutHero from "@/lib/components/about/about-hero"
import HerStory from "@/lib/components/about/her-story"
import Method from "@/lib/components/about/method"
import PhotoStrip from "@/lib/components/about/photo-strip"
import PressCredentials from "@/lib/components/about/press-credentials"
import Specialty from "@/lib/components/about/specialty"
import WatchVideos from "@/lib/components/about/watch-videos"
import ContactCta from "@/lib/components/ui/contact-cta"
import { business } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${business.owner}, Brooklyn’s dog trainer and behavioral consultant, with more than 30 years of working with dogs and their people.`,
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HerStory />
      <WatchVideos />
      <Method />
      <Specialty />
      <PressCredentials />
      <PhotoStrip />
      <ContactCta
        torn={false}
        eyebrow="Ready when you are"
        title="Ready to"
        accent="meet her?"
        text={`Tell ${business.nickname} about your dog. She’ll write back with where she would start.`}
      />
    </>
  )
}
