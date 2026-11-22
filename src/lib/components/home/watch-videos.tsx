import Eyebrow from "@/lib/components/ui/eyebrow"
import WatchPlaylist from "@/lib/components/home/watch-playlist"
import { watchVideos } from "@/lib/site-data"

export default function WatchVideos() {
  return (
    <section id="watch" aria-labelledby="watch-heading" className="torn-edges relative -mt-[22px] bg-blue pb-24 pt-28 text-sheet lg:pb-[110px] lg:pt-[120px]">
      <div className="mx-auto max-w-content px-gutter">
        <Eyebrow onDark>Watch</Eyebrow>
        <h2 id="watch-heading" className="text-heading">
          Watch her <span className="accent text-blush">work.</span>
        </h2>

        <WatchPlaylist videos={watchVideos} />
      </div>
    </section>
  )
}
