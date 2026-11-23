import Image from "next/image"

type SkylineProps = {
  // Compact is the shorter row of small brownstones under the interior page heroes,
  // so it doesn't look like a copy of the homepage and footer skyline.
  compact?: boolean
}

export default function Skyline({ compact = false }: SkylineProps) {
  const src = compact ? "/images/illustrations/skyline-rowhouses.svg" : "/images/illustrations/skyline.svg"
  const height = compact ? "h-[clamp(64px,6.7vw,128px)]" : "h-[clamp(110px,14vw,360px)]"

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 z-[1] ${height}`}>
      <Image src={src} alt="" fill unoptimized className="object-cover object-bottom" />
    </div>
  )
}
