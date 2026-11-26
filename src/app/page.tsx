import AboutPreview from "@/lib/components/home/about-preview"
import CommonIssues from "@/lib/components/home/common-issues"
import Contact from "@/lib/components/home/contact"
import Hero from "@/lib/components/home/hero"
import PressStrip from "@/lib/components/home/press-strip"
import Reviews from "@/lib/components/home/reviews"
import Socials from "@/lib/components/home/socials"

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressStrip />
      <CommonIssues />
      <AboutPreview />
      <Reviews />
      <Socials />
      <Contact />
    </>
  )
}
