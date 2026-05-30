// Central image catalogue. Single point of swap for every photograph
// the site displays. Source: Unsplash CC0 (free for commercial use,
// no attribution required for hotlinking via images.unsplash.com).
//
// Replace any URL here with a local /images/... path when production
// photography is shot. Every page reads from this catalogue, so a
// single line edit propagates.
//
// Selection brief — Lloyds canon:
//   - Photo carries warmth, not corporate sterility
//   - Subject is a human moment or an architectural detail, never a
//     close-up of money or generic stock cliché
//   - Tonality leans into shadow at one edge so a white headline
//     reads against a quiet, dark area without a heavy overlay
//   - African subject matter where the photograph is authentically
//     African; otherwise sober institutional architecture that
//     reads as global

const unsplash = (id, w = 2400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=${q}`;

// ─── Page heroes ─────────────────────────────────────────────────────
export const HERO = {
  // Institutional financial district at dusk
  home:           unsplash("1486406146926-c627a92ad1ab"),
  // Family at the kitchen table — warm, domestic
  personal:       unsplash("1573497019940-1c28c88b4f3e"),
  // Founder / entrepreneur in conversation
  business:       unsplash("1556761175-5973dc0f32e7"),
  // Refined library / heritage interior
  private:        unsplash("1481627834876-b7833e8f5570"),
  // World cityscape / cross-border
  international:  unsplash("1499856871958-5b9627545d1a"),
  // Institutional architecture / banking hall
  institutional:  unsplash("1497366216548-37526070297c"),

  // Service hubs
  banking:        unsplash("1556157382-97eda2d62296"),
  wealth:         unsplash("1485827404703-89b55fcc595e"),
  markets:        unsplash("1611974789855-9c2a0a7236a3"),

  // Group + about + leadership
  about:          unsplash("1604328698692-f76ea9498e76"),
  group:          unsplash("1497366216548-37526070297c"),
  leadership:     unsplash("1573164713988-8665fc963095"),

  // Editorial + contact
  insights:       unsplash("1543002588-bfa74002ed7e"),
  locations:      unsplash("1524661135-423995f22d0b"),
  contact:        unsplash("1542744173-8e7e53415bb0"),
};

// ─── Audience-tile portraits ─────────────────────────────────────────
// The 5-card "Banking for you / for your wealth / for your business /
// the diaspora / institutions" carousel below the home hero.
export const AUDIENCE_TILE = {
  personal:       unsplash("1554224155-6726b3ff858f", 1200),
  business:       unsplash("1556761175-b413da4baf72", 1200),
  private:        unsplash("1485827404703-89b55fcc595e", 1200),
  international:  unsplash("1436491865332-7a61a109cc05", 1200),
  institutional:  unsplash("1486406146926-c627a92ad1ab", 1200),
};

// ─── Product cards ───────────────────────────────────────────────────
// Editorial-square images for the product grid. Each maps to a slug
// from /data/products.js.
export const PRODUCT = {
  "everyday-account":     unsplash("1556742502-ec7c0e9f34b1", 1200),
  "savings-account":      unsplash("1579621970795-87facc2f976d", 1200),
  "home-loan":            unsplash("1564013799919-ab600027ffc6", 1200),
  "business-account":     unsplash("1556761175-5973dc0f32e7", 1200),
  "working-capital":      unsplash("1551836022-d5d88e9218df", 1200),
  "trade-finance":        unsplash("1494412574643-ff11b0a5c1c3", 1200),
  "private-current":      unsplash("1481627834876-b7833e8f5570", 1200),
  "wealth-management":    unsplash("1485827404703-89b55fcc595e", 1200),
  "structured-credit":    unsplash("1554224154-26032cdc0f12", 1200),
  "diaspora-account":     unsplash("1436491865332-7a61a109cc05", 1200),
  "foreign-exchange":     unsplash("1611974789855-9c2a0a7236a3", 1200),
  "treasury-services":    unsplash("1486406146926-c627a92ad1ab", 1200),
  "debt-capital-markets": unsplash("1559526324-4b87b5e36e44", 1200),
};

// ─── Insight article hero images ─────────────────────────────────────
export const INSIGHT = {
  "africa-and-the-cross-border-rail":     unsplash("1494412574643-ff11b0a5c1c3", 1600),
  "the-quiet-case-for-a-deposit-base":    unsplash("1556157382-97eda2d62296", 1600),
  "the-diaspora-is-not-a-niche":          unsplash("1436491865332-7a61a109cc05", 1600),
  "credit-when-the-rate-is-the-conversation": unsplash("1554224155-26032cdc0f12", 1600),
  "treasury-and-the-discipline-of-the-end-of-day": unsplash("1611974789855-9c2a0a7236a3", 1600),
  "wealth-and-the-second-conversation":   unsplash("1485827404703-89b55fcc595e", 1600),
  "the-bank-as-a-publishing-institution": unsplash("1543002588-bfa74002ed7e", 1600),
  "becoming-a-bank":                       unsplash("1604328698692-f76ea9498e76", 1600),
};
