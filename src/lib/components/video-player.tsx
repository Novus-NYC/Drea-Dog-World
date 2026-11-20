"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { Video } from "@/lib/site-data"

type VideoPlayerProps = {
  video: Video
  preload?: boolean
  sticker?: React.ReactNode
}

export default function VideoPlayer({ video, preload = false, sticker }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (playing) {
      iframeRef.current?.focus()
    }
  }, [playing])

  return (
    <div className="relative">
      {playing ? (
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&dnt=1`}
          title={video.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="block aspect-video w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${video.title} (${video.duration})`}
          className="group relative block aspect-video w-full overflow-hidden"
        >
          <Image
            src={video.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            preload={preload}
            className="object-cover"
          />
          <span className="absolute right-3 top-9 bg-ink px-2 py-0.5 text-small text-white">
            {video.duration}
          </span>
          <span className="absolute bottom-2.5 left-3 max-w-[calc(100%-7.5rem)] bg-ink px-2.5 py-1 text-left text-small font-semibold text-white">
            {video.title}
          </span>
          <span className="absolute bottom-[8%] right-[5%] grid h-[68px] w-[68px] place-items-center rounded-full bg-red shadow-hard-sm transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110 lg:h-[86px] lg:w-[86px]">
            <span className="ml-1.5 border-y-[15px] border-l-[24px] border-y-transparent border-l-white" />
          </span>
        </button>
      )}

      {!playing && sticker}
    </div>
  )
}
