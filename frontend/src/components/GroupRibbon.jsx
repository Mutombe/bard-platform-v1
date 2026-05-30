import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Monogram from "./Monogram.jsx";
import { GROUP_ENTITIES } from "../data/group.js";

/**
 * The "this is Lloyds Wealth" sub-brand card pattern, applied to the
 * Bard Santner Group. Each of the 5 entities (BSMFB, Markets, Loans,
 * Golf, Journal) gets a dark rounded card with its mark, tagline, body,
 * and a white CTA.
 *
 * Renders as a horizontal sequence on the home page and as a vertical
 * stack on /group.
 */
export default function GroupRibbon({ vertical = false }) {
  return (
    <section className="section bg-[color:var(--color-ink)] text-white monogram-bg">
      <div className="container-bank">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="eyebrow eyebrow-on-dark mb-4">§ 03 · The Group</p>
          <h2 className="display-xl text-white">
            Five institutions.{" "}
            <span className="italic-accent text-[color:var(--color-orange-300)] font-light">
              One discipline.
            </span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-2xl">
            Bard Santner is a financial platform, not a single product.
            The bank sits at the centre. Around it sit four sister
            institutions that share the standard.
          </p>
        </div>

        <div
          className={
            vertical
              ? "flex flex-col gap-5"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          }
        >
          {GROUP_ENTITIES.map((e) => (
            <Link
              key={e.id}
              to={e.href}
              className="group relative block rounded-xl overflow-hidden bg-[color:var(--color-navy-800)] border border-white/5 hover:border-white/20 transition-colors p-8 lg:p-10 min-h-[300px] flex flex-col"
            >
              {/* Accent rule */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: e.accent }}
              />
              <div className="flex items-start justify-between mb-8">
                <Monogram size={32} color={e.accent} />
                <span className="text-[11px] tracking-[0.18em] uppercase text-white/40">
                  {e.role}
                </span>
              </div>
              <p className="font-display text-[20px] md:text-[22px] text-white mb-3 leading-tight">
                {e.name}
              </p>
              <p className="text-[14px] text-white/70 leading-relaxed mb-8 flex-1">
                {e.tagline}
              </p>
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white group-hover:text-[color:var(--color-orange-300)] transition-colors">
                {e.cta}
                <ArrowRightIcon size={13} weight="bold" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
