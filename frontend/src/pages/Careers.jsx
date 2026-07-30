import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { BRAND } from "../data/images.js";

/**
 * /careers — the doc has no dedicated careers copy, so this is built around
 * the manifesto values with a "no open roles yet / send your CV" posture.
 */

const VALUES = [
  { name: "Bold", body: "We challenge how banking has always been done. We would rather build the better way than defend the old one." },
  { name: "Insight", body: "We look beyond the headline. Better decisions come from understanding where a person or a business is actually going." },
  { name: "Execution", body: "Ideas are cheap; delivery is the work. We close the day on the day and ship what we promise." },
  { name: "Responsibility", body: "We hold customer money as customer money and name the people accountable for every decision." },
  { name: "Impact", body: "We measure ourselves by lives enriched, not products sold. Impact is the point." },
];

export default function Careers() {
  return (
    <PageTransition>
      <SEO
        title="Careers"
        description="Build your career at Bard Santner Microfinance Bank. We are always looking for exceptional people who want to build a better kind of financial institution."
        path="/careers"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Careers"
        headline="Build a better bank with us."
        body="We're building a digital-first financial institution for the way Africa works. If you want to do the most meaningful work of your career, we'd like to meet you."
        primaryCTA={{ to: "/contact", label: "Get in touch" }}
        image={BRAND.careersTeam}
        overlayTint="navy"
      />

      {/* Why work here — the values */}
      <section className="section bg-milk">
        <div className="container-bank">
          <p className="eyebrow eyebrow-accent mb-4">Why Bard Santner</p>
          <h2 className="display-lg text-navy-600 text-balance max-w-2xl mb-10 md:mb-14">
            The people who build a bank should believe in what it stands for.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="bank-card bank-card-body flex flex-col h-full"
              >
                <span className="w-10 h-10 rounded-full border-2 border-orange-500 text-orange-600 font-display font-bold text-[14px] tabular-nums flex items-center justify-center mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-navy-600 text-[22px] md:text-[24px] mb-3 leading-tight">
                  {v.name}
                </h3>
                <p className="text-[15px] text-bone-600 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply / open roles */}
      <section className="bg-smoke border-t border-bone-200 section">
        <div className="container-bank">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow eyebrow-accent mb-4">Open roles</p>
            <h2 className="display-md text-navy-600 text-balance mb-5">
              We're always looking for exceptional people.
            </h2>
            <p className="text-[16px] md:text-[18px] text-bone-600 leading-relaxed mb-9">
              We don't have public vacancies listed right now, but we hire ahead of need for
              people who are unmistakably right. Send us your CV and a short note on the work
              you want to do, and we'll be in touch when there's a fit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="mailto:careers@bardsantner.com" className="btn btn-primary w-full sm:w-auto justify-center">
                <EnvelopeSimpleIcon size={16} weight="bold" />
                careers@bardsantner.com
              </a>
              <Link to="/contact" className="btn btn-ghost-light w-full sm:w-auto justify-center">
                Contact us
                <ArrowRightIcon size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustRibbon />
    </PageTransition>
  );
}
