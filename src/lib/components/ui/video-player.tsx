"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { Video } from "@/lib/site-data"

type VideoPlayerProps = {
  video: Video
  preload?: boolean
  sticker?: React.ReactNode
  frameClassName?: string
}

function embedUrl(video: Video) {
  if (video.provider === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`
  }
  return `https://player.vimeo.com/video/${video.videoId}?autoplay=1&dnt=1`
}

export default function VideoPlayer({ video, preload = false, sticker, frameClassName = "" }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (playing) {
      iframeRef.current?.focus()
    }
  }, [playing])

  return (
    <div className="relative">
      <div className={`relative aspect-video w-full bg-ink ${frameClassName}`}>
      {playing ? (
        <iframe
          ref={iframeRef}
          src={embedUrl(video)}
          title={video.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${video.title} (${video.duration})`}
          className="group absolute inset-0 block overflow-hidden"
        >
          <Image
            src={video.thumbnail}
            alt=""
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            preload={preload}
            className="object-cover"
          />
          <span className="absolute right-3 top-3 rounded-md bg-ink px-2 py-0.5 text-small text-white">
            {video.duration}
          </span>
          <span className="absolute bottom-2.5 left-3 hidden max-w-[calc(100%-7.5rem)] rounded-md bg-ink sm:block px-2.5 py-1 text-left text-small font-semibold text-white">
            {video.title}
          </span>
          <span className="absolute bottom-[8%] right-[5%] grid h-[68px] w-[68px] place-items-center rounded-full bg-red shadow-lift transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110 lg:h-[86px] lg:w-[86px]">
            <span className="ml-1.5 border-y-[15px] border-l-[24px] border-y-transparent border-l-white" />
          </span>
        </button>
      )}
      </div>

      {!playing && sticker}
    </div>
  )
}
