import Eyebrow from "@/lib/components/ui/eyebrow"
import WatchPlaylist from "@/lib/components/about/watch-playlist"
import { watchVideos } from "@/lib/site-data"

export default function WatchVideos() {
  return (
    <section id="watch" aria-labelledby="watch-heading" className="bg-ink py-24 text-sheet lg:py-[110px]">
      <div data-reveal className="mx-auto max-w-content px-gutter">
        <Eyebrow onDark>Watch</Eyebrow>
        <h2 id="watch-heading" className="text-heading">
          Watch her <span className="accent text-blush">work.</span>
        </h2>

        <WatchPlaylist videos={watchVideos} />
      </div>
    </section>
  )
}
