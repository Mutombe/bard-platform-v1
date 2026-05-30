import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeSimpleIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { ART } from "../data/images.js";

/**
 * Advisory band — the "speak to a banker" institutional CTA module.
 *
 * Now uses a refined gallery photograph as the section backdrop per
 * the brand direction "even art paintings can be put strategically
 * in CTAs." The image is overlaid with a strong bone-100/95 gradient
 * so the content stays legible; the gallery interior reads as an
 * institutional whisper underneath the headline.
 */
export default function AdvisoryBand() {
  return (
    <section className="relative bg-bone-100 border-t-2 border-orange-500 overflow-hidden">
      {/* Art backdrop — Lloyds-canonical horizontal blending: gallery
          photograph stays vibrant on the right (where the contact card
          sits on a white surface, framed by the visible art) while a
          strong bone-100 gradient on the left gives the editorial
          headline a clean canvas to sit on. Heavy at 97% on the left,
          fading to clear at ~60% width onward. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ART.advisoryHallway})`,
          filter: "saturate(0.65) brightness(0.95) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bone-100/97 via-bone-100/65 to-bone-100/10" />

      <div className="relative container-bank section">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4">§ 06 · Advisory</p>
            <h2 className="display-xl text-navy-600 text-balance">
              We bank by relationship.{" "}
              <span className="text-navy-600">
                Start one.
              </span>
            </h2>
            <p className="mt-6 text-[16px] text-bone-600 max-w-xl leading-relaxed">
              The first conversation costs nothing and commits nothing.
              It tells us whether we are the right bank for what you are
              trying to do. It tells you whether we are a partner you
              would like to spend a decade with.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-[var(--shadow-card-lift)]">
              <p className="eyebrow mb-5">Open a conversation</p>
              <div className="space-y-4">
                <a
                  href="tel:+263861200700"
                  className="flex items-center justify-between p-5 rounded-lg border border-bone-200 hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <PhoneIcon size={22} weight="regular" className="text-orange-600" />
                    <div>
                      <p className="text-[15px] font-medium text-navy-600">
                        +263 861 200 0700
                      </p>
                      <p className="text-[13px] text-bone-500 mt-0.5">
                        Monday-Friday, 08:00-17:00 CAT
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon size={15} weight="bold" className="text-bone-400" />
                </a>
                <a
                  href="mailto:info@bardsantner.com"
                  className="flex items-center justify-between p-5 rounded-lg border border-bone-200 hover:border-orange-500 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <EnvelopeSimpleIcon size={22} weight="regular" className="text-orange-600" />
                    <div>
                      <p className="text-[15px] font-medium text-navy-600">
                        info@bardsantner.com
                      </p>
                      <p className="text-[13px] text-bone-500 mt-0.5">
                        Response within one business day
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon size={15} weight="bold" className="text-bone-400" />
                </a>
                <Link to="/contact" className="btn btn-navy w-full justify-center mt-3">
                  Request a banker
                  <ArrowRightIcon size={15} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
