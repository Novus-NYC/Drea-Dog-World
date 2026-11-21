import "./globals.css"
import { Fraunces, Work_Sans } from "next/font/google"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

const fraunces = Fraunces({ style: ["normal", "italic"], axes: ["opsz"], subsets: ["latin"], variable: "--font-fraunces", display: "swap" })
const workSans = Work_Sans({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-work-sans", display: "swap" })

const fontVariables = [fraunces.variable, workSans.variable].join(" ")

export const metadata = {
  title: "Business Name",
  description: "Short description of the business."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
