import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import QuickActionStrip from "../components/QuickActionStrip.jsx";
import PrivateBankingMarquee from "../components/PrivateBankingMarquee.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO, AUDIENCE_TILE, INSIGHT } from "../data/images.js";

/**
 * Home — content and direction from the Bard Santner Website Map (2026-07-28),
 * composed as a Fortune-500-grade landing: layered whites, generous air,
 * image-led cards, a furnished Private Banking feature, and a BGFI research
 * rail. The hero + navy quick-action strip fill exactly one viewport, the
 * strip anchored to the bottom edge on first paint.
 */

const HOME_ACTIONS = [
  { label: "Open an account", path: "/solutions/individuals" },
  { label: "Business banking", path: "/solutions/companies-institutions" },
  { label: "Talk to a banker", path: "/contact" },
  { label: "Online Banking", path: "/login" },
];

const SOLUTION_CARDS = [
  {
    index: "01",
    eyebrow: "Personal",
    title: "For Individuals",
    body: "Everyday accounts, saving, borrowing and sending money — simple, secure and always within reach.",
    image: AUDIENCE_TILE.personal,
    to: "/solutions/individuals",
  },
  {
    index: "02",
    eyebrow: "Business",
    title: "For Companies & Institutions",
    body: "Cash management, working capital, trade and payments engineered to keep a growing business moving.",
    image: AUDIENCE_TILE.business,
    to: "/solutions/companies-institutions",
  },
  {
    index: "03",
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

const INSIGHTS_FEED = [
  {
    category: "Finance Africa Quarterly",
    title: "Africa's investment landscape, quarter by quarter.",
    blurb: "In-depth analysis of African economies, financial markets and the emerging opportunities executives and investors are watching.",
    image: INSIGHT["africa-and-the-cross-border-rail"],
    href: "https://bgfi.global/publications/finance-africa-quarterly",
  },
  {
    category: "Research",
    title: "The corridors moving African trade.",
    blurb: "Why the rails carrying goods between the continent's ports will be African-built within the decade — and what that unlocks.",
    image: INSIGHT["treasury-and-the-discipline-of-the-end-of-day"],
    href: "https://bgfi.global",
  },
  {
    category: "Market Intelligence",
    title: "The quiet case for a domestic deposit base.",
    blurb: "Wholesale funding looks cheaper on a spreadsheet and crueller in a crisis. An argument for the patient work of a real retail book.",
    image: INSIGHT["the-quiet-case-for-a-deposit-base"],
    href: "https://bgfi.global",
  },
];

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

      {/* ── ONE-SCREEN HERO ────────────────────────────────────────── */}
      <div className="flex flex-col min-h-[calc(100svh-108px)] md:min-h-[calc(100svh-124px)]">
        <section className="relative flex-1 flex overflow-hidden bg-navy-900">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO.home})`, filter: "saturate(0.7) brightness(0.82) contrast(1.05)" }}
          />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-navy-950/95 via-navy-900/55 to-transparent" />
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-navy-950/90 via-navy-950/45 to-navy-950/25" />

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

      {/* ── STATEMENT — Banking should move with you ───────────────── */}
      <section className="section bg-milk">
        <div className="container-bank">
          <motion.div {...reveal} className="max-w-4xl">
            <p className="eyebrow eyebrow-accent mb-6">Why we exist</p>
            <h2 className="display-xl text-navy-600 text-balance">
              Banking should move with you — not the other way around.
            </h2>
          </motion.div>
          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-8 md:gap-12">
            <motion.p {...reveal} className="col-span-12 md:col-span-6 md:col-start-7 text-[17px] md:text-[19px] text-bone-600 leading-relaxed">
              For too long, banking expected people to fit around its systems — long queues,
              slow approvals, endless paperwork. We set out to build a different kind of
              institution: one that pairs trusted financial expertise with modern technology
              to make banking simpler, faster and genuinely more accessible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS CARDS — image-led, premium ───────────────────── */}
      <section className="section bg-cloud border-y border-bone-200">
        <div className="container-bank">
          <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-accent mb-5">Built around people</p>
              <h2 className="display-lg text-navy-600 text-balance">
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
                    <div
                      className="aspect-[5/4] bg-cover bg-center bg-bone-200 transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url(${c.image})`, filter: "saturate(0.85) brightness(0.96)" }}
                    />
                    <span className="absolute top-5 left-5 font-display text-white/90 text-[15px] tracking-wide drop-shadow">
                      {c.index}
                    </span>
                  </div>
                  <div className="h-[3px] bg-orange-500" />
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

      {/* ── PRIVATE BANKING — the Lloyds-canonical dark card marquee ── */}
      <PrivateBankingMarquee />

      {/* ── DIGITAL — capabilities, split ──────────────────────────── */}
      <section className="section bg-milk">
        <div className="container-bank grid grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div {...reveal} className="col-span-12 md:col-span-5">
            <p className="eyebrow eyebrow-accent mb-5">Digital-first</p>
            <h2 className="display-lg text-navy-600 text-balance">
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
                <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                {c}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── INSIGHTS — from BGFI ───────────────────────────────────── */}
      <section className="section bg-cloud border-y border-bone-200">
        <div className="container-bank">
          <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-accent mb-5">Insights</p>
              <h2 className="display-lg text-navy-600 text-balance">
                From the Bard Global Finance Institute.
              </h2>
            </div>
            <a
              href="https://bgfi.global"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-orange-600 hover:text-orange-700 transition-colors"
            >
              All research on BGFI
              <ArrowUpRightIcon size={15} weight="bold" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {INSIGHTS_FEED.map((a, i) => (
              <motion.a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bank-card group flex flex-col h-full"
              >
                <div className="overflow-hidden">
                  <div
                    className="aspect-[16/10] bg-cover bg-center bg-bone-200 transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url(${a.image})`, filter: "saturate(0.85) brightness(0.95)" }}
                  />
                </div>
                <div className="h-[3px] bg-orange-500" />
                <div className="bank-card-body flex flex-col flex-1">
                  <p className="eyebrow eyebrow-accent mb-4">{a.category}</p>
                  <h3 className="font-display text-navy-600 text-[21px] md:text-[23px] leading-tight mb-4">
                    {a.title}
                  </h3>
                  <p className="text-[15px] text-bone-600 leading-relaxed flex-1">{a.blurb}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-medium text-navy-600 group-hover:text-orange-600 transition-colors">
                    Read on BGFI
                    <ArrowUpRightIcon size={14} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR AFRICA — audience links ──────────────────────── */}
      <section className="section bg-navy-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
        <div className="container-bank">
          <motion.div {...reveal} className="max-w-2xl mb-10 md:mb-14">
            <p className="eyebrow eyebrow-on-dark mb-5">Built for Africa</p>
            <h2 className="display-lg text-white text-balance">Built for the way Africa works.</h2>
            <p className="mt-6 text-[17px] md:text-[19px] text-white/80 leading-relaxed">
              Entrepreneurs are building businesses. Families are creating wealth across
              generations. Trade is expanding across borders. We're developing solutions for
              the people driving that ambition.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-3.5 md:gap-4">
            {AUDIENCES.map((a) => (
              <Link
                key={a.label}
                to={a.to}
                className="inline-flex items-center gap-3 rounded-full border border-white/25 hover:border-white hover:bg-white/[0.06] px-7 py-4 text-[15px] font-medium text-white transition-colors"
              >
                {a.label}
                <ArrowRightIcon size={14} weight="bold" className="opacity-60" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOOKING AHEAD + FINAL CTA ──────────────────────────────── */}
      <section className="section bg-milk border-t-2 border-orange-500">
        <div className="container-bank">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="eyebrow eyebrow-accent mb-5">Looking ahead</p>
            <h2 className="display-xl text-navy-600 text-balance">
              Let's build your future together.
            </h2>
            <p className="mt-7 text-[18px] md:text-[21px] text-bone-600 leading-relaxed max-w-2xl">
              Our goal isn't simply to become another bank. It's to become the financial
              partner people trust at every stage of life and every stage of business. Open
              an account, start a conversation, and build your future with Bard Santner.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/solutions/individuals" className="btn btn-primary w-full sm:w-auto justify-center">
                Open an account
                <ArrowRightIcon size={16} weight="bold" />
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
