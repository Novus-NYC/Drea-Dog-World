// ---------- Types ----------

export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export type ContactLink = {
  display: string
  href: string
}

export type IssueTip = {
  issue: string
  tip: string
}

export type Credential = {
  kind: "Credential" | "Commendation" | "Membership"
  name: string
  detail?: string
}

export type PressMention = {
  outlet: string
  logo: string
  headline: string
  note: string
  url?: string
}

// ---------- Business identity ----------

export const business = {
  name: "Drea’s Dog World",
  owner: "Andrea Smith",
  nickname: "Drea",
  ownerTitle: "Obedience instructor and professional dog trainer",
  ownerRole: "Brooklyn’s dog trainer and behavioral consultant",
  tagline: "Smart love for Brooklyn dogs.",
  slogan: "Your best friend’s best friend.",
  serviceArea: "Brooklyn, NY",
  yearsExperience: "30+",
  foundedYear: 2002,
  mission:
    "To strengthen the partnership between people and dogs through positive, reward-based training, rehabilitation, and socialization.",
}

// ---------- Contact ----------

export const contact: {
  phone: ContactLink
  email: ContactLink
  instagram: ContactLink
} = {
  phone: { display: "323-906-4641", href: "tel:3239064641" },
  email: {
    display: "dreadogworld@yahoo.com",
    href: "mailto:dreadogworld@yahoo.com",
  },
  instagram: {
    display: "@dreadogworld",
    href: "https://www.instagram.com/dreadogworld/",
  },
}

export const blogUrl = "https://dreadogworld.wordpress.com/"

// ---------- Navigation ----------

export const routes = {
  home: "/",
  about: "/pages/about",
  testimonials: "/pages/testimonials",
  contact: "/pages/contact",
}

export const primaryCta: NavLink = {
  label: "Book a session",
  href: routes.contact,
}

export const mainNav: NavLink[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Testimonials", href: routes.testimonials },
  { label: "Blog", href: blogUrl, external: true },
  { label: "Contact", href: routes.contact },
]

// ---------- Services and approach ----------

export const services: string[] = [
  "Obedience",
  "Rehabilitation",
  "Socialization",
]

export const specialties: string[] = [
  "Stressed dogs",
  "Fearful dogs",
  "Reactive dogs",
  "Rescues",
  "Bully breeds",
]

export const fourPs: { name: string; description: string }[] = [
  { name: "Practice", description: "Short, regular sessions beat one big one." },
  { name: "Patience", description: "Every dog learns at its own speed." },
  { name: "Perseverance", description: "Keep going when it gets bumpy." },
  { name: "Praise", description: "Every lesson starts and ends with it." },
]

export const trainingMethods: string[] = [
  "Positive reinforcement",
  "Corrections that fit your dog’s age, size, and personality",
  "Boundary setting",
  "Crate training",
  "Gradual desensitization",
  "Never a shock collar",
]

export const helpsWith: string[] = [
  "Leash pulling",
  "Dog aggression",
  "Human aggression",
  "Separation anxiety",
  "Housebreaking",
  "Jumping",
  "Barking",
  "Puppy manners",
]

export const issueTips: IssueTip[] = [
  { issue: "Aggression", tip: "To fight food aggression, swap one tasty treat for another." },
  { issue: "Pulling", tip: "Stop the second the leash tightens. Walk again when it goes slack." },
  { issue: "Barking", tip: "Reward the quiet, not the noise." },
  { issue: "Fear", tip: "Let your dog set the pace. Reward every small step closer." },
  { issue: "Separation anxiety", tip: "Practice short goodbyes. Leave for a minute, come back calm, and build up slowly." },
  { issue: "Jumping", tip: "Turn away and wait. Greet your dog only when all four paws are on the floor." },
]

export const contactFormIssues: string[] = [
  ...issueTips.map((item) => item.issue),
  "Something else",
]

// ---------- Background, credentials, and press ----------

export const background: string[] = [
  "Studied psychology at Mount Vernon College.",
  "Volunteered with canine rescue after 9/11.",
  "More than 30 years of working with dogs and their people.",
  "Started her business in 2002.",
  "Primary consultant for Molly’s Mutts & Meows.",
]

export const credentials: Credential[] = [
  {
    kind: "Credential",
    name: "AKC Canine Good Citizen Evaluator",
    detail: "Certified to evaluate dogs for the CGC title.",
  },
  {
    kind: "Commendation",
    name: "ASPCA",
    detail: "Commended for stepping in to stop dog-on-dog aggression.",
  },
  {
    kind: "Membership",
    name: "APDT",
    detail: "Association of Professional Dog Trainers.",
  },
]

export const press: PressMention[] = [
  {
    outlet: "The New York Times",
    logo: "nyt",
    headline: "My Dog Was a Nightmare to Walk. These Tools and Techniques Helped.",
    note: "Wirecutter, by Ivy Elrod",
    url: "https://www.nytimes.com/wirecutter/reviews/dog-leash-training/",
  },
  {
    outlet: "Narratively",
    logo: "/images/press-narratively.png",
    headline: "Bad Dog/Good Dog",
    note: "Profile and short film",
    url: "https://www.narratively.com/p/bad-doggood-dog",
  },
  {
    outlet: "ShoutoutAtlanta",
    logo: "/images/press-shoutoutatlanta.png",
    headline: "Meet Andrea Smith, Professional Dog Trainer, Producer",
    note: "Interview, 2023",
    url: "https://shoutoutatlanta.com/meet-andrea-smith-professional-dog-trainer-producer/",
  },
  {
    outlet: "Time Magazine",
    logo: "time",
    headline: "A Brooklyn dog spa’s socialization space, designed with Andrea’s input",
    note: "Mention",
  },
]

// ---------- Video ----------

export type Video = {
  title: string
  provider: "vimeo" | "youtube"
  videoId: string
  duration: string
  thumbnail: string
}

export const heroVideo: Video = {
  title: "Bad Dog/Good Dog",
  provider: "vimeo",
  videoId: "82690809",
  duration: "4:19",
  thumbnail: "/images/drea-apartment.jpg",
}

export const watchVideos: Video[] = [
  {
    title: "Brooklyn Bites Back with Drea Smith",
    provider: "vimeo",
    videoId: "180978314",
    duration: "6:37",
    thumbnail: "/images/brooklyn-bites-back-title-card.jpg",
  },
  {
    title: "Andrea Meets a Wolf Hybrid",
    provider: "vimeo",
    videoId: "68337365",
    duration: "3:02",
    thumbnail: "/images/video-wolf-hybrid.jpg",
  },
  {
    title: "Critter Crusades presents Dog Trainer Andrea Smith",
    provider: "youtube",
    videoId: "1SKF7MFDoAs",
    duration: "27:18",
    thumbnail: "/images/video-critter-crusades.jpg",
  },
  heroVideo,
]
