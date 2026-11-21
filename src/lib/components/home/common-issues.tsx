import Eyebrow from "@/lib/components/eyebrow"
import IssueCard from "@/lib/components/home/issue-card"
import { business, issueTips } from "@/lib/site-data"

const tilts = [-1.2, 0.8, -0.6, 1, -0.9, 0.7]

export default function CommonIssues() {
  return (
    <section
      id="issues"
      aria-labelledby="issues-heading"
      className="torn-edges relative -mt-[22px] bg-band pb-24 pt-28 lg:pb-[110px] lg:pt-[120px]"
    >
      <div className="mx-auto max-w-content px-gutter">
        <Eyebrow>Common issues</Eyebrow>
        <h2 id="issues-heading" className="text-heading">
          What’s your dog’s <span className="accent">issue?</span>
        </h2>
        <p className="mt-3 max-w-prose text-steel">Pick one. {business.nickname} has a tip.</p>

        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {issueTips.map((item, index) => (
            <IssueCard
              key={item.issue}
              item={item}
              dark={index % 2 === 1}
              tilt={tilts[index % tilts.length]}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
