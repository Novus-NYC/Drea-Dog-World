"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { business, mainNav, primaryCta, routes } from "@/lib/site-data"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

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
      className="sticky top-0 z-50 bg-ink text-white"
      onKeyDown={handleKeyDown}
    >
      <div className="relative mx-auto flex h-header max-w-content items-center justify-between px-gutter">
        <Link
          href={routes.home}
          className="whitespace-nowrap font-tag text-2xl no-underline [text-shadow:2px_2px_0_var(--color-red)] sm:text-3xl"
          onClick={closeMenu}
        >
          {business.name}
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="min-h-11 border-2 border-white px-3 text-small font-semibold lg:hidden"
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
            className="mt-3 border-2 border-white bg-red-deep px-4 py-2.5 text-center text-small font-semibold no-underline hover:bg-red lg:mt-0"
          >
            {primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  )
}
