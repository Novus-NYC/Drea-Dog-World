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
  label: string
  detail: string
  badge?: { src: string; alt: string }
}

export type PressMention = {
  outlet: string
  logo: string
  headline: string
  note: string
  url?: string
}

export type Testimonial = {
  name: string
  role: string
  quote: string
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
  facebook: ContactLink
  yelp: ContactLink
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
  facebook: {
    display: "Facebook",
    href: "https://www.facebook.com/1267207203303091",
  },
  yelp: {
    display: "Yelp",
    href: "https://www.yelp.com/biz/drea-dog-world-brooklyn",
  },
}

export const blogUrl = "https://dreadogworld.wordpress.com/"

// ---------- Navigation ----------

export const routes = {
  home: "/",
  about: "/about",
  testimonials: "/testimonials",
  contact: "/contact",
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
]

export const helpsWith: { place: string; problems: string[] }[] = [
  { place: "On walks", problems: ["Leash pulling", "Dog aggression"] },
  { place: "With people", problems: ["Human aggression", "Jumping"] },
  { place: "At home", problems: ["Separation anxiety", "Housebreaking", "Barking"] },
  { place: "Puppies", problems: ["Puppy manners"] },
]

export const issueTips: IssueTip[] = [
  { issue: "Aggression", tip: "To fight food aggression, swap one tasty treat for another." },
  { issue: "Pulling", tip: "Stop the second the leash tightens. Walk again when it goes slack." },
  { issue: "Barking", tip: "Reward the quiet, not the noise." },
  { issue: "Fear", tip: "Let your dog set the pace. Reward every small step closer." },
  { issue: "Separation anxiety", tip: "Practice short goodbyes. Leave for a minute, come back calm, and build up slowly." },
  { issue: "Jumping", tip: "Turn away and wait. Greet your dog only when all four paws are on the floor." },
]

export const trainingTypes: string[] = [
  "Private dog training",
  "Dog boarding and training",
  "Group dog training",
  "Puppy socialization classes",
]

export const trainingNeeds: string[] = [
  "Agility",
  "Behavioral (aggression, anxiety, etc.)",
  "Obedience (sit, stay, come, etc.)",
  "Protection or guarding",
  "Service dog",
  "Therapy dog",
  "Tracking or scent work",
  "Other",
]

export const dogAges: string[] = ["Adult dog (1+ years old)", "Puppy (less than 1 year old)"]

// ---------- Background, credentials, and press ----------

export const storyTimeline: { when: string; title: string; text: string }[] = [
  {
    when: "Then",
    title: "Psychology studies",
    text: "Studied psychology at Mount Vernon College in Washington, D.C. Before training dogs, she also worked as a runway model.",
  },
  {
    when: "2001",
    title: "Finding her calling",
    text: "Volunteered with canine rescue teams after 9/11 at the World Trade Center.",
  },
  {
    when: "2002",
    title: "Drea’s Dog World",
    text: "Founded her own training business in Brooklyn.",
  },
  {
    when: "Since",
    title: "Rescue on screen",
    text: "Producer and host of dog rescue TV projects, including Brooklyn Bites Back with Drea Smith.",
  },
  {
    when: "Today",
    title: "30+ years in",
    text: "Still training Brooklyn dogs and their people, and the primary consultant for Molly’s Mutts & Meows.",
  },
]

export const credentials: Credential[] = [
  {
    kind: "Credential",
    name: "AKC Canine Good Citizen Evaluator",
    label: "AKC Canine Good Citizen Evaluator",
    detail: "Certified to evaluate dogs for the CGC title.",
    badge: { src: "/images/badge-akc-cgc.png", alt: "AKC Canine Good Citizen Evaluator badge" },
  },
  {
    kind: "Membership",
    name: "APDT",
    label: "Member, Association of Professional Dog Trainers",
    detail: "Association of Professional Dog Trainers.",
    badge: { src: "/images/badge-apdt.png", alt: "Association of Professional Dog Trainers member badge" },
  },
  {
    kind: "Commendation",
    name: "ASPCA",
    label: "Commended by the ASPCA",
    detail: "Commended for stepping in to stop dog-on-dog aggression.",
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

// ---------- Testimonials ----------

export const testimonials: Testimonial[] = [
  {
    name: "Liz Maccie",
    role: "Tess and Emma’s mom",
    quote: "She has single-handedly changed my life and the lives of my dogs in less than one month!",
  },
  {
    name: "Erin Fox",
    role: "Two rescues",
    quote:
      "Within a few sessions with Andrea, she was back at the park playing, greeting other dogs and avoiding trouble rather than running toward it.",
  },
  {
    name: "Stephanie Benson, M.A.",
    role: "Pete’s mom",
    quote: "Andrea is one of the most talented and passionate professionals I have had the pleasure of working with.",
  },
  {
    name: "Jobanny Estrella-Elmonis",
    role: "Pit bull family",
    quote: "She has this super calm aura that has helped so much with the dogs we have adopted.",
  },
  {
    name: "Nicholas Phillips",
    role: "Busy’s dad",
    quote:
      "The barking problem which persisted before we contacted her has been significantly reduced through her patience and attention to our dog.",
  },
  {
    name: "Rebecca Gillaspie",
    role: "Dog owner",
    quote: "She taught me some simple strategies on how to deal with my dog greeting guests. It was simple and it worked.",
  },
  {
    name: "Molly Wootton",
    role: "Molly’s Mutts & Meows",
    quote: "She is outstanding, reliable and very good at her job.",
  },
]

// ---------- Socials ----------

export type InstagramPost = {
  image: string
  alt: string
  href: string
}

export const instagramPosts: InstagramPost[] = [
  {
    image: "/images/ig-rainy-sidewalk.jpg",
    alt: "A puppy and a Rottweiler on a rainy Brooklyn sidewalk",
    href: "https://www.instagram.com/p/Dfiky9SRmA_/",
  },
  {
    image: "/images/ig-backyard-training.jpg",
    alt: "Andrea training a puppy and a Rottweiler in a backyard",
    href: "https://www.instagram.com/p/DfFTZQARuCc/",
  },
  {
    image: "/images/ig-sidewalk-pit-bull.jpg",
    alt: "Andrea sitting on a Brooklyn sidewalk with a pit bull",
    href: "https://www.instagram.com/p/DfE5MuOx9og/",
  },
  {
    image: "/images/ig-pond-walk.jpg",
    alt: "Andrea walking a puppy beside a pond full of geese",
    href: "https://www.instagram.com/p/DdNJJ5ARlri/",
  },
  {
    image: "/images/ig-rescue-dog.jpg",
    alt: "A search and rescue dog carried on a rope line at Ground Zero",
    href: "https://www.instagram.com/p/DdHl7YTyWMy/",
  },
  {
    image: "/images/ig-brick-wall-poodle.jpg",
    alt: "Andrea holding a curly poodle mix against a brick wall",
    href: "https://www.instagram.com/p/DbdYcJmxRvG/",
  },
]

export const blogPosts: { title: string; href: string }[] = [
  { title: "Why Do Dogs Bite?", href: "https://dreadogworld.wordpress.com/2010/12/13/why-do-dogs-bite/" },
  {
    title: "Why I Hate Shock Collars",
    href: "https://dreadogworld.wordpress.com/2010/12/10/why-i-hate-shock-collars/",
  },
  {
    title: "Does Your Dog Have Bad Breath?",
    href: "https://dreadogworld.wordpress.com/2010/12/01/does-your-dog-have-bad-breath/",
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
