import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import GroupRibbon from "../components/GroupRibbon.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";

export default function Group() {
  return (
    <PageTransition>
      <SEO
        title="The Group"
        description="Five institutions, one discipline. Bard Santner Microfinance Bank, Bard Santner Markets, Bard Loans, Bard Santner Golf and Bardiq Journal."
        path="/group"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Group", path: "/group" }])]}
      />
      <PageHero
        eyebrow="§ The Group"
        headline="Five institutions."
        italicTail="One discipline."
        body="The Bard Santner Group is a financial platform, not a single product. Banking sits at the centre. Around it sit four sister institutions that share the standard. Each is named here, individually, with a link to its own page."
        primaryCTA={{ to: "/group/bsmfb", label: "Bard Santner Microfinance Bank" }}
        secondaryCTA={{ to: "/about", label: "About the Group" }}
        image="/images/hero/group.jpg"
        overlayTint="ink"
      />
      <GroupRibbon vertical />
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
