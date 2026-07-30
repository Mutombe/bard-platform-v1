import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { MARQUEE } from "../data/images.js";
import RevealImage from "./RevealImage.jsx";

/**
 * Private Banking marquee — the Lloyds-canonical single dark card, ours.
 * (Restored from the earlier Wealth marquee, renamed to Private Banking.)
 *
 * One rounded ink card on the page canvas, two panels sharing the same dark
 * surface so the architectural photograph blends seamlessly into the card.
 * The favicon is the sub-brand stamp; a white-pill CTA carries the action.
 */
export default function PrivateBankingMarquee() {
  return (
    <section className="bg-milk">
      <div className="container-bank py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-ink rounded-2xl overflow-hidden shadow-[var(--shadow-hero)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* ─── LEFT / TOP — sub-brand mark + architectural photograph ─ */}
            <div className="relative aspect-[5/4] md:aspect-auto md:min-h-[520px] md:col-span-7 bg-ink overflow-hidden">
              <RevealImage image={MARQUEE.wealth} className="absolute inset-0 bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-ink/45" />
              <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent via-transparent to-ink/85" />

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
                    Private Banking
                  </p>
                </div>
              </div>
            </div>

            {/* ─── RIGHT / BOTTOM — text content + CTA ────────────────── */}
            <div className="md:col-span-5 bg-ink p-7 sm:p-9 md:p-10 lg:p-14 flex flex-col justify-center">
              <h2 className="display-md text-white mb-4 md:mb-5">
                This is Bard Santner <span className="font-bold">Private Banking</span>
              </h2>
              <p className="text-[16px] md:text-[17px] text-white/85 leading-relaxed mb-3 md:mb-4 italic font-light">
                Relationship-led. Discreet. Patient.
              </p>
              <p className="text-[14.5px] md:text-[15px] text-white/70 leading-relaxed mb-7 md:mb-8 max-w-md">
                Discretionary mandates, advisory portfolios and the long counsel of an
                international house, for established wealth anchored in Africa.
              </p>

              <Link
                to="/solutions/investors"
                className="inline-flex items-center justify-center gap-2.5 bg-milk text-navy-700 hover:bg-paper px-7 py-4 rounded-lg font-medium text-[14.5px] md:text-[15px] transition-colors w-full md:w-auto"
              >
                Explore Private Banking
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
