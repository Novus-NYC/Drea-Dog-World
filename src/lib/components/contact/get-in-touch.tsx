import { InstagramIcon, MailIcon, PhoneIcon } from "@/lib/components/icons/social-icons"
import ContactForm from "@/lib/components/ui/contact-form"
import Eyebrow from "@/lib/components/ui/eyebrow"
import { business, contact } from "@/lib/site-data"

const reachWays = [
  { label: "Call or text", value: contact.phone.display, href: contact.phone.href, Icon: PhoneIcon, external: false },
  { label: "Email", value: contact.email.display, href: contact.email.href, Icon: MailIcon, external: false },
  { label: "Instagram", value: contact.instagram.display, href: contact.instagram.href, Icon: InstagramIcon, external: true },
]

// Torn top edge under the hero skyline, then the intro and contact details beside the form.
export default function GetInTouch() {
  return (
    <section
      id="get-in-touch"
      aria-labelledby="get-in-touch-heading"
      className="torn-top relative -mt-[22px] overflow-x-clip bg-paper pb-24 pt-28 lg:pb-[110px] lg:pt-[120px]"
    >
      <div data-reveal className="mx-auto grid max-w-content items-start gap-12 px-gutter lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 id="get-in-touch-heading" className="text-heading">
            Tell {business.nickname} about <span className="accent whitespace-nowrap">your dog.</span>
          </h2>
          <p className="mt-4 max-w-[30em] text-lead">
            A few quick questions, then a short note. She’ll write back with where she would start.
          </p>

          <ul aria-label={`Other ways to reach ${business.nickname}`} className="mt-8 border-t-[1.5px] border-ink">
            {reachWays.map(({ label, value, href, Icon, external }) => (
              <li key={label} className="border-b border-line">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 py-3.5 no-underline"
                >
                  <Icon className="h-5 w-5 shrink-0 text-red" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-steel">{label}</span>
                    <span className="block break-all font-display text-xl font-semibold transition-colors group-hover:text-red">
                      {value}
                    </span>
                  </span>
                  {external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
