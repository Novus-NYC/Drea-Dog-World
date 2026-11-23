type PawIconProps = {
  className?: string
}

// Drawn from Andrea's paw tattoo: four tilted toes and a big pad with a heart cut out of it.
// The heart is a hole (evenodd fill), so it shows whatever is behind the icon.
export default function PawIcon({ className }: PawIconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true" className={className}>
      <ellipse cx="7.5" cy="16.5" rx="4" ry="5.6" transform="rotate(-22 7.5 16.5)" />
      <ellipse cx="15.2" cy="8.6" rx="4.1" ry="5.8" transform="rotate(-8 15.2 8.6)" />
      <ellipse cx="24.8" cy="8.6" rx="4.1" ry="5.8" transform="rotate(8 24.8 8.6)" />
      <ellipse cx="32.5" cy="16.5" rx="4" ry="5.6" transform="rotate(22 32.5 16.5)" />
      <path
        fillRule="evenodd"
        d="M20 18.5C27.4 18.5 33.8 25.6 33.8 31C33.8 36.2 28.6 37.4 24.4 36.3C22.4 35.8 17.6 35.8 15.6 36.3C11.4 37.4 6.2 36.2 6.2 31C6.2 25.6 12.6 18.5 20 18.5ZM20 33.9L15.1 29C13.5 27.4 13.9 24.5 16.1 23.9C17.9 23.4 19.3 24.3 20 25.6C20.7 24.3 22.1 23.4 23.9 23.9C26.1 24.5 26.5 27.4 24.9 29Z"
      />
    </svg>
  )
}
