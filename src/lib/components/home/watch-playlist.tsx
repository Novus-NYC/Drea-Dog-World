"use client"

import { useState } from "react"
import Eyebrow from "@/lib/components/eyebrow"
import VideoPlayer from "@/lib/components/video-player"
import type { Video } from "@/lib/site-data"

type WatchPlaylistProps = {
  videos: Video[]
}

const knob = "block h-7 w-7 rounded-full bg-[radial-gradient(circle_at_40%_35%,#f1e2cf,#b99b7d)] shadow-[0_2px_0_#2a1a14] sm:h-8 sm:w-8"

export default function WatchPlaylist({ videos }: WatchPlaylistProps) {
  const [current, setCurrent] = useState(0)
  const video = videos[current]

  return (
    <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
      <div className="relative rounded-[28px] bg-[linear-gradient(#7a4a36,#5c3526)] p-2.5 pr-12 shadow-[0_24px_50px_rgba(43,35,33,0.25),inset_0_2px_0_rgba(255,255,255,0.15)] after:absolute after:inset-x-[24%] after:-bottom-3 after:h-3 after:rounded-b-lg after:bg-[#3f241a] after:content-[''] sm:p-3.5 sm:pr-16">
        <div className="rounded-[20px] bg-black p-1.5 shadow-[inset_0_0_0_4px_#2a1a14]">
          <VideoPlayer key={video.videoId} video={video} frameClassName="overflow-hidden rounded-2xl" />
        </div>

        <div aria-hidden="true" className="absolute right-2.5 top-6 grid justify-items-center gap-3.5 sm:right-4 sm:top-8 sm:gap-4">
          <span className={knob} />
          <span className={knob} />
          <span className="mt-2 grid gap-1.5">
            <span className="block h-0.5 w-6 rounded bg-[#2a1a14]" />
            <span className="block h-0.5 w-6 rounded bg-[#2a1a14]" />
            <span className="block h-0.5 w-6 rounded bg-[#2a1a14]" />
          </span>
        </div>
      </div>

      <div>
        <Eyebrow>Now playing</Eyebrow>
        <h3 aria-live="polite" className="text-title">
          {video.title}
        </h3>
        <p className="mt-1 text-small text-steel">{video.duration}</p>

        <ul aria-label="Choose a channel" className="mt-6 grid gap-2.5">
          {videos.map((item, index) => {
            const selected = index === current

            return (
              <li key={item.videoId}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setCurrent(index)}
                  className={`flex w-full items-center gap-3.5 rounded-xl border-2 bg-sheet px-3.5 py-2.5 text-left font-semibold leading-snug transition-colors ${
                    selected ? "border-red" : "border-line hover:border-steel"
                  }`}
                >
                  <span
                    className={`shrink-0 rounded-md px-2 py-1 text-xs font-bold tracking-[0.1em] text-white ${
                      selected ? "bg-red" : "bg-ink"
                    }`}
                  >
                    CH {index + 1}
                  </span>
                  {item.title}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
