import Image from "next/image"
import ButtonLink from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import PawTrail from "@/lib/components/ui/paw-trail"
import { press, routes, type PressMention } from "@/lib/site-data"

const credentialStrip = [
  { badge: "/images/badge-akc-cgc.png", label: "AKC Canine Good Citizen Evaluator" },
  { badge: "/images/badge-apdt.png", label: "Member, Association of Professional Dog Trainers" },
  { badge: null, label: "Commended by the ASPCA" },
]

function OutletLogo({ item }: { item: PressMention }) {
  if (item.logo === "nyt") {
    return (
      <svg viewBox="0 0 16 22" aria-hidden="true" className="h-[22px] w-auto shrink-0">
        <path
          fill="currentColor"
          d="M15.863 13.08c-.687 1.818-1.923 3.147-3.64 3.916v-3.917l2.129-1.958-2.129-1.889V6.505c1.923-.14 3.228-1.609 3.228-3.358C15.45.84 13.32 0 12.086 0c-.275 0-.55 0-.962.14v.14h.481c.824 0 1.51.42 1.51 1.189 0 .63-.48 1.189-1.304 1.189-2.129 0-4.6-1.749-7.279-1.749C2.13.91.481 2.728.481 4.546c0 1.819 1.03 2.448 2.128 2.798v-.14c-.343-.21-.618-.63-.618-1.189 0-.84.756-1.469 1.648-1.469 2.267 0 5.906 1.959 8.172 1.959h.206v2.727l-2.129 1.889 2.13 1.958v3.987c-.894.35-1.786.49-2.748.49-3.502 0-5.768-2.169-5.768-5.806 0-.839.137-1.678.344-2.518l1.785-.769v7.973l3.57-1.608V6.575L3.984 8.953c.55-1.61 1.648-2.728 2.953-3.358v-.07C3.433 6.295 0 9.023 0 13.08c0 4.686 3.914 7.974 8.446 7.974 4.807 0 7.485-3.288 7.554-7.974h-.137z"
        />
      </svg>
    )
  }

  if (item.logo === "time") {
    return (
      <svg viewBox="0 0 18.6 21.3" aria-hidden="true" className="h-[22px] w-auto shrink-0">
        <path
          fill="#E7131A"
          d="M7.71318 1.92829L5.65598 1.91733H2.46648C2.24787 1.91733 0.538211 1.93377 0.538211 1.93377L0.504579 4.3553L0.190674 4.36626L0.20749 1.64888L0.196279 0.53125C1.28374 0.575079 5.20754 0.60795 9.2827 0.60795C14.0305 0.60795 17.0911 0.564121 18.2963 0.536729L18.2794 1.77489L18.3019 4.52514L17.9767 4.51966C17.9767 4.29504 17.9263 3.38559 17.9263 3.29246C17.9263 3.25958 17.859 2.03786 17.8478 1.94472L16.4857 1.92829H10.841V18.879C10.841 18.9009 10.869 19.9912 10.8746 20.2158C11.0316 20.2377 12.5451 20.3254 12.8197 20.3254H12.9262V20.7856C12.8422 20.7856 12.7413 20.791 12.6572 20.791C11.7995 20.7801 10.4094 20.6924 9.42284 20.6924C8.43628 20.6924 7.07976 20.7746 6.07078 20.791C6.04276 20.791 5.83535 20.7856 5.75688 20.7856V20.2925C5.76809 20.2925 5.82975 20.2925 5.92504 20.287C6.35105 20.2706 7.40488 20.2103 7.67954 20.1884L7.72439 20.1829V18.7311L7.71318 1.92829Z"
        />
      </svg>
    )
  }

  return <Image src={item.logo} alt="" width={22} height={22} className="h-[22px] w-[22px] shrink-0 rounded-full" />
}

function Clipping({ item }: { item: PressMention }) {
  const content = (
    <>
      <span className="flex items-center gap-2.5 border-b border-ink pb-2.5 font-display text-[0.9375rem] font-extrabold">
        <OutletLogo item={item} />
        {item.outlet}
      </span>
      <span className="font-display text-lg font-semibold leading-[1.22]">{item.headline}</span>
      <span className="mt-auto text-small text-steel">
        {item.note}
        {item.url && (
          <>
            {" · "}
            <span className="whitespace-nowrap">
              Read <span aria-hidden="true">↗</span>
            </span>
          </>
        )}
      </span>
    </>
  )

  const clipClass =
    "flex h-full flex-col gap-2.5 border-t-[3px] border-double border-ink bg-sheet px-[18px] pb-[18px] pt-5 text-ink no-underline shadow-[0_10px_22px_rgba(43,35,33,0.12)]"

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className={`${clipClass} transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 motion-reduce:transition-none`}
      >
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  }

  return <div className={clipClass}>{content}</div>
}

export default function PressClippings() {
  return (
    <section
      id="press"
      aria-labelledby="press-heading"
      className="torn-edges relative -mt-[22px] bg-band pb-10 pt-28 lg:pb-12 lg:pt-[120px]"
    >
      <div className="mx-auto max-w-content px-gutter">
        <Eyebrow>Press and credentials</Eyebrow>
        <h2 id="press-heading" className="text-heading">
          As seen <span className="accent">in.</span>
        </h2>

        <ul className="mt-10 grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {press.map((item, index) => (
            <li
              key={item.outlet}
              className={index % 2 === 0 ? "sm:-rotate-[1.1deg]" : "sm:translate-y-2 sm:rotate-[0.9deg]"}
            >
              <Clipping item={item} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-4 border-[1.5px] border-dashed border-steel border-t-[6px] border-t-ink [border-top-style:double] bg-paper px-6 pb-4 pt-3 shadow-[0_10px_22px_rgba(43,35,33,0.1)] sm:-rotate-[0.3deg]">
          <p className="border-b border-ink pb-2.5 text-center font-display text-xs font-extrabold uppercase tracking-[0.22em]">
            Credentials and commendations
          </p>
          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10">
            {credentialStrip.map((item) => (
              <li key={item.label} className="flex items-center gap-3 text-[0.9375rem] font-semibold leading-snug">
                {item.badge ? (
                  <Image
                    src={item.badge}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 rounded-full mix-blend-multiply"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-red text-white shadow-[inset_0_0_0_2px_var(--color-red),inset_0_0_0_3.5px_#fff]"
                  >
                    ★
                  </span>
                )}
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <ButtonLink href={`${routes.about}#press`} className="mt-10">
          See all press and credentials
        </ButtonLink>

        <PawTrail />
      </div>
    </section>
  )
}
