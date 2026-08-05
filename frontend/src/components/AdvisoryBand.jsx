import { Link } from "react-router-dom";
import { PhoneIcon, EnvelopeSimpleIcon, ChatCircleIcon, ArrowRightIcon, ArrowSquareOutIcon } from "@phosphor-icons/react";
import { BRAND } from "../data/images.js";

/**
 * Advisory band — the site's single closing CTA (it now carries the former
 * "Looking ahead" message). A warm, gently grid-textured overlay over the
 * gallery photograph, with the aspiration on the left and a contact card on
 * the right. One responsive composition, mobile → desktop. Rendered without a
 * scroll-reveal so the primary CTA is always visible.
 */
export default function AdvisoryBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Photograph */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BRAND.gallery})`,
          filter: "saturate(1.12) brightness(0.66) sepia(0.2) contrast(1.03)",
        }}
      />
      {/* Warm overlay — amber-brown wash on the copy side, clearing to the
          right so the photograph reads through. */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#140d05]/92 via-[#2a190c]/66 to-navy-950/45" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 16% 22%, rgba(238,125,54,0.22), transparent 55%)" }}
      />

      <div className="relative container-bank section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — the aspiration (folded from "Looking ahead") */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3.5 mb-6">
              <span className="h-[2px] w-12 bg-orange-500" />
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-orange-300">
                Advisory
              </p>
            </div>
            <h2 className="display-xl text-white text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
              Let's build your <span className="font-bold">future</span> together.
            </h2>
            <p className="mt-6 text-[18px] md:text-[20px] text-white/90 leading-relaxed max-w-xl [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
              We're not trying to be another bank. We want to be the financial partner you
              trust at every stage of life and business. Open an account, or start a
              conversation with a banker who will still be here in a decade.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3.5">
              <Link
                to="/solutions/individuals"
                className="group inline-flex items-center justify-between gap-5 bg-orange-500 hover:bg-orange-600 text-white pl-7 pr-2 py-2 rounded-full font-bold text-[17px] transition-colors"
              >
                Open an account
                <span className="w-11 h-11 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
                  <ArrowRightIcon size={17} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/70 hover:border-white text-white px-7 py-4 rounded-full font-bold text-[17px] transition-colors"
              >
                Talk to a banker
              </Link>
            </div>
          </div>

          {/* Right — contact card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/20 bg-white/[0.05] backdrop-blur-sm p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.38)]">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-orange-500" />
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/70">
                  Open a conversation
                </p>
              </div>
              <div className="space-y-2.5">
                <ChannelRow href="tel:+263861200700" Icon={PhoneIcon} primary="+263 861 200 0700" secondary="Mon–Fri, 08:00–17:00 CAT" />
                <ChannelRow href="mailto:bank@bardsantner.co.zw" Icon={EnvelopeSimpleIcon} primary="bank@bardsantner.co.zw" secondary="Reply within one business day" truncate />
                <ChannelRow href="https://wa.me/263774954415" external Icon={ChatCircleIcon} primary="WhatsApp the desk" secondary="For existing clients" />
              </div>
              <Link
                to="/contact"
                className="btn w-full justify-center mt-6 bg-white text-navy-700 hover:bg-white/90"
              >
                Request a banker
                <ArrowRightIcon size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelRow({ href, Icon, primary, secondary, truncate = false, external = false }) {
  const props = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
  return (
    <a
      {...props}
      className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/20 hover:border-orange-400/70 hover:bg-white/[0.04] transition-colors group"
    >
      <span className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0 group-hover:bg-orange-500/25 transition-colors">
        <Icon size={18} weight="regular" className="text-orange-400" />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[15.5px] font-medium text-white leading-tight ${truncate ? "truncate" : ""}`}>
          {primary}
        </p>
        <p className="text-[12px] text-white/60 mt-0.5 leading-snug">{secondary}</p>
      </div>
      {external ? (
        <ArrowSquareOutIcon size={14} weight="bold" className="text-white/40 group-hover:text-orange-400 shrink-0 transition-colors" aria-label="opens in a new tab" />
      ) : (
        <ArrowRightIcon size={13} weight="bold" className="text-white/40 group-hover:text-orange-400 shrink-0 transition-colors" />
      )}
    </a>
  );
}
