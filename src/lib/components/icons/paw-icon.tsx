type PawIconProps = {
  className?: string
}

export default function PawIcon({ className }: PawIconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true" className={className}>
      <ellipse cx="20" cy="28" rx="10" ry="8" />
      <ellipse cx="7" cy="16" rx="4" ry="6" />
      <ellipse cx="15" cy="9" rx="4" ry="6" />
      <ellipse cx="25" cy="9" rx="4" ry="6" />
      <ellipse cx="33" cy="16" rx="4" ry="6" />
    </svg>
  )
}
