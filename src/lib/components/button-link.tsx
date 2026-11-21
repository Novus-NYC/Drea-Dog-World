import Link from "next/link"

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

const base =
  "inline-block rounded-full px-6 py-3.5 font-semibold no-underline transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5"

const variants = {
  primary: "bg-red text-white shadow-button hover:bg-red-deep hover:shadow-button-hover",
  secondary: "bg-sheet text-ink shadow-[inset_0_0_0_2px_var(--color-ink)]",
}

export default function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
