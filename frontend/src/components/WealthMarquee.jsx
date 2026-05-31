import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { MARQUEE } from "../data/images.js";

/**
 * Wealth Marquee — Lloyds-canonical card pattern, ours.
 *
 * Reference: Lloyds Wealth card from the 20260529_231529 inspiration.
 * A single dark rounded card sitting on the page canvas, two columns:
 *
 *   ┌──────────────────────────┬──────────────────────────┐
 *   │ [orange logo tile]       │ This is Bard Santner     │
 *   │                           │ Wealth                   │
 *   │                           │                           │
 *   │ [horse photograph,       │ Subhead one              │
 *   │  filling the panel,      │ Subhead two              │
 *   │  blending with dark bg]  │                           │
 *   │                           │ [ Explore CTA ]          │
 *   │                           │                           │
 *   │                           │ Eligibility criteria.    │
 *   └──────────────────────────┴──────────────────────────┘
 *
 * The card is dark navy/ink throughout (left and right panels share
 * the same background), so the horse photograph blends seamlessly into
 * the dark area instead of sitting in a separate framed box. The orange
 * logo tile floats over the photograph as the sub-brand mark.
 *
 * Constraints kept from the Lloyds canon:
 *   • single rounded card, max-w-5xl, centered on page background
 *   • dark card surface (we use ink)
 *   • contrasting logo tile (orange — our brand's "Lloyds green")
 *   • white-pill primary CTA (full-width inside the right panel)
 *   • small disclosure footnote under the CTA
 *
 * Mobile: card stacks. Logo tile + horse photo on top (16:10 panel),
 * text + CTA + footnote below. Card maintains rounded corners + ink
 * surface.
 */
export default function WealthMarquee() {
  return (
    <section className="bg-milk">
      <div className="container-bank py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto bg-ink rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(12,10,20,0.18)]"
        >
          {/* Hairline orange top rule — institutional signature */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* ─── LEFT / TOP — logo tile + architectural photograph ──── */}
            <div className="relative aspect-[5/4] md:aspect-auto md:min-h-[420px] bg-ink overflow-hidden">
              {/* Modern-building photograph — our own aesthetic, not the
                  Lloyds horse. Geometric glass-and-sky composition,
                  filtered just enough to settle into the ink card surface
                  without losing the optimistic blue. */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${MARQUEE.wealth})`,
                  filter: "saturate(0.82) brightness(0.88) contrast(1.06)",
                }}
              />

              {/* Soft inner blends — fade the left edge into ink so the
                  logo tile reads on a clean dark canvas; fade the right
                  edge into ink so the photo merges into the card divider
                  (or into the bottom panel on mobile). */}
              <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-ink/45" />
              <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent via-transparent to-ink/85" />

              {/* Sub-brand mark — no enclosing tile. The favicon is
                  itself the orange brand stamp; wrapping it in an
                  orange tile would dissolve the mark into its own
                  colour. Instead, the favicon sits directly on the
                  dark card surface with two-line brand text beside it
                  in white. The mark IS the cartouche. */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 md:gap-4">
                <img
                  src="/favicon.png"
                  alt=""
                  className="h-11 w-11 md:h-12 md:w-12 object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                  loading="lazy"
                />
                <div className="leading-none">
                  <p className="font-display text-[10px] md:text-[10.5px] tracking-[0.22em] uppercase font-medium text-white/70">
                    Bard Santner
                  </p>
                  <p className="font-display text-[17px] md:text-[19px] tracking-[0.08em] uppercase font-medium text-white mt-1.5">
                    Wealth
                  </p>
                </div>
              </div>
            </div>

            {/* ─── RIGHT / BOTTOM — text content + CTA ────────────────── */}
            <div className="bg-ink p-7 sm:p-9 md:p-10 lg:p-12 flex flex-col justify-center">
              <h2 className="display-md text-white mb-4 md:mb-5">
                This is Bard Santner Wealth
              </h2>
              <p className="text-[15px] md:text-[16px] text-white/85 leading-relaxed mb-3 md:mb-4">
                Patient capital. Patient counsel.
              </p>
              <p className="text-[14.5px] md:text-[15px] text-white/70 leading-relaxed mb-7 md:mb-8 max-w-md">
                Discretionary mandates, advisory portfolios and the long counsel
                of an international house — anchored in Africa.
              </p>

              <Link
                to="/wealth"
                className="inline-flex items-center justify-center gap-2 bg-milk text-navy-700 hover:bg-paper px-6 py-4 rounded-lg font-medium text-[14.5px] md:text-[15px] transition-colors w-full md:w-auto"
              >
                Explore Bard Santner Wealth
                <ArrowRightIcon size={14} weight="bold" />
              </Link>

              <p className="mt-5 md:mt-6 text-[11.5px] md:text-[12px] text-white/55 leading-relaxed">
                Eligibility criteria apply. Subject to KYC and mandate terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
