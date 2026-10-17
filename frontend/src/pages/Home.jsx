import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  ArrowSquareOutIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CompassIcon,
  UsersThreeIcon,
  DeviceMobileIcon,
  LightbulbIcon,
  GlobeHemisphereWestIcon,
} from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import QuickActionStrip from "../components/QuickActionStrip.jsx";
import { useComingSoon } from "../components/Toast.jsx";
import Typewriter from "../components/Typewriter.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from "../components/SEO.jsx";
import { BRAND, HERO_VIDEO } from "../data/images.js";

/**
 * Home — per staff feedback (2026-10), the five long numbered sections
 * (Why we exist → Built for Africa) are condensed into a single rotating
 * themed banner directly beneath the hero, so the page scrolls short while
 * the five ideas still cycle through — each slide carrying its own contextual
 * link. The hero + quick-action strip and the closing Advisory band / Trust
 * ribbon are unchanged.
 */

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

// The five themes, folded from the former sections 01–05. Each is a short
// message plus one contextual destination so the banner carries navigation,
// not just copy.
const THEMES = [
  {
    n: "01",
    eyebrow: "Why we exist",
    icon: CompassIcon,
    image: BRAND.individual,
    pos: "center 30%",
    title: (
      <>
        Banking should <span className="italic font-light">move with you</span>, not the other way around.
      </>
    ),
    body: "We pair trusted financial expertise with modern technology to make banking simpler, faster and more accessible.",
    cta: { label: "Our story", to: "/about" },
  },
  {
    n: "02",
    eyebrow: "Built around people",
    icon: UsersThreeIcon,
    image: BRAND.relationship,
    pos: "center 35%",
    title: (
      <>
        Built around <span className="font-bold">people</span>, not products.
      </>
    ),
    body: "Every customer has a different goal. Choose the context your next conversation belongs in.",
    cta: { label: "Explore solutions", to: "/solutions/individuals" },
  },
  {
    n: "03",
    eyebrow: "Digital-first",
    icon: DeviceMobileIcon,
    image: BRAND.mobileBanking,
    pos: "54% 42%",
    title: (
      <>
        Digital where it matters. <span className="font-bold">Human</span> when it counts.
      </>
    ),
    body: "Bank whenever and wherever you choose, and reach a real person the moment you need one.",
    cta: { label: "Explore Online Banking", comingSoon: true },
  },
  {
    n: "04",
    eyebrow: "Insights",
    icon: LightbulbIcon,
    image: BRAND.institutional,
    pos: "center 35%",
    title: <>From the Bard Global Finance Institute.</>,
    body: "Research and perspective on the forces shaping African finance and the way the continent banks.",
    cta: { label: "All research on BGFI", href: "https://bgfi.global" },
  },
  {
    n: "05",
    eyebrow: "Built for Africa",
    icon: GlobeHemisphereWestIcon,
    image: BRAND.gallery,
    pos: "center 40%",
    title: (
      <>
        Built for the way <span className="font-bold">Africa</span> works.
      </>
    ),
    body: "We build for the entrepreneurs, families and institutions driving the continent's ambition.",
    cta: { label: "Who we serve", to: "/who-we-serve/diaspora-international" },
  },
];

function ThemeCTA({ cta, onComingSoon }) {
  const primary = "btn btn-hero-primary w-full sm:w-auto justify-center";
  if (cta.comingSoon) {
    return (
      <button type="button" onClick={onComingSoon} className={primary}>
        {cta.label}
        <ArrowRightIcon size={16} weight="bold" />
      </button>
    );
  }
  if (cta.href) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={primary}>
        {cta.label}
        <ArrowSquareOutIcon size={15} weight="bold" aria-label="opens in a new tab" />
      </a>
    );
  }
  return (
    <Link to={cta.to} className={primary}>
      {cta.label}
      <ArrowRightIcon size={16} weight="bold" />
    </Link>
  );
}

// Rotating themed banner — auto-advances, pauses on hover/focus, and can be
// driven by the dot rail or the prev/next arrows.
function RotatingThemes() {
  const comingSoon = useComingSoon();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = THEMES.length;

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setI((p) => (p + 1) % n), 6500);
    return () => clearInterval(t);
  }, [paused, n]);

  const go = (idx) => setI((idx + n) % n);
  const theme = THEMES[i];
  const Icon = theme.icon;

  return (
    <section
      className="relative overflow-hidden bg-[#140d05] text-white"
      aria-roledescription="carousel"
      aria-label="What we stand for"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />

      {/* Crossfading background photograph */}
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${theme.image})`,
            backgroundPosition: theme.pos,
            filter: "saturate(1.14) contrast(1.03) brightness(0.9) sepia(0.2)",
          }}
        />
      </AnimatePresence>

      {/* Warm wash + legibility gradient (matching the hero grade) */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(226,122,50,0.4)", mixBlendMode: "soft-light" }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(14,9,3,0.84) 0%, rgba(14,9,3,0.44) 46%, rgba(14,9,3,0.12) 100%), radial-gradient(95% 95% at 18% 55%, rgba(238,125,54,0.2), transparent 60%)",
        }}
      />

      <div className="relative container-bank py-20 md:py-28 min-h-[64svh] md:min-h-[70svh] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
            aria-roledescription="slide"
            aria-label={`${theme.n} — ${theme.eyebrow}`}
          >
            <p className="eyebrow eyebrow-on-dark flex items-center gap-3 mb-5 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]">
              <span className="font-display font-bold not-italic text-orange-400">{theme.n}</span>
              <Icon size={16} weight="regular" className="text-orange-400" />
              {theme.eyebrow}
            </p>
            <h2 className="display-xl text-white text-balance [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
              {theme.title}
            </h2>
            <p className="mt-6 text-white/90 max-w-xl text-[18px] md:text-[20px] leading-relaxed [text-shadow:0_1px_14px_rgba(0,0,0,0.45)]">
              {theme.body}
            </p>
            <div className="mt-8 flex">
              <ThemeCTA cta={theme.cta} onComingSoon={comingSoon} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls — dot rail + arrows */}
        <div className="mt-12 flex items-center gap-5">
          <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose a theme">
            {THEMES.map((t, idx) => (
              <button
                key={t.n}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`${t.n} — ${t.eyebrow}`}
                onClick={() => go(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === i ? "w-9 bg-orange-500" : "w-4 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto sm:ml-4">
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous theme"
              className="w-10 h-10 rounded-full border border-white/30 hover:border-orange-400 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <CaretLeftIcon size={16} weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next theme"
              className="w-10 h-10 rounded-full border border-white/30 hover:border-orange-400 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <CaretRightIcon size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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

      {/* ── ONE-SCREEN HERO ───────────────────────────────────────── */}
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
          <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(18,11,4,0.30)" }} />
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
              className="max-w-4xl"
            >
              <p className="eyebrow eyebrow-on-dark mb-6 md:mb-7 [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">Bard Santner Microfinance Bank</p>
              <h1 className="display-hero text-white max-md:text-[clamp(1.72rem,7.5vw,2.6rem)] [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]">
                <span className="block md:whitespace-nowrap">Banking that helps you</span>
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

      {/* ── Rotating themes — the five ideas, condensed into one banner ── */}
      <RotatingThemes />

      {/* ── Closing CTA + trust ribbon ───────────────────────────────── */}
      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
