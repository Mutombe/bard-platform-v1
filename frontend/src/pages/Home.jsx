import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowUpRightIcon, ArrowSquareOutIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import QuickActionStrip from "../components/QuickActionStrip.jsx";
import PrivateBankingMarquee from "../components/PrivateBankingMarquee.jsx";
import RevealImage from "../components/RevealImage.jsx";
import Typewriter from "../components/Typewriter.jsx";
import BgfiCards from "../components/BgfiCards.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";
import { BRAND, HERO_VIDEO } from "../data/images.js";

/**
 * Home — content from the Bard Santner Website Map (2026-07-28), composed to a
 * Fortune-500 standard per the design-expert audit: one house image grade,
 * numbered section index (prospectus register), restrained orange (reserved
 * for the CTA fill and logo only), layered whites, and a dark closing
 * crescendo. The hero + navy quick-action strip fill exactly one viewport.
 */

// Interchangeable tails for "Banking that helps you ___", each drawn from the
// manifesto: move forward (purpose), seize opportunity / build confidence
// (create opportunity, build confidence), grow bolder (the value "Bold"),
// live differently (purpose: financially enrich lives differently).
const HERO_PHRASES = [
  "move forward.",
  "seize opportunity.",
  "build confidence.",
  "grow bolder.",
  "live differently.",
  "rise higher.",
];

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
    body: "Everyday accounts, saving, borrowing and sending money. Simple, secure and always within reach.",
    image: BRAND.individual,
    to: "/solutions/individuals",
  },
  {
    eyebrow: "Business",
    title: "For Companies & Institutions",
    body: "Cash management, working capital, trade and payments engineered to keep a growing business moving.",
    image: BRAND.institutional,
    to: "/solutions/companies-institutions",
  },
  {
    eyebrow: "Wealth",
    title: "For Investors",
    body: "Managed portfolios, treasury and long-term planning. The disciplined way to build wealth that lasts.",
    image: BRAND.advisory,
    to: "/solutions/investors",
  },
];

// `pos` sets each photo's focal point (background-position) so the person AND
// what they are holding/doing both sit in the visible band above the caption,
// on the narrow desktop column and the wider mobile card alike.
const DIGITAL_CARDS = [
  {
    image: BRAND.smeHospitality,
    pos: "60% 30%",
    title: "Open in minutes",
    body: "Apply, verify your identity and start banking from your phone. No branch queue.",
    to: "/solutions/individuals",
  },
  {
    image: BRAND.smeNursery,
    pos: "50% 32%",
    title: "Run your business",
    body: "Payments, payroll and working capital, managed from a single dashboard.",
    to: "/solutions/companies-institutions",
  },
  {
    image: BRAND.mobileBanking,
    // Professional on her phone with documents in a business district — the
    // phone sits at ear level, so face and action frame cleanly under cover.
    pos: "54% 42%",
    title: "Send across borders",
    body: "Move money to family and suppliers at rates you can see up front.",
    to: "/who-we-serve/diaspora-international",
  },
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
      <span className={`font-display font-bold not-italic ${onDark ? "text-orange-400" : "text-orange-600"}`}>{n}</span>
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
        description="Bard Santner Microfinance Bank. Banking that helps people and businesses move forward. Simple enough for everyday life, powerful enough for a growing business."
        path="/"
        keywords={[
          "Bard Santner", "Microfinance Bank", "BSMFB", "digital banking Zimbabwe",
          "business banking", "private banking", "diaspora banking", "SME finance Africa",
        ]}
        jsonLd={[organizationJsonLd(), websiteJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }])]}
      />

      {/* ── ONE-SCREEN HERO ─────────────────────────────────────────
          Desktop: hero + quick-action strip fill exactly one viewport.
          Mobile: the hero itself is sized so it breathes and only the
          FIRST row of the strip sits above the fold (the second row is
          revealed on scroll). */}
      <div className="flex flex-col md:min-h-[calc(100svh-124px)]">
        <section className="relative flex-1 flex overflow-hidden bg-navy-900 min-h-[calc(100svh-165px)] md:min-h-0">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={BRAND.heroPoster}
            style={{ filter: "saturate(1.08) contrast(1.03) brightness(0.94) sepia(0.16)" }}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          {/* Warm veil — an even, light wash so the whole frame stays visible
              while the footage reads warm rather than cold-navy. */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(18,11,4,0.30)" }} />
          {/* Legibility lift — a gentle bottom-up warmth + an orange glow behind
              the copy. No left scrim; the background reads through everywhere. */}
          <div
            className="absolute inset-0 hidden md:block pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(14,9,3,0.74) 0%, rgba(14,9,3,0.34) 30%, rgba(14,9,3,0.08) 56%, transparent 80%), radial-gradient(100% 92% at 20% 56%, rgba(238,125,54,0.17), transparent 62%)",
            }}
          />
          <div
            className="absolute inset-0 md:hidden pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(14,9,3,0.9) 0%, rgba(14,9,3,0.5) 38%, rgba(14,9,3,0.2) 100%), radial-gradient(110% 70% at 50% 82%, rgba(238,125,54,0.14), transparent 66%)",
            }}
          />

          <div className="relative container-bank flex flex-col justify-center py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <p className="eyebrow eyebrow-on-dark mb-6 md:mb-7 [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">Bard Santner Microfinance Bank</p>
              <h1 className="display-hero text-white max-md:text-[clamp(1.72rem,7.5vw,2.6rem)] [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]">
                <span className="block">Banking that helps you</span>
                <span className="block font-bold">
                  <Typewriter phrases={HERO_PHRASES} />
                </span>
                <span className="sr-only">move forward.</span>
              </h1>
              <p className="mt-7 md:mt-9 text-white/90 max-w-xl text-[18px] md:text-[21px] leading-relaxed [text-shadow:0_1px_16px_rgba(0,0,0,0.45)]">
                A digital-first bank built for the way Africa works. Simple enough for
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
          <div className="grid grid-cols-12 gap-y-8 md:gap-12 items-start">
            <motion.div {...reveal} className="col-span-12 md:col-span-6">
              <Index n="01" label="Why we exist" />
              <h2 className="display-xl text-navy-600 text-balance mt-6">
                Banking should <span className="italic font-light">move with you</span>, not the
                other way around.
              </h2>
            </motion.div>
            <motion.p {...reveal} className="col-span-12 md:col-span-5 md:col-start-8 text-[18px] md:text-[20px] text-bone-600 leading-relaxed">
              For too long, banking expected people to fit around its systems. Long queues,
              slow approvals, endless paperwork. We set out to build a different kind of
              institution, one that pairs trusted financial expertise with modern technology
              to make banking simpler, faster and more accessible.
            </motion.p>
          </div>
          <div className="hairline mt-14 md:mt-20" />
        </div>
      </section>

      {/* ── 02 · Built around people — image-led cards ─────────────── */}
      <section data-spine="Built around people" data-spine-n="02" className="section bg-cloud border-t border-bone-200 relative overflow-hidden">
        <div className="absolute inset-0 pattern-lattice bg-navy-600 opacity-[0.04] pointer-events-none" />
        <div className="container-bank relative">
          <motion.div {...reveal} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <Index n="02" label="Built around people" />
              <h2 className="display-lg text-navy-600 text-balance mt-6">
                Built around <span className="font-bold">people</span>, not products.
              </h2>
            </div>
            <p className="text-[17px] md:text-[18px] text-bone-600 leading-relaxed max-w-sm">
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
                    <p className="text-[16.5px] text-bone-600 leading-relaxed flex-1">{c.body}</p>
                    <span className="btn btn-outline w-full justify-center mt-8 group-hover:bg-navy-700 group-hover:text-white group-hover:border-navy-700">
                      Explore {c.title.replace("For ", "")}
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

      {/* ── 03 · Digital-first — heading + tall photo cards ────────── */}
      <section data-spine="Digital-first" data-spine-n="03" className="section bg-milk border-t border-bone-200">
        <div className="container-bank grid grid-cols-12 gap-y-10 md:gap-12 items-start">
          {/* Left — heading + intro + CTA */}
          <motion.div {...reveal} className="col-span-12 lg:col-span-4">
            <Index n="03" label="Digital-first" />
            <h2 className="display-lg text-navy-600 text-balance mt-6">
              Digital where it matters. <span className="font-bold">Human</span> when it counts.
            </h2>
            <p className="mt-6 text-[18px] md:text-[20px] text-bone-600 leading-relaxed">
              Technology should remove complexity, not create it. Bank whenever and
              wherever you choose, and reach a real person the moment you need one.
            </p>
            <Link to="/login" className="btn btn-navy mt-9">
              Explore Online Banking
              <ArrowRightIcon size={16} weight="bold" />
            </Link>
          </motion.div>

          {/* Right — three tall photo cards */}
          <motion.div {...reveal} className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {DIGITAL_CARDS.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group relative block rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[2/3]"
              >
                <div
                  className="absolute inset-0 bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${c.image})`, backgroundPosition: c.pos, backgroundSize: c.size || "cover" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,10,20,0.95) 0%, rgba(12,10,20,0.78) 24%, rgba(12,10,20,0.28) 50%, transparent 74%)",
                  }}
                />
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                  <h3 className="font-display font-medium text-white text-[20px] md:text-[21px] leading-tight mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] md:text-[13.5px] text-white/80 leading-relaxed mb-5">
                    {c.body}
                  </p>
                  <span className="inline-flex items-center gap-2 self-start rounded-full border-2 border-white/40 group-hover:border-white pl-4 pr-1.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.08em] text-white transition-colors">
                    Learn more
                    <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-orange-500 flex items-center justify-center transition-colors">
                      <ArrowUpRightIcon size={12} weight="bold" className="text-white" />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
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
              className="inline-flex items-center gap-2 text-[16px] font-medium text-navy-600 hover:text-orange-600 transition-colors"
            >
              All research on BGFI
              <ArrowSquareOutIcon size={15} weight="bold" aria-label="opens in a new tab" />
            </a>
          </motion.div>

          <BgfiCards />
        </div>
      </section>

      {/* ── 05 · Built for Africa — ruled audience index ───────────── */}
      <section data-spine="Built for Africa" data-spine-n="05" data-spine-dark="true" className="bg-navy-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-10" />
        {/* Argyle lattice — the golf-site footer texture, white-on-navy */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "url(/pattern-argyle.svg)", backgroundSize: "44px 44px" }}
        />
        <div className="container-bank py-24 md:py-32">
          <div className="grid grid-cols-12 gap-y-10 md:gap-16">
            <motion.div {...reveal} className="col-span-12 md:col-span-5">
              <Index n="05" label="Built for Africa" onDark />
              <h2 className="display-lg text-white text-balance mt-6">
                Built for the way <span className="font-bold">Africa</span> works.
              </h2>
              <p className="mt-6 text-[18px] md:text-[20px] text-white/80 leading-relaxed">
                Entrepreneurs are building businesses. Families are creating wealth across
                generations. Trade is expanding across borders. We build for the people
                driving that ambition.
              </p>
            </motion.div>
            <motion.div {...reveal} className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {AUDIENCES.map((a) => (
                  <Link
                    key={a.label}
                    to={a.to}
                    className="group flex items-center justify-between gap-3 rounded-xl border-2 border-white/15 hover:border-orange-400 bg-white/[0.04] hover:bg-white/[0.07] px-5 py-5 transition-colors"
                  >
                    <span className="font-display font-medium text-[18px] md:text-[19px] text-white leading-tight">
                      {a.label}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowUpRightIcon size={16} weight="bold" className="text-white" />
                    </span>
                  </Link>
                ))}
              </div>
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
