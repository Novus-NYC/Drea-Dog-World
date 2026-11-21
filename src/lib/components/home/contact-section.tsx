import Eyebrow from "@/lib/components/eyebrow"
import PostcardForm from "@/lib/components/home/postcard-form"
import { business, contact } from "@/lib/site-data"

const contactWays = [
  { label: "Call or text", value: contact.phone.display, href: contact.phone.href },
  { label: "Email", value: contact.email.display, href: contact.email.href }
]

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="pb-24 pt-20 lg:pb-[110px] lg:pt-24">
      <div className="mx-auto max-w-content px-gutter">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 id="contact-heading" className="text-heading">
              Send {business.nickname} a <span className="accent">postcard.</span>
            </h2>
            <p className="mt-3 max-w-[44ch] text-lead">
              Tell her about your dog. She’ll write back with where she would start.
            </p>
          </div>

          <ul className="grid gap-x-10 sm:grid-cols-3 lg:grid-cols-1">
            {contactWays.map((way) => (
              <li key={way.label}>
                <a
                  href={way.href}
                  className="group flex flex-col border-b border-line py-2.5 no-underline"
                >
                  <span className="text-small font-semibold text-steel">{way.label}</span>
                  <span className="break-all font-display text-xl font-semibold transition-colors group-hover:text-red">
                    {way.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <PostcardForm />
      </div>
    </section>
  )
}
