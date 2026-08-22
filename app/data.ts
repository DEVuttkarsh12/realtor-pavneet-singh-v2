export const site = {
  phoneDisplay: "902 809 9399",
  phoneHref: "+19028099399",
  email: "realtorpavneetsingh@gmail.com",
  office: "3845 Joseph Howe Drive, Suite 100, Halifax, Nova Scotia B3L 4H9",
  instagram: "https://www.instagram.com/realtorpavneetsingh/",
  facebook: "https://www.facebook.com/PavneetSinghRealtor/",
  whatsapp:
    "https://wa.me/19028099399?text=Hi%20Pavneet%2C%20I%27d%20like%20to%20discuss%20a%20Nova%20Scotia%20real%20estate%20opportunity.",
};

export const navItems = [
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Advisory", href: "/services" },
  { label: "Neighbourhoods", href: "/neighbourhoods" },
  { label: "Guides", href: "/guides" },
  { label: "Insights", href: "/blog" },
];

export const journeys = [
  {
    id: "buy",
    number: "01",
    short: "Buy",
    eyebrow: "For buyers & newcomers",
    title: "Find a home that fits the life ahead.",
    copy: "Get clear on financing, communities, closing costs, and offer strategy before emotion enters the decision.",
    image: "/images/interior-kitchen.jpg",
    href: "/buying-guide",
    cta: "Explore the buyer roadmap",
    points: ["Property shortlist", "Offer strategy", "Due diligence"],
  },
  {
    id: "sell",
    number: "02",
    short: "Sell",
    eyebrow: "For homeowners",
    title: "Position your property for its strongest outcome.",
    copy: "Build a coordinated plan across preparation, pricing, launch, negotiations, and the move that follows.",
    image: "/images/home-exterior.jpg",
    href: "/selling-guide",
    cta: "See the selling strategy",
    points: ["Market positioning", "Launch plan", "Offer analysis"],
  },
  {
    id: "invest",
    number: "03",
    short: "Invest",
    eyebrow: "For investors & builders",
    title: "Make the opportunity fit the objective.",
    copy: "Evaluate income, risk, location, operations, and long-term portfolio fit with one disciplined advisory lens.",
    image: "/images/development.jpg",
    href: "/services#investment",
    cta: "Explore investment advisory",
    points: ["Cash-flow analysis", "Site context", "Portfolio strategy"],
  },
];

export const services = [
  {
    number: "01",
    title: "Residential",
    subtitle: "Buying, selling & relocating",
    copy: "Clear advice grounded in your lifestyle, complete budget, and long-term goals.",
    image: "/images/home-exterior.jpg",
  },
  {
    number: "02",
    title: "Investment",
    subtitle: "Income & multi-unit property",
    copy: "Yield-aware guidance for acquiring, evaluating, and growing durable assets.",
    image: "/images/interior-kitchen.jpg",
  },
  {
    number: "03",
    title: "Commercial",
    subtitle: "Business & owner-occupied",
    copy: "Strategic support for retail, office, mixed-use, and commercial property decisions.",
    image: "/images/commercial.jpg",
  },
  {
    number: "04",
    title: "Land & development",
    subtitle: "Sites, feasibility & growth",
    copy: "Local context for strategic land, industrial sites, and development-led opportunity.",
    image: "/images/industrial.jpg",
  },
];

export const communities = [
  {
    name: "Halifax Peninsula",
    type: "Urban core",
    image: "/images/halifax-aerial.jpg",
    description:
      "Walkable city living, historic streets, modern condominiums, waterfront energy, universities, and major employers.",
    tags: ["Waterfront", "Walkable", "Culture"],
  },
  {
    name: "Bedford",
    type: "Family community",
    image: "/images/home-exterior.jpg",
    description:
      "A sought-after community on the Bedford Basin with schools, parks, established services, and strong highway access.",
    tags: ["Schools", "Parks", "Bedford Basin"],
  },
  {
    name: "Dartmouth",
    type: "Urban & lakeside",
    image: "/images/nova-scotia-coast.webp",
    description:
      "Diverse housing, lively neighbourhoods, lake access, and a direct ferry connection to downtown Halifax.",
    tags: ["Ferry", "Lakes", "Value"],
  },
  {
    name: "Hammonds Plains",
    type: "Rural-suburban",
    image: "/images/development.jpg",
    description:
      "Larger lots, newer homes, family-focused communities, and room to grow within commuting distance of Halifax.",
    tags: ["Space", "New builds", "Families"],
  },
  {
    name: "Sackville",
    type: "Accessible suburb",
    image: "/images/interior-kitchen.jpg",
    description:
      "An established suburban hub with approachable entry points, schools, services, trails, and highway connections.",
    tags: ["First homes", "Services", "Trails"],
  },
  {
    name: "Annapolis Valley",
    type: "Wine & farm country",
    image: "/images/nova-scotia-coast.webp",
    description:
      "A region of rural acreage, heritage homes, vineyards, university life, and communities shaped by the landscape.",
    tags: ["Acreage", "Vineyards", "Heritage"],
  },
  {
    name: "Truro",
    type: "Regional hub",
    image: "/images/home-exterior.jpg",
    description:
      "A connected small-city lifestyle with value, a vibrant centre, regional services, and access across northern Nova Scotia.",
    tags: ["Value", "Connected", "Community"],
  },
  {
    name: "Sydney & Cape Breton",
    type: "Coastal island life",
    image: "/images/nova-scotia-coast.webp",
    description:
      "Dramatic landscapes, strong culture, approachable real estate, and lifestyle opportunities across Cape Breton Island.",
    tags: ["Coast", "Culture", "Opportunity"],
  },
];

export const properties = [
  {
    slug: "cambridge-street-halifax",
    category: "Residential",
    title: "South End residence",
    location: "1777 Cambridge Street, Halifax",
    price: "$1,599,000",
    beds: "6 beds",
    baths: "3 baths",
    area: "Approx. 3,600 sq ft",
    image: "/images/home-exterior.jpg",
    summary:
      "A substantial family residence in one of Halifax's most established neighbourhoods, presented as a public market reference.",
  },
  {
    slug: "south-park-street-halifax",
    category: "Residential",
    title: "The Trillium city residence",
    location: "1445 South Park Street, Halifax",
    price: "$579,900",
    beds: "1 bed",
    baths: "1 bath",
    area: "Approx. 888 sq ft",
    image: "/images/interior-kitchen.jpg",
    summary:
      "A polished city residence close to universities, hospitals, parks, and the energy of downtown Halifax.",
  },
  {
    slug: "anchor-drive-halifax",
    category: "Residential",
    title: "Waterfront district townhouse",
    location: "125 Anchor Drive, Halifax",
    price: "$949,900",
    beds: "3 beds",
    baths: "4 baths",
    area: "Waterfront district",
    image: "/images/nova-scotia-coast.webp",
    summary:
      "Contemporary townhome living connected to Halifax's coastal character and everyday city convenience.",
  },
  {
    slug: "regional-commercial-opportunity",
    category: "Commercial",
    title: "Regional business opportunity",
    location: "Halifax Regional Municipality",
    price: "Private enquiry",
    beds: "Commercial",
    baths: "Owner-user",
    area: "Flexible use",
    image: "/images/commercial.jpg",
    summary:
      "A reference opportunity for entrepreneurs evaluating location, ownership, operating fit, and long-term asset value.",
  },
];

export const buyerSteps = [
  ["01", "Define your goals", "Clarify location, property type, lifestyle needs, future plans, and the priorities that must still make sense years from now."],
  ["02", "Understand the complete budget", "Look beyond the down payment to closing costs, legal fees, inspections, taxes, utilities, and ongoing ownership."],
  ["03", "Get pre-approved", "Confirm purchasing power, understand available options, and be ready to move when the right property appears."],
  ["04", "Search with local context", "Compare condition, community dynamics, current value, resale potential, and fit with your long-term plan."],
  ["05", "Make a competitive offer", "Structure price, deposit, conditions, timing, and additional terms to protect your interests."],
  ["06", "Complete due diligence", "Coordinate inspection, financing, disclosure review, title work, and legal review before conditions are removed."],
  ["07", "Close and make it yours", "Complete the final walk-through, transfer funds and documents, and receive the keys with every detail coordinated."],
] as const;

export const sellerSteps = [
  ["01", "Understand your goals", "Begin with your timeline, next move, and the balance between speed, certainty, and maximizing value."],
  ["02", "Determine market position", "Use recent comparable sales, active competition, demand, and property condition to set an evidence-led strategy."],
  ["03", "Prepare with purpose", "Prioritize the repairs, presentation, staging, and photography choices that can materially improve buyer confidence."],
  ["04", "Launch the listing", "Coordinate market exposure, REALTOR® outreach, private networks, digital marketing, and a disciplined showing plan."],
  ["05", "Review and negotiate", "Evaluate financing, deposit, conditions, closing flexibility, and buyer strength alongside the headline price."],
  ["06", "Complete conditions", "Keep financing, inspection, legal work, and every stakeholder aligned while the transaction moves toward firm."],
  ["07", "Close with confidence", "Finalize documents, transfer ownership, and coordinate the transition into whatever comes next."],
] as const;

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  takeaways: string[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "nova-scotia-home-buying-costs",
    category: "Buyers",
    title: "Nova Scotia home buying costs to plan before the search",
    date: "August 22, 2026",
    readTime: "4 min read",
    image: "/images/interior-kitchen.jpg",
    excerpt:
      "A stronger home search starts with the full ownership budget, not only the down payment or monthly mortgage payment.",
    takeaways: [
      "Plan for deposit, inspection, legal fees, tax adjustments, insurance, moving, and near-term repairs.",
      "Use pre-approval as a strategy tool, not just a price ceiling.",
      "Compare properties by total monthly reality and future fit.",
    ],
    sections: [
      {
        heading: "Start with the complete budget",
        body: [
          "The purchase price is only one part of the decision. Buyers should account for the deposit, down payment, inspection, legal work, title-related costs, adjustments, insurance, utilities, maintenance, and the move itself.",
          "A clear budget also protects the search. When the comfortable monthly number is known early, the shortlist can focus on homes that still make sense after closing day.",
        ],
      },
      {
        heading: "Use financing clarity before viewings",
        body: [
          "A pre-approval gives buyers a cleaner view of purchasing power, but it should also start a practical conversation about payments, rates, cash flow, and timing.",
          "That context makes offer decisions easier because the tradeoffs are already understood before a competitive property appears.",
        ],
      },
      {
        heading: "Compare homes beyond the first impression",
        body: [
          "Condition, commute, community fit, utilities, likely repairs, resale context, and long-term lifestyle should be reviewed together.",
          "The best purchase is not only the home that looks right today. It is the property that remains workable after the full cost and the future plan are considered.",
        ],
      },
    ],
  },
  {
    slug: "prepare-your-property-before-listing",
    category: "Sellers",
    title: "How to prepare your property before listing in Nova Scotia",
    date: "August 22, 2026",
    readTime: "5 min read",
    image: "/images/home-exterior.jpg",
    excerpt:
      "Preparation works best when presentation, pricing, launch timing, and negotiation strategy are planned as one sequence.",
    takeaways: [
      "Focus first on issues that shape buyer confidence.",
      "Price strategy should reflect comparable sales, active competition, condition, and timing.",
      "Launch materials need to make the strongest features easy to understand quickly.",
    ],
    sections: [
      {
        heading: "Prioritize confidence-building work",
        body: [
          "Not every improvement produces the same return. Sellers should focus on the repairs, cleaning, decluttering, and presentation choices that reduce buyer hesitation and make the property easier to understand.",
          "Small details can matter when they support a broader first impression of care and readiness.",
        ],
      },
      {
        heading: "Connect price to positioning",
        body: [
          "Pricing is not just a number. It is the market position created by recent comparable sales, current competition, property condition, showing feedback, and the seller's timeline.",
          "A disciplined pricing conversation helps protect leverage because the launch strategy is based on evidence rather than hope.",
        ],
      },
      {
        heading: "Launch with a complete story",
        body: [
          "Photography, copy, showing preparation, digital exposure, and REALTOR® outreach should work together.",
          "When buyers can quickly understand the value, the property is better positioned to attract serious attention and stronger conversations.",
        ],
      },
    ],
  },
  {
    slug: "choosing-a-nova-scotia-community",
    category: "Relocation",
    title: "Choosing a Nova Scotia community when relocating",
    date: "August 22, 2026",
    readTime: "4 min read",
    image: "/images/nova-scotia-coast.webp",
    excerpt:
      "Community fit should connect the property search to commute, schools, services, lifestyle, and the kind of daily rhythm you want.",
    takeaways: [
      "Compare communities by daily life, not only by property photos.",
      "Account for commute, services, school needs, and future resale context.",
      "Use a shortlist that balances lifestyle goals with budget discipline.",
    ],
    sections: [
      {
        heading: "Define the life around the home",
        body: [
          "Relocation decisions become clearer when the search starts with daily routines. Commute, schools, services, transportation, recreation, and community pace should all shape the shortlist.",
          "This is especially important in Nova Scotia, where urban, suburban, rural, and coastal communities can offer very different ownership experiences.",
        ],
      },
      {
        heading: "Balance lifestyle and value",
        body: [
          "A lower purchase price in one area may come with different transportation, maintenance, or service tradeoffs. A higher price in another area may be justified by convenience or long-term fit.",
          "The goal is not to chase one metric. The goal is to understand the whole decision before making an offer.",
        ],
      },
      {
        heading: "Build a community shortlist",
        body: [
          "A practical shortlist usually includes a few priority communities, a few flexible alternatives, and a clear reason why each one belongs.",
          "That structure keeps the search focused while still leaving room for opportunity.",
        ],
      },
    ],
  },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  about: {
    title: "About Pavneet Singh | Nova Scotia REALTOR®",
    description:
      "Meet Pavneet Singh, a multilingual Nova Scotia real estate advisor with experience across finance, construction, residential, and investment property.",
  },
  services: {
    title: "Real Estate Advisory | Pavneet Singh",
    description:
      "Residential, investment, commercial, industrial, land, and relocation advisory across Nova Scotia.",
  },
  properties: {
    title: "Nova Scotia Property Opportunities | Pavneet Singh",
    description:
      "Explore a curated preview of residential, investment, commercial, and development opportunities across Nova Scotia.",
  },
  neighbourhoods: {
    title: "Nova Scotia Neighbourhood Guides | Pavneet Singh",
    description:
      "Explore Halifax, Bedford, Dartmouth, Hammonds Plains, Sackville, Truro, Annapolis Valley, and Cape Breton with local real estate context.",
  },
  guides: {
    title: "Nova Scotia Buyer & Seller Guides | Pavneet Singh",
    description:
      "Practical guidance for buying, selling, relocating, and investing in Nova Scotia real estate.",
  },
  blog: {
    title: "Nova Scotia Real Estate Blog & Insights | Pavneet Singh",
    description:
      "Buyer, seller, relocation, and market insights for informed real estate decisions across Nova Scotia.",
  },
  "buying-guide": {
    title: "Nova Scotia Home Buying Guide | Pavneet Singh",
    description:
      "A clear seven-step path from priorities and pre-approval to due diligence and closing day in Nova Scotia.",
  },
  "selling-guide": {
    title: "Nova Scotia Home Selling Guide | Pavneet Singh",
    description:
      "Prepare, position, market, negotiate, and close your Nova Scotia home sale with a coordinated strategy.",
  },
  contact: {
    title: "Contact Pavneet Singh | Nova Scotia REALTOR®",
    description:
      "Start a direct conversation with Pavneet Singh about buying, selling, investing, or relocating in Nova Scotia.",
  },
  "privacy-policy": {
    title: "Privacy Policy | Pavneet Singh",
    description: "Privacy information for the Pavneet Singh real estate website.",
  },
  terms: {
    title: "Terms of Use | Pavneet Singh",
    description: "Terms governing use of the Pavneet Singh real estate website.",
  },
};
