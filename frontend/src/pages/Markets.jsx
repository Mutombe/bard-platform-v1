import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import InsightsRail from "../components/InsightsRail.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { PRODUCTS } from "../data/products.js";
import { insightsForAudience } from "../data/insights.js";

export default function Markets() {
  const marketsProducts = PRODUCTS.filter((p) =>
    ["Markets", "Treasury", "Capital markets", "Trade"].includes(p.category)
  );
  return (
    <PageTransition>
      <SEO
        title="Markets & Treasury"
        description="Treasury services, FX, debt capital markets origination and trade finance. The desk-grade banking infrastructure on which a serious treasurer runs an institution."
        path="/markets"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Markets", path: "/markets" }])]}
      />
      <PageHero
        eyebrow="§ Markets"
        headline="Treasury. Trade. Markets."
        italicTail="From the desk that runs the book."
        body="Liquidity, FX, custody, payments, bond origination and the long counterparty relationships on which institutional banking is actually built. Originated with care. Distributed with discipline."
        primaryCTA={{ to: "/products/treasury-services", label: "Treasury Services" }}
        secondaryCTA={{ to: "/contact?audience=institutional", label: "Speak to the desk" }}
        image="/images/hero/markets.jpg"
        overlayTint="navy"
      />
      <ProductGrid
        eyebrow="§ Markets and treasury"
        heading="Originated, syndicated, settled."
        products={marketsProducts}
        showAll={false}
      />
      <InsightsRail
        eyebrow="§ Reading from the desk"
        heading="Market commentary and the long view."
        items={insightsForAudience("institutional")}
      />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
