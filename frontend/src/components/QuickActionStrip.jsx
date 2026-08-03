import { Link } from "react-router-dom";
import { CaretRightIcon } from "@phosphor-icons/react";

/**
 * Quick-action strip — the Lloyds pattern: a short band of flat cells split by
 * hairline dividers, each a label + chevron. Clean bold lines, low height (one
 * row on desktop, 2×2 on mobile), sitting on the brand colour band.
 */
export default function QuickActionStrip({ actions = [], tint = "navy" }) {
  const tintBg = tint === "orange" ? "bg-orange-600" : "bg-navy-700";

  return (
    <section className={`${tintBg} text-white border-t border-white/25`}>
      {/* Full-bleed on mobile so the divider between the two decks runs edge
          to edge; container-aligned from md up. */}
      <div className="w-full md:mx-auto md:max-w-[1440px] px-0 md:px-[var(--container-pad-x)]">
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/30">
          {actions.map((a) => {
            const Comp = a.external ? "a" : Link;
            const linkProps = a.external
              ? { href: a.path, target: "_blank", rel: "noopener noreferrer" }
              : { to: a.path };
            return (
              <Comp
                key={a.label}
                {...linkProps}
                className="group flex items-center justify-between gap-3 h-14 md:h-auto px-5 md:px-7 md:py-5 hover:bg-white/[0.07] transition-colors border-b border-white/25 md:border-b-0"
              >
                <span className="text-[14.5px] md:text-[16.5px] font-bold leading-tight">
                  {a.label}
                </span>
                <CaretRightIcon
                  size={15}
                  weight="bold"
                  className="shrink-0 opacity-70 group-hover:translate-x-1 transition-transform"
                />
              </Comp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
