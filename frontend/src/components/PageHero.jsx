import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
 *
 * Mobile considerations:
 *  • Full-bleed adds a vertical bottom-up overlay on small viewports so
 *    the white headline survives the photograph regardless of where the
 *    horizontal fade clears. Desktop keeps the horizontal Lloyds fade.
 *  • Editorial on mobile renders a single 16:9 hero image below the text
 *    block — the desktop aside (honeycomb / triptych / etc.) stays
 *    desktop-only, the mobile gets a quieter editorial gesture instead.
 *  • Split on mobile stacks panel + photo with explicit min-heights so
 *    each gets a confident vertical share instead of collapsing.
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
  overlayTint = "navy",
  align = "left",
  noteUnderCTA,
  aside,
}) {
  if (variant === "split") {
    return (
      <section className="bg-milk">
        <div className="container-bank pt-6 md:pt-10 pb-0">
          <div className="grid grid-cols-12 gap-0 rounded-xl overflow-hidden min-h-[calc(100svh-320px)] md:min-h-[calc(100svh-276px)]">
            <div className="col-span-12 md:col-span-6 bg-navy-600 text-white px-7 py-10 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center">
              {eyebrow && <p className="eyebrow eyebrow-on-dark mb-5 md:mb-6">{eyebrow}</p>}
              <h1 className="display-xl text-white">
                {headline}
                {italicTail && (
                  <>
                    <br />
                    <span className="text-white">{italicTail}</span>
                  </>
                )}
              </h1>
              {body && (
                <p className="mt-6 md:mt-7 text-white/80 max-w-md text-[16px] md:text-[18px] leading-relaxed">
                  {body}
                </p>
              )}
              {(primaryCTA || secondaryCTA) && (
                <div className="mt-7 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                  {primaryCTA && (
                    <Link to={primaryCTA.to} className="btn btn-primary w-full sm:w-auto justify-center">
                      {primaryCTA.label}
                      <ArrowRightIcon size={14} weight="bold" />
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link to={secondaryCTA.to} className="btn btn-ghost-dark w-full sm:w-auto justify-center">
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
              className="col-span-12 md:col-span-6 min-h-[240px] md:min-h-0 bg-bone-200"
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
      <section className="bg-milk">
        {/* Editorial hero — text on the left (full width on mobile), aside
            on the right at md+ only. On mobile we render a single 16:9
            photo below the CTAs as a quieter editorial gesture, because
            the elaborate desktop asides (honeycomb / triptych) don't
            fit a 343px column without losing their compositional logic. */}
        <div className="container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-236px)] flex flex-col justify-center py-12 md:py-16">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="col-span-12 md:col-span-8">
              {eyebrow && <p className="eyebrow mb-5 md:mb-6">{eyebrow}</p>}
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
                    <span className="text-navy-600">{italicTail}</span>
                  </>
                )}
              </motion.h1>
              {body && (
                <p className="mt-7 md:mt-10 text-[17px] md:text-[20px] text-bone-600 max-w-xl leading-relaxed">
                  {body}
                </p>
              )}
              {(primaryCTA || secondaryCTA) && (
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                  {primaryCTA && (
                    <Link to={primaryCTA.to} className="btn btn-primary w-full sm:w-auto justify-center">
                      {primaryCTA.label}
                      <ArrowRightIcon size={14} weight="bold" />
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link to={secondaryCTA.to} className="btn btn-ghost-light w-full sm:w-auto justify-center">
                      {secondaryCTA.label}
                    </Link>
                  )}
                </div>
              )}
              {noteUnderCTA && (
                <p className="mt-4 text-[12px] text-bone-500">{noteUnderCTA}</p>
              )}

              {/* Mobile-only editorial gesture — single 16:9 photo below the
                  CTAs. Desktop ignores this; the aside on the right takes
                  the visual weight there. */}
              {image && (
                <div className="md:hidden mt-10">
                  <div
                    className="aspect-[16/10] rounded-lg bg-cover bg-center bg-bone-200"
                    style={{
                      backgroundImage: `url(${image})`,
                      filter: "saturate(0.78) brightness(0.94)",
                    }}
                  />
                </div>
              )}
            </div>
            <div className="col-span-12 md:col-span-4 hidden md:block">
              {aside ? (
                aside
              ) : (
                <div
                  className="aspect-[4/5] rounded-xl bg-bone-200 bg-cover bg-center"
                  style={{ backgroundImage: image ? `url(${image})` : undefined }}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── default: full-bleed editorial hero ─────────────────────────
  const tints = {
    navy: {
      multiply: "bg-navy-900/15",
      from: "from-navy-950/95",
      via: "via-navy-900/55",
      to: "to-transparent",
      mobileBottom: "from-navy-950/85",
    },
    ink: {
      multiply: "bg-ink/15",
      from: "from-ink/95",
      via: "via-ink/55",
      to: "to-transparent",
      mobileBottom: "from-ink/85",
    },
    orange: {
      multiply: "bg-orange-900/12",
      from: "from-orange-950/90",
      via: "via-orange-900/45",
      to: "to-transparent",
      mobileBottom: "from-orange-950/85",
    },
  };
  const t = tints[overlayTint] || tints.navy;

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-navy-900">
      {/* Layer 1 — orange accent rule at the very top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />

      {/* Layer 2 — photograph with light editorial filter + parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          filter: image ? "saturate(0.7) brightness(0.88) contrast(1.05)" : undefined,
          y: photoY,
          scale: photoScale,
        }}
      />

      {/* Layer 3 — very light multiply tint */}
      <div className={`absolute inset-0 ${t.multiply} mix-blend-multiply`} />

      {/* Layer 4 — horizontal text canvas (desktop only). On mobile the
          headline takes the full content width, so the horizontal Lloyds
          fade would leave the right edge of the text hovering over a
          clear photo. Mobile uses a bottom-up vertical fade instead so
          the headline always sits on a dark canvas regardless of column
          width. */}
      <div className={`absolute inset-0 hidden md:block bg-gradient-to-r ${t.from} ${t.via} ${t.to}`} />
      <div className={`absolute inset-0 md:hidden bg-gradient-to-t ${t.mobileBottom} via-ink/55 via-50% to-ink/30`} />

      {/* Layer 5 — soft top dim */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-transparent" />

      <div className="relative container-bank min-h-[calc(100svh-280px)] md:min-h-[calc(100svh-236px)] flex flex-col justify-center pt-14 md:pt-28 pb-14 md:pb-28">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className={`max-w-4xl lg:max-w-5xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="eyebrow eyebrow-on-dark mb-5 md:mb-6"
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
                <span className="text-white">{italicTail}</span>
              </>
            )}
          </motion.h1>
          {body && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 md:mt-9 text-white/85 max-w-xl text-[16px] md:text-[19px] leading-relaxed"
            >
              {body}
            </motion.p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
              {primaryCTA && (
                <Link to={primaryCTA.to} className="btn btn-primary w-full sm:w-auto justify-center">
                  {primaryCTA.label}
                  <ArrowRightIcon size={14} weight="bold" />
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryCTA.to} className="btn btn-ghost-dark w-full sm:w-auto justify-center">
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}
          {noteUnderCTA && (
            <p className="mt-4 text-[11.5px] text-white/60">{noteUnderCTA}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
