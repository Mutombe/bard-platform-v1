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
          {/* Split hero — colour panel + photo. Sized so the section
              below sits within the same first viewport. */}
          <div className="grid grid-cols-12 gap-0 rounded-xl overflow-hidden min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-260px)]">
            <div className="col-span-12 md:col-span-6 bg-navy-600 text-white p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              {eyebrow && <p className="eyebrow eyebrow-on-dark mb-6">{eyebrow}</p>}
              <h1 className="display-xl text-white">
                {headline}
                {italicTail && (
                  <>
                    <br />
                    <span className="text-white">
                      {italicTail}
                    </span>
                  </>
                )}
              </h1>
              {body && (
                <p className="mt-7 text-white/80 max-w-md text-[16.5px] md:text-[18px] leading-relaxed">
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
              className="col-span-12 md:col-span-6 min-h-[280px] md:min-h-0 bg-bone-200"
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
      <section className="bg-bone-50">
        {/* Editorial hero — generous whitespace, no overlay photography.
            min-h carries the floor; no max-h so long content expands. */}
        <div className="container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-260px)] flex flex-col justify-center py-12 md:py-16">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="col-span-12 md:col-span-8">
              {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="display-hero text-navy-600 text-balance"
              >
                {headline}
                {italicTail && (
                  <>
                    <br />
                    <span className="text-navy-600">
                      {italicTail}
                    </span>
                  </>
                )}
              </motion.h1>
              {body && (
                <p className="mt-10 text-[18px] md:text-[20px] text-bone-600 max-w-xl leading-relaxed">
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
                <p className="mt-4 text-[12px] text-bone-500">
                  {noteUnderCTA}
                </p>
              )}
            </div>
            <div className="col-span-12 md:col-span-4 hidden md:block">
              <div
                className="aspect-[4/5] rounded-xl bg-bone-200 bg-cover bg-center"
                style={{ backgroundImage: image ? `url(${image})` : undefined }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── default: full-bleed editorial hero ─────────────────────────
  // Lloyds-style image blending. Three layers:
  //   1. The photograph, slightly desaturated and dimmed via filter
  //      so it reads as institutional editorial rather than stock
  //      brochureware.
  //   2. A diagonal-to-bottom-left navy gradient that lands ~85%
  //      opaque under the text and fades to transparent toward the
  //      top-right corner — gives the headline a dark canvas to
  //      sit on without flooding the whole image.
  //   3. A second top-down gradient to keep the upper area subtly
  //      dimmed so the nav doesn't fight low-contrast sky / windows.
  const tints = {
    navy: {
      from: "from-navy-900/90",
      via: "via-navy-800/55",
      to: "to-navy-900/15",
    },
    ink: {
      from: "from-ink/90",
      via: "via-ink/55",
      to: "to-ink/15",
    },
    orange: {
      from: "from-orange-900/85",
      via: "via-orange-800/50",
      to: "to-orange-900/10",
    },
  };
  const t = tints[overlayTint] || tints.navy;

  return (
    <section className="relative overflow-hidden bg-navy-800">
      {/* Photograph — desaturated 20%, slightly dimmed for editorial tone */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          filter: image ? "saturate(0.78) brightness(0.85) contrast(1.05)" : undefined,
        }}
      />
      {/* Bottom-left dark gradient — text canvas */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${t.from} ${t.via} ${t.to}`} />
      {/* Top dim — subtle, keeps the upper-area legible under the nav */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-transparent" />
      {/* Full-bleed hero — min-h sized so hero + QuickActionStrip share
          one viewport (nav 124px + strip 96px + breathing 36px = 260
          subtraction). No max-h cap; if content needs more room the
          hero expands rather than clipping the top. Governing brevity
          happens at the page level — keep hero copy Lloyds-short. */}
      <div className="relative container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-260px)] flex flex-col justify-end pt-20 md:pt-24 pb-10 md:pb-14">
        <div className={`max-w-4xl lg:max-w-5xl ${align === "center" ? "mx-auto text-center" : ""}`}>
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
                <span className="text-white">
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
              className="mt-7 md:mt-9 text-white/85 max-w-xl text-[17px] md:text-[19px] leading-relaxed"
            >
              {body}
            </motion.p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
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
