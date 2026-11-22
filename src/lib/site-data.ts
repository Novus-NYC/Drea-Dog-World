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
  // Set to false to list it on the About page only.
  showOnHomepage?: boolean
}

export type Testimonial = {
  name: string
  role?: string
  headline: string
  quote: string
  // The full review, one string per paragraph.
  story: string[]
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
    text: "Still training Brooklyn dogs and their people, one block at a time.",
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
    note: "Play space design",
  },
  {
    outlet: "Critter Crusades",
    logo: "critter",
    headline: "Her work with canine rescue teams at the World Trade Center",
    note: "TV interview",
    url: "https://www.youtube.com/watch?v=1SKF7MFDoAs",
    showOnHomepage: false,
  },
]

// ---------- Testimonials ----------

export const testimonials: Testimonial[] = [
  {
    name: "Liz Maccie",
    role: "Tess and Emma’s mom",
    headline: "My dogs live with me now, not the other way around",
    quote: "She has single-handedly changed my life and the lives of my dogs in less than one month!",
    story: [
      "I own two dogs; a cockapoo (Tess) who is two years old and a yorkie terrier (Emma) who is eight months old. I contacted Andrea because of a severe potty training problem I was having with Emma. She was ruining my furniture, floors, and my level of patience! I was frustrated and upset all the time because I couldn’t figure out what I was doing wrong. More out of desperation, not figuring anything would ever work, I called Andrea.",
      "Andrea made arrangements to come to my home and get started. I had no idea of just how much I really needed her help! In a matter of one day, she put me and my two dogs on a very specific schedule which eliminated the potty problem almost immediately. She taught me how to be the “alpha” and how to live in my home with my dogs rather than my dogs allowing me to live in their home! She implemented crate training which so greatly reduced my dogs’ anxiety levels that I can now have friends over and my dogs are very peaceful rather than agitated.",
      "Andrea also worked with me concerning walking on the leash, commands, proper eating, socialization, and separation. She has single-handedly changed my life and the lives of my dogs in less than one month! Andrea is professional, courteous, skilled, kind, generous, and good humored. She was such a pleasure to work with. I only hope to keep her in my life as a friend now. I greatly appreciate her giving me my life back!",
    ],
  },
  {
    name: "Erin Fox",
    role: "Two rescues",
    headline: "I watched my dogs become well trained companions",
    quote:
      "Within a few sessions with Andrea, she was back at the park playing, greeting other dogs and avoiding trouble rather than running toward it.",
    story: [
      "Before I started working with Andrea, my dogs were undisciplined, skittish, dog-aggressive, unpredictable and very difficult to walk. My smaller dog would lunge at people on the street, and my larger dog would try to attack every dog she saw. They would both pull me around the neighborhood, and it took all of my strength to control them, and prevent being pulled over by sudden lunges at squirrels, people and into the street. If I didn’t let them sleep in bed with me, they would urinate in the house. In short, the animals that were adopted for companionship ended up running my life. I loved them, but I was fed up.",
      "Andrea’s training style is to build the dog’s confidence by giving them strong boundaries, and desensitizing them to their fears by gradually introducing them to situations that cause them to act out, until they are confident enough in those situations to behave. My larger dog had not been to a dog park in 5 years because of her aggressive behavior. Within a few sessions with Andrea, she was back at the park playing, greeting other dogs and avoiding trouble rather than running toward it. Her world was opened up.",
      "My smaller dog was skittish in public and would get nasty when people would try to pet him, and he would threaten to bite people on the street. Andrea kept introducing him to hectic public situations, and made him sit in the midst of the “threats” until he relaxed. I learned techniques for setting boundaries for my dogs and they started walking nicely on the leash, and with crate training they stopped urinating in the house. My smaller dog was eventually adopted into a family of five, and is no longer threatened by new people trying to pet him.",
      "Before working with Andrea, I worked with another trainer who would yell at and hit the dogs. They became very stressed when working with her. The discipline techniques a trainer uses should be comfortable for the owner to use as well. I did not want to have to scream and hit my dogs to maintain discipline. Andrea uses leash and water bottle based techniques that are calmer and not stressful to the dogs, but are just as effective. Within a short time, I watched my dogs become well-behaved companions, rather than royal pains in the asses.",
    ],
  },
  {
    name: "Stephanie Benson, M.A.",
    role: "Pete’s mom",
    headline: "A professional you want to work with",
    quote: "Andrea is one of the most talented and passionate professionals I have had the pleasure of working with.",
    story: [
      "…I have known Andrea as both a client and a friend for seven years. I had met Andrea in 2005 when I got my newly rescued dog, Pete. As an expert trainer and consultant for dogs and their owners, Andrea is one of the most talented and passionate professionals I have had the pleasure of working with. She is caring beyond limits and truly cares for her clients and their owners.",
      "In addition to being truly amazing with dogs, Andrea was such a caring, cool person that all of her clients want to also be her friend. I was no exception. Seven years later, I can say that I truly cherish our relationship as both friends and client/professional.",
      "Andrea is an honest, passionate, dedicated professional…",
    ],
  },
  {
    name: "Jobanny Estrella-Elmonis",
    role: "Pit bull family",
    headline: "A calm trainer with great results",
    quote: "She has this super calm aura that has helped so much with the dogs we have adopted.",
    story: [
      "Andrea is an OUTSTANDING trainer! She has this super calm aura that has helped so much with the dogs we have adopted. Going from a miniature pinscher to american pitbull terriers is a big change and what we would let our small dog get away with is just not possible or safe to allow our new dogs to do. She has taught us very kind and simple ways to have well behaved dogs at home and in public. I feel good applying the techniques she has taught us, I could not imagine being harsh to my dogs just because they are of a large and powerful breed. When we considered adopting anotherdog that hadn’t been socialized and was what seemed to be very aggressive, Andrea was there to help guide us through introducing the dogs, making sure that it was safe for both, and what to do upon bringing the new dog home in order to successfully integrate him into our family. It has been a pleasure to work with her and we continue to have her help us with their training so that in time the dogs will be able to be certified therapy dogs.",
    ],
  },
  {
    name: "Nicholas Phillips",
    role: "Busy’s dad",
    headline: "Busy the barker",
    quote:
      "The barking problem which persisted before we contacted her has been significantly reduced through her patience and attention to our dog.",
    story: [
      "Andrea Smith did a fantastic job with our dog, Busy. She worked very closely and diligently with her to improve her self-esteem, demeanor and overall behavior. The barking problem which persisted before we contacted her has been significantly reduced through her patience and attention to our dog. She also worked closely with us to design a plan specific to Busy and her particular areas of concern, and she kept us informed as to what her system was and how she was going about implementing it.",
      "I would definitely recommend her!",
    ],
  },
  {
    name: "Rebecca Gillaspie",
    headline: "Socializing can be simple",
    quote: "She taught me some simple strategies on how to deal with my dog greeting guests. It was simple and it worked.",
    story: [
      "(Andrea Smith is) a behaviorist who I recommend. She taught me some simple strategies on how to deal with my dog greeting guests. It was simple and it worked. I was to put the dog on a leash 15 minutes before guests came over. Then I instructed my guests to ignore him for 15 minutes when they got there. After that usually the dog was calm and I could let him off leash and he’d be sweet. Keeping him close to me on leash while guest where they showed him I was in charge, I was safe, and that he didn’t need to protect me.",
    ],
  },
  {
    name: "Molly Wootton",
    role: "Molly’s Mutts & Meows",
    headline: "Our ‘go-to’ trainer",
    quote: "She is outstanding, reliable and very good at her job.",
    story: [
      "She is the primary consultant I use for all of my dog adoptions at Molly’s Mutts & Meows, my non-profit animal rescue organization based in Los Angeles. She is outstanding, reliable and very good at her job. I feel lucky to have found someone like Andrea to work with on a regular basis.",
    ],
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
