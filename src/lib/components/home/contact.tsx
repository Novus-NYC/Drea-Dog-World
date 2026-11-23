import Eyebrow from "@/lib/components/ui/eyebrow"
import ContactForm from "@/lib/components/ui/contact-form"
import { business, contact } from "@/lib/site-data"

const contactWays = [
  { label: "Call or text", value: contact.phone.display, href: contact.phone.href },
  { label: "Email", value: contact.email.display, href: contact.email.href },
]

export default function Contact() {
  return (
    // overflow-x-clip keeps the card from making the page scroll sideways while it slides away on send
    <section id="contact" aria-labelledby="contact-heading" className="overflow-x-clip pb-24 pt-20 lg:pb-[110px] lg:pt-24">
      <div data-reveal className="mx-auto grid max-w-content items-start gap-12 px-gutter lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 id="contact-heading" className="text-heading">
            Tell {business.nickname} about <span className="accent whitespace-nowrap">your dog.</span>
          </h2>
          <p className="mt-4 max-w-[30em] text-lead">
            A few quick questions, then a short note. She’ll write back with where she would start.
          </p>

          <ul className="mt-8 border-t-[1.5px] border-ink">
            {contactWays.map((way) => (
              <li key={way.label} className="border-b border-line">
                <a href={way.href} className="group block py-3.5 no-underline">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-steel">{way.label}</span>
                  <span className="block break-all font-display text-xl font-semibold transition-colors group-hover:text-red">
                    {way.value}
                  </span>
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
