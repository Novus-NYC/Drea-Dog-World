import type { Metadata } from "next"
import AboutHero from "@/lib/components/about/about-hero"
import HerStory from "@/lib/components/about/her-story"
import MeetCta from "@/lib/components/about/meet-cta"
import Method from "@/lib/components/about/method"
import PressCredentials from "@/lib/components/about/press-credentials"
import Specialty from "@/lib/components/about/specialty"
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
      <Method />
      <Specialty />
      <PressCredentials />
      <MeetCta />
    </>
  )
}
