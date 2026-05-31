import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { MARQUEE } from "../data/images.js";

/**
 * Wealth Marquee — the "This is Bard Santner Wealth" brand moment.
 *
 * Lloyds canon: a financial-institution home page picks ONE division
 * and gives it a cinematic full-bleed marquee — equestrian photograph,
 * sub-brand mark, italic display headline, offerings taxonomy,
 * primary + secondary CTA. The section says "stop scrolling — this is
 * who we are at our most premium." Quiet confidence by default;
 * disproportionate craft applied in this one place.
 *
 * Composition layers:
 *   1. Editorial horse photograph filling the section, parallax
 *   2. Light ink/20 multiply tint — ties the photo to brand
 *   3. Desktop horizontal text-canvas gradient (heavy left, clear right)
 *   4. Mobile bottom-up vertical gradient (text sits on dark canvas
 *      regardless of column width)
 *   5. Top dim — keeps the orange brand rule legible
 *
 * Content layers:
 *   1. Sub-brand monogram: 2px orange rule + "BARD SANTNER" eyebrow +
 *      "WEALTH" sub-brand line. Mirrors a heritage cartouche.
 *   2. display-hero headline: "This is Bard Santner Wealth."
 *   3. Body: positioning copy
 *   4. Offerings pipe: typographic showmanship — uppercase tracked
 *      taxonomy separated by orange interpuncts
 *   5. Dual CTAs: primary navigates to /wealth, secondary opens a
 *      conversation with a wealth banker
 */
export default function WealthMarquee() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax — the photo drifts upward as the section scrolls
  // into view, then continues drifting at a different rate as it
  // leaves. Cinematic gesture, not motion theatre.
  const photoY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.01, 1.06]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink text-white border-y-2 border-orange-500"
    >
      {/* L1 — photograph with editorial filter + parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${MARQUEE.wealth})`,
          filter: "saturate(0.5) brightness(0.78) contrast(1.08)",
          y: photoY,
          scale: photoScale,
        }}
      />

      {/* L2 — light ink multiply tint */}
      <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />

      {/* L3 — text canvas. Desktop horizontal (Lloyds left-heavy),
          mobile vertical (bottom-up). Same rule as PageHero. */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-ink/90 via-ink/55 to-ink/15" />
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-ink/95 via-ink/65 via-50% to-ink/30" />

      {/* L4 — top dim, keeps the orange brand rule legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-transparent to-transparent" />

      <div className="relative container-bank min-h-[78svh] md:min-h-[88svh] flex flex-col justify-end pt-20 md:pt-32 pb-14 md:pb-24">
        <div className="max-w-2xl">
          {/* Sub-brand monogram — heritage cartouche.
              2px orange bar to the left, two-line brand mark to the
              right. The eyebrow line carries the parent brand at small
              caps; the larger orange line carries the sub-brand. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10"
          >
            <span className="h-[2px] w-10 md:w-14 bg-orange-500" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[12px] md:text-[13px] tracking-[0.22em] uppercase font-medium text-white/70">
                Bard Santner
              </span>
              <span className="font-display text-[22px] md:text-[28px] tracking-[0.14em] uppercase text-orange-500 mt-1.5 font-medium">
                Wealth
              </span>
            </div>
          </motion.div>

          {/* Headline — the Lloyds gesture */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="display-hero text-white text-balance"
          >
            This is Bard Santner Wealth.
          </motion.h2>

          {/* Body — positioning */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 md:mt-9 text-[17px] md:text-[20px] text-white/85 leading-relaxed max-w-xl"
          >
            Discretionary mandates, advisory portfolios and the long
            counsel of an international house — anchored in Africa.
          </motion.p>

          {/* Offerings pipe — typographic showmanship.
              The five offerings sit on one line with orange interpuncts
              between them. Mobile wraps cleanly. This is the
              detail-investment moment — the "show off" beat. */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] md:text-[12.5px] text-white/60 tracking-[0.18em] uppercase font-medium"
          >
            <span>Discretionary</span>
            <Bullet />
            <span>Advisory</span>
            <Bullet />
            <span>Succession</span>
            <Bullet />
            <span>Structured credit</span>
            <Bullet />
            <span>Family office</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3"
          >
            <Link
              to="/wealth"
              className="btn btn-primary w-full sm:w-auto justify-center"
            >
              Explore Bard Santner Wealth
              <ArrowRightIcon size={14} weight="bold" />
            </Link>
            <Link
              to="/contact?audience=private"
              className="btn btn-hero-ghost w-full sm:w-auto justify-center"
            >
              Speak to a wealth banker
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Orange interpunct — small, deliberate, brand signature. The dot is
// the brand colour at half opacity so the rhythm reads as a chain, not
// punctuation noise.
function Bullet() {
  return (
    <span className="w-[3px] h-[3px] rounded-full bg-orange-500/70 shrink-0" aria-hidden="true" />
  );
}
