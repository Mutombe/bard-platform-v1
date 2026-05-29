import PageTransition from "../../components/PageTransition.jsx";
import PageHero from "../../components/PageHero.jsx";
import QuickActionStrip from "../../components/QuickActionStrip.jsx";
import ProductGrid from "../../components/ProductGrid.jsx";
import InsightsRail from "../../components/InsightsRail.jsx";
import AdvisoryBand from "../../components/AdvisoryBand.jsx";
import TrustRibbon from "../../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../../components/SEO.jsx";

import { QUICK_ACTIONS } from "../../data/quickActions.js";
import { productsForAudience } from "../../data/products.js";
import { insightsForAudience } from "../../data/insights.js";
import { findAudience } from "../../data/audiences.js";

export default function Personal() {
  const audience = findAudience("personal");
  return (
    <PageTransition>
      <SEO
        title="Personal Banking"
        description="Current accounts, savings, home loans and the day-to-day banking that should never get in the way of the life it serves. Personal banking, on the standards of the international house."
        path="/personal"
        keywords={["personal banking", "current account", "savings", "home loan", "mortgage", "Bard Santner Personal"]}
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Personal", path: "/personal" }])]}
      />
      <PageHero
        eyebrow={audience.eyebrow}
        headline="Everyday banking,"
        italicTail="built around your life."
        body="An everyday account that doesn't punish you for living. Savings that compound on real terms. A home loan with a banker who answers the phone. Personal banking, as it ought to be."
        primaryCTA={{ to: "/products/everyday-account", label: "Open an Everyday Account" }}
        secondaryCTA={{ to: "/contact?audience=personal", label: "Speak to a personal banker" }}
        image="/images/audience/personal-hero.jpg"
        overlayTint="ink"
      />
      <QuickActionStrip actions={QUICK_ACTIONS.personal} tint="navy" />
      <ProductGrid
        eyebrow="§ Personal products"
        heading="The accounts and credit a household actually needs."
        products={productsForAudience("personal")}
        showAll={false}
      />
      <InsightsRail
        eyebrow="§ Reading for personal clients"
        heading="From our desk to your inbox."
        items={insightsForAudience("personal")}
      />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
