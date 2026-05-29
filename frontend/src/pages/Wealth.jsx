import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import InsightsRail from "../components/InsightsRail.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { productsForAudience } from "../data/products.js";
import { insightsForAudience } from "../data/insights.js";

export default function Wealth() {
  return (
    <PageTransition>
      <SEO
        title="Wealth"
        description="Discretionary wealth management, advisory mandates, structured credit and succession planning. The patient counsel and global asset allocation of an international house, anchored in Africa."
        path="/wealth"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Wealth", path: "/wealth" }])]}
      />
      <PageHero
        eyebrow="§ Wealth"
        headline="Patient capital,"
        italicTail="patient counsel."
        body="Discretionary and advisory portfolios built around the life of the client, not the quarter of the bank. Cross-border allocation, succession architecture, and the rare conversations that decide the next thirty years."
        primaryCTA={{ to: "/products/wealth-management", label: "Wealth Management" }}
        secondaryCTA={{ to: "/contact?audience=private", label: "Meet a wealth banker" }}
        image="/images/hero/wealth.jpg"
        overlayTint="ink"
      />
      <ProductGrid
        eyebrow="§ Wealth products"
        heading="Discretionary, advisory, structured."
        products={productsForAudience("private")}
        showAll={false}
      />
      <InsightsRail
        eyebrow="§ Reading on wealth"
        heading="On succession, on patience, on the long horizon."
        items={insightsForAudience("private")}
      />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
