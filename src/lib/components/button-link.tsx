import Link from "next/link"

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

const base =
  "inline-block border-2 border-ink px-5 py-3 font-semibold no-underline shadow-hard-sm transition-[transform,box-shadow] duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-ink)]"

const variants = {
  primary: "bg-red-deep text-white",
  secondary: "bg-sheet text-ink",
}

export default function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
