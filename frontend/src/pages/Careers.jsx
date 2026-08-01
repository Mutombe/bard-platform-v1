import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  EnvelopeSimpleIcon,
  HandshakeIcon,
  TrendUpIcon,
  TargetIcon,
  IdentificationBadgeIcon,
} from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { BRAND } from "../data/images.js";

/**
 * /careers — the doc has no dedicated careers copy, so this is built around
 * the manifesto values with a "no open roles yet / send your CV" posture.
 */

const EXPECT = [
  { title: "Real ownership", body: "Small teams, big mandates. You own outcomes, not tickets.", Icon: HandshakeIcon },
  { title: "Room to grow", body: "Learn across the business and move as fast as you can deliver.", Icon: TrendUpIcon },
  { title: "Work that matters", body: "Build a bank that measurably enriches lives, not just products.", Icon: TargetIcon },
  { title: "A named seat", body: "You are accountable and visible here, never an anonymous cog.", Icon: IdentificationBadgeIcon },
];

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
                <span className="w-10 h-10 rounded-full border-2 border-orange-500 text-orange-600 font-display font-bold text-[15px] tabular-nums flex items-center justify-center mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-navy-600 text-[22px] md:text-[24px] mb-3 leading-tight">
                  {v.name}
                </h3>
                <p className="text-[16px] text-bone-600 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What you can expect — icon-row list + arched image (deck layout) */}
      <section className="section bg-milk border-t border-bone-200">
        <div className="container-bank grid grid-cols-12 gap-y-10 md:gap-14 items-center">
          <div className="col-span-12 md:col-span-6 lg:col-span-7">
            <p className="eyebrow eyebrow-accent mb-4">What you can expect</p>
            <h2 className="display-lg text-navy-600 text-balance mb-8 md:mb-10">
              More than a job. A seat at the table.
            </h2>
            <ul className="border-t border-bone-200">
              {EXPECT.map((e) => (
                <motion.li
                  key={e.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-5 py-5 border-b border-bone-200"
                >
                  <span className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
                    <e.Icon size={22} weight="regular" className="text-navy-600" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-navy-600 text-[19px] md:text-[21px] leading-tight">{e.title}</h3>
                    <p className="text-[15px] text-bone-600 leading-snug mt-1">{e.body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-[2rem_2rem_2rem_6rem] overflow-hidden shadow-[var(--shadow-hero)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BRAND.careersSide})`, filter: "saturate(1.02) contrast(1.02)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <span className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <ArrowUpRightIcon size={20} weight="bold" className="text-white" />
              </span>
            </motion.div>
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
            <p className="text-[17px] md:text-[19px] text-bone-600 leading-relaxed mb-9">
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
    </PageTransition>
  );
}
