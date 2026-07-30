import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import NotFound from "./NotFound.jsx";

import { findSolution } from "../data/solutions.js";

/**
 * /solutions/:slug — a client-outcome solutions page (For Companies and
 * Institutions, For Individuals, For Investors). Renders from
 * /data/solutions.js: hero, intro, then a stack of capability blocks —
 * each a heading + line + "Solutions include" chip list — closing on the
 * segment's own CTA.
 */
export default function Solution() {
  const { slug } = useParams();
  const s = findSolution(slug);
  if (!s) return <NotFound />;

  return (
    <PageTransition>
      <SEO
        title={s.title}
        description={s.intro[0]}
        path={`/solutions/${s.slug}`}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: s.title, path: `/solutions/${s.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={s.eyebrow}
        headline={s.headline}
        body={s.intro[0]}
        primaryCTA={s.cta}
        image={s.image}
        overlayTint="navy"
      />

      {/* Intro */}
      <section className="section bg-milk">
        <div className="container-bank max-w-3xl">
          <p className="eyebrow eyebrow-accent mb-5">{s.title}</p>
          <div className="space-y-5">
            {s.intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-navy-600 text-[22px] md:text-[26px] leading-snug text-balance"
                    : "text-bone-600 text-[16px] md:text-[17px] leading-relaxed"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Capability blocks */}
      <section className="bg-smoke border-t border-bone-200">
        <div className="container-bank py-14 md:py-20">
          <div className="flex flex-col divide-y divide-bone-200">
            {s.blocks.map((b, i) => (
              <motion.div
                key={b.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-9 md:py-12 first:pt-0"
              >
                <div className="md:col-span-5">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display text-navy-400 text-[15px] font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-navy-600 text-[22px] md:text-[26px] leading-tight">
                      {b.heading}
                    </h2>
                  </div>
                  <p className="text-bone-600 text-[15px] md:text-[16px] leading-relaxed md:pr-6">
                    {b.body}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p className="eyebrow mb-4">Solutions include</p>
                  <div className="flex flex-wrap gap-2.5">
                    {b.items.map((it) => (
                      <span
                        key={it}
                        className="inline-flex items-center rounded-md bg-white border border-bone-200 px-3.5 py-2 text-[14px] font-medium text-navy-700"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
