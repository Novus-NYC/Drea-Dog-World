import Eyebrow from "@/lib/components/ui/eyebrow"
import WatchPlaylist from "@/lib/components/home/watch-playlist"
import { watchVideos } from "@/lib/site-data"

export default function WatchVideos() {
  return (
    <section id="watch" aria-labelledby="watch-heading" className="py-24 lg:py-[110px]">
      <div className="mx-auto max-w-content px-gutter">
        <Eyebrow>Watch</Eyebrow>
        <h2 id="watch-heading" className="text-heading">
          Watch her <span className="accent">work.</span>
        </h2>

        <WatchPlaylist videos={watchVideos} />
      </div>
    </section>
  )
}
