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
          {/* Split hero — panel + photo. Sized so hero + QuickActionStrip
              together fill one viewport (nav + strip = 280 mobile, 236
              desktop). Plus the 24-40px container top-padding inside the
              split section, which is why split heroes are slightly
              shorter than full-bleed. */}
          <div className="grid grid-cols-12 gap-0 rounded-xl overflow-hidden min-h-[calc(100svh-320px)] md:min-h-[calc(100svh-276px)]">
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
        {/* Editorial hero — same shared-viewport math as full-bleed so
            scroll rhythm is consistent across hero variants. */}
        <div className="container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-236px)] flex flex-col justify-center py-12 md:py-16">
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
  // Lloyds-canonical image blending. The headline sits on the LEFT;
  // the photograph stays vibrant on the RIGHT. The dark gradient
  // fades horizontally from text-canvas (left) to clear (right):
  //
  //   Layer 1  Orange 2px accent rule at the very top — brand signature.
  //   Layer 2  Photograph filtered for editorial tonality:
  //              saturate(0.7) brightness(0.88) contrast(1.05)
  //   Layer 3  Light navy multiply tint (15%) — the brand-manual
  //            "multiplicate" move at low strength so it ties the
  //            whole image to the brand without dimming the right side.
  //   Layer 4  HORIZONTAL gradient — heavy navy at the left edge
  //            (where the headline sits), fading to transparent at
  //            ~55% of the width. From that point onward the
  //            photograph is fully visible. This is the Lloyds move:
  //            text canvas on the left, photo breathing on the right.
  //   Layer 5  Subtle top dim — keeps the nav legible without
  //            dimming the right side of the photograph.
  const tints = {
    navy: {
      multiply: "bg-navy-900/15",
      from: "from-navy-950/95",
      via: "via-navy-900/55",
      to: "to-transparent",
    },
    ink: {
      multiply: "bg-ink/15",
      from: "from-ink/95",
      via: "via-ink/55",
      to: "to-transparent",
    },
    orange: {
      multiply: "bg-orange-900/12",
      from: "from-orange-950/90",
      via: "via-orange-900/45",
      to: "to-transparent",
    },
  };
  const t = tints[overlayTint] || tints.navy;

  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Layer 1 — orange accent rule at the very top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />

      {/* Layer 2 — photograph with light editorial filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          filter: image ? "saturate(0.7) brightness(0.88) contrast(1.05)" : undefined,
        }}
      />

      {/* Layer 3 — very light multiply tint. Just enough to tie the
          photo's colour family to the brand. */}
      <div className={`absolute inset-0 ${t.multiply} mix-blend-multiply`} />

      {/* Layer 4 — horizontal text canvas. Heavy on the left (where the
          headline lives), clear on the right (where the photograph
          carries the editorial weight). This is the Lloyds gesture. */}
      <div className={`absolute inset-0 bg-gradient-to-r ${t.from} ${t.via} ${t.to}`} />

      {/* Layer 5 — soft top dim, light enough not to fight the right
          side of the photo. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-transparent" />
      {/* Full-bleed hero — sized so the bottom of the QuickActionStrip
          (the thin navy band of pills below the hero) lands exactly at
          the viewport's bottom edge. Measured heights:
            nav         = audience strip (44) + brand row (h-16/h-20)
                          = 108 mobile, 124 desktop
            strip       = py (48/56) + pill min-h (56) + mobile row gap
                          = 172 mobile (2-row), 112 desktop (1-row)
          ⇒ hero min-h = 100svh − nav − strip
                       = 100svh − 280 mobile
                       = 100svh − 236 desktop */}
      <div className="relative container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-236px)] flex flex-col justify-end pt-20 md:pt-24 pb-10 md:pb-14">
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
