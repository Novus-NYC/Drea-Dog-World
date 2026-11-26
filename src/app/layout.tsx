import "./globals.css"
import type { Metadata } from "next"
import { Fraunces, Work_Sans } from "next/font/google"
import Navbar from "@/lib/components/layout/navbar"
import Footer from "@/lib/components/layout/footer"
import ScrollReveal from "@/lib/components/ui/scroll-reveal"
import { business } from "@/lib/site-data"

const fraunces = Fraunces({ style: ["normal", "italic"], axes: ["opsz"], subsets: ["latin"], variable: "--font-fraunces", display: "swap" })
const workSans = Work_Sans({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-work-sans", display: "swap" })

const fontVariables = [fraunces.variable, workSans.variable].join(" ")

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Brooklyn Dog Trainer ${business.owner}`,
    template: `%s | ${business.name}`,
  },
  description: `${business.owner} has trained Brooklyn dogs for over 30 years. Positive, reward-based obedience, rehabilitation, and socialization for rescues, reactive dogs, and puppies. Never a shock collar.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
