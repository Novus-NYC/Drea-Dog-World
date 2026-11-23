import Image from "next/image"
import Link from "next/link"
import OutletLogo from "@/lib/components/icons/outlet-logo"
import { press, routes, type PressMention } from "@/lib/site-data"

// Time and ShoutoutAtlanta are drawn with their own wordmarks; the NYT and Narratively get their
// logo mark plus the name. The wordmark files are dark, so a filter turns them cream on the dark bar.
const wordmarks: Record<string, { src: string; width: number; height: number }> = {
  "Time Magazine": { src: "/images/press/time-wordmark.svg", width: 65, height: 20 },
  ShoutoutAtlanta: { src: "/images/press/shoutoutatlanta-wordmark.png", width: 126, height: 15 },
}

// The order the outlets pass by in the strip (the About page keeps its own order).
const stripOrder = ["The New York Times", "Time Magazine", "Narratively", "ShoutoutAtlanta", "Critter Crusades"]
const outlets = stripOrder.flatMap((name) => press.filter((item) => item.outlet === name))

function OutletMark({ item }: { item: PressMention }) {
  const wordmark = wordmarks[item.outlet]
  if (wordmark) {
    return (
      <Image
        src={wordmark.src}
        alt=""
        width={wordmark.width}
        height={wordmark.height}
        unoptimized
        className="[filter:brightness(0)_invert(0.92)]"
      />
    )
  }

  const hasLogo = item.logo === "nyt" || item.outlet === "Narratively"
  return (
    <>
      {hasLogo && <OutletLogo item={item} size={24} />}
      <span className={`font-display text-lg ${item.logo === "critter" ? "font-semibold" : "font-bold"}`}>{item.outlet}</span>
    </>
  )
}

// One full pass of the outlets. It is drawn twice so the loop never shows a gap,
// and both copies are hidden from screen readers (the sentence below reads the list once).
function Track() {
  const itemClass = "flex items-center gap-[9px] whitespace-nowrap no-underline"

  return (
    <div aria-hidden="true" className="press-set flex items-center gap-[34px] pr-[34px]">
      {outlets.map((item) => (
        <div key={item.outlet} className="flex items-center gap-[34px]">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer" tabIndex={-1} className={itemClass}>
              <OutletMark item={item} />
            </a>
          ) : (
            <span className={itemClass}>
              <OutletMark item={item} />
            </span>
          )}
          <span className="text-xs text-red">✦</span>
        </div>
      ))}
    </div>
  )
}

const outletList = outlets.map((item) => item.outlet).join(", ").replace(/, ([^,]*)$/, " and $1")

// A thin dark press bar under the hero that matches the skyline and footer.
export default function PressStrip() {
  return (
    <section
      aria-label="Press"
      className="press-bar border-y border-[#3d2e28] bg-ink text-[#f2e6da]"
    >
      <div className="mx-auto flex h-16 max-w-content items-center gap-[22px] px-gutter max-md:px-0">
        <span className="shrink-0 text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#c9b8aa] max-md:hidden">
          As seen in
        </span>
        <div className="press-marquee relative min-w-0 flex-1">
          <p className="sr-only">As seen in {outletList}.</p>
          <div className="press-track">
            <Track />
            <Track />
          </div>
        </div>
        <Link
          href={`${routes.about}#press`}
          className="shrink-0 border-b-[1.5px] border-red text-sm font-semibold no-underline max-md:hidden"
        >
          All press →
        </Link>
      </div>
    </section>
  )
}
