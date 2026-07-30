// Solutions — the three client-outcome groupings from the Bard Santner
// Website Map (2026-07-28): For Companies and Institutions, For Individuals,
// For Investors. Each renders through /pages/Solution.jsx at
// /solutions/:slug.
//
// Copy is taken verbatim from the sitemap document. Hero images reuse the
// existing HERO catalogue as thematic stand-ins — swap for commissioned
// photography (or product-specific art) before launch.

import { BRAND } from "./images.js";

export const SOLUTIONS = [
  {
    slug: "companies-institutions",
    title: "For Companies and Institutions",
    eyebrow: "Solutions",
    headline: "Grow your business with banking that works as hard as you do.",
    intro: [
      "Running a business means making hundreds of financial decisions every day. You need a banking partner that helps you manage cash, unlock capital, simplify payments and support growth, not slow it down.",
      "Whether you're a growing business, corporate, NGO, school, healthcare provider or government institution, our digital-first banking platform gives you the tools to operate more efficiently.",
    ],
    image: BRAND.institutional,
    blocks: [
      {
        heading: "Manage your cash with confidence",
        body: "Stay in control of your cash flow with business accounts, automated payments, collections and real-time reporting.",
        items: [
          "Business Banking",
          "Corporate Accounts",
          "Treasury Management",
          "Cash Management",
          "Virtual Accounts",
          "Payroll & Bulk Payments",
        ],
      },
      {
        heading: "Access capital when opportunity arrives",
        body: "Growth shouldn't wait. From working capital and overdrafts to invoice finance, asset finance and seasonal agricultural funding, we help businesses access finance when they need it most.",
        items: [
          "Business Loans",
          "Working Capital Finance",
          "Business Overdrafts",
          "Invoice Discounting",
          "Asset Finance",
          "Agricultural Finance",
        ],
      },
      {
        heading: "Trade across borders with confidence",
        body: "Whether you're importing, exporting or managing foreign currency exposure, we simplify international trade and cross-border payments.",
        items: [
          "International Payments",
          "Foreign Exchange",
          "Trade Finance",
          "Letters of Credit",
          "Bank Guarantees",
          "Exchange Control Services",
        ],
      },
      {
        heading: "Make every payment simpler",
        body: "From customer collections to supplier payments, our digital payment solutions help your business operate faster and more efficiently.",
        items: [
          "Smart POS",
          "Digital Collections",
          "Payment Links",
          "Bill Payments",
          "Merchant Services",
        ],
      },
    ],
    cta: { label: "Speak to a Business Banker", to: "/contact" },
  },
  {
    slug: "individuals",
    title: "For Individuals",
    eyebrow: "Solutions",
    headline: "Make your money work harder for you.",
    intro: [
      "Whether you're opening your first account, saving for your family's future or managing your day-to-day finances, banking should be simple, secure and always within reach.",
      "Our digital-first banking experience puts you in control wherever life takes you.",
    ],
    image: BRAND.individual,
    blocks: [
      {
        heading: "Bank anywhere",
        body: "Open an account, transfer money, pay bills and manage your finances from your phone.",
        items: [
          "Transaction Accounts",
          "Savings Accounts",
          "Digital Banking",
          "Bill Payments",
          "Mobile Banking",
          "USSD Banking",
        ],
      },
      {
        heading: "Borrow with confidence",
        body: "Life doesn't always wait. Access personal loans, salary advances and overdrafts through a fast, digital application process.",
        items: [
          "Personal Loans",
          "Salary-Based Lending",
          "Personal Overdrafts",
          "Instant Micro-Loans",
        ],
      },
      {
        heading: "Save together. Grow together.",
        body: "Whether you're saving on your own or as a group, our flexible savings solutions help you build towards your goals.",
        items: ["Savings Vaults", "Smart Mukando", "Group Savings Accounts"],
      },
      {
        heading: "Send money wherever life takes you",
        body: "Move money quickly and securely, whether you're supporting family locally or across borders.",
        items: [
          "Domestic Transfers",
          "International Money Transfers",
          "Wallet Transfers",
          "Cross-Border Payments",
        ],
      },
    ],
    cta: { label: "Open an Account", to: "/login" },
  },
  {
    slug: "investors",
    title: "For Investors",
    eyebrow: "Solutions",
    headline: "Build wealth that lasts.",
    intro: [
      "Growing wealth takes more than good investments. It takes thoughtful planning, disciplined investing and a partner who understands your long-term goals.",
      "Whether you're building your portfolio, protecting capital or planning your legacy, we're here to help.",
    ],
    image: BRAND.advisory,
    blocks: [
      {
        heading: "Invest with confidence",
        body: "Access professionally managed investment opportunities designed to help your money grow over time.",
        items: ["Managed Portfolios", "Investment Advisory", "Private Wealth Solutions"],
      },
      {
        heading: "Put surplus cash to work",
        body: "Earn more from excess liquidity with treasury and money market solutions designed for individuals and institutions.",
        items: [
          "Fixed Deposits",
          "Negotiable Certificates of Deposit",
          "Money Market Investments",
        ],
      },
      {
        heading: "Protect and grow your legacy",
        body: "Our advisers work with you to build a long-term financial plan that supports your family, your business and future generations.",
        items: ["Wealth Planning", "Portfolio Reviews", "Long-Term Investment Planning"],
      },
    ],
    cta: { label: "Speak to an Investment Adviser", to: "/contact" },
  },
];

export function findSolution(slug) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
