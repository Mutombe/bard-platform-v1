import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";

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

      {/* Intro */}
      <section className="section bg-milk">
        <div className="container-bank max-w-3xl">
          <p className="eyebrow eyebrow-accent mb-5">{seg.title}</p>
          <div className="space-y-5">
            {seg.intro.map((p, i) => (
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

      {/* Segment list — tile grid */}
      <section className="bg-smoke border-t border-bone-200">
        <div className="container-bank py-14 md:py-20">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="h-[2px] w-12 bg-orange-500" />
            <h2 className="display-md text-navy-600">{seg.listTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {seg.items.map((it, i) => (
              <motion.div
                key={it}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="bank-card bank-card-body flex items-center justify-between gap-4"
              >
                <span className="font-display text-navy-600 text-[17px] md:text-[19px] leading-tight">
                  {it}
                </span>
                <span className="w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
                  <ArrowRightIcon size={14} weight="bold" className="text-navy-600" />
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
