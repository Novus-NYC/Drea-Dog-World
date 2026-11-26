import Link from "next/link"

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold no-underline transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5"

export const buttonVariants = {
  primary: "bg-red text-white shadow-button hover:bg-red-deep hover:shadow-button-hover",
  secondary: "bg-[color-mix(in_srgb,var(--color-sheet)_45%,transparent)] text-ink shadow-[inset_0_0_0_2px_var(--color-ink)] hover:bg-sheet",
}

export default function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
