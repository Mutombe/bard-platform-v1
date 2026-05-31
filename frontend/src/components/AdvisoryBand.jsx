import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeSimpleIcon, ChatCircleIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { ART } from "../data/images.js";
import SectionReveal from "./SectionReveal.jsx";

/**
 * Advisory band — the "speak to a banker" institutional CTA module.
 *
 * Two distinct compositions:
 *
 *   Desktop (md+): Lloyds horizontal blend. Gallery photograph stays
 *     vibrant on the right (framing the white contact card); strong
 *     bone-100 wash on the left gives the editorial headline a clean
 *     canvas. The "Open a conversation" card sits inside the art.
 *
 *   Mobile (<md): single clean bone-100 panel with no backdrop image.
 *     The gallery photograph competed with the card on a 343px column
 *     so we removed it. The card stays the focal point with bigger
 *     row touch targets, a third channel (WhatsApp), and a more
 *     prominent CTA button at the bottom. Everything stacks
 *     deliberately, not as a consequence of grid collapse.
 */
export default function AdvisoryBand() {
  return (
    <section className="relative bg-smoke border-t-2 border-orange-500 overflow-hidden">
      {/* Desktop backdrop — art photo + horizontal bone-100 fade.
          Mobile gets a clean bone-100 base instead (no photo). */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ART.advisoryHallway})`,
          filter: "saturate(0.65) brightness(0.95) contrast(1.05)",
        }}
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-bone-100/97 via-bone-100/65 to-bone-100/10" />
      <div className="md:hidden absolute inset-0 bg-bone-100" />

      <div className="relative container-bank section">
        <div className="grid grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left — manifesto */}
          <SectionReveal className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-3 md:mb-4">§ 06 · Advisory</p>
            <h2 className="display-xl text-navy-600 text-balance">
              We bank by relationship.{" "}
              <span className="text-navy-600">Start one.</span>
            </h2>
            <p className="mt-5 md:mt-6 text-[15.5px] md:text-[16px] text-bone-600 max-w-xl leading-relaxed">
              The first conversation costs nothing and commits nothing.
              It tells us whether we are the right bank for what you are
              trying to do. It tells you whether we are a partner you
              would like to spend a decade with.
            </p>
          </SectionReveal>

          {/* Right — "Open a conversation" card */}
          <SectionReveal delay={0.15} className="col-span-12 md:col-span-5">
            <div className="bg-paper rounded-xl p-5 md:p-10 shadow-[var(--shadow-card-lift)] border border-bone-200/60">
              {/* Card head — eyebrow + thin orange rule. The eyebrow now
                  has its own bar so the card has a clean institutional
                  opening, not a floating label. */}
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <span className="h-[2px] w-8 bg-orange-500" />
                <p className="eyebrow eyebrow-accent">Open a conversation</p>
              </div>

              {/* Channel rows. Bigger touch areas on mobile (min-h 64px),
                  cleaner icon framing (each icon in a 40x40 tinted square
                  instead of free-floating), better text hierarchy. */}
              <div className="space-y-2.5 md:space-y-3">
                <ChannelRow
                  href="tel:+263861200700"
                  Icon={PhoneIcon}
                  primary="+263 861 200 0700"
                  secondary="Mon–Fri, 08:00–17:00 CAT"
                />
                <ChannelRow
                  href="mailto:info@bardsantner.com"
                  Icon={EnvelopeSimpleIcon}
                  primary="info@bardsantner.com"
                  secondary="Reply within one business day"
                  truncate
                />
                <ChannelRow
                  href="https://wa.me/263774954415"
                  external
                  Icon={ChatCircleIcon}
                  primary="WhatsApp the desk"
                  secondary="For existing clients"
                />
              </div>

              {/* Primary CTA — prominent navy button after the channels.
                  On mobile this becomes the obvious next step once the
                  user has confirmed the channels above. */}
              <Link
                to="/contact"
                className="btn btn-navy w-full justify-center mt-5 md:mt-6"
              >
                Request a banker
                <ArrowRightIcon size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Single contact-channel row inside the Advisory card.
 * The row is a single tap target. Icon is framed in a 40px tinted square
 * so the touch target reads as a deliberate component, not floating
 * iconography. Text container shrinks correctly so long email addresses
 * truncate instead of pushing the arrow off the row.
 */
function ChannelRow({ href, Icon, primary, secondary, truncate = false, external = false }) {
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };
  return (
    <a
      {...linkProps}
      className="flex items-center gap-4 p-3.5 md:p-4 rounded-lg border border-bone-200 hover:border-orange-500 hover:bg-orange-50/40 transition-colors group"
    >
      <span className="w-10 h-10 md:w-11 md:h-11 rounded-md bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
        <Icon size={20} weight="regular" className="text-orange-600" />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[14.5px] md:text-[15px] font-medium text-navy-600 ${truncate ? "truncate" : ""}`}>
          {primary}
        </p>
        <p className="text-[12.5px] md:text-[13px] text-bone-500 mt-0.5 leading-snug">
          {secondary}
        </p>
      </div>
      <ArrowRightIcon size={14} weight="bold" className="text-bone-400 group-hover:text-orange-600 shrink-0 transition-colors" />
    </a>
  );
}
