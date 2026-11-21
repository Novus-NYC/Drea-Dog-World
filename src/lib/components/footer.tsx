import Image from "next/image"
import Link from "next/link"
import BadgeLogo from "@/lib/components/badge-logo"
import InstagramIcon from "@/lib/components/instagram-icon"
import { business, contact, mainNav, routes } from "@/lib/site-data"

const linkClass = "inline-block py-1 no-underline hover:text-white hover:underline"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white/85 [&_:focus-visible]:outline-blush">
      <div aria-hidden="true" className="relative h-[clamp(110px,14vw,200px)] bg-paper">
        <Image src="/images/skyline.svg" alt="" fill unoptimized className="object-cover object-bottom" />
      </div>

      <div className="mx-auto max-w-content px-gutter pb-9 pt-9">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href={routes.home}
              className="inline-flex items-center gap-3 font-display text-[1.625rem] font-semibold text-white no-underline"
            >
              <BadgeLogo className="h-[52px] w-[52px] shrink-0" />
              {business.name}
            </Link>
            <p className="mt-4 max-w-prose">
              {business.owner}, {business.ownerTitle.toLowerCase()}. Serving
              Brooklyn’s pups for over 30 years.
            </p>
            <a
              href={contact.instagram.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3.5 py-2.5 font-semibold text-white no-underline transition-colors hover:bg-white hover:text-ink"
            >
              <InstagramIcon className="h-5 w-5" />
              Instagram
            </a>
          </div>

          <div>
            <h2 className="mb-2 text-xl text-white">Pages</h2>
            <ul>
              {mainNav.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className={linkClass}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl text-white">Reach her</h2>
            <ul>
              <li>
                <a href={contact.phone.href} className={linkClass}>
                  {contact.phone.display}
                </a>
              </li>
              <li>
                <a href={contact.email.href} className={`${linkClass} break-all`}>
                  {contact.email.display}
                </a>
              </li>
              <li>
                <a href={contact.instagram.href} target="_blank" rel="noreferrer" className={linkClass}>
                  {contact.instagram.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-2 border-t border-white/15 pt-4 text-sm">
          <span>
            © {year} {business.name}
          </span>
          <a
            href="https://novusnyc.org"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:underline"
          >
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  )
}
