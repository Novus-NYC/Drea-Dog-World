import AboutPreview from "@/lib/components/home/about-preview"
import CommonIssues from "@/lib/components/home/common-issues"
import ContactSection from "@/lib/components/home/contact-section"
import Hero from "@/lib/components/home/hero"
import PressClippings from "@/lib/components/home/press-clippings"
import Reviews from "@/lib/components/home/reviews"
import Socials from "@/lib/components/home/socials"
import WatchVideos from "@/lib/components/home/watch-videos"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CommonIssues />
      <WatchVideos />
      <PressClippings />
      <Reviews />
      <Socials />
      <ContactSection />
    </>
  )
}
