import { motion } from "framer-motion";
import { DownloadSimpleIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";
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

const VALUES = ["Bold", "Insight", "Execution", "Responsibility", "Impact"];

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
        image={HERO.about}
        overlayTint="navy"
      />

      {/* ── Our Story ─────────────────────────────────────────────── */}
      <section id="our-story" className="section bg-milk scroll-mt-28">
        <div className="container-bank">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow eyebrow-accent mb-4">Our Story</p>
              <h2 className="display-lg text-navy-600 text-balance">
                We started with one belief: banking should help people move forward.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 max-w-2xl space-y-5 text-[16px] md:text-[18px] text-bone-600 leading-relaxed">
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
      <section id="manifesto" className="section bg-navy-700 text-white scroll-mt-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
        <div className="container-bank">
          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-on-dark mb-4">Our Manifesto</p>
            <h2 className="display-lg text-white text-balance mb-8">
              Every institution has a history. Ours has a conviction.
            </h2>
            <div className="space-y-5 text-[16px] md:text-[18px] text-white/80 leading-relaxed">
              <p>
                Bard Santner was founded in 2022 because we believed financial services
                could be better. As we evolved from a diversified financial institution into
                a digital-first microfinance bank, one thing never changed: our purpose.
              </p>
              <p>
                We exist to challenge the way banking has always been done, and to build
                something that works better for the people and businesses we serve.
              </p>
              <p>
                Our manifesto is more than words on a page. It is the standard we hold
                ourselves to. It shapes every product we build, every decision we make and
                every relationship we form, because we believe banking should create
                opportunity, build confidence and enrich lives.
              </p>
              <p className="text-white font-medium">This is what we stand for.</p>
            </div>
            <a
              href="#manifesto"
              className="mt-8 inline-flex items-center gap-2.5 bg-milk text-navy-700 hover:bg-paper px-6 py-3.5 rounded-full font-medium text-[15px] transition-colors"
            >
              <DownloadSimpleIcon size={16} weight="bold" />
              Download our manifesto
            </a>
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

          <div className="rounded-xl border border-bone-200 bg-smoke p-6 md:p-8">
            <p className="eyebrow mb-5">Our Values</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-display text-navy-400 text-[15px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-navy-600 text-[18px] md:text-[20px]">{v}</span>
                </motion.div>
              ))}
            </div>
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
            Full profiles and photographs of the Board are published as the Bank formalises
            its governance disclosures.
          </p>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
