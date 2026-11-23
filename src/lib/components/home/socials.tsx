import Image from "next/image"
import { buttonBase, buttonVariants } from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import { FacebookIcon, InstagramIcon, YelpIcon } from "@/lib/components/icons/social-icons"
import { blogPosts, blogUrl, contact, instagramPosts } from "@/lib/site-data"

const iconLinks = [
  { label: "Drea’s Dog World on Facebook", href: contact.facebook.href, Icon: FacebookIcon },
  { label: "Drea’s Dog World on Yelp", href: contact.yelp.href, Icon: YelpIcon },
]

export default function Socials() {
  return (
    <section
      id="socials"
      aria-labelledby="socials-heading"
      className="torn-edges relative -mt-[22px] bg-sage pb-24 pt-28 lg:pb-[110px] lg:pt-[120px]"
    >
      <div className="mx-auto max-w-content px-gutter">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>On Instagram</Eyebrow>
            <h2 id="socials-heading" className="text-heading">
              Life with Brooklyn’s <span className="accent">dogs.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href={contact.instagram.href}
              target="_blank"
              rel="noreferrer"
              className={`${buttonBase} ${buttonVariants.primary}`}
            >
              <InstagramIcon className="h-5 w-5" />
              Follow {contact.instagram.display}
            </a>
            <ul className="flex gap-2.5">
              {iconLinks.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-lg border-[1.5px] border-ink text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul data-reveal-stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <li key={post.href}>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={post.image}
                  alt={`Instagram post: ${post.alt}`}
                  fill
                  sizes="(min-width: 1024px) 190px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 grid place-items-center bg-[color-mix(in_srgb,var(--color-ink)_45%,transparent)] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <InstagramIcon className="h-8 w-8" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-t border-[color-mix(in_srgb,var(--color-ink)_25%,transparent)] pt-5">
          <p className="text-eyebrow font-semibold uppercase text-blue">From the blog archive</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {blogPosts.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-[1.0625rem] font-semibold no-underline hover:text-red"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={blogUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue underline-offset-4 hover:underline sm:ml-auto"
          >
            All posts <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
