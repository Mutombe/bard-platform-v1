// Central image catalogue. Single point of swap for every photograph
// the site displays. Source: Unsplash CC0 (free for commercial use,
// no attribution required for hotlinking via images.unsplash.com).
//
// Curated against the Bard Santner vision — "modern African financial
// platform, anchored in Harare, built to international standards." Each
// photograph chosen for what its page needs to say:
//
//   home          — African financial district, dusk: the institution
//                   in its civic context
//   personal      — domestic moment, family, warm interior
//   business      — Black African woman entrepreneur, modern workplace
//   private       — refined interior: library, art, heritage
//   international — cross-border travel: airplane window over a city
//   institutional — corporate boardroom / financial-district tower
//   banking       — neoclassical banking architecture, columns
//   wealth        — Modernist interior detail, art, refined material
//   markets       — trading floor screens, glowing data
//   about         — African urban cityscape at golden hour
//   group         — institutional architecture, geometric facade
//   leadership    — professional portrait, environmental
//   insights      — reading at a desk, editorial gesture
//   locations     — heritage world map, navigation
//   contact       — Black African business handshake, focused
//
// Replace any URL here with a local /images/... path when production
// photography ships. Every page reads from this catalogue, so single-
// line edits propagate.

const unsplash = (id, w = 2400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=${q}`;

// ─── Page heroes ─────────────────────────────────────────────────────
export const HERO = {
  // The civic institution. Sunset over a financial district that could
  // be Joburg, Nairobi or Lagos.
  home:           unsplash("1486406146926-c627a92ad1ab"),
  // A family meal at a sunlit table. Warmth, the everyday.
  personal:       unsplash("1573497019940-1c28c88b4f3e"),
  // Black African woman entrepreneur on a phone call in a modern
  // workspace — the canonical African SME founder image.
  business:       unsplash("1556761175-5973dc0f32e7"),
  // Heritage library / reading room with leather and serious lamps.
  private:        unsplash("1481627834876-b7833e8f5570"),
  // Airplane window descending over a city at dusk — cross-border.
  international:  unsplash("1499856871958-5b9627545d1a"),
  // Modernist office tower facade against blue sky — institutional.
  institutional:  unsplash("1497366216548-37526070297c"),
  // Neoclassical bank columns — the architectural memory of banking.
  banking:        unsplash("1556157382-97eda2d62296"),
  // Refined interior detail with art and natural light.
  wealth:         unsplash("1497366811353-6870744d04b2"),
  // Trading floor / market data screens in low light.
  markets:        unsplash("1611974789855-9c2a0a7236a3"),
  // African urban cityscape at golden hour: the institution's home.
  about:          unsplash("1604328698692-f76ea9498e76"),
  // Geometric institutional facade detail.
  group:          unsplash("1488229297570-58520851e868"),
  // Environmental professional portrait, available light.
  leadership:     unsplash("1573164713988-8665fc963095"),
  // Editorial — desk with books, papers, a steady reading lamp.
  insights:       unsplash("1543002588-bfa74002ed7e"),
  // Heritage world map, the institutional gesture of locations.
  locations:      unsplash("1524661135-423995f22d0b"),
  // Black African business handshake, focused close-crop.
  contact:        unsplash("1542744173-8e7e53415bb0"),
};

// ─── Audience-tile portraits ─────────────────────────────────────────
// The 5-card "Banking for you / for your wealth / for your business /
// the diaspora / institutions" carousel below the home hero. Each is
// a portrait-format human moment that names the audience by gesture
// alone — no caption needed.
export const AUDIENCE_TILE = {
  // A person at home with their phone — personal banking, domestic.
  personal:       unsplash("1554224155-6726b3ff858f", 1200),
  // Black African woman professional at her workplace — SME founder.
  business:       unsplash("1573497019940-3a89ad2a3b91", 1200),
  // Heritage interior, books, refined low light — private wealth.
  private:        unsplash("1481627834876-b7833e8f5570", 1200),
  // Travel scene — airport window, currency, cross-border.
  international:  unsplash("1436491865332-7a61a109cc05", 1200),
  // Boardroom / corporate skyline — the institutional audience.
  institutional:  unsplash("1497366216548-37526070297c", 1200),
};

// ─── Product cards ───────────────────────────────────────────────────
// Square editorial images for the product grid. Each maps to a slug
// from /data/products.js. The photograph isn't a product shot — it's
// the human moment the product enables.
export const PRODUCT = {
  "everyday-account":     unsplash("1556742502-ec7c0e9f34b1", 1200),  // wallet + card
  "savings-account":      unsplash("1579621970795-87facc2f976d", 1200),  // growth / compound
  "home-loan":            unsplash("1564013799919-ab600027ffc6", 1200),  // african home, modern
  "business-account":     unsplash("1556761175-5973dc0f32e7", 1200),  // african entrepreneur
  "working-capital":      unsplash("1551836022-d5d88e9218df", 1200),  // african business interior
  "trade-finance":        unsplash("1494412574643-ff11b0a5c1c3", 1200),  // shipping container port
  "private-current":      unsplash("1485827404703-89b55fcc595e", 1200),  // refined architecture
  "wealth-management":    unsplash("1497366811353-6870744d04b2", 1200),  // luxury interior detail
  "structured-credit":    unsplash("1554224155-26032cdc0f12", 1200),  // documents / dial
  "diaspora-account":     unsplash("1436491865332-7a61a109cc05", 1200),  // travel window
  "foreign-exchange":     unsplash("1611974789855-9c2a0a7236a3", 1200),  // trading data
  "treasury-services":    unsplash("1486406146926-c627a92ad1ab", 1200),  // financial district
  "debt-capital-markets": unsplash("1559526324-4b87b5e36e44", 1200),  // skyline tower
};

// ─── Insight article hero images ─────────────────────────────────────
// Each photograph chosen to carry the editorial argument of the piece
// rather than illustrate it. 16:9 aspect ratio for the article hero.
export const INSIGHT = {
  // The corridor. African trade route — container port at sunset.
  "africa-and-the-cross-border-rail":          unsplash("1494412574643-ff11b0a5c1c3", 1600),
  // The deposit base. Neoclassical bank columns.
  "the-quiet-case-for-a-deposit-base":         unsplash("1556157382-97eda2d62296", 1600),
  // The diaspora. Airplane window descending over the city.
  "the-diaspora-is-not-a-niche":               unsplash("1436491865332-7a61a109cc05", 1600),
  // Credit. A frank conversation across a desk.
  "credit-when-the-rate-is-the-conversation":  unsplash("1554224155-26032cdc0f12", 1600),
  // Treasury / end of day. Data screens, low light.
  "treasury-and-the-discipline-of-the-end-of-day": unsplash("1611974789855-9c2a0a7236a3", 1600),
  // Wealth / second conversation. Refined heritage interior.
  "wealth-and-the-second-conversation":        unsplash("1485827404703-89b55fcc595e", 1600),
  // Bank as publishing institution. Books, papers, lamp.
  "the-bank-as-a-publishing-institution":      unsplash("1543002588-bfa74002ed7e", 1600),
  // Becoming a bank. African financial district, dusk.
  "becoming-a-bank":                            unsplash("1604328698692-f76ea9498e76", 1600),
};
