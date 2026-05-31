import { Link } from "react-router-dom";
import { CaretRightIcon } from "@phosphor-icons/react";

/**
 * Quick-action strip — the Lloyds pattern. A thin band of 3-5 pills,
 * placed under the hero, containing the most likely user actions for
 * the audience in context.
 *
 * Brand colour band (navy) with white pills on top. The hover-state
 * is a subtle lift, not a colour swap, because the entire strip already
 * lives inside a brand-coloured panel.
 */
export default function QuickActionStrip({ actions = [], tint = "navy" }) {
  const tintBg =
    tint === "orange"
      ? "bg-orange-600"
      : "bg-navy-600";

  return (
    <section className={`${tintBg} text-white`}>
      <div className="container-bank py-6 md:py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {actions.map((a) => {
            const Comp = a.external ? "a" : Link;
            const linkProps = a.external
              ? { href: a.path, target: "_blank", rel: "noopener noreferrer" }
              : { to: a.path };
            return (
              <Comp
                key={a.label}
                {...linkProps}
                className="pill pill-outline"
              >
                <span className="text-[13.5px] md:text-[14px] font-medium leading-tight pr-2">
                  {a.label}
                </span>
                <CaretRightIcon size={14} weight="bold" className="shrink-0" />
              </Comp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
