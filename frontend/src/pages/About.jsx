import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadSimpleIcon, LinkedinLogoIcon, XIcon, ArrowRightIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
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

// Bites a small circular scoop out of the card's bottom-right corner, so the
// LinkedIn button hugs the corner in a tight concave curve (deck design).
const NOTCH_MASK =
  "radial-gradient(circle 38px at calc(100% - 24px) calc(100% - 24px), transparent 37px, #000 38px)";

export default function About() {
  // The board member whose full profile is open in the modal (null = closed).
  const [active, setActive] = useState(null);

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

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

      {/* ── Our Story — editorial split, text only ─────────────────── */}
      <section id="our-story" className="section bg-milk scroll-mt-28">
        <div className="container-bank grid grid-cols-12 gap-y-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow eyebrow-accent mb-4">Our Story</p>
            <h2 className="display-lg text-navy-600 text-balance mb-7">
              We started with one belief: banking should help people move forward.
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {STORY_FACTS.map((f) => (
                <span key={f} className="inline-flex items-center rounded-full border-2 border-bone-300 bg-white px-4 py-2 text-[13px] font-semibold text-navy-700">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 space-y-5 text-[17px] md:text-[19px] text-bone-600 leading-relaxed">
            <p className="font-display text-navy-600 text-[22px] md:text-[26px] leading-snug">
              And from a diversified financial institution, we have evolved into a
              microfinance bank.
            </p>
            {STORY.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
              style={{ backgroundImage: `url(${BRAND.manifesto})`, filter: "saturate(1.08) brightness(0.82)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(110deg, rgba(14,9,3,0.88) 0%, rgba(14,9,3,0.55) 46%, rgba(20,13,40,0.2) 100%)" }}
            />
            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 max-w-3xl">
              <p className="eyebrow eyebrow-on-dark mb-4">Our Manifesto</p>
              <h2 className="display-lg text-white text-balance mb-8 [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
                Every institution has a history. Ours has a conviction.
              </h2>
              <div className="space-y-5 text-[17px] md:text-[19px] leading-relaxed">
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
                className="mt-9 inline-flex items-center gap-2.5 bg-white text-navy-700 hover:bg-white/90 px-6 py-3.5 rounded-full font-medium text-[16px] transition-colors"
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
                <span className="col-span-2 md:col-span-1 font-display font-bold text-orange-500 text-[20px] md:text-[22px] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 md:col-span-3 font-display font-medium text-navy-600 text-[24px] md:text-[30px] leading-none">
                  {v.name}
                </h3>
                <p className="col-span-12 md:col-span-8 text-bone-600 text-[16px] md:text-[18px] leading-relaxed">
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
                className="group relative flex flex-col rounded-2xl bg-white overflow-hidden shadow-[0_12px_30px_rgba(12,10,20,0.10)] hover:shadow-[0_20px_44px_rgba(12,10,20,0.16)] transition-shadow"
              >
                {/* Portrait with a concave circular notch bitten out of the
                    bottom-right corner (deck founder-card design). */}
                <div className="relative">
                  <div
                    className="relative aspect-[4/5] overflow-hidden"
                    style={{ maskImage: NOTCH_MASK, WebkitMaskImage: NOTCH_MASK }}
                  >
                    <Portrait member={p} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 pr-20">
                      <h3 className="font-display font-medium text-white text-[20px] md:text-[23px] leading-tight [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
                        {p.name}
                      </h3>
                      <p className="text-[11.5px] tracking-[0.14em] uppercase text-white/80 mt-1.5">
                        {p.role}
                      </p>
                    </div>
                  </div>
                  {p.linkedin && (
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} on LinkedIn`}
                      className="absolute -bottom-[4px] -right-[4px] w-14 h-14 rounded-full bg-white text-navy-700 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors shadow-[0_4px_14px_rgba(12,10,20,0.22)]"
                    >
                      <LinkedinLogoIcon size={28} weight="fill" />
                    </a>
                  )}
                </div>
                {/* Truncated bio + See more */}
                <div className="flex flex-1 flex-col p-5 md:p-6 pt-4">
                  <p className="text-[14px] text-bone-600 leading-relaxed line-clamp-3">
                    {p.bio}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="mt-3 self-start inline-flex items-center gap-1.5 text-[13.5px] font-medium text-orange-600 hover:text-orange-700 hover-line"
                  >
                    See more
                    <ArrowRightIcon size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Board member profile modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="board-modal"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-ink/70 backdrop-blur-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} — ${active.role}`}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[88vh] bg-white rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)] grid md:grid-cols-[minmax(0,300px)_1fr]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:min-h-full min-h-[220px]">
                <Portrait member={active} />
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-500 md:hidden" />
              </div>
              <div className="relative p-6 md:p-9 overflow-y-auto">
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close profile"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bone-100 hover:bg-orange-500 text-navy-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <XIcon size={18} weight="bold" />
                </button>
                <p className="eyebrow eyebrow-accent mb-3 pr-10">{active.role}</p>
                <h3 className="font-display text-navy-600 text-[27px] md:text-[31px] leading-tight mb-4">
                  {active.name}
                </h3>
                <p className="text-[15.5px] text-bone-600 leading-relaxed">{active.bio}</p>
                {active.linkedin && (
                  <a
                    href={active.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-navy-600 hover:text-orange-600 transition-colors"
                  >
                    <LinkedinLogoIcon size={20} weight="fill" className="text-orange-600" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AdvisoryBand />
    </PageTransition>
  );
}

// Portrait fill — the commissioned photograph, or the inverted brand
// monogram on navy for members without a portrait yet.
function Portrait({ member }) {
  if (member.image) {
    return (
      <div
        className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${member.image})`, backgroundPosition: "center 12%" }}
      />
    );
  }
  return (
    <div className="absolute inset-0 bg-navy-700 flex items-center justify-center">
      <img
        src="/favicon.png"
        alt=""
        aria-hidden="true"
        className="w-2/5 max-w-[120px] object-contain opacity-90"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
}
