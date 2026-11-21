"use client"

import { useEffect, useRef, useState } from "react"
import PawIcon from "@/lib/components/paw-icon"

const steps = [0, 1, 2, 3, 4, 5]

export default function PawTrail() {
  const trailRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const trail = trailRef.current
    if (!trail) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    })

    observer.observe(trail)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={trailRef} aria-hidden="true" className="flex justify-center gap-[30px] pt-24">
      {steps.map((step) => (
        <span
          key={step}
          className={`paw-step ${step % 2 === 0 ? "-mt-3.5" : ""} ${visible ? "is-in" : ""}`}
          style={{ animationDelay: `${step * 0.15}s` }}
        >
          <PawIcon className="w-[26px] text-ink" />
        </span>
      ))}
    </div>
  )
}
