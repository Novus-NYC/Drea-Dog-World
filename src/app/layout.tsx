import "./globals.css"
import { Anton, Sedgwick_Ave_Display, Stardos_Stencil, Work_Sans } from "next/font/google"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" })
const sedgwick = Sedgwick_Ave_Display({ weight: "400", subsets: ["latin"], variable: "--font-sedgwick", display: "swap" })
const stardos = Stardos_Stencil({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-stardos", display: "swap" })
const workSans = Work_Sans({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-work-sans", display: "swap" })

const fontVariables = [anton.variable, sedgwick.variable, stardos.variable, workSans.variable].join(" ")

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
