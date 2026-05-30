import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import QuickActionStrip from "../components/QuickActionStrip.jsx";
import AudienceTiles from "../components/AudienceTiles.jsx";
import StatsBand from "../components/StatsBand.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import GroupRibbon from "../components/GroupRibbon.jsx";
import InsightsRail from "../components/InsightsRail.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";

import { QUICK_ACTIONS } from "../data/quickActions.js";
import { PRODUCTS } from "../data/products.js";
import { INSIGHTS } from "../data/insights.js";
import { HERO } from "../data/images.js";

/**
 * The institutional home page. The canonical sequence pulled directly
 * from the Lloyds + AfrAsia + Investec inspection:
 *
 *   § 01  HERO              full-bleed editorial photo, one CTA
 *   § 02  QUICK ACTIONS     4 pills under the hero
 *   § 03  AUDIENCE TILES    5 cards across (Personal..Institutional)
 *   § 04  FEATURED PRODUCTS 4-up editorial cards
 *   § 05  GROUP             5 dark sub-brand cards
 *   § 06  INSIGHTS          3 editorial article cards
 *   § 07  ADVISORY BAND     "Speak to a banker"
 *   § 08  TRUST RIBBON      4 pillars: regulated, deposits, security, AML
 *
 * Whitespace and silence carry the rest.
 */
export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) =>
    ["everyday-account", "business-account", "wealth-management", "trade-finance"].includes(p.slug)
  );

  return (
    <PageTransition>
      <SEO
        title="A modern African financial platform"
        description="Bard Santner Markets Inc. Banking, wealth management, trade finance, treasury and advisory across personal, business, private, international and institutional clients. Anchored in Africa. Built to international standards."
        path="/"
        keywords={[
          "African bank", "Bard Santner", "BSMFB", "Bard Santner Microfinance Bank",
          "private banking Africa", "trade finance Zimbabwe", "diaspora banking",
          "treasury services Africa", "wealth management Harare",
        ]}
        jsonLd={[
          organizationJsonLd(),
          websiteJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
        ]}
      />

      {/* § 01 — Hero. Lloyds-grade brevity: single headline, short
          subhead, two CTAs. The compliance disclosure that used to sit
          under the CTAs has moved into the global TrustRibbon at § 08
          where it belongs. */}
      <PageHero
        eyebrow="§ 01 · Bard Santner Markets Inc"
        headline="Built for the African enterprise."
        body="A modern African financial platform. Banking, wealth, markets and advisory, built to international standards."
        primaryCTA={{ to: "/personal", label: "Open an account" }}
        secondaryCTA={{ to: "/group", label: "Meet the Group" }}
        image={HERO.home}
        overlayTint="navy"
      />

      {/* § 02 — Quick actions */}
      <QuickActionStrip actions={QUICK_ACTIONS.general} tint="navy" />

      {/* § 03 — Audience segmentation */}
      <AudienceTiles heading="Banking experiences" />

      {/* § 04 — Stats band — institutional gravitas */}
      <StatsBand />

      {/* § 05 — Featured products */}
      <ProductGrid
        eyebrow="§ 05 · Featured solutions"
        heading="Four ways to start."
        products={featuredProducts}
      />

      {/* § 05 — Group */}
      <GroupRibbon />

      {/* § 06 — Insights */}
      <InsightsRail
        eyebrow="§ 06 · Insights"
        heading="Reading from the desk."
        items={INSIGHTS.slice(0, 3)}
      />

      {/* § 07 — Advisory */}
      <AdvisoryBand />

      {/* § 08 — Trust */}
      <TrustRibbon />
    </PageTransition>
  );
}
