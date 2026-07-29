import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import QuickActionStrip from "../components/QuickActionStrip.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";

/**
 * Home — content and direction from the Bard Santner Website Map (2026-07-28).
 *
 * The hero and the navy quick-action strip together fill exactly one viewport
 * (minus the nav), with the strip anchored to the bottom edge on first paint —
 * all hero content visible without scrolling. Below the fold, the bank's story
 * unfolds in the doc's own sequence.
 */

// Quick-action strip — high-intent entry points, all to live pages.
const HOME_ACTIONS = [
  { label: "Open an account", path: "/solutions/individuals" },
  { label: "Business banking", path: "/solutions/companies-institutions" },
  { label: "Talk to a banker", path: "/contact" },
  { label: "Online Banking", path: "/login" },
];

// "Digital where it matters" — the everyday capabilities from the doc.
const CAPABILITIES = [
  "Open an account in minutes",
  "Apply for finance online",
  "Move money securely",
  "Manage investments",
  "Pay suppliers",
  "Send money across borders",
  "Track your finances in real time",
];

// "Built for the way Africa works" — who we design for, linked.
const AUDIENCES = [
  { label: "Individuals", to: "/solutions/individuals" },
  { label: "Businesses", to: "/solutions/companies-institutions" },
  { label: "Investors", to: "/solutions/investors" },
  { label: "Farmers", to: "/who-we-serve/agriculture" },
  { label: "Institutions", to: "/who-we-serve/financial-institutions" },
  { label: "International & diaspora", to: "/who-we-serve/diaspora-international" },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="A digital-first bank, built for the way Africa works"
        description="Bard Santner Microfinance Bank. Banking that helps people and businesses move forward — simple enough for everyday life, powerful enough for growing business."
        path="/"
        keywords={[
          "Bard Santner", "Microfinance Bank", "BSMFB", "digital banking Zimbabwe",
          "business banking", "diaspora banking", "SME finance Africa",
        ]}
        jsonLd={[organizationJsonLd(), websiteJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }])]}
      />

      {/* ── ONE-SCREEN HERO — hero + navy quick-action strip fill the viewport
             below the nav; the strip's bottom edge anchors to the screen bottom
             on first paint, all hero content visible without scrolling. ── */}
      <div className="flex flex-col min-h-[calc(100svh-108px)] md:min-h-[calc(100svh-124px)]">
        <section className="relative flex-1 flex overflow-hidden bg-navy-900">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO.home})`, filter: "saturate(0.7) brightness(0.82) contrast(1.05)" }}
          />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-navy-950/95 via-navy-900/55 to-transparent" />
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-navy-950/90 via-navy-950/45 to-navy-950/25" />

          <div className="relative container-bank flex flex-col justify-center py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <p className="eyebrow eyebrow-on-dark mb-5 md:mb-6">Bard Santner Microfinance Bank</p>
              <h1 className="display-hero text-white text-balance">
                Banking that helps you move forward.
              </h1>
              <p className="mt-6 md:mt-8 text-white/85 max-w-xl text-[17px] md:text-[20px] leading-relaxed">
                A digital-first bank built for the way Africa works — simple enough for
                everyday life, powerful enough for a growing business.
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
                <Link to="/solutions/individuals" className="btn btn-hero-primary w-full sm:w-auto justify-center">
                  Open an account
                  <ArrowRightIcon size={15} weight="bold" />
                </Link>
                <Link to="/contact" className="btn btn-hero-ghost w-full sm:w-auto justify-center">
                  Talk to us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <QuickActionStrip actions={HOME_ACTIONS} tint="navy" />
      </div>

      {/* ── Banking should move with you ── */}
      <section className="section bg-milk">
        <div className="container-bank grid grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div {...reveal} className="col-span-12 md:col-span-5">
            <p className="eyebrow eyebrow-accent mb-4">Why we exist</p>
            <h2 className="display-lg text-navy-600 text-balance">Banking should move with you.</h2>
          </motion.div>
          <motion.div {...reveal} className="col-span-12 md:col-span-7 max-w-2xl space-y-5 text-[16px] md:text-[18px] text-bone-600 leading-relaxed">
            <p>
              For too long, banking has expected people to fit around its systems. Long
              queues. Slow approvals. Endless paperwork. We believed there was a better way.
            </p>
            <p>
              So we set out to build a different kind of financial institution — one that
              combines trusted financial expertise with modern technology to make banking
              simpler, faster and more accessible for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Built around people, not products ── */}
      <section className="section bg-smoke border-y border-bone-200">
        <div className="container-bank">
          <motion.div {...reveal} className="max-w-2xl mb-10 md:mb-14">
            <p className="eyebrow eyebrow-accent mb-4">Built around people</p>
            <h2 className="display-lg text-navy-600 text-balance">
              Built around people, not products.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-bone-600 leading-relaxed">
              Every customer has a different goal. Instead of offering the same solution to
              everyone, we design banking around what matters most to you. Choose where your
              next conversation belongs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {[
              { title: "For Individuals", body: "Everyday accounts, saving, borrowing and sending money — always within reach.", to: "/solutions/individuals" },
              { title: "For Companies and Institutions", body: "Cash management, capital, trade and payments that keep a business moving.", to: "/solutions/companies-institutions" },
              { title: "For Investors", body: "Managed portfolios, treasury and long-term planning to build lasting wealth.", to: "/solutions/investors" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={c.to} className="bank-card bank-card-body flex flex-col h-full group">
                  <h3 className="font-display text-navy-600 text-[22px] md:text-[24px] leading-tight mb-3">
                    {c.title}
                  </h3>
                  <p className="text-[15px] text-bone-600 leading-relaxed flex-1">{c.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-navy-600 group-hover:text-orange-600 transition-colors">
                    Explore
                    <ArrowRightIcon size={13} weight="bold" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital where it matters. Human when it counts. ── */}
      <section className="section bg-milk">
        <div className="container-bank grid grid-cols-12 gap-8 md:gap-12 items-start">
          <motion.div {...reveal} className="col-span-12 md:col-span-5">
            <p className="eyebrow eyebrow-accent mb-4">Digital-first</p>
            <h2 className="display-lg text-navy-600 text-balance">
              Digital where it matters. Human when it counts.
            </h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-bone-600 leading-relaxed">
              Technology should remove complexity, not create it. Bank whenever and wherever
              you choose — and whenever you need advice, our people are ready to help.
            </p>
          </motion.div>
          <motion.ul {...reveal} className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {CAPABILITIES.map((c) => (
              <li key={c} className="flex items-center gap-3 py-2.5 border-b border-bone-200 text-[15px] md:text-[16px] text-navy-700">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Built for the way Africa works ── */}
      <section className="section bg-navy-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
        <div className="container-bank">
          <motion.div {...reveal} className="max-w-2xl mb-9 md:mb-12">
            <p className="eyebrow eyebrow-on-dark mb-4">Built for Africa</p>
            <h2 className="display-lg text-white text-balance">Built for the way Africa works.</h2>
            <p className="mt-5 text-[16px] md:text-[18px] text-white/80 leading-relaxed">
              Entrepreneurs are building businesses. Families are creating wealth across
              generations. Trade is expanding across borders. We're developing solutions for
              the people driving that ambition.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {AUDIENCES.map((a) => (
              <Link
                key={a.label}
                to={a.to}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/25 hover:border-white hover:bg-white/[0.06] px-5 py-3 text-[14.5px] font-medium text-white transition-colors"
              >
                {a.label}
                <ArrowRightIcon size={13} weight="bold" className="opacity-60" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Looking ahead + final CTA ── */}
      <section className="section bg-milk border-t-2 border-orange-500">
        <div className="container-bank">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="eyebrow eyebrow-accent mb-4">Looking ahead</p>
            <h2 className="display-xl text-navy-600 text-balance">
              Let's build your future together.
            </h2>
            <p className="mt-6 text-[17px] md:text-[20px] text-bone-600 leading-relaxed max-w-2xl">
              Our goal isn't simply to become another bank. It's to become the financial
              partner people trust at every stage of life and every stage of business.
              Open an account, start a conversation, and build your future with Bard Santner.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/solutions/individuals" className="btn btn-primary w-full sm:w-auto justify-center">
                Open an account
                <ArrowRightIcon size={15} weight="bold" />
              </Link>
              <Link to="/contact" className="btn btn-ghost-light w-full sm:w-auto justify-center">
                Start a conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
