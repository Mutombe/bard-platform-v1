import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowSquareOutIcon } from "@phosphor-icons/react";

// CTA helper — when the destination starts with http(s) we render an
// anchor (and open it in a new tab); otherwise the standard Router Link.
// Lets pages pass external URLs (e.g. the online-banking portal) in
// the same shape as internal routes.
function HeroCTA({ cta, className, withArrow = false }) {
  if (!cta) return null;
  const isExternal = /^https?:\/\//.test(cta.to);
  const inner = (
    <>
      {cta.label}
      {isExternal ? (
        <ArrowSquareOutIcon size={14} weight="bold" aria-label="opens in a new tab" />
      ) : (
        withArrow && <ArrowRightIcon size={14} weight="bold" />
      )}
    </>
  );
  if (isExternal) {
    return (
      <a href={cta.to} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={cta.to} className={className}>
      {inner}
    </Link>
  );
}

/**
 * Institutional page hero. Three variants:
 *
 *   variant="full-bleed"  — Lloyds "Almost home" full image + dark overlay + bottom-left text
 *   variant="split"        — Lloyds Club Lloyds: colour panel left + photo right
 *   variant="editorial"    — Investec: large left text, generous whitespace, aside right
 *
 * MOBILE BEHAVIOUR (every variant):
 *   On mobile (<md) every hero — regardless of declared variant — renders
 *   as a full-bleed image hero with white headline overlaid on the
 *   photograph. This is the Lloyds / AfrAsia / Investec mobile pattern.
 *   The variant choice only governs DESKTOP layout. The mobile experience
 *   is consistent: image-led, dramatic, identical rhythm site-wide.
 *
 *   The desktop asides (HoneycombAside / TriptychAside / etc.) stay
 *   desktop-only — they are composed for a 460px right column and don't
 *   survive a 343px mobile container.
 */
export default function PageHero(props) {
  const { variant = "full-bleed" } = props;

  // Full-bleed is already mobile-and-desktop full-bleed by design.
  if (variant === "full-bleed") {
    return <FullBleedHero {...props} />;
  }

  // Editorial and split: render a mobile full-bleed AND a desktop layout.
  // Tailwind's responsive utilities show/hide the right one.
  return (
    <>
      <div className="md:hidden">
        <FullBleedHero {...props} />
      </div>
      <div className="hidden md:block">
        {variant === "editorial" ? <EditorialDesktopHero {...props} /> : <SplitDesktopHero {...props} />}
      </div>
    </>
  );
}

// ─── Shared: full-bleed image hero with parallax + overlays ───────────
function FullBleedHero({
  eyebrow,
  headline,
  italicTail,
  body,
  primaryCTA,
  secondaryCTA,
  image,
  imagePosition = "center 28%",
  align = "left",
  noteUnderCTA,
}) {
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
    <section ref={heroRef} className="relative overflow-hidden bg-[#140d05]">
      {/* L1 — orange accent rule at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 z-20" />

      {/* L2 — photograph, warmed (not cooled) + parallax */}
      <motion.div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundPosition: imagePosition,
          filter: image ? "saturate(1.05) contrast(1.03) brightness(0.92) sepia(0.14)" : undefined,
          y: photoY,
          scale: photoScale,
        }}
      />

      {/* Warm overlay only (matching the home hero): an even warm veil keeps
          the whole photo visible, then a gentle warm lift on the copy side
          plus an orange glow carries legibility — no cold navy scrim. */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(18,11,4,0.30)" }} />
      <div
        className="absolute inset-0 hidden md:block pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(14,9,3,0.64) 0%, rgba(14,9,3,0.3) 38%, rgba(14,9,3,0.04) 68%, transparent 100%), linear-gradient(to top, rgba(14,9,3,0.5) 0%, rgba(14,9,3,0.12) 44%, transparent 74%), radial-gradient(92% 96% at 18% 52%, rgba(238,125,54,0.15), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(14,9,3,0.9) 0%, rgba(14,9,3,0.55) 40%, rgba(14,9,3,0.25) 100%), radial-gradient(110% 70% at 50% 82%, rgba(238,125,54,0.14), transparent 66%)",
        }}
      />

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
              className="eyebrow eyebrow-on-dark mb-5 md:mb-6 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="display-hero text-white text-balance [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]"
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
              className="mt-6 md:mt-9 text-white/90 max-w-xl text-[17px] md:text-[20px] leading-relaxed [text-shadow:0_1px_16px_rgba(0,0,0,0.45)]"
            >
              {body}
            </motion.p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
              <HeroCTA cta={primaryCTA} withArrow className="btn btn-primary w-full sm:w-auto justify-center whitespace-normal text-center" />
              <HeroCTA cta={secondaryCTA} className="btn btn-ghost-dark w-full sm:w-auto justify-center whitespace-normal text-center" />
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

// ─── Desktop editorial layout — text left, aside right ─────────────
function EditorialDesktopHero({
  eyebrow,
  headline,
  italicTail,
  body,
  primaryCTA,
  secondaryCTA,
  image,
  aside,
  noteUnderCTA,
}) {
  return (
    <section className="bg-milk">
      <div className="container-bank min-h-[calc(100svh-236px)] flex flex-col justify-center py-16">
        <div className="grid grid-cols-12 gap-14 items-center">
          <div className="col-span-8">
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
                  <span className="text-navy-600">{italicTail}</span>
                </>
              )}
            </motion.h1>
            {body && (
              <p className="mt-10 text-[21px] text-bone-600 max-w-xl leading-relaxed">
                {body}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <HeroCTA cta={primaryCTA} withArrow className="btn btn-primary" />
                <HeroCTA cta={secondaryCTA} className="btn btn-ghost-light" />
              </div>
            )}
            {noteUnderCTA && (
              <p className="mt-4 text-[12px] text-bone-500">{noteUnderCTA}</p>
            )}
          </div>
          <div className="col-span-4">
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

// ─── Desktop split layout — panel + photo ─────────────────────────
function SplitDesktopHero({
  eyebrow,
  headline,
  italicTail,
  body,
  primaryCTA,
  secondaryCTA,
  image,
  noteUnderCTA,
}) {
  return (
    <section className="bg-milk">
      <div className="container-bank pt-10 pb-0">
        <div className="grid grid-cols-12 gap-0 rounded-xl overflow-hidden min-h-[calc(100svh-276px)]">
          <div className="col-span-6 bg-navy-700 text-white p-14 lg:p-16 flex flex-col justify-center">
            {eyebrow && <p className="eyebrow eyebrow-on-dark mb-6">{eyebrow}</p>}
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
              <p className="mt-7 text-white/80 max-w-md text-[19px] leading-relaxed">
                {body}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <HeroCTA cta={primaryCTA} withArrow className="btn btn-primary" />
                <HeroCTA cta={secondaryCTA} className="btn btn-ghost-dark" />
              </div>
            )}
            {noteUnderCTA && (
              <p className="mt-4 text-[11.5px] text-white/55">{noteUnderCTA}</p>
            )}
          </div>
          <div
            className="col-span-6 bg-bone-200"
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
