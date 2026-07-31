import { motion } from "framer-motion";
import { DownloadSimpleIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { BRAND } from "../data/images.js";
import { LEADERSHIP } from "../data/leadership.js";

/**
 * /about — one page, four anchored sections the About Us dropdown links to:
 *   #our-story · #manifesto · #vision-purpose-values · #board-of-directors
 * Copy is taken from the Bard Santner Website Map (2026-07-28).
 */

const STORY = [
  "For too long, banking has expected people to fit around its systems. Long queues. Slow approvals. Endless paperwork. Limited access. Banking became something people had to work around instead of something that worked for them.",
  "We believed there was a better way. So we set out to build a different kind of financial institution, one that combines trusted financial expertise with modern technology to make banking simpler, faster and more accessible for everyone.",
  "Whether you're opening your first account, growing a business, financing a new opportunity or moving money across borders, banking should help you move forward, not hold you back.",
];

const VALUES = [
  { name: "Bold", body: "We build the better way rather than defend the old one." },
  { name: "Insight", body: "We look beyond the headline to where you are actually going." },
  { name: "Execution", body: "Ideas are cheap; we ship what we promise, on the day." },
  { name: "Responsibility", body: "We hold customer money as customer money, and we name who is accountable." },
  { name: "Impact", body: "We measure ourselves by lives enriched, not products sold." },
];

const STORY_FACTS = ["Founded 2022", "Diversified group to microfinance bank", "Digital-first"];

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="Bard Santner Microfinance Bank. Founded in 2022 to make financial services more accessible, practical and valuable for the people and businesses we serve."
        path="/about"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="About Us"
        headline="Banking should help people move forward."
        body="Bard Santner was founded in 2022 with a simple purpose: to make financial services more accessible, more practical and more valuable for the people and businesses we serve."
        primaryCTA={{ to: "/contact", label: "Start a conversation" }}
        image={BRAND.africaLandscape}
        overlayTint="navy"
      />

      {/* ── Our Story — arched image + facts split (deck case-study layout) ── */}
      <section id="our-story" className="section bg-milk scroll-mt-28">
        <div className="container-bank grid grid-cols-12 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[6rem_2rem_2rem_2rem] overflow-hidden shadow-[var(--shadow-hero)]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BRAND.aboutStory})`, filter: "saturate(1.05) contrast(1.03)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            </div>
            {/* Floating stat badge — deck signature */}
            <div className="absolute -bottom-5 -right-2 md:-right-5 bg-orange-500 text-white rounded-2xl px-6 py-4 shadow-[var(--shadow-hero)]">
              <p className="font-display font-bold text-white text-[30px] leading-none">2022</p>
              <p className="text-[11px] tracking-[0.16em] uppercase text-white/85 mt-1">Founded</p>
            </div>
          </motion.div>

          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow eyebrow-accent mb-4">Our Story</p>
            <h2 className="display-lg text-navy-600 text-balance mb-6">
              We started with one belief: banking should help people move forward.
            </h2>
            <div className="flex flex-wrap gap-2.5 mb-7">
              {STORY_FACTS.map((f) => (
                <span key={f} className="inline-flex items-center rounded-full border-2 border-bone-300 bg-white px-4 py-2 text-[13px] font-semibold text-navy-700">
                  {f}
                </span>
              ))}
            </div>
            <div className="space-y-5 text-[16px] md:text-[18px] text-bone-600 leading-relaxed max-w-2xl">
              <p className="font-display text-navy-600 text-[20px] md:text-[24px] leading-snug">
                And from a diversified financial institution, we have evolved into a
                microfinance bank.
              </p>
              {STORY.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Manifesto ─────────────────────────────────────────── */}
      {/* Our Manifesto — big rounded picture-filled band with text on top */}
      <section id="manifesto" className="section bg-milk scroll-mt-28">
        <div className="container-bank">
          <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem] shadow-[var(--shadow-hero)]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${BRAND.manifesto})`, filter: "saturate(1.05) brightness(0.55)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(120deg, rgba(14,9,3,0.94) 0%, rgba(14,9,3,0.74) 52%, rgba(24,16,46,0.62) 100%)" }}
            />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-500" />
            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 max-w-3xl">
              <p className="eyebrow eyebrow-on-dark mb-4">Our Manifesto</p>
              <h2 className="display-lg text-white text-balance mb-8 [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
                Every institution has a history. Ours has a conviction.
              </h2>
              <div className="space-y-5 text-[16px] md:text-[18px] leading-relaxed">
                <p className="text-white/85">
                  Bard Santner was founded in 2022 because we believed financial services
                  could be better. As we evolved from a diversified financial institution into
                  a digital-first microfinance bank, one thing never changed: our purpose.
                </p>
                <p className="text-white/85">
                  We exist to challenge the way banking has always been done, and to build
                  something that works better for the people and businesses we serve.
                </p>
                <p className="text-white/85">
                  Our manifesto is more than words on a page. It is the standard we hold
                  ourselves to. It shapes every product we build, every decision we make and
                  every relationship we form, because we believe banking should create
                  opportunity, build confidence and enrich lives.
                </p>
                <p className="text-white font-medium">This is what we stand for.</p>
              </div>
              <a
                href="#manifesto"
                className="mt-9 inline-flex items-center gap-2.5 bg-white text-navy-700 hover:bg-white/90 px-6 py-3.5 rounded-full font-medium text-[15px] transition-colors"
              >
                <DownloadSimpleIcon size={16} weight="bold" />
                Download our manifesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision, Purpose, Values ───────────────────────────────── */}
      <section id="vision-purpose-values" className="section bg-milk scroll-mt-28">
        <div className="container-bank">
          <p className="eyebrow eyebrow-accent mb-4">Vision, Purpose, Values</p>
          <h2 className="display-lg text-navy-600 text-balance max-w-2xl mb-10 md:mb-14">
            What drives us, and how we hold ourselves.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6 md:mb-8">
            <div className="bank-card bank-card-body">
              <p className="eyebrow mb-3">Vision</p>
              <p className="font-display text-navy-600 text-[22px] md:text-[26px] leading-snug">
                Dominating the market with unparalleled innovation, unmatched insights and
                remaining miles ahead of the rest.
              </p>
            </div>
            <div className="bank-card bank-card-body">
              <p className="eyebrow mb-3">Purpose</p>
              <p className="font-display text-navy-600 text-[22px] md:text-[26px] leading-snug">
                We exist to financially enrich lives differently.
              </p>
            </div>
          </div>

          <p className="eyebrow eyebrow-accent mb-2">Our Values</p>
          <div className="border-t border-bone-200">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-12 gap-4 md:gap-6 items-baseline py-6 md:py-7 border-b border-bone-200 hover:bg-bone-50/60 transition-colors"
              >
                <span className="col-span-2 md:col-span-1 font-display font-bold text-orange-500 text-[19px] md:text-[22px] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 md:col-span-3 font-display font-medium text-navy-600 text-[24px] md:text-[30px] leading-none">
                  {v.name}
                </h3>
                <p className="col-span-12 md:col-span-8 text-bone-600 text-[15px] md:text-[17px] leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Board of Directors ────────────────────────────────────── */}
      <section id="board-of-directors" className="bg-smoke border-t border-bone-200 section scroll-mt-28">
        <div className="container-bank">
          <p className="eyebrow eyebrow-accent mb-4">Board of Directors</p>
          <h2 className="display-lg text-navy-600 text-balance max-w-2xl mb-10 md:mb-14">
            Named, accountable, reachable.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {LEADERSHIP.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="bank-card flex flex-col h-full"
              >
                <div
                  className="aspect-[4/5] bg-cover bg-center bg-bone-200"
                  style={{ backgroundImage: `url(${p.image})`, filter: "var(--img-grade)" }}
                />
                <div className="bank-card-body flex flex-col flex-1">
                  <h3 className="font-display text-navy-600 text-[20px] md:text-[22px] leading-tight">
                    {p.name}
                  </h3>
                  <p className="eyebrow eyebrow-accent mt-2 mb-3">{p.role}</p>
                  <p className="text-[14.5px] text-bone-600 leading-relaxed">{p.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-8 text-[14px] text-bone-500 max-w-2xl">
            Full Board profiles are published as the Bank formalises its governance
            disclosures.
          </p>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
