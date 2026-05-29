import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";

/**
 * Institutional page hero. Three variants, all from the inspection brief:
 *
 *   variant="full-bleed"  — Lloyds "Almost home" / "Business banking that…"
 *                            full image + dark overlay + bottom-left text
 *   variant="split"        — Lloyds Club Lloyds: colour panel left + photo right
 *   variant="editorial"    — Investec "Welcome to Investec": large left text,
 *                            generous whitespace, mark or photo right
 */
export default function PageHero({
  eyebrow,
  headline,
  italicTail,
  body,
  primaryCTA,
  secondaryCTA,
  image,
  variant = "full-bleed",
  overlayTint = "navy", // "navy" | "ink" | "orange"
  align = "left",
  noteUnderCTA,
}) {
  if (variant === "split") {
    return (
      <section className="bg-white">
        <div className="container-bank pt-6 md:pt-10 pb-0">
          <div className="grid grid-cols-12 gap-0 rounded-xl overflow-hidden">
            <div className="col-span-12 md:col-span-6 bg-[color:var(--color-navy-600)] text-white p-10 md:p-14 lg:p-16 flex flex-col justify-center min-h-[420px]">
              {eyebrow && <p className="eyebrow eyebrow-on-dark mb-6">{eyebrow}</p>}
              <h1 className="display-xl text-white">
                {headline}
                {italicTail && (
                  <>
                    <br />
                    <span className="italic-accent text-[color:var(--color-orange-300)] font-light">
                      {italicTail}
                    </span>
                  </>
                )}
              </h1>
              {body && (
                <p className="mt-6 text-white/80 max-w-md text-[15px] md:text-[16px] leading-relaxed">
                  {body}
                </p>
              )}
              {(primaryCTA || secondaryCTA) && (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {primaryCTA && (
                    <Link to={primaryCTA.to} className="btn btn-primary">
                      {primaryCTA.label}
                      <ArrowRightIcon size={14} weight="bold" />
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link to={secondaryCTA.to} className="btn btn-ghost-dark">
                      {secondaryCTA.label}
                    </Link>
                  )}
                </div>
              )}
              {noteUnderCTA && (
                <p className="mt-4 text-[11.5px] text-white/55">{noteUnderCTA}</p>
              )}
            </div>
            <div
              className="col-span-12 md:col-span-6 min-h-[300px] md:min-h-[420px] bg-[color:var(--color-bone-200)]"
              style={{
                backgroundImage: image ? `url(${image})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "editorial") {
    return (
      <section className="bg-[color:var(--color-bone-50)]">
        <div className="container-bank section-lg">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="col-span-12 md:col-span-7">
              {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="display-hero text-[color:var(--color-navy-600)] text-balance"
              >
                {headline}
                {italicTail && (
                  <>
                    <br />
                    <span className="italic-accent text-[color:var(--color-orange-600)] font-light">
                      {italicTail}
                    </span>
                  </>
                )}
              </motion.h1>
              {body && (
                <p className="mt-8 text-[17px] md:text-[18px] text-[color:var(--color-bone-600)] max-w-xl leading-relaxed">
                  {body}
                </p>
              )}
              {(primaryCTA || secondaryCTA) && (
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  {primaryCTA && (
                    <Link to={primaryCTA.to} className="btn btn-primary">
                      {primaryCTA.label}
                      <ArrowRightIcon size={14} weight="bold" />
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link to={secondaryCTA.to} className="btn btn-ghost-light">
                      {secondaryCTA.label}
                    </Link>
                  )}
                </div>
              )}
              {noteUnderCTA && (
                <p className="mt-4 text-[12px] text-[color:var(--color-bone-500)]">
                  {noteUnderCTA}
                </p>
              )}
            </div>
            <div className="col-span-12 md:col-span-5 hidden md:block">
              <div
                className="aspect-[4/5] rounded-xl bg-[color:var(--color-bone-200)] bg-cover bg-center"
                style={{ backgroundImage: image ? `url(${image})` : undefined }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── default: full-bleed editorial hero ─────────────────────────
  const tints = {
    navy: "from-[color:var(--color-navy-900)]/85 via-[color:var(--color-navy-800)]/55 to-transparent",
    ink: "from-[color:var(--color-ink)]/85 via-[color:var(--color-ink)]/45 to-transparent",
    orange: "from-[color:var(--color-orange-800)]/85 via-[color:var(--color-orange-700)]/50 to-transparent",
  };

  return (
    <section className="relative overflow-hidden bg-[color:var(--color-navy-800)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: image ? `url(${image})` : undefined }}
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${tints[overlayTint] || tints.navy}`} />
      <div className="relative container-bank min-h-[560px] md:min-h-[640px] lg:min-h-[720px] flex flex-col justify-end pt-32 pb-16 md:pb-24">
        <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow eyebrow-on-dark mb-6"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="display-hero text-white text-balance"
          >
            {headline}
            {italicTail && (
              <>
                <br />
                <span className="italic-accent text-[color:var(--color-orange-300)] font-light">
                  {italicTail}
                </span>
              </>
            )}
          </motion.h1>
          {body && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 text-white/85 max-w-xl text-[16px] md:text-[18px] leading-relaxed"
            >
              {body}
            </motion.p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {primaryCTA && (
                <Link to={primaryCTA.to} className="btn btn-primary">
                  {primaryCTA.label}
                  <ArrowRightIcon size={14} weight="bold" />
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryCTA.to} className="btn btn-ghost-dark">
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}
          {noteUnderCTA && (
            <p className="mt-4 text-[11.5px] text-white/60">{noteUnderCTA}</p>
          )}
        </div>
      </div>
    </section>
  );
}
