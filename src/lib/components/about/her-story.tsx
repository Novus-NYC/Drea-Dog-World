import Eyebrow from "@/lib/components/ui/eyebrow"
import { business, storyTimeline } from "@/lib/site-data"

export default function HerStory() {
  return (
    <section aria-labelledby="her-story-heading" className="py-24 lg:py-[110px]">
      <div className="mx-auto grid max-w-content items-start gap-14 px-gutter lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <Eyebrow>Her story</Eyebrow>
          <h2 id="her-story-heading" className="text-heading">
            How she <span className="accent">got here.</span>
          </h2>
          <p className="mt-4 text-lead">
            {business.owner.split(" ")[0]}’s mission is to strengthen the partnership between people and dogs through
            positive, reward-based training, rehabilitation, and socialization. She specializes in stressed, fearful,
            and reactive dogs, and in rescues finding their footing in city life.
          </p>

          <blockquote className="mt-8 rounded-frame bg-band px-6 py-5 sm:px-7">
            <p className="font-display text-[1.75rem] font-semibold italic leading-tight text-red-deep">
              “Teach a man to fish.”
            </p>
            <p className="mt-1.5">
              She doesn’t only fix the behavior. She teaches you how to read your dog and keep it fixed for life.
            </p>
          </blockquote>
        </div>

        <ol className="relative before:absolute before:bottom-2.5 before:left-[39px] before:top-2.5 before:w-0.5 before:bg-[repeating-linear-gradient(var(--color-red)_0_8px,transparent_8px_14px)] before:content-['']">
          {storyTimeline.map((step) => (
            <li key={step.title} className="relative grid grid-cols-[80px_1fr] gap-4 pb-7 last:pb-0 sm:gap-5">
              <span className="relative z-[1] min-w-[68px] self-start justify-self-center rounded-full border-2 border-red bg-sheet px-2.5 py-1 text-center font-display text-[0.9375rem] font-semibold text-red-deep">
                {step.when}
              </span>
              <div>
                <h3 className="text-[1.375rem]">{step.title}</h3>
                <p className="mt-1 text-steel">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
