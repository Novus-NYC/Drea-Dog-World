import OutletLogo from "@/lib/components/icons/outlet-logo"
import CredentialBadge from "@/lib/components/ui/credential-badge"
import { credentials, press, type PressMention } from "@/lib/site-data"

function OutletColumn({ item }: { item: PressMention }) {
  const content = (
    <>
      <OutletLogo item={item} size={26} />
      <span className="font-display text-lg font-semibold leading-tight">{item.outlet}</span>
      <span className="text-small text-steel">
        {item.note}
        {item.url && <span aria-hidden="true"> ↗</span>}
      </span>
    </>
  )

  const columnClass = "grid h-full content-center justify-items-center gap-2 bg-sheet px-4 py-8 text-center"

  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noreferrer" className={`${columnClass} no-underline transition-colors hover:bg-paper`}>
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  }

  return <div className={columnClass}>{content}</div>
}

export default function PressCredentials() {
  return (
    <section id="press" aria-labelledby="press-heading" className="-mt-[22px] bg-sheet pb-24 pt-28 lg:pb-[110px] lg:pt-[132px]">
      <div className="mx-auto max-w-content px-gutter">
        <h2 id="press-heading" className="text-heading">
          As seen <span className="accent">in.</span>
        </h2>

        <ul data-reveal-stagger className="mt-9 grid grid-cols-2 gap-px border-b border-t-2 border-b-line border-t-ink bg-line lg:grid-cols-5">
          {press.map((item) => (
            <li key={item.outlet} className="last:odd:col-span-2 lg:last:odd:col-span-1">
              <OutletColumn item={item} />
            </li>
          ))}
        </ul>

        <ul aria-label="Credentials" className="mt-9 flex flex-wrap justify-center gap-x-12 gap-y-5">
          {credentials.map((item) => (
            <li key={item.name} className="flex items-center gap-3">
              <CredentialBadge credential={item} size={56} />
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-steel">{item.kind}</span>
                <span className="block font-display text-[1.0625rem] font-semibold">{item.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
