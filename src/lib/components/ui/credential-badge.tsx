import Image from "next/image"
import type { Credential } from "@/lib/site-data"

// Decorative: the credential's name is always written next to it.
export default function CredentialBadge({ credential, size }: { credential: Credential; size: number }) {
  if (credential.badge) {
    return (
      <Image
        src={credential.badge.src}
        alt=""
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="shrink-0 rounded-full mix-blend-multiply"
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      className="grid shrink-0 place-items-center rounded-full bg-red text-white shadow-[inset_0_0_0_2px_var(--color-red),inset_0_0_0_3.5px_#fff]"
    >
      ★
    </span>
  )
}
