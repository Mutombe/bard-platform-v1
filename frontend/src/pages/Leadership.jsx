import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { LEADERSHIP } from "../data/leadership.js";

export default function Leadership() {
  return (
    <PageTransition>
      <SEO
        title="Leadership"
        description="The named leadership of Bard Santner Markets Inc. CEO Senziwani Sikhosana and Executive Directors Alfred Mthimkhulu and Tatenda Hungwe."
        path="/leadership"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Leadership", path: "/leadership" }])]}
      />
      <PageHero
        eyebrow="§ Leadership"
        headline="A bank is signed"
        italicTail="by its people."
        body="The leadership of Bard Santner Markets Inc. Named, accountable, and reachable. Each profile lists what they lead and the kind of conversation they take."
        image="/images/hero/leadership.jpg"
        overlayTint="navy"
        variant="editorial"
      />

      <section className="bg-white section-lg">
        <div className="container-bank">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {LEADERSHIP.map((p) => (
              <article key={p.slug} className="bank-card p-0">
                <div
                  className="aspect-[4/5] bg-cover bg-center bg-[color:var(--color-bone-200)]"
                  style={{ backgroundImage: p.image ? `url(${p.image})` : undefined }}
                />
                <div className="p-6 md:p-7">
                  <p className="eyebrow eyebrow-accent mb-3">{p.short_role}</p>
                  <h2 className="font-display text-[22px] text-[color:var(--color-navy-600)] mb-1">{p.name}</h2>
                  <p className="text-[13px] text-[color:var(--color-bone-500)] mb-5">{p.role}</p>
                  <p className="text-[14.5px] text-[color:var(--color-bone-600)] leading-relaxed">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
