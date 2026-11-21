type EyebrowProps = {
  children: React.ReactNode
}

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="mb-3 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-red-deep before:h-1 before:w-[34px] before:bg-current before:content-['']">
      {children}
    </p>
  )
}
