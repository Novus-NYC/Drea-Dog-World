import ButtonLink from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import { business, contact, routes } from "@/lib/site-data"

type ContactCtaProps = {
  eyebrow: string
  title: string
  accent: string
  text: string
}

const contactWays = [
  { label: "Call or text", value: contact.phone.display, href: contact.phone.href },
  { label: "Email", value: contact.email.display, href: contact.email.href },
  { label: "Instagram", value: contact.instagram.display, href: contact.instagram.href, external: true },
]

// The closing "get in touch" section at the end of a page.
export default function ContactCta({ eyebrow, title, accent, text }: ContactCtaProps) {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="torn-top relative -mt-[22px] bg-paper pb-10 pt-28 lg:pb-14 lg:pt-[120px]"
    >
      <div className="mx-auto grid max-w-content items-center gap-12 px-gutter lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="contact-cta-heading" className="text-display">
            {title} <span className="accent">{accent}</span>
          </h2>
          <p className="mb-8 mt-4 max-w-[30em] text-lead">{text}</p>
          <ButtonLink href={routes.contact}>
            Tell {business.nickname} about your dog <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>

        <ul className="border-t border-[color-mix(in_srgb,var(--color-ink)_25%,transparent)]">
          {contactWays.map((way) => (
            <li key={way.label} className="border-b border-[color-mix(in_srgb,var(--color-ink)_15%,transparent)]">
              <a
                href={way.href}
                target={way.external ? "_blank" : undefined}
                rel={way.external ? "noreferrer" : undefined}
                className="block break-all py-3.5 font-display text-[1.375rem] font-semibold no-underline transition-colors hover:text-red"
              >
                <span className="block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-steel">
                  {way.label}
                </span>
                {way.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
