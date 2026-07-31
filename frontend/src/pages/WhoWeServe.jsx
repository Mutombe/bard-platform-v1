import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
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
        <div className="container-bank grid grid-cols-12 gap-y-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow eyebrow-accent mb-4">{seg.title}</p>
            <span className="block h-[3px] w-14 bg-orange-500 mb-8 md:mb-10" />
            <Link to={seg.cta.to} className="btn btn-outline w-full sm:w-auto justify-center whitespace-normal text-center">
              {seg.cta.label}
              <ArrowRightIcon size={15} weight="bold" />
            </Link>
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

      {/* Segment list — bold colour-blocked tiles (scannable, deck style) */}
      <section className="section bg-smoke border-t border-bone-200">
        <div className="container-bank">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="h-[2px] w-12 bg-orange-500" />
            <h2 className="display-md text-navy-600">{seg.listTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {seg.items.map((it, i) => {
              const variant = i % 3; // 0 orange · 1 navy · 2 white
              const shell =
                variant === 0
                  ? "bg-orange-500 text-white"
                  : variant === 1
                  ? "bg-navy-700 text-white"
                  : "bg-white text-navy-700 border-2 border-bone-200";
              const light = variant === 2;
              return (
                <motion.div
                  key={it}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={seg.cta.to}
                    className={`group block rounded-2xl p-7 md:p-8 h-full min-h-[180px] md:min-h-[210px] flex flex-col justify-between hover:-translate-y-1 transition-transform ${shell}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`font-display font-bold text-[15px] tabular-nums ${light ? "text-orange-500" : "text-white/85"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-colors ${light ? "border-bone-300 group-hover:border-orange-500" : "border-white/45 group-hover:border-white"}`}>
                        <ArrowUpRightIcon size={15} weight="bold" className={light ? "text-navy-500" : "text-white"} />
                      </span>
                    </div>
                    <span className="font-display font-medium text-[21px] md:text-[25px] leading-tight">
                      {it}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing — full-bleed image quote band (deck "Partnerships" layout) */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${seg.image2 || seg.image})`, filter: "saturate(1.05) brightness(0.5) sepia(0.15)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(115deg, rgba(14,9,3,0.92) 0%, rgba(14,9,3,0.72) 55%, rgba(14,9,3,0.5) 100%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
        <div className="relative container-bank py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="block h-[2px] w-12 bg-orange-500 mb-6" />
            <h2 className="display-lg text-white text-balance [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
              {seg.closing || "Whatever your mission, we're ready to help."}
            </h2>
          </div>
        </div>
      </section>

      <AdvisoryBand />
    </PageTransition>
  );
}
