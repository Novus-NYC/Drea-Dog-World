import AboutPreview from "@/lib/components/home/about-preview"
import CommonIssues from "@/lib/components/home/common-issues"
import Hero from "@/lib/components/home/hero"
import PressClippings from "@/lib/components/home/press-clippings"
import WatchVideos from "@/lib/components/home/watch-videos"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CommonIssues />
      <WatchVideos />
      <PressClippings />
    </>
  )
}
