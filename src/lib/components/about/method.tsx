import ButtonLink from "@/lib/components/ui/button-link"
import { fourPs, helpsWith, primaryCta, trainingMethods } from "@/lib/site-data"

export default function Method() {
  return (
    <section aria-labelledby="method-heading" className="bg-band py-24 lg:py-[110px]">
      <div className="mx-auto max-w-content px-gutter">
        <h2 id="method-heading" className="text-heading">
          The four <span className="accent">P’s.</span>
        </h2>

        <ol data-reveal-stagger className="mt-10 grid gap-px overflow-hidden rounded-frame bg-[color-mix(in_srgb,var(--color-sheet)_16%,var(--color-deep))] text-sheet sm:grid-cols-2 lg:grid-cols-4">
          {fourPs.map((p) => (
            <li key={p.name} className="bg-deep px-7 py-8">
              <h3 className="text-[1.75rem] text-sheet">
                <span className="font-display text-[2.875rem] italic leading-none text-blush">{p.name[0]}</span>
                {p.name.slice(1)}
              </h3>
              <p className="mt-2 text-small text-[color-mix(in_srgb,var(--color-sheet)_85%,transparent)]">
                {p.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="border-b-2 border-ink pb-3 text-2xl">How she trains</h3>
            <ol className="mt-5 grid gap-3">
              {trainingMethods.map((method, index) => (
                <li key={method} className="flex items-baseline gap-3.5">
                  <span className="w-5 shrink-0 font-display text-xl font-semibold italic text-red">{index + 1}</span>
                  {method}
                </li>
              ))}
            </ol>
            <p className="mt-5 font-display text-[1.3125rem] font-semibold italic text-red-deep">
              And never a shock collar.
            </p>
          </div>

          <div>
            <h3 className="border-b-2 border-ink pb-3 text-2xl">What she helps with</h3>
            <dl className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {helpsWith.map((group) => (
                <div key={group.place}>
                  <dt className="font-semibold text-blue">{group.place}</dt>
                  <dd>
                    <ul className="mt-1.5 grid gap-1">
                      {group.problems.map((problem) => (
                        <li key={problem}>{problem}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-dashed border-[color-mix(in_srgb,var(--color-ink)_25%,transparent)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-semibold">
            Not sure where your dog fits? <span className="accent">Tell Drea what’s going on.</span>
          </p>
          <ButtonLink href={primaryCta.href} className="shrink-0">
            Ask about your dog
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
