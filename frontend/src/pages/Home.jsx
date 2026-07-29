import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import QuickActionStrip from "../components/QuickActionStrip.jsx";
import PrivateBankingMarquee from "../components/PrivateBankingMarquee.jsx";
import ScrollSpine from "../components/ScrollSpine.jsx";
import RevealImage from "../components/RevealImage.jsx";
import BgfiCards from "../components/BgfiCards.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO, AUDIENCE_TILE } from "../data/images.js";

/**
 * Home — content from the Bard Santner Website Map (2026-07-28), composed to a
 * Fortune-500 standard per the design-expert audit: one house image grade,
 * numbered section index (prospectus register), restrained orange (reserved
 * for the CTA fill and logo only), layered whites, and a dark closing
 * crescendo. The hero + navy quick-action strip fill exactly one viewport.
 */

const HOME_ACTIONS = [
  { label: "Open an account", path: "/solutions/individuals" },
  { label: "Business banking", path: "/solutions/companies-institutions" },
  { label: "Talk to a banker", path: "/contact" },
  { label: "Online Banking", path: "/login" },
];

const SOLUTION_CARDS = [
  {
    eyebrow: "Personal",
    title: "For Individuals",
    body: "Everyday accounts, saving, borrowing and sending money — simple, secure and always within reach.",
    image: AUDIENCE_TILE.personal,
    to: "/solutions/individuals",
  },
  {
    eyebrow: "Business",
    title: "For Companies & Institutions",
    body: "Cash management, working capital, trade and payments engineered to keep a growing business moving.",
    image: AUDIENCE_TILE.business,
    to: "/solutions/companies-institutions",
  },
  {
    eyebrow: "Wealth",
    title: "For Investors",
    body: "Managed portfolios, treasury and long-term planning — the disciplined way to build wealth that lasts.",
    image: AUDIENCE_TILE.private,
    to: "/solutions/investors",
  },
];

const CAPABILITIES = [
  "Open an account in minutes",
  "Apply for finance online",
  "Move money securely",
  "Manage investments",
  "Pay suppliers",
  "Send money across borders",
  "Track your finances in real time",
];

const AUDIENCES = [
  { label: "Individuals", to: "/solutions/individuals" },
  { label: "Businesses", to: "/solutions/companies-institutions" },
  { label: "Investors", to: "/solutions/investors" },
  { label: "Farmers", to: "/who-we-serve/agriculture" },
  { label: "Institutions", to: "/who-we-serve/financial-institutions" },
  { label: "International & diaspora", to: "/who-we-serve/diaspora-international" },
];

// Numbered section eyebrow — the "prospectus index" that gives the page a
// considered, institutional through-line.
function Index({ n, label, onDark = false }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${onDark ? "text-white/80" : "text-navy-500"}`}>
      <span className={`font-display not-italic ${onDark ? "text-orange-400" : "text-orange-600"}`}>{n}</span>
      <span className={`w-6 h-px ${onDark ? "bg-orange-400/70" : "bg-orange-500/60"}`} />
      {label}
    </p>
  );
}

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
};

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="A digital-first bank, built for the way Africa works"
        description="Bard Santner Microfinance Bank. Banking that helps people and businesses move forward — simple enough for everyday life, powerful enough for a growing business."
        path="/"
        keywords={[
          "Bard Santner", "Microfinance Bank", "BSMFB", "digital banking Zimbabwe",
          "business banking", "private banking", "diaspora banking", "SME finance Africa",
        ]}
        jsonLd={[organizationJsonLd(), websiteJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }])]}
      />

      <ScrollSpine />

      {/* ── ONE-SCREEN HERO ────────────────────────────────────────── */}
      <div className="flex flex-col min-h-[calc(100svh-108px)] md:min-h-[calc(100svh-124px)]">
        <section className="relative flex-1 flex overflow-hidden bg-navy-900">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />
          <RevealImage image={HERO.home} onMount className="absolute inset-0 bg-cover bg-center" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-navy-950/95 via-navy-900/60 to-navy-950/20" />
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-navy-950/92 via-navy-950/50 to-navy-950/30" />

          <div className="relative container-bank flex flex-col justify-center py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <p className="eyebrow eyebrow-on-dark mb-6 md:mb-7">Bard Santner Microfinance Bank</p>
              <h1 className="display-hero text-white text-balance">
                Banking that helps you move forward.
              </h1>
              <p className="mt-7 md:mt-9 text-white/85 max-w-xl text-[17px] md:text-[20px] leading-relaxed">
                A digital-first bank built for the way Africa works — simple enough for
                everyday life, powerful enough for a growing business.
              </p>
              <div className="mt-9 md:mt-11 flex flex-col sm:flex-row gap-4">
                <Link to="/solutions/individuals" className="btn btn-hero-primary w-full sm:w-auto justify-center">
                  Open an account
                  <ArrowRightIcon size={16} weight="bold" />
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

      {/* ── 01 · Why we exist — top-aligned editorial split ────────── */}
      <section data-spine="Why we exist" data-spine-n="01" className="section bg-milk">
        <div className="container-bank">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
            <motion.div {...reveal} className="col-span-12 md:col-span-6">
              <Index n="01" label="Why we exist" />
              <h2 className="display-xl text-navy-600 text-balance mt-6">
                Banking should move with you — not the other way around.
              </h2>
            </motion.div>
            <motion.p {...reveal} className="col-span-12 md:col-span-5 md:col-start-8 text-[17px] md:text-[19px] text-bone-600 leading-relaxed">
              For too long, banking expected people to fit around its systems — long queues,
              slow approvals, endless paperwork. We set out to build a different kind of
              institution: one that pairs trusted financial expertise with modern technology
              to make banking simpler, faster and genuinely more accessible.
            </motion.p>
          </div>
          <div className="hairline mt-14 md:mt-20" />
        </div>
      </section>

      {/* ── 02 · Built around people — image-led cards ─────────────── */}
      <section data-spine="Built around people" data-spine-n="02" className="section bg-cloud border-t border-bone-200">
        <div className="container-bank">
          <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <Index n="02" label="Built around people" />
              <h2 className="display-lg text-navy-600 text-balance mt-6">
                Built around people, not products.
              </h2>
            </div>
            <p className="text-[16px] md:text-[17px] text-bone-600 leading-relaxed max-w-sm">
              Every customer has a different goal. Choose the context your next conversation
              belongs in.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SOLUTION_CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={c.to} className="bank-card group flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <RevealImage
                      image={c.image}
                      className="aspect-[5/4] bg-cover bg-center bg-bone-200 transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="bank-card-body lg:!p-12 flex flex-col flex-1">
                    <p className="eyebrow eyebrow-accent mb-4">{c.eyebrow}</p>
                    <h3 className="font-display text-navy-600 text-[24px] md:text-[26px] leading-tight mb-4">
                      {c.title}
                    </h3>
                    <p className="text-[15.5px] text-bone-600 leading-relaxed flex-1">{c.body}</p>
                    <span className="mt-8 inline-flex items-center gap-2.5 text-[15px] font-medium text-navy-600 group-hover:text-orange-600 transition-colors">
                      Explore {c.title.replace("For ", "")}
                      <ArrowRightIcon size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Private Banking — the dark card marquee ────────────────── */}
      <PrivateBankingMarquee />

      {/* ── 03 · Digital-first — capabilities split ────────────────── */}
      <section data-spine="Digital-first" data-spine-n="03" className="section bg-milk border-t border-bone-200">
        <div className="container-bank grid grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div {...reveal} className="col-span-12 md:col-span-5">
            <Index n="03" label="Digital-first" />
            <h2 className="display-lg text-navy-600 text-balance mt-6">
              Digital where it matters. Human when it counts.
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] text-bone-600 leading-relaxed">
              Technology should remove complexity, not create it. Bank whenever and wherever
              you choose — and whenever you need advice, our people are ready to help.
            </p>
            <Link to="/login" className="btn btn-navy mt-9">
              Explore Online Banking
              <ArrowRightIcon size={16} weight="bold" />
            </Link>
          </motion.div>
          <motion.ul {...reveal} className="col-span-12 md:col-span-6 md:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
            {CAPABILITIES.map((c) => (
              <li key={c} className="flex items-center gap-4 py-4 border-b border-bone-200 text-[16px] md:text-[17px] text-navy-700">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0" />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── 04 · Insights — from BGFI ──────────────────────────────── */}
      <section data-spine="Insights" data-spine-n="04" className="section bg-cloud border-t border-bone-200">
        <div className="container-bank">
          <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <Index n="04" label="Insights" />
              <h2 className="display-lg text-navy-600 text-balance mt-6">
                From the Bard Global Finance Institute.
              </h2>
            </div>
            <a
              href="https://bgfi.global"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-navy-600 hover:text-orange-600 transition-colors"
            >
              All research on BGFI
              <ArrowUpRightIcon size={15} weight="bold" />
            </a>
          </motion.div>

          <BgfiCards />
        </div>
      </section>

      {/* ── 05 · Built for Africa — ruled audience index ───────────── */}
      <section data-spine="Built for Africa" data-spine-n="05" data-spine-dark="true" className="bg-navy-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
        <div className="container-bank py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10 md:gap-16">
            <motion.div {...reveal} className="col-span-12 md:col-span-5">
              <Index n="05" label="Built for Africa" onDark />
              <h2 className="display-lg text-white text-balance mt-6">Built for the way Africa works.</h2>
              <p className="mt-6 text-[17px] md:text-[19px] text-white/80 leading-relaxed">
                Entrepreneurs are building businesses. Families are creating wealth across
                generations. Trade is expanding across borders. We build for the people
                driving that ambition.
              </p>
            </motion.div>
            <motion.div {...reveal} className="col-span-12 md:col-span-6 md:col-start-7">
              <ul className="border-t border-white/12">
                {AUDIENCES.map((a) => (
                  <li key={a.label}>
                    <Link
                      to={a.to}
                      className="group flex items-center justify-between gap-4 py-5 border-b border-white/12 text-white/90 hover:text-white transition-colors"
                    >
                      <span className="font-display text-[19px] md:text-[21px]">{a.label}</span>
                      <ArrowRightIcon
                        size={16}
                        weight="bold"
                        className="text-white/40 group-hover:text-orange-400 group-hover:translate-x-1 transition-all shrink-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA — the Advisory band carries "Looking ahead" ── */}
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
