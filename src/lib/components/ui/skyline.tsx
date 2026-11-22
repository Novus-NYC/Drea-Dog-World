import Image from "next/image"

export default function Skyline() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[clamp(110px,14vw,200px)]">
      <Image src="/images/skyline.svg" alt="" fill unoptimized className="object-cover object-bottom" />
    </div>
  )
}
