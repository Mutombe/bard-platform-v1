import { Link } from "react-router-dom";
import { CaretRightIcon } from "@phosphor-icons/react";

/**
 * Quick-action strip — the Lloyds pattern: a short band of flat cells split by
 * hairline dividers, each a label + chevron. Clean bold lines, low height (one
 * row on desktop, 2×2 on mobile), sitting on the brand colour band.
 */
export default function QuickActionStrip({ actions = [], tint = "navy" }) {
  const tintBg = tint === "orange" ? "bg-orange-600" : "bg-navy-600";

  return (
    <section className={`${tintBg} text-white`}>
      <div className="container-bank">
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/15 border-t border-white/10">
          {actions.map((a) => {
            const Comp = a.external ? "a" : Link;
            const linkProps = a.external
              ? { href: a.path, target: "_blank", rel: "noopener noreferrer" }
              : { to: a.path };
            return (
              <Comp
                key={a.label}
                {...linkProps}
                className="group flex items-center justify-between gap-3 px-4 md:px-7 py-4 md:py-5 hover:bg-white/[0.07] transition-colors border-b border-white/10 md:border-b-0"
              >
                <span className="text-[13.5px] md:text-[15px] font-medium leading-tight">
                  {a.label}
                </span>
                <CaretRightIcon
                  size={14}
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
