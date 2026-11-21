"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import BadgeLogo from "@/lib/components/badge-logo"
import { business, mainNav, primaryCta, routes } from "@/lib/site-data"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function updateProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)
    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape" && menuOpen) {
      closeMenu()
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header
      className="sticky top-0 z-50 bg-ink text-white [&_:focus-visible]:outline-blush"
      onKeyDown={handleKeyDown}
    >
      <div className="relative mx-auto flex h-header max-w-content items-center justify-between px-gutter">
        <Link
          href={routes.home}
          className="flex items-center gap-3 whitespace-nowrap font-display text-xl font-semibold no-underline sm:text-2xl"
          onClick={closeMenu}
        >
          <BadgeLogo className="h-11 w-11 shrink-0" />
          {business.name}
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="min-h-11 rounded-lg border-2 border-white/80 px-3 text-small font-semibold lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="main-menu"
          aria-label="Main"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col bg-ink px-gutter pb-6 pt-2 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:p-0`}
        >
          {mainNav.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="py-3 text-small font-semibold no-underline hover:underline lg:py-1"
              >
                {link.label} <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenu}
                className="py-3 text-small font-semibold no-underline decoration-red decoration-[3px] underline-offset-8 hover:underline aria-[current=page]:underline lg:py-1"
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            href={primaryCta.href}
            onClick={closeMenu}
            className="mt-3 rounded-full bg-red px-5 py-2.5 text-center text-small font-semibold no-underline transition-colors hover:bg-red-deep lg:mt-0"
          >
            {primaryCta.label}
          </Link>
        </nav>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-white/15">
        <div ref={progressRef} className="h-full origin-left scale-x-0 bg-red" />
      </div>
    </header>
  )
}
