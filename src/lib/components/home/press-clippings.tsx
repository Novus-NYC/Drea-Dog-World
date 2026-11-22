import ButtonLink from "@/lib/components/ui/button-link"
import Eyebrow from "@/lib/components/ui/eyebrow"
import PawTrail from "@/lib/components/ui/paw-trail"
import OutletLogo from "@/lib/components/icons/outlet-logo"
import CredentialBadge from "@/lib/components/ui/credential-badge"
import { credentials, press, routes, type PressMention } from "@/lib/site-data"

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
          {press.filter((item) => item.showOnHomepage !== false).map((item, index) => (
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
            {credentials.map((item) => (
              <li key={item.name} className="flex items-center gap-3 text-[0.9375rem] font-semibold leading-snug">
                <CredentialBadge credential={item} size={40} />
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
