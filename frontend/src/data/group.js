// The Bard Santner Group ecosystem. The website's responsibility is to make
// the institution legible: not "a microfinance bank with some side businesses",
// but a *platform* spanning banking, markets, lending, sports finance and
// editorial — with BSMFB (the bank) at the centre.
//
// Each entry surfaces on the home page Group section and on /group.

export const GROUP_ENTITIES = [
  {
    id: "bsmfb",
    slug: "bsmfb",
    name: "Bard Santner Microfinance Bank",
    short: "BSMFB",
    role: "The bank",
    tagline: "Banking, savings, credit. The everyday and the consequential.",
    body:
      "The flagship banking institution of the Bard Santner Group. Established to serve individuals, businesses, the diaspora and institutional clients with the seriousness African banking deserves and the warmth African banking has historically lacked.",
    accent: "var(--color-orange-500)",
    href: "/group/bsmfb",
    external: null,
    cta: "Open with BSMFB",
  },
  {
    id: "markets",
    slug: "markets",
    name: "Bard Santner Markets Inc",
    short: "Markets",
    role: "Capital markets and advisory",
    tagline: "Treasury, debt and capital markets. Originated with care.",
    body:
      "The parent institution. Capital markets advisory, structured debt origination, treasury services and the long relationships with correspondent banks, regulators and counterparties on which the rest of the group is built.",
    accent: "var(--color-navy-600)",
    href: "/group/markets",
    external: null,
    cta: "View Markets",
  },
  {
    id: "loans",
    slug: "loans",
    name: "Bard Loans",
    short: "Loans",
    role: "Working capital and personal credit",
    tagline: "Loans for civil servants, businesses and households.",
    body:
      "A dedicated credit institution serving civil servants, household borrowers and growing SMEs with simple, time-bound facilities and a straight conversation about cost. Operates under the Bard Santner credit policy.",
    accent: "var(--color-success)",
    href: "/group/loans",
    external: null,
    cta: "Explore Loans",
  },
  {
    id: "golf",
    slug: "golf",
    name: "Bard Santner Golf",
    short: "Golf",
    role: "Sport-aligned wealth",
    tagline: "Where the game and the portfolio share a fairway.",
    body:
      "A boutique advisory line aligning sport, hospitality and wealth. Memberships, sponsorships, structured experiences and a deliberately small client list. Where conversation is the work, and the game is the venue.",
    accent: "var(--color-warn)",
    href: "/group/golf",
    external: null,
    cta: "Visit Golf",
  },
  {
    id: "journal",
    slug: "journal",
    name: "Bardiq Journal",
    short: "Journal",
    role: "The editorial arm",
    tagline: "Africa, capital and the long view. In print.",
    body:
      "The group's editorial publication. Long-form essays, market commentary, founder profiles and a refusal to publish anything that wouldn't survive a second reading. Quarterly print, weekly online.",
    accent: "var(--color-error)",
    href: "/group/journal",
    external: null,
    cta: "Read the Journal",
  },
];

export function findEntity(id) {
  return GROUP_ENTITIES.find((e) => e.id === id);
}
