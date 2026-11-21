"use client"

import { useEffect, useRef, useState } from "react"
import BadgeLogo from "@/lib/components/badge-logo"
import { buttonBase, buttonVariants } from "@/lib/components/button-link"
import { business, contact, dogAges, trainingNeeds, trainingTypes } from "@/lib/site-data"

type Errors = {
  message?: string
  email?: string
}

const inputClass =
  "w-full border-0 border-b-2 border-mist bg-transparent px-0.5 py-2 text-ink placeholder:text-steel focus:border-blue focus:outline-none aria-[invalid=true]:border-red-deep"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function Stamp() {
  return (
    <span aria-hidden="true" className="postcard-stamp grid h-[104px] w-[90px] shrink-0 rotate-3 place-items-center p-2">
      <BadgeLogo className="h-full w-full bg-white p-1" />
    </span>
  )
}

function Choices({ name, type, options }: { name: string; type: "radio" | "checkbox"; options: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <label key={option} className="cursor-pointer">
          <input type={type} name={name} value={option} className="peer sr-only" />
          <span className="inline-block rounded-md border-2 border-line bg-white px-3.5 py-2 text-small font-semibold leading-snug transition-colors hover:border-blue peer-checked:border-blue peer-checked:bg-blue peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue">
            {option}
          </span>
        </label>
      ))}
    </div>
  )
}

export default function PostcardForm() {
  const [side, setSide] = useState<1 | 2>(1)
  const [flipping, setFlipping] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [errors, setErrors] = useState<Errors>({})

  const formRef = useRef<HTMLFormElement>(null)
  const frontRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)
  const doneRef = useRef<HTMLDivElement>(null)
  const turnedRef = useRef(false)

  useEffect(() => {
    if (!turnedRef.current) return
    const face = side === 1 ? frontRef.current : backRef.current
    face?.querySelector<HTMLElement>("input, textarea")?.focus({ preventScroll: true })
  }, [side])

  useEffect(() => {
    if (status === "sent") {
      doneRef.current?.focus()
    }
  }, [status])

  function turnTo(next: 1 | 2) {
    const delay = prefersReducedMotion() ? 0 : 260
    turnedRef.current = true
    setFlipping(true)

    setTimeout(() => {
      setSide(next)
      setFlipping(false)
    }, delay)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const message = String(data.get("message") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const nextErrors: Errors = {}

    if (!message) {
      nextErrors.message = "Write Drea a short note about your dog."
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Add an email address so Drea can write back."
    }

    setErrors(nextErrors)

    if (nextErrors.message || nextErrors.email) {
      const field = nextErrors.message ? "message" : "email"
      event.currentTarget.querySelector<HTMLElement>(`[name="${field}"]`)?.focus()
      return
    }

    const name = String(data.get("name") ?? "").trim()
    const lines = [
      `Training type: ${data.get("trainingType") ?? "Not chosen"}`,
      `Training on: ${data.getAll("trainingNeeds").join(", ") || "Not chosen"}`,
      `Dog: ${data.get("dogAge") ?? "Not chosen"}`,
      "",
      message,
      "",
      `From: ${name || "Not given"}`,
      `Email: ${email}`,
      `ZIP code: ${data.get("zip") || "Not given"}`,
      `Phone: ${data.get("phone") || "Not given"}`,
    ]
    const subject = `Postcard from ${name || "the website"}`
    window.location.href = `${contact.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`

    setStatus("sending")
    setTimeout(() => setStatus("sent"), prefersReducedMotion() ? 0 : 1700)
  }

  function startOver() {
    formRef.current?.reset()
    setErrors({})
    turnedRef.current = false
    setSide(1)
    setStatus("idle")
  }

  if (status === "sent") {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="mx-auto mt-12 max-w-[900px] rounded-md bg-sheet px-6 py-12 text-center shadow-soft"
      >
        <p className="font-display text-[2rem] font-semibold">Postcard ready to mail!</p>
        <p className="mx-auto mt-2 max-w-prose">
          Your email app should open with your postcard filled in. Press send there and {business.nickname} will write back soon.
        </p>
        <p className="mt-2 text-small text-steel">
          No email app? Call or text{" "}
          <a href={contact.phone.href} className="font-semibold text-blue">
            {contact.phone.display}
          </a>
          .
        </p>
        <button type="button" onClick={startOver} className="mt-4 py-2 font-semibold text-blue hover:underline">
          Send another
        </button>
      </div>
    )
  }

  return (
    <div className={`mx-auto mt-12 max-w-[900px] [perspective:1600px] ${status === "sending" ? "is-sending" : ""}`}>
      <form
        ref={formRef}
        noValidate
        onSubmit={handleSubmit}
        aria-label="Postcard to Drea"
        className={`postcard rounded-md border-[12px] border-sheet bg-sheet px-4 py-5 shadow-lift outline outline-1 outline-line sm:px-7 sm:py-6 ${flipping ? "is-flipping" : ""}`}
      >
        <div ref={frontRef} className={side === 1 ? "block" : "hidden"}>
          <div className="float-right mb-2 ml-4">
            <Stamp />
          </div>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-blue">Side 1 of 2 · About your dog</p>

          <fieldset className="mb-5 mt-4">
            <legend className="mb-2 font-semibold">What type of training does your dog need?</legend>
            <Choices name="trainingType" type="radio" options={trainingTypes} />
          </fieldset>

          <fieldset className="mb-5">
            <legend className="mb-2 font-semibold">
              What does your dog need training on? <span className="text-small font-normal text-steel">Select all that apply.</span>
            </legend>
            <Choices name="trainingNeeds" type="checkbox" options={trainingNeeds} />
          </fieldset>

          <fieldset className="mb-5">
            <legend className="mb-2 font-semibold">Is your dog an adult or a puppy?</legend>
            <Choices name="dogAge" type="radio" options={dogAges} />
          </fieldset>

          <div className="clear-both flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-line pt-4">
            <span className="text-small text-steel">Every question here is optional.</span>
            <button type="button" onClick={() => turnTo(2)} className={`${buttonBase} ${buttonVariants.primary}`}>
              Turn it over <span aria-hidden="true">↻</span>
            </button>
          </div>
        </div>

        <div ref={backRef} className={side === 2 ? "grid gap-7 md:grid-cols-[1.1fr_1fr]" : "hidden"}>
          <div className="flex flex-col border-b-2 border-line pb-5 md:border-b-0 md:border-r-2 md:pb-0 md:pr-7">
            <p className="mb-3 mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-blue">Side 2 of 2 · Your note</p>
            <label htmlFor="postcard-message" className="font-display text-[1.375rem] font-semibold italic">
              Dear {business.nickname}, <span className="not-italic text-red">*</span>
            </label>
            <textarea
              id="postcard-message"
              name="message"
              rows={7}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "postcard-message-error" : undefined}
              placeholder="Your dog’s name, age, breed, and what’s going on."
              className="mt-1 min-h-[224px] flex-1 resize-y border-0 bg-transparent bg-[linear-gradient(transparent_31px,var(--color-mist)_32px)] bg-[length:100%_32px] px-1 leading-[32px] text-ink placeholder:text-steel focus:shadow-[inset_0_-2px_0_var(--color-blue)] focus:outline-none aria-[invalid=true]:shadow-[inset_0_-2px_0_var(--color-red-deep)]"
            />
            {errors.message && (
              <p id="postcard-message-error" className="mt-2 text-small font-semibold text-red-deep">
                {errors.message}
              </p>
            )}
            <button
              type="button"
              onClick={() => turnTo(1)}
              className="mt-3 self-start py-2 font-semibold text-blue hover:underline"
            >
              <span aria-hidden="true">←</span> Back to side 1
            </button>
          </div>

          <div className="relative">
            <div className="float-right mb-2 ml-3">
              <Stamp />
            </div>
            <span
              aria-hidden="true"
              className="postmark absolute right-14 top-10 z-[2] grid h-[92px] w-[92px] place-content-center rounded-full border-[3px] border-blue text-center text-[11px] font-bold leading-tight tracking-[0.12em] text-blue"
            >
              <span className="text-[12.5px]">BROOKLYN</span>
              N.Y.
            </span>

            <p className="mb-3 mt-1 border-b border-line pb-2.5 font-display text-lg font-semibold italic leading-normal">
              To: {business.name}
              <br />
              Brooklyn, New York
            </p>

            <label htmlFor="postcard-name" className="mt-3 block font-semibold">
              From
            </label>
            <input id="postcard-name" name="name" autoComplete="name" placeholder="Your name" className={inputClass} />

            <label htmlFor="postcard-email" className="mt-3 block font-semibold">
              Where should {business.nickname} reply? <span className="text-red">*</span>
            </label>
            <input
              id="postcard-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@email.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "postcard-email-error" : undefined}
              className={inputClass}
            />
            {errors.email && (
              <p id="postcard-email-error" className="mt-2 text-small font-semibold text-red-deep">
                {errors.email}
              </p>
            )}

            <div className="mt-3 grid gap-3.5 sm:grid-cols-2">
              <div>
                <label htmlFor="postcard-zip" className="block font-semibold">
                  ZIP code
                </label>
                <input
                  id="postcard-zip"
                  name="zip"
                  inputMode="numeric"
                  maxLength={5}
                  autoComplete="postal-code"
                  placeholder="11216"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="postcard-phone" className="block font-semibold">
                  Phone
                </label>
                <input
                  id="postcard-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Optional"
                  className={inputClass}
                />
              </div>
            </div>

            <button type="submit" className={`${buttonBase} ${buttonVariants.primary} mt-5`}>
              Mail it
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
