import Image from "next/image"
import type { PressMention } from "@/lib/site-data"

export default function OutletLogo({ item, size = 22 }: { item: PressMention; size?: number }) {
  if (item.logo === "nyt") {
    return (
      <svg viewBox="0 0 16 22" aria-hidden="true" style={{ height: size }} className="w-auto shrink-0">
        <path
          fill="currentColor"
          d="M15.863 13.08c-.687 1.818-1.923 3.147-3.64 3.916v-3.917l2.129-1.958-2.129-1.889V6.505c1.923-.14 3.228-1.609 3.228-3.358C15.45.84 13.32 0 12.086 0c-.275 0-.55 0-.962.14v.14h.481c.824 0 1.51.42 1.51 1.189 0 .63-.48 1.189-1.304 1.189-2.129 0-4.6-1.749-7.279-1.749C2.13.91.481 2.728.481 4.546c0 1.819 1.03 2.448 2.128 2.798v-.14c-.343-.21-.618-.63-.618-1.189 0-.84.756-1.469 1.648-1.469 2.267 0 5.906 1.959 8.172 1.959h.206v2.727l-2.129 1.889 2.13 1.958v3.987c-.894.35-1.786.49-2.748.49-3.502 0-5.768-2.169-5.768-5.806 0-.839.137-1.678.344-2.518l1.785-.769v7.973l3.57-1.608V6.575L3.984 8.953c.55-1.61 1.648-2.728 2.953-3.358v-.07C3.433 6.295 0 9.023 0 13.08c0 4.686 3.914 7.974 8.446 7.974 4.807 0 7.485-3.288 7.554-7.974h-.137z"
        />
      </svg>
    )
  }

  // A TV with a paw on the screen: a stand-in icon, not the show’s official logo.
  if (item.logo === "critter") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ height: size }} className="w-auto shrink-0">
        <path d="M8.5 2.5 12 6l3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2.5" y="6.5" width="19" height="14.5" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <g className="fill-red">
          <ellipse cx="12" cy="16" rx="2.7" ry="2.2" />
          <ellipse cx="8.6" cy="12.9" rx="1.1" ry="1.45" />
          <ellipse cx="10.8" cy="11.3" rx="1.1" ry="1.45" />
          <ellipse cx="13.2" cy="11.3" rx="1.1" ry="1.45" />
          <ellipse cx="15.4" cy="12.9" rx="1.1" ry="1.45" />
        </g>
      </svg>
    )
  }

  if (item.logo === "time") {
    return (
      <svg viewBox="0 0 18.6 21.3" aria-hidden="true" style={{ height: size }} className="w-auto shrink-0">
        <path
          fill="#E7131A"
          d="M7.71318 1.92829L5.65598 1.91733H2.46648C2.24787 1.91733 0.538211 1.93377 0.538211 1.93377L0.504579 4.3553L0.190674 4.36626L0.20749 1.64888L0.196279 0.53125C1.28374 0.575079 5.20754 0.60795 9.2827 0.60795C14.0305 0.60795 17.0911 0.564121 18.2963 0.536729L18.2794 1.77489L18.3019 4.52514L17.9767 4.51966C17.9767 4.29504 17.9263 3.38559 17.9263 3.29246C17.9263 3.25958 17.859 2.03786 17.8478 1.94472L16.4857 1.92829H10.841V18.879C10.841 18.9009 10.869 19.9912 10.8746 20.2158C11.0316 20.2377 12.5451 20.3254 12.8197 20.3254H12.9262V20.7856C12.8422 20.7856 12.7413 20.791 12.6572 20.791C11.7995 20.7801 10.4094 20.6924 9.42284 20.6924C8.43628 20.6924 7.07976 20.7746 6.07078 20.791C6.04276 20.791 5.83535 20.7856 5.75688 20.7856V20.2925C5.76809 20.2925 5.82975 20.2925 5.92504 20.287C6.35105 20.2706 7.40488 20.2103 7.67954 20.1884L7.72439 20.1829V18.7311L7.71318 1.92829Z"
        />
      </svg>
    )
  }

  return <Image src={item.logo} alt="" width={size} height={size} style={{ height: size, width: size }} className="shrink-0 rounded-full" />
}
