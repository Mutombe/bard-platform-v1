// Top-navigation information architecture.
//
// Structure follows the J.P. Morgan / AfrAsia pattern the brand asked for:
// four top-level dropdowns, each revealing its sub-links on hover/focus.
// Content is taken verbatim from "Bard Santner Bank Website Map" (2026-07-28).
//
// NOTE ON DESTINATIONS — the /solutions/* and /who-we-serve/* pages do not
// exist yet, so those links currently resolve to the 404 page until the
// pages are built (full copy for each already lives in the sitemap doc).
// The Insights and About Us sub-links point at pages that already exist
// (/insights, /about, /leadership, /group/golf, /contact) so they resolve
// today.

export const NAV_MENU = [
  {
    label: "Solutions",
    to: "/solutions",
    children: [
      { label: "For Companies and Institutions", to: "/solutions/companies-institutions" },
      { label: "For Individuals", to: "/solutions/individuals" },
      { label: "For Investors", to: "/solutions/investors" },
    ],
  },
  {
    label: "Who We Serve",
    to: "/who-we-serve",
    children: [
      { label: "Diaspora and International", to: "/who-we-serve/diaspora-international" },
      { label: "Business, Industry and Mining", to: "/who-we-serve/business-industry-mining" },
      { label: "Agriculture", to: "/who-we-serve/agriculture" },
      { label: "Financial Institutions", to: "/who-we-serve/financial-institutions" },
      { label: "Technology and Innovation", to: "/who-we-serve/technology-innovation" },
      { label: "Public Institutions", to: "/who-we-serve/public-institutions" },
      { label: "Non-Profit and Development Institutions", to: "/who-we-serve/non-profit-development" },
    ],
  },
  {
    label: "Insights",
    to: "/insights",
    children: [
      { label: "BGFI — Bard Global Finance Institute", to: "/insights" },
      { label: "Finance Africa Quarterly", to: "/insights" },
    ],
  },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Our Story", to: "/about" },
      { label: "Our Manifesto", to: "/about" },
      { label: "Vision, Purpose, Values", to: "/about" },
      { label: "Board of Directors", to: "/leadership" },
      { label: "Golf", to: "/group/golf" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

// Right-aligned utility links kept on the top strip.
// NOTE: /careers has no page yet — it resolves to the 404 page until built.
export const NAV_UTILITY = [
  { label: "Careers", to: "/careers" },
  { label: "Contact us", to: "/contact" },
  { label: "Bard Santner Group", to: "/group" },
];
