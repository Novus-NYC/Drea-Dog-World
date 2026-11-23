import type { Metadata } from "next"
import ContactHero from "@/lib/components/contact/contact-hero"
import GetInTouch from "@/lib/components/contact/get-in-touch"
import WaysToWork from "@/lib/components/contact/ways-to-work"
import { business } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact",
  description: `Tell ${business.owner} about your dog. Call, text, email, or fill out a short form and she’ll write back with where she’d start.`,
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <GetInTouch />
      <WaysToWork />
    </>
  )
}
