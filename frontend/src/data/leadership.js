// Leadership. Named, not abstracted to "our team." Per the inspiration
// brief: Lloyds names Charlie Nunn. Investec names Fani Titi. AfrAsia names
// Thierry Vallet. We name ours.
//
// Drawn from the brand manual's contact pages and Bard Santner Markets Inc
// corporate stationery.

export const LEADERSHIP = [
  {
    slug: "senziwani-sikhosana",
    name: "Senziwani Sikhosana",
    role: "Chief Executive Officer",
    short_role: "CEO",
    bio:
      "Senziwani leads Bard Santner Markets Inc and the establishment of Bard Santner Microfinance Bank. A capital markets professional by training, his work centres on building African financial institutions to international standards without losing what is African about them.",
    image: "/images/leadership/senziwani-sikhosana.jpg",
  },
  {
    slug: "alfred-mthimkhulu",
    name: "Alfred Mthimkhulu",
    role: "Executive Director",
    short_role: "ED",
    bio:
      "Alfred oversees the group's institutional banking, capital markets and correspondent relationships. His work pairs originator discipline with the long counterparty memory that compliance-led banking requires.",
    image: "/images/leadership/alfred-mthimkhulu.jpg",
  },
  {
    slug: "tatenda-hungwe",
    name: "Tatenda Hungwe",
    role: "Executive Director",
    short_role: "ED",
    bio:
      "Tatenda leads the group's market development, brand and the diaspora banking proposition. His remit is the connective tissue between the bank and the people it banks.",
    image: "/images/leadership/tatenda-hungwe.jpg",
  },
];

export function findLeader(slug) {
  return LEADERSHIP.find((l) => l.slug === slug);
}
