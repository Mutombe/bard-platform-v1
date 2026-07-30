import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

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

      {/* Intro — editorial split: side label + lead statement */}
      <section className="section bg-milk">
        <div className="container-bank grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow eyebrow-accent mb-4">{s.title}</p>
            <span className="block h-[3px] w-14 bg-orange-500" />
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5">
            {s.intro.map((p, i) => (
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

      {/* Capability blocks — premium bold cards */}
      <section className="section bg-cloud border-t border-bone-200">
        <div className="container-bank">
          <p className="eyebrow eyebrow-accent mb-4">What's included</p>
          <h2 className="display-lg text-navy-600 text-balance max-w-2xl mb-10 md:mb-14">
            Everything you need, in one place.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {s.blocks.map((b, i) => (
              <motion.div
                key={b.heading}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group bank-card bank-card-body lg:!p-10 flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-bold text-orange-500 text-[34px] leading-none tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-10 h-10 rounded-full border-2 border-bone-300 group-hover:border-orange-500 flex items-center justify-center transition-colors">
                    <ArrowUpRightIcon size={16} weight="bold" className="text-navy-500 group-hover:text-orange-500 transition-colors" />
                  </span>
                </div>
                <h3 className="font-display text-navy-600 text-[22px] md:text-[24px] font-medium leading-tight mb-4">
                  {b.heading}
                </h3>
                <p className="text-bone-600 text-[15px] md:text-[16px] leading-relaxed mb-7">
                  {b.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2.5">
                  {b.items.map((it) => (
                    <span
                      key={it}
                      className="inline-flex items-center rounded-full border-2 border-bone-300 bg-white px-4 py-2 text-[13.5px] font-medium text-navy-700"
                    >
                      {it}
                    </span>
                  ))}
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
