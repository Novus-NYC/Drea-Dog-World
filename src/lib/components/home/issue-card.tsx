"use client"

import { useState } from "react"
import PawIcon from "@/lib/components/icons/paw-icon"
import type { IssueTip } from "@/lib/site-data"

type IssueCardProps = {
  item: IssueTip
  dark?: boolean
  tilt: number
}

const face = "absolute inset-0 grid content-center rounded-card p-5 [backface-visibility:hidden]"

export default function IssueCard({ item, dark = false, tilt }: IssueCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <li style={{ rotate: `${tilt}deg` }} className="[perspective:800px]">
      <button
        type="button"
        aria-pressed={flipped}
        onClick={() => setFlipped(!flipped)}
        className="group block h-[190px] w-full rounded-card text-left"
      >
        <span
          className={`relative block h-full transition-transform duration-500 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : "group-hover:-translate-y-1"
          }`}
        >
          <span
            aria-hidden={flipped}
            className={`${face} pb-11 shadow-soft ${dark ? "bg-deep text-white" : "border-2 border-line bg-sheet text-ink"}`}
          >
            <span className={`accent text-base ${dark ? "text-blush" : "text-blue"}`}>Issue:</span>
            <span className="mt-1 font-display text-[clamp(1.875rem,2.8vw,2.375rem)] font-semibold italic leading-[1.1]">
              {item.issue}
            </span>
            <span className="absolute inset-x-5 bottom-3 flex items-center justify-between text-[0.8125rem] font-semibold uppercase tracking-[0.12em]">
              <span className="opacity-75">Tip inside</span>
              <PawIcon className="w-7 text-red" />
            </span>
          </span>

          <span
            aria-hidden={!flipped}
            className={`${face} bg-blue text-sheet shadow-lift [transform:rotateY(180deg)]`}
          >
            <span className="accent text-lg text-blush">Drea’s tip</span>
            <span className="mt-2 font-display text-[1.1875rem] leading-snug">{item.tip}</span>
          </span>
        </span>
      </button>

      <span aria-live="polite" className="sr-only">
        {flipped ? `Drea’s tip for ${item.issue}: ${item.tip}` : ""}
      </span>
    </li>
  )
}
