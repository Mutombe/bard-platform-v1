// Product catalogue. Each product has:
//   - audience: which audience(s) it serves (drives segment landing pages)
//   - category: how it groups inside the audience page
//   - slug: route under /products/:slug
//
// Order matters — the order here is the order on the home page product grid.

export const PRODUCTS = [
  // ─── Personal ───────────────────────────────────────────────────
  {
    slug: "everyday-account",
    name: "Everyday Account",
    audience: ["personal"],
    category: "Current accounts",
    eyebrow: "Current account",
    summary: "Salary in, bills out, debit card in pocket. Day-to-day banking with no monthly fee for the first twelve months.",
    image: "/images/products/everyday-account.jpg",
    accent: "var(--color-orange-500)",
    features: [
      "No monthly fee for the first 12 months",
      "Debit card with contactless and biometric authorisation",
      "Free transfers between BSMFB accounts",
      "Mobile and internet banking included",
    ],
  },
  {
    slug: "savings-account",
    name: "Savings Plus",
    audience: ["personal"],
    category: "Savings",
    eyebrow: "Savings",
    summary: "Tiered-interest savings with monthly compounding. No notice required for everyday balances; preferential rates for committed balances.",
    image: "/images/products/savings.jpg",
    accent: "var(--color-orange-500)",
    features: [
      "Tiered interest, paid monthly",
      "No minimum balance",
      "Preferential rates on committed balances",
      "Goal-based savings sub-pots",
    ],
  },
  {
    slug: "home-loan",
    name: "Home Loan",
    audience: ["personal"],
    category: "Borrowing",
    eyebrow: "Mortgage",
    summary: "First-home, second-home, refinance. Twenty-year tenors with fixed and variable options. A real conversation with a real mortgage banker.",
    image: "/images/products/home-loan.jpg",
    accent: "var(--color-orange-500)",
    features: [
      "Up to 20-year tenor",
      "Fixed, variable or split-rate options",
      "Decision in principle within 48 hours",
      "Dedicated mortgage banker for the life of the loan",
    ],
  },
  // ─── Business ───────────────────────────────────────────────────
  {
    slug: "business-account",
    name: "Business Account",
    audience: ["business"],
    category: "Operating accounts",
    eyebrow: "Business banking",
    summary: "An operating account that doesn't punish the growing SME. Multi-user access, integrations, and a relationship banker from day one.",
    image: "/images/products/business-account.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Multi-user roles and approval workflows",
      "Free transfers between BSMFB business accounts",
      "API access for accounting integrations",
      "Dedicated relationship banker",
    ],
  },
  {
    slug: "working-capital",
    name: "Working Capital Facility",
    audience: ["business"],
    category: "Credit",
    eyebrow: "Business credit",
    summary: "Revolving facility for the rhythm of the trading cycle. Drawdown, repay, drawdown again. Priced honestly and reviewed annually.",
    image: "/images/products/working-capital.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Revolving credit limit up to your turnover ratio",
      "Annual review, not quarterly anxiety",
      "Multi-currency drawdown",
      "Direct line to a credit officer",
    ],
  },
  {
    slug: "trade-finance",
    name: "Trade Finance",
    audience: ["business", "international", "institutional"],
    category: "Trade",
    eyebrow: "Trade finance",
    summary: "Letters of credit, documentary collections, supplier finance and the correspondent banking relationships that move African goods through the world's ports.",
    image: "/images/products/trade-finance.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Letters of credit (sight, usance, standby)",
      "Documentary collections",
      "Pre-shipment and post-shipment finance",
      "Correspondent banking across 40+ jurisdictions",
    ],
  },
  // ─── Private ────────────────────────────────────────────────────
  {
    slug: "private-current",
    name: "Private Current Account",
    audience: ["private"],
    category: "Private banking",
    eyebrow: "Private banking",
    summary: "A current account with a private banker on call. Multi-currency, multi-channel, with a fee structure designed not to surprise.",
    image: "/images/products/private-current.jpg",
    accent: "var(--color-warn)",
    features: [
      "Multi-currency (USD, EUR, GBP, ZAR, ZWG)",
      "Dedicated private banker",
      "Concierge banking access",
      "Bespoke fee arrangement",
    ],
  },
  {
    slug: "wealth-management",
    name: "Wealth Management",
    audience: ["private"],
    category: "Wealth",
    eyebrow: "Wealth",
    summary: "Discretionary portfolios constructed around your goals, not someone else's product list. Reviewed in person, in private, and on a rhythm you set.",
    image: "/images/products/wealth.jpg",
    accent: "var(--color-warn)",
    features: [
      "Discretionary and advisory mandates",
      "Cross-border asset allocation",
      "Annual in-person review at minimum",
      "Succession and intergenerational planning",
    ],
  },
  {
    slug: "structured-credit",
    name: "Structured Credit",
    audience: ["private", "institutional"],
    category: "Credit",
    eyebrow: "Structured credit",
    summary: "Asset-backed, off-balance-sheet, syndicated. Where standard credit ends, structured credit begins. Bespoke by definition.",
    image: "/images/products/structured-credit.jpg",
    accent: "var(--color-warn)",
    features: [
      "Asset-backed financing",
      "Off-balance-sheet structures",
      "Syndicated facilities",
      "Cross-border counsel built in",
    ],
  },
  // ─── International ─────────────────────────────────────────────
  {
    slug: "diaspora-account",
    name: "Diaspora Account",
    audience: ["international"],
    category: "Diaspora",
    eyebrow: "Diaspora banking",
    summary: "A home-country account that opens before you arrive home. Open in the UK, US, Australia or South Africa. Move money in, settle in.",
    image: "/images/products/diaspora.jpg",
    accent: "var(--color-success)",
    features: [
      "Open from abroad, fund on arrival",
      "Multi-currency holdings",
      "Property-purchase, school-fee and remittance flows",
      "Dedicated diaspora desk",
    ],
  },
  {
    slug: "foreign-exchange",
    name: "Foreign Exchange",
    audience: ["international", "business", "institutional"],
    category: "Markets",
    eyebrow: "FX",
    summary: "Spot, forward, swap. Priced from the desk that runs the book. Not the desk that re-prices what someone else quoted yesterday.",
    image: "/images/products/fx.jpg",
    accent: "var(--color-success)",
    features: [
      "Spot, forward, swap",
      "12 major currency pairs",
      "Hedging programme design",
      "Direct dealing line for institutional clients",
    ],
  },
  // ─── Institutional ─────────────────────────────────────────────
  {
    slug: "treasury-services",
    name: "Treasury Services",
    audience: ["institutional", "business"],
    category: "Treasury",
    eyebrow: "Treasury",
    summary: "Liquidity management, payments, collections, custody. The plumbing on which a serious treasury operates. Documented, reconciled, audited.",
    image: "/images/products/treasury.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Real-time liquidity dashboard",
      "Bulk payments and collections",
      "Securities custody and safekeeping",
      "API access with quarterly attestation",
    ],
  },
  {
    slug: "debt-capital-markets",
    name: "Debt Capital Markets",
    audience: ["institutional"],
    category: "Capital markets",
    eyebrow: "DCM",
    summary: "Bond origination, syndication and distribution. Sovereign, sub-sovereign, corporate. Listed and unlisted. Local and cross-border.",
    image: "/images/products/dcm.jpg",
    accent: "var(--color-navy-600)",
    features: [
      "Sovereign and sub-sovereign issuance",
      "Corporate bond origination",
      "Listed and private placement structures",
      "Cross-border syndication",
    ],
  },
];

export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsForAudience(audienceId) {
  return PRODUCTS.filter((p) => p.audience.includes(audienceId));
}
