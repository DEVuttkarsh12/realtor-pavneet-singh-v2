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
  { label: "Opportunities", href: "/opportunities" },
  { label: "Investors", href: "/investors" },
  { label: "Owners", href: "/owners" },
  { label: "Commercial", href: "/commercial" },
  { label: "Development", href: "/development" },
  { label: "Track Record", href: "/track-record" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "About", href: "/about" },
];

export const secondaryNavItems = [
  { label: "Industrial", href: "/industrial" },
  { label: "Multifamily", href: "/multifamily" },
  { label: "Land", href: "/development-land" },
  { label: "Residential", href: "/residential" },
  { label: "Guides", href: "/guides" },
  { label: "Neighbourhoods", href: "/neighbourhoods" },
];

export const assetClasses = [
  {
    number: "01",
    title: "Multifamily",
    subtitle: "Apartments, portfolios, purpose-built rentals",
    copy: "Apartment buildings, multi-residential portfolios, 5-20 unit assets, 20-50 unit assets, 50-100 unit opportunities and institutional-scale residential acquisitions.",
    href: "/multifamily",
    image: "/images/halifax-aerial.jpg",
    points: ["Apartment buildings", "Portfolios", "Value-add"],
  },
  {
    number: "02",
    title: "Industrial",
    subtitle: "Warehouse, distribution, manufacturing, flex",
    copy: "Industrial property sourcing and advisory for owner-occupied buildings, industrial leasing, distribution, storage, manufacturing, flex space and industrial development land.",
    href: "/industrial",
    image: "/images/industrial.jpg",
    points: ["Warehouse", "Distribution", "Industrial land"],
  },
  {
    number: "03",
    title: "Commercial",
    subtitle: "Retail, office, mixed-use, business assets",
    copy: "Commercial real estate guidance across retail, office, mixed-use, income-producing properties, businesses for sale and owner-user acquisition or disposition needs.",
    href: "/commercial",
    image: "/images/commercial.jpg",
    points: ["Retail", "Office", "Mixed-use"],
  },
  {
    number: "04",
    title: "Development Land",
    subtitle: "Sites, zoning, density, servicing, highest use",
    copy: "Development land advisory focused on residential, commercial, industrial, mixed-use, multifamily sites, land assemblies and strategic developer targeting.",
    href: "/development-land",
    image: "/images/development.jpg",
    points: ["Zoning context", "Servicing", "Developer targeting"],
  },
  {
    number: "05",
    title: "Investment Properties",
    subtitle: "Income-producing and off-market acquisitions",
    copy: "Private and public acquisition opportunities for investors seeking stabilized income, value-add assets, portfolio acquisitions and strategic Nova Scotia exposure.",
    href: "/opportunities",
    image: "/images/interior-kitchen.jpg",
    points: ["Income", "Cap-rate lens", "Off-market"],
  },
  {
    number: "06",
    title: "Residential",
    subtitle: "Homes, luxury, income suites, resale",
    copy: "Residential service remains available for homes, luxury properties, income properties, secondary suites, selling, valuation and relocation support.",
    href: "/residential",
    image: "/images/home-exterior.jpg",
    points: ["Homes", "Income suites", "Sell your home"],
  },
] as const;

export const opportunityTypes = [
  "All",
  "Multifamily",
  "Commercial",
  "Industrial",
  "Development",
  "Land",
  "Business",
  "Off Market",
] as const;

export const opportunities = [
  {
    slug: "institutional-scale-residential-portfolio",
    assetClass: "Multifamily",
    title: "Institutional-scale residential portfolio",
    location: "Halifax Regional Municipality",
    scale: "300+ residential and commercial units",
    price: "Confidential",
    status: "NDA required",
    transaction: "Acquisition opportunity",
    image: "/images/halifax-aerial.jpg",
    summary:
      "A confidential institutional-scale residential and commercial portfolio positioned for qualified investors seeking meaningful Nova Scotia exposure.",
    highlights: ["Existing income", "Portfolio scale", "HRM market fundamentals", "Private information package"],
  },
  {
    slug: "annapolis-county-mixed-use-development-land",
    assetClass: "Development",
    title: "Strategic mixed-use development opportunity",
    location: "Annapolis County, Nova Scotia",
    scale: "330+ acres",
    price: "Confidential",
    status: "Information available by request",
    transaction: "Development land",
    image: "/images/development.jpg",
    summary:
      "Large-scale land opportunity with residential, commercial and industrial potential, subject to professional planning and municipal review.",
    highlights: ["Strategic acreage", "Mixed-use potential", "Developer-oriented review", "Highest-and-best-use questions"],
  },
  {
    slug: "income-producing-commercial-asset",
    assetClass: "Commercial",
    title: "Income-producing commercial asset",
    location: "Nova Scotia",
    scale: "Commercial investment",
    price: "Private enquiry",
    status: "Select buyer review",
    transaction: "Commercial investment",
    image: "/images/commercial.jpg",
    summary:
      "Commercial asset positioned for investors evaluating income, tenancy, location fundamentals and long-term asset strategy.",
    highlights: ["Existing income", "Commercial tenancy", "Long-term hold potential", "Confidential review"],
  },
  {
    slug: "industrial-development-land-hrm",
    assetClass: "Industrial",
    title: "Industrial development land",
    location: "Halifax Regional Municipality",
    scale: "Industrial land requirement",
    price: "Confidential",
    status: "Sourcing mandate",
    transaction: "Buyer / developer requirement",
    image: "/images/industrial.jpg",
    summary:
      "Active industrial land and owner-user requirement for qualified opportunities across HRM and surrounding growth corridors.",
    highlights: ["Industrial zoning focus", "Owner-user or investor demand", "Development potential", "Requirement capture"],
  },
  {
    slug: "business-with-real-estate",
    assetClass: "Business",
    title: "Business with real estate",
    location: "Nova Scotia",
    scale: "Operating business and property",
    price: "Private enquiry",
    status: "Confidential",
    transaction: "Business acquisition / disposition",
    image: "/images/commercial.jpg",
    summary:
      "Confidential business and real estate opportunities for buyers and sellers in retail, service, hospitality, automotive and industrial categories.",
    highlights: ["Business sale", "Real estate component", "Confidential marketing", "Qualified buyer matching"],
  },
] as const;

export const trackRecord = [
  {
    slug: "330-acre-strategic-land-acquisition",
    metric: "330+",
    unit: "Acres",
    title: "Strategic land acquisition",
    location: "Annapolis County",
    asset: "Development Land",
    strategy: "Mixed-use opportunity",
    role: "Acquisition advisory",
    image: "/images/development.jpg",
    copy:
      "Strategic land acquisition involving large-scale acreage and development-oriented questions across residential, commercial and industrial potential.",
  },
  {
    slug: "multifamily-apartment-portfolio-advisory",
    metric: "100+",
    unit: "Units",
    title: "Apartment and portfolio advisory",
    location: "Nova Scotia",
    asset: "Multifamily",
    strategy: "Income-producing assets",
    role: "Acquisition and disposition lens",
    image: "/images/halifax-aerial.jpg",
    copy:
      "Multifamily and income-property advisory across unit economics, operating context, market position and qualified investor requirements.",
  },
  {
    slug: "industrial-storage-land-strategy",
    metric: "6.5",
    unit: "Acres",
    title: "Industrial and storage land strategy",
    location: "Wilmot, Nova Scotia",
    asset: "Industrial / Storage",
    strategy: "Site acquisition",
    role: "Strategic acquisition support",
    image: "/images/industrial.jpg",
    copy:
      "Industrial and storage-related site strategy focused on land characteristics, access, use potential and buyer/developer fit.",
  },
] as const;

export const intelligenceTopics = [
  "Halifax Multifamily Market Report",
  "Burnside Industrial Market Report",
  "Nova Scotia Development Land Guide",
  "Commercial Cap Rate Update",
  "Major Commercial Transactions in Nova Scotia",
  "International Investors Buying Canadian Commercial Real Estate",
] as const;

export const marketSnapshot = {
  region: "Halifax real estate",
  period: "Aug 18 - Aug 24",
  title: "Halifax weekly market pulse",
  summary:
    "A weekly read on sales, new supply, accepted deals, price changes and cancelled listings so buyers and sellers can see where the market is moving before they make a decision.",
  takeaway:
    "Sold-over-list activity climbed to 22% from 17%, while new listings slowed to 142 from 194. Pricing right still matters: fewer new listings means well-positioned homes can stand out, but reductions and withdrawals show buyers are still pushing back on optimistic pricing.",
  sourceLabel: "NSAR / CREA statistics",
  sourceHref: "https://stats.crea.ca/board/nsar/",
  metrics: [
    { value: "130", label: "Homes sold", detail: "Weekly sales this period" },
    { value: "105", label: "Deals accepted", detail: "Conditional or accepted activity" },
    { value: "142", label: "New listings", detail: "Fresh supply entering the market" },
    { value: "22%", label: "Sold over asking", detail: "29 homes sold above list price" },
    { value: "97.7%", label: "Sale-to-list ratio", detail: "Average sold price vs. asking" },
    { value: "109", label: "Price reductions", detail: "Listings adjusted downward" },
    { value: "40", label: "Withdrawn deals", detail: "Fell through or were withdrawn" },
    { value: "3", label: "New construction sales", detail: "Builder inventory sold" },
  ],
  weekComparison: [
    "Sold-over-list increased from 17% to 22%.",
    "New listings declined from 194 to 142.",
    "Cancellations and withdrawals stayed elevated at 40.",
  ],
} as const;

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
    title: "About Pavneet Singh | Commercial Real Estate Advisor",
    description:
      "Meet Pavneet Singh, a Nova Scotia commercial real estate and investment advisor working across commercial, multifamily, industrial, development land and residential assets.",
  },
  services: {
    title: "Real Estate Advisory | Pavneet Singh",
    description:
      "Residential, investment, commercial, industrial, land, and relocation advisory across Nova Scotia.",
  },
  properties: {
    title: "Nova Scotia Property Search | Pavneet Singh",
    description:
      "Explore a curated preview of residential, investment, commercial, and development opportunities across Nova Scotia.",
  },
  opportunities: {
    title: "Investment Opportunities Nova Scotia | Pavneet Singh",
    description:
      "Explore commercial, multifamily, industrial, development land and confidential real estate opportunities across Nova Scotia.",
  },
  investors: {
    title: "Private Investor Network | Pavneet Singh",
    description:
      "Submit acquisition criteria and join Pavneet Singh's private investor network for select Nova Scotia real estate opportunities.",
  },
  owners: {
    title: "Sell Commercial Property Confidentially | Pavneet Singh",
    description:
      "Request a confidential asset review for commercial, multifamily, industrial, development land, business and residential income property in Nova Scotia.",
  },
  commercial: {
    title: "Commercial Real Estate Nova Scotia | Pavneet Singh",
    description:
      "Commercial properties, retail, office, mixed-use, businesses for sale and owner-user real estate advisory across Nova Scotia.",
  },
  industrial: {
    title: "Industrial Real Estate Nova Scotia | Pavneet Singh",
    description:
      "Industrial property advisory for warehouses, distribution, manufacturing, flex space, industrial land and leasing across Nova Scotia.",
  },
  multifamily: {
    title: "Multifamily Real Estate Nova Scotia | Pavneet Singh",
    description:
      "Apartment buildings, multifamily portfolios and income-producing residential investment advisory across Nova Scotia.",
  },
  "development-land": {
    title: "Development Land Nova Scotia | Pavneet Singh",
    description:
      "Development land advisory for residential, commercial, industrial, mixed-use, multifamily sites and land assemblies across Nova Scotia.",
  },
  development: {
    title: "Development Advisory Nova Scotia | Pavneet Singh",
    description:
      "Development real estate advisory for land sourcing, site acquisition, redevelopment and mixed-use opportunity across Nova Scotia.",
  },
  "track-record": {
    title: "Transaction Experience | Pavneet Singh",
    description:
      "Selected real estate acquisitions, dispositions, land transactions and commercial advisory experience across Nova Scotia.",
  },
  intelligence: {
    title: "Nova Scotia Real Estate Intelligence | Pavneet Singh",
    description:
      "Market intelligence, investment reports and commercial real estate insights for Nova Scotia investors, developers and owners.",
  },
  residential: {
    title: "Residential Real Estate Nova Scotia | Pavneet Singh",
    description:
      "Residential real estate support for homes, luxury properties, investment homes, income properties, selling and relocation in Nova Scotia.",
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
    title: "Nova Scotia Real Estate Intelligence | Pavneet Singh",
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
