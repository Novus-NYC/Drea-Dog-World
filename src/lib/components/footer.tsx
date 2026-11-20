import Link from "next/link"
import { business, contact, mainNav, routes } from "@/lib/site-data"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto max-w-content px-gutter pb-9 pt-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href={routes.home}
              className="font-tag text-3xl text-white no-underline [text-shadow:2px_2px_0_var(--color-red)]"
            >
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
              className="mt-4 inline-block border-2 border-steel px-3 py-2 text-small font-semibold text-white no-underline hover:bg-white hover:text-ink"
            >
              Instagram
            </a>
          </div>

          <div>
            <h2 className="mb-3 text-xl text-white">Pages</h2>
            <ul>
              {mainNav.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block py-2 no-underline hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="inline-block py-2 no-underline hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl text-white">Reach her</h2>
            <ul>
              <li>
                <a href={contact.phone.href} className="inline-block py-2 no-underline hover:text-white hover:underline">
                  {contact.phone.display}
                </a>
              </li>
              <li>
                <a href={contact.email.href} className="inline-block break-all py-2 no-underline hover:text-white hover:underline">
                  {contact.email.display}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 no-underline hover:text-white hover:underline"
                >
                  {contact.instagram.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-2 border-t border-steel pt-4 text-small">
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
