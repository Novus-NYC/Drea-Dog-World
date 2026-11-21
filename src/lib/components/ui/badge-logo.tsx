import { useId } from "react"

type BadgeLogoProps = {
  className?: string
}

export default function BadgeLogo({ className = "" }: BadgeLogoProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "")
  const topArc = `${id}-top`
  const bottomArc = `${id}-bottom`

  return (
    <svg viewBox="-150 -150 300 300" aria-hidden="true" className={`font-display ${className}`}>
      <defs>
        <path id={topArc} d="M-118 0A118 118 0 0 1 118 0" />
        <path id={bottomArc} d="M-132 0A132 132 0 0 0 132 0" />
      </defs>

      <circle r="148" className="fill-paper" />
      <circle r="144" fill="none" strokeWidth="5" className="stroke-ink" />
      <circle r="137" fill="none" strokeWidth="1.5" className="stroke-ink" />
      <circle r="101" fill="none" strokeWidth="1.5" className="stroke-ink" />

      <g fontSize="17" fontWeight="600" letterSpacing="4" textAnchor="middle" className="fill-ink">
        <text>
          <textPath href={`#${topArc}`} startOffset="50%">DOG TRAINING · EST. 2002</textPath>
        </text>
        <text>
          <textPath href={`#${bottomArc}`} startOffset="50%">BROOKLYN · N.Y.</textPath>
        </text>
      </g>

      <g className="fill-red">
        <path d="M-128 -6 L-123 0 L-128 6 L-133 0Z" />
        <path d="M128 -6 L133 0 L128 6 L123 0Z" />
        <g transform="translate(0 -54)">
          <ellipse cx="0" cy="5" rx="7" ry="5.6" />
          <ellipse cx="-8.5" cy="-3.5" rx="3" ry="4" />
          <ellipse cx="-3" cy="-8.5" rx="3" ry="4" />
          <ellipse cx="3" cy="-8.5" rx="3" ry="4" />
          <ellipse cx="8.5" cy="-3.5" rx="3" ry="4" />
        </g>
        <text y="4" textAnchor="middle" fontSize="50" fontStyle="italic" fontWeight="600">
          Drea’s
        </text>
      </g>

      <path d="M-56 20H56" strokeWidth="1.5" className="stroke-ink" />
      <text y="47" textAnchor="middle" fontSize="18" fontWeight="600" letterSpacing="3.5" className="fill-ink">
        DOG WORLD
      </text>
    </svg>
  )
}
