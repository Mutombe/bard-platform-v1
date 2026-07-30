import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import NotFound from "./NotFound.jsx";

import { findSegment } from "../data/whoWeServe.js";

/**
 * /who-we-serve/:slug — a client-segment page (Diaspora, Business/Industry/
 * Mining, Agriculture, Financial Institutions, Technology, Public, Non-Profit).
 * Renders from /data/whoWeServe.js: hero, intro, the segment's list of
 * industries / capabilities as a tile grid, an optional closing line, and
 * the segment's CTA.
 */
export default function WhoWeServe() {
  const { slug } = useParams();
  const seg = findSegment(slug);
  if (!seg) return <NotFound />;

  return (
    <PageTransition>
      <SEO
        title={seg.title}
        description={seg.intro[0]}
        path={`/who-we-serve/${seg.slug}`}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: seg.title, path: `/who-we-serve/${seg.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Who we serve"
        headline={seg.headline}
        body={seg.intro[0]}
        primaryCTA={seg.cta}
        image={seg.image}
        overlayTint="navy"
      />

      {/* Intro — editorial split: side label + lead statement */}
      <section className="section bg-milk">
        <div className="container-bank grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow eyebrow-accent mb-4">{seg.title}</p>
            <span className="block h-[3px] w-14 bg-orange-500" />
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5">
            {seg.intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-navy-600 text-[24px] md:text-[31px] leading-snug text-balance"
                    : "text-bone-600 text-[16px] md:text-[18px] leading-relaxed"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Segment list — tile grid */}
      <section className="bg-smoke border-t border-bone-200">
        <div className="container-bank py-14 md:py-20">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="h-[2px] w-12 bg-orange-500" />
            <h2 className="display-md text-navy-600">{seg.listTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-bone-200">
            {seg.items.map((it, i) => (
              <motion.div
                key={it}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-4 border-b border-r border-bone-200 bg-white p-6 md:p-7 hover:bg-orange-50/40 transition-colors"
              >
                <span className="w-9 h-9 rounded-full border-2 border-orange-500 text-orange-600 font-display font-bold text-[13px] tabular-nums flex items-center justify-center shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-navy-600 text-[17px] md:text-[19px] leading-snug pt-1.5">
                  {it}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement (the Advisory band below carries the CTA) */}
      <section className="bg-milk">
        <div className="container-bank section text-center">
          <h2 className="display-md text-navy-600 max-w-2xl mx-auto text-balance">
            {seg.closing || "Whatever your mission, we're ready to help."}
          </h2>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
