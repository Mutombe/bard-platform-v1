// Who We Serve — the seven client segments from the Bard Santner Website
// Map (2026-07-28). Each renders through /pages/WhoWeServe.jsx at
// /who-we-serve/:slug.
//
// Copy is taken verbatim from the sitemap document. Hero images reuse the
// existing HERO catalogue as thematic stand-ins — replace with commissioned
// photography before launch.

import { HERO } from "./images.js";

export const SEGMENTS = [
  {
    slug: "diaspora-international",
    title: "Diaspora and International",
    headline: "Stay connected to home. Invest in your future.",
    intro: [
      "Home is never far away. Whether you're living in South Africa, the United Kingdom, Australia, the United States or anywhere else in the world, staying financially connected to Zimbabwe should be simple and secure.",
      "We help Zimbabweans abroad send money home, support loved ones, invest in opportunities and manage their finances without unnecessary complexity.",
    ],
    listTitle: "How we help",
    items: [
      "International money transfers",
      "Cross-border banking",
      "Foreign currency accounts",
      "Investment opportunities in Zimbabwe",
      "Property and business financing",
      "Wealth management for global families",
    ],
    closing: "Wherever life takes you, we're your financial partner back home.",
    cta: { label: "Talk to our Diaspora Banking team", to: "/contact" },
    image: HERO.international,
  },
  {
    slug: "business-industry-mining",
    title: "Business, Industry and Mining",
    headline: "Banking that helps businesses grow.",
    intro: [
      "Zimbabwe's economy is built by entrepreneurs, manufacturers, retailers, transport companies, mining businesses and growing industries.",
      "Whether you're managing daily operations or expanding into new markets, you need a bank that understands your business and moves at your pace.",
      "We provide the banking, lending, treasury and trade solutions that help businesses improve cash flow, finance growth and manage risk.",
    ],
    listTitle: "Industries we support",
    items: [
      "Mining",
      "Manufacturing",
      "Retail & Wholesale",
      "Commercial Property",
      "Tourism & Hospitality",
      "Transport & Logistics",
      "Energy & Infrastructure",
    ],
    closing: null,
    cta: { label: "Speak to a Business Banker", to: "/contact" },
    image: HERO.business,
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    headline: "Helping agriculture grow from season to season.",
    intro: [
      "Agriculture remains one of Zimbabwe's most important industries, supporting families, businesses and exports across the country.",
      "From commercial farms to emerging producers, every season brings new opportunities and new challenges.",
      "We provide financing and banking solutions that support planting, production, equipment purchases, irrigation, storage and working capital throughout the agricultural cycle.",
    ],
    listTitle: "We support",
    items: [
      "Crop production",
      "Livestock farming",
      "Horticulture",
      "Contract farming",
      "Agricultural suppliers",
      "Agri-processing businesses",
    ],
    closing: "Because when agriculture grows, Zimbabwe grows.",
    cta: { label: "Talk to our Agriculture Banking specialists", to: "/contact" },
    image: HERO.about,
  },
  {
    slug: "financial-institutions",
    title: "Financial Institutions",
    headline: "Trusted partnerships for the financial sector.",
    intro: [
      "Strong financial institutions strengthen the economy.",
      "We work with banks, microfinance institutions, asset managers, pension funds, insurers, bureaux de change and investment firms to deliver banking, treasury and settlement solutions that support efficient financial markets.",
      "Whether you're managing liquidity, investing surplus funds or facilitating payments, we're here to help.",
    ],
    listTitle: "Solutions include",
    items: [
      "Treasury services",
      "Liquidity management",
      "Investment products",
      "Settlement services",
      "Foreign exchange",
      "Institutional banking",
    ],
    closing: null,
    cta: { label: "Connect with our Institutional Banking team", to: "/contact" },
    image: HERO.institutional,
  },
  {
    slug: "technology-innovation",
    title: "Technology and Innovation",
    headline: "Banking built for innovators.",
    intro: [
      "Zimbabwe's technology sector is growing rapidly, with entrepreneurs building new businesses in fintech, software, digital commerce and financial services.",
      "Innovation needs a banking partner that understands speed, flexibility and growth.",
      "Whether you're launching a start-up, scaling a technology company or building digital platforms, we provide banking and financing designed for modern businesses.",
    ],
    listTitle: "We support",
    items: [
      "Technology companies",
      "Fintech businesses",
      "Digital entrepreneurs",
      "Software developers",
      "E-commerce businesses",
      "Innovation hubs",
    ],
    closing: "Helping great ideas become successful businesses.",
    cta: { label: "Talk to our Innovation Banking team", to: "/contact" },
    image: HERO.markets,
  },
  {
    slug: "public-institutions",
    title: "Public Institutions",
    headline: "Supporting organisations that serve Zimbabwe.",
    intro: [
      "Government ministries, local authorities, state-owned enterprises and public institutions play an important role in delivering essential services across the country.",
      "We provide secure banking solutions that improve financial management, strengthen governance and simplify payments and collections.",
    ],
    listTitle: "We work with",
    items: [
      "Government ministries",
      "Local authorities",
      "State-owned enterprises",
      "Universities and colleges",
      "Public healthcare institutions",
      "Utilities",
    ],
    closing: "Building stronger institutions through better banking.",
    cta: { label: "Speak to our Public Sector specialists", to: "/contact" },
    image: HERO.group,
  },
  {
    slug: "non-profit-development",
    title: "Non-Profit and Development Institutions",
    headline: "Banking that supports lasting impact.",
    intro: [
      "Zimbabwe's development depends on organisations that strengthen communities, improve livelihoods and create opportunity.",
      "We work with NGOs, development agencies, charitable organisations, churches, trusts and international partners to deliver transparent, efficient and accountable banking solutions.",
      "From donor funding to project management, we help organisations focus on creating impact.",
    ],
    listTitle: "We support",
    items: [
      "Non-governmental organisations",
      "Development finance programmes",
      "International development partners",
      "Foundations and trusts",
      "Faith-based organisations",
      "Community development initiatives",
    ],
    closing: "Helping those who help others.",
    cta: { label: "Talk to our Development Banking team", to: "/contact" },
    image: HERO.contact,
  },
];

export function findSegment(slug) {
  return SEGMENTS.find((s) => s.slug === slug);
}
