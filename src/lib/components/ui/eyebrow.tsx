type EyebrowProps = {
  children: React.ReactNode
  onDark?: boolean
}

export default function Eyebrow({ children, onDark = false }: EyebrowProps) {
  return (
    <p
      className={`mb-3 flex items-center gap-2.5 text-eyebrow font-semibold uppercase before:h-1 before:w-[34px] before:bg-current before:content-[''] ${
        onDark ? "text-blush" : "text-blue"
      }`}
    >
      {children}
    </p>
  )
}
