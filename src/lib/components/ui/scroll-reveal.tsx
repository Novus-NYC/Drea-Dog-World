"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

const selector = "[data-reveal], [data-reveal-stagger]"

// Mounted once in the root layout. Fades content up as it scrolls into view:
// - data-reveal: the element itself fades up
// - data-reveal-stagger: its children fade up one after another
// Content is only hidden after this runs (via the reveal-ready class on <html>), so the page
// stays fully visible without JavaScript. Anything already on screen is revealed right away.
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => !el.classList.contains("is-revealed"),
    )

    const inView = (el: HTMLElement) => el.getBoundingClientRect().top < window.innerHeight * 0.92
    elements.filter(inView).forEach((el) => el.classList.add("is-revealed"))
    document.documentElement.classList.add("reveal-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("is-revealed")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    )

    elements.filter((el) => !el.classList.contains("is-revealed")).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
