import { Link } from "react-router-dom";
import { CaretRightIcon } from "@phosphor-icons/react";
import { useComingSoon, isPortalPath } from "./Toast.jsx";

/**
 * Quick-action strip — the Lloyds pattern: a short band of flat cells split by
 * hairline dividers, each a label + chevron. Clean bold lines, low height (one
 * row on desktop, 2×2 on mobile), sitting on the brand colour band.
 */
export default function QuickActionStrip({ actions = [], tint = "navy" }) {
  const tintBg = tint === "orange" ? "bg-orange-600" : "bg-navy-700";
  const comingSoon = useComingSoon();

  const cellClass =
    "group flex items-center justify-between gap-3 h-28 md:h-auto px-5 md:px-7 md:py-5 hover:bg-white/[0.07] transition-colors border-b border-white/25 md:border-b-0";

  return (
    <section className={`${tintBg} text-white border-t border-white/25`}>
      {/* Full-bleed on mobile so the divider between the two decks runs edge
          to edge; container-aligned from md up. */}
      <div className="w-full md:mx-auto md:max-w-[1440px] px-0 md:px-[var(--container-pad-x)]">
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/30">
          {actions.map((a) => {
            const label = (
              <>
                <span className="text-[14.5px] md:text-[16.5px] font-bold leading-tight">
                  {a.label}
                </span>
                <CaretRightIcon
                  size={15}
                  weight="bold"
                  className="shrink-0 opacity-70 group-hover:translate-x-1 transition-transform"
                />
              </>
            );
            // Online Banking portal isn't live yet — toast instead of routing.
            if (isPortalPath(a.path)) {
              return (
                <button key={a.label} type="button" onClick={comingSoon} className={`${cellClass} text-left`}>
                  {label}
                </button>
              );
            }
            if (a.external) {
              return (
                <a key={a.label} href={a.path} target="_blank" rel="noopener noreferrer" className={cellClass}>
                  {label}
                </a>
              );
            }
            return (
              <Link key={a.label} to={a.path} className={cellClass}>
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
