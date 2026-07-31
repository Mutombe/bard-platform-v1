// Leadership. Named, not abstracted to "our team." Per the inspiration
// brief: Lloyds names Charlie Nunn. Investec names Fani Titi. AfrAsia names
// Thierry Vallet. We name ours. Portraits are the real, commissioned
// photographs of the named executives.

export const LEADERSHIP = [
  {
    slug: "senziwani-sikhosana",
    name: "Senziwani Sikhosana",
    role: "Chief Executive Officer",
    short_role: "CEO",
    bio:
      "Senziwani leads Bard Santner Markets Inc and the establishment of Bard Santner Microfinance Bank. A capital markets professional by training, his work centres on building African financial institutions to international standards without losing what is African about them.",
    image: "/images/exec-sikhosana.jpg",
    linkedin: "https://www.linkedin.com/in/senziwani-sikhosana",
  },
  {
    slug: "tatenda-hungwe",
    name: "Tatenda Hungwe",
    role: "Executive Director",
    short_role: "ED",
    bio:
      "Tatenda leads the group's market development, brand and the diaspora banking proposition. His remit is the connective tissue between the bank and the people it banks.",
    image: "/images/exec-tatenda.jpg",
    linkedin: "https://www.linkedin.com/in/tatenda-hungwe",
  },
  {
    slug: "lucia-chingwaru-mutsunge",
    name: "Lucia Chingwaru-Mutsunge",
    role: "Executive Director",
    short_role: "ED",
    bio:
      "Lucia oversees operational excellence, client relations and risk. She brings a rigorous analytical approach to how the bank is run day to day, so that discipline behind the scenes shows up as reliability for the customer.",
    image: "/images/exec-lucia.jpg",
    linkedin: "https://www.linkedin.com/in/lucia-chingwaru-mutsunge",
  },
];

export function findLeader(slug) {
  return LEADERSHIP.find((l) => l.slug === slug);
}

// Author lookup helper — given an insight author name, returns the
// matching leader (or undefined). Used by InsightsRail + InsightDetail
// to surface the author's photograph in the byline avatar with
// graceful fallback to initials when the author isn't in the
// leadership data.
export function findLeaderByName(name) {
  if (!name) return undefined;
  return LEADERSHIP.find((l) => l.name === name);
}
