"use client"

import { useEffect, useRef, useState } from "react"
import PawIcon from "@/lib/components/icons/paw-icon"
import BadgeLogo from "@/lib/components/ui/badge-logo"
import { buttonBase, buttonVariants } from "@/lib/components/ui/button-link"
import { business, contact, dogAges, trainingNeeds, trainingTypes } from "@/lib/site-data"

type Errors = {
  message?: string
  email?: string
}

const steps = ["About your dog", "Your details"]

const fieldClass =
  "w-full rounded-md border-2 border-line bg-white px-3.5 py-2.5 text-ink placeholder:text-steel focus:border-blue focus:outline-none aria-[invalid=true]:border-red-deep"
const labelClass = "mb-1.5 mt-4 block font-semibold"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
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

function ErrorText({ id, text }: { id: string; text?: string }) {
  if (!text) return null
  return (
    <p id={id} className="mt-1.5 text-small font-semibold text-red-deep">
      {text}
    </p>
  )
}

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [errors, setErrors] = useState<Errors>({})

  const formRef = useRef<HTMLFormElement>(null)
  const doneRef = useRef<HTMLDivElement>(null)
  const movedRef = useRef(false)

  // After switching steps, put the keyboard on the first field of the new step.
  useEffect(() => {
    if (!movedRef.current) return
    formRef.current
      ?.querySelector<HTMLElement>(`[data-step="${step}"] input, [data-step="${step}"] textarea`)
      ?.focus({ preventScroll: true })
  }, [step])

  useEffect(() => {
    if (status === "sent") doneRef.current?.focus()
  }, [status])

  function goTo(next: 1 | 2) {
    movedRef.current = true
    setStep(next)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const message = String(data.get("message") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const nextErrors: Errors = {}

    if (!message) nextErrors.message = `Write ${business.nickname} a short note about your dog.`
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = `Add an email address so ${business.nickname} can write back.`

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
    const subject = `Note from ${name || "the website"}`
    window.location.href = `${contact.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`

    // The logo stamps the card, then the card slides away before the thank-you appears.
    setStatus("sending")
    setTimeout(() => setStatus("sent"), prefersReducedMotion() ? 0 : 1700)
  }

  function startOver() {
    formRef.current?.reset()
    setErrors({})
    movedRef.current = false
    setStep(1)
    setStatus("idle")
  }

  if (status === "sent") {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className="rounded-frame bg-sheet px-6 py-12 text-center shadow-soft">
        <PawIcon className="step-in mx-auto w-11 text-red" />
        <p className="mt-3 font-display text-[1.75rem] font-semibold">Ready to send!</p>
        <p className="mx-auto mt-2 max-w-prose">
          Your email app should open with your note filled in. Press send there and {business.nickname} will write back
          soon.
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
    <div className={`relative ${status === "sending" ? "is-sending" : ""}`}>
      <form
        ref={formRef}
        noValidate
        onSubmit={handleSubmit}
        aria-label={`Note to ${business.nickname}`}
        className="letter relative rounded-frame bg-sheet p-5 shadow-soft sm:p-8"
      >
        {/* The letterpress logo that stamps the card when it is sent */}
        <span aria-hidden="true" className="letter-stamp absolute right-5 top-16 z-[2] w-28 sm:right-8 sm:w-32">
          <BadgeLogo className="w-full" />
        </span>

        <p className="sr-only" aria-live="polite">
          Step {step} of 2, {steps[step - 1]}
        </p>
        <div aria-hidden="true" className="mb-6 flex gap-1.5">
          {steps.map((label, index) => (
            <span
              key={label}
              className={`flex-1 rounded-md px-3 py-2.5 text-small font-bold transition-colors ${
                step === index + 1 ? "bg-ink text-paper" : "bg-band text-steel"
              }`}
            >
              {index + 1} · {label}
            </span>
          ))}
        </div>

        <div data-step="1" className={step === 1 ? "step-in block" : "hidden"}>
          <fieldset className="mb-5">
            <legend className="mb-2 font-semibold">What type of training does your dog need?</legend>
            <Choices name="trainingType" type="radio" options={trainingTypes} />
          </fieldset>

          <fieldset className="mb-5">
            <legend className="mb-2 font-semibold">
              What does your dog need training on?{" "}
              <span className="text-small font-normal text-steel">Select all that apply.</span>
            </legend>
            <Choices name="trainingNeeds" type="checkbox" options={trainingNeeds} />
          </fieldset>

          <fieldset>
            <legend className="mb-2 font-semibold">Is your dog an adult or a puppy?</legend>
            <Choices name="dogAge" type="radio" options={dogAges} />
          </fieldset>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <span className="text-small text-steel">Every question here is optional.</span>
            <button type="button" onClick={() => goTo(2)} className={`${buttonBase} ${buttonVariants.primary}`}>
              Next <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div data-step="2" className={step === 2 ? "step-in block" : "hidden"}>
          <label htmlFor="contact-message" className="mb-1.5 block font-semibold">
            Any details you’d like to add? <span className="text-red">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            placeholder="Your dog’s name, age, breed, and what’s going on"
            className={`${fieldClass} resize-y`}
          />
          <ErrorText id="contact-message-error" text={errors.message} />

          <div className="grid gap-x-3 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Your name
              </label>
              <input id="contact-name" name="name" autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-zip" className={labelClass}>
                ZIP code
              </label>
              <input
                id="contact-zip"
                name="zip"
                inputMode="numeric"
                maxLength={5}
                autoComplete="postal-code"
                placeholder="11216"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email <span className="text-red">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={fieldClass}
              />
              <ErrorText id="contact-email-error" text={errors.email} />
            </div>
            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                Phone
              </label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={fieldClass} />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <button type="button" onClick={() => goTo(1)} className="py-2 font-semibold text-blue hover:underline">
              <span aria-hidden="true">←</span> Back
            </button>
            <button type="submit" className={`${buttonBase} ${buttonVariants.primary}`}>
              Send to {business.nickname}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
