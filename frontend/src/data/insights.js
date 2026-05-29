// Editorial entries for /insights. Each entry is short by design — the
// institution is its own evidence. Long-form belongs to Bardiq Journal.
//
// All dates are absolute. Reading-time is honest.

export const INSIGHTS = [
  {
    slug: "africa-and-the-cross-border-rail",
    title: "Africa and the cross-border rail.",
    eyebrow: "Trade finance",
    summary:
      "Why the rails that move goods between Lagos, Mombasa and Maputo will be African-built within the decade, and how the bank that builds them captures the corridor.",
    audience: ["business", "international", "institutional"],
    date: "2026-05-19",
    reading_minutes: 8,
    author: "Senziwani Sikhosana",
    author_role: "Chief Executive Officer",
    image: "/images/insights/cross-border-rail.jpg",
  },
  {
    slug: "the-quiet-case-for-a-deposit-base",
    title: "The quiet case for a deposit base.",
    eyebrow: "Banking strategy",
    summary:
      "Wholesale funding looks cheaper on a spreadsheet and crueler in a crisis. An argument for the patient, expensive, durable work of building a real retail book.",
    audience: ["business", "institutional"],
    date: "2026-05-05",
    reading_minutes: 6,
    author: "Alfred Mthimkhulu",
    author_role: "Executive Director",
    image: "/images/insights/deposit-base.jpg",
  },
  {
    slug: "the-diaspora-is-not-a-niche",
    title: "The diaspora is not a niche.",
    eyebrow: "Diaspora banking",
    summary:
      "African remittance flows now exceed foreign direct investment in nine of the continent's largest economies. The diaspora is the primary capital allocator. Bank it that way.",
    audience: ["international", "personal"],
    date: "2026-04-22",
    reading_minutes: 7,
    author: "Tatenda Hungwe",
    author_role: "Executive Director",
    image: "/images/insights/diaspora.jpg",
  },
  {
    slug: "credit-when-the-rate-is-the-conversation",
    title: "Credit, when the rate is the conversation.",
    eyebrow: "Credit",
    summary:
      "How to talk honestly with a borrower about a high-rate environment without selling them a refinancing they will regret six months later.",
    audience: ["personal", "business"],
    date: "2026-04-08",
    reading_minutes: 5,
    author: "Bard Santner Credit Committee",
    author_role: "",
    image: "/images/insights/credit-rates.jpg",
  },
  {
    slug: "treasury-and-the-discipline-of-the-end-of-day",
    title: "Treasury, and the discipline of the end of day.",
    eyebrow: "Treasury",
    summary:
      "Why the institutional treasurer who closes the day every day at 5pm builds a stronger book than the one who closes it on month-end.",
    audience: ["institutional", "business"],
    date: "2026-03-25",
    reading_minutes: 6,
    author: "Bard Santner Treasury Desk",
    author_role: "",
    image: "/images/insights/treasury-eod.jpg",
  },
  {
    slug: "wealth-and-the-second-conversation",
    title: "Wealth, and the second conversation.",
    eyebrow: "Wealth",
    summary:
      "The first conversation with a wealth client is about returns. The second is about succession. We start with the second.",
    audience: ["private"],
    date: "2026-03-11",
    reading_minutes: 5,
    author: "Bard Santner Wealth",
    author_role: "",
    image: "/images/insights/wealth.jpg",
  },
  {
    slug: "the-bank-as-a-publishing-institution",
    title: "The bank as a publishing institution.",
    eyebrow: "Group",
    summary:
      "Why a serious bank publishes — in print, in long form, with a masthead. And why Bardiq Journal is part of the bank, not adjacent to it.",
    audience: ["personal", "business", "private", "international", "institutional"],
    date: "2026-02-26",
    reading_minutes: 5,
    author: "Bardiq Journal",
    author_role: "",
    image: "/images/insights/journal.jpg",
  },
  {
    slug: "becoming-a-bank",
    title: "Becoming a bank.",
    eyebrow: "From the desk of the CEO",
    summary:
      "On what changes when an institution accepts deposits, what doesn't, and the four obligations a bank inherits the moment it opens its first account.",
    audience: ["personal", "business", "private", "international", "institutional"],
    date: "2026-02-12",
    reading_minutes: 7,
    author: "Senziwani Sikhosana",
    author_role: "Chief Executive Officer",
    image: "/images/insights/becoming-a-bank.jpg",
  },
];

export function findInsight(slug) {
  return INSIGHTS.find((i) => i.slug === slug);
}

export function insightsForAudience(audienceId) {
  return INSIGHTS.filter((i) => i.audience.includes(audienceId));
}
