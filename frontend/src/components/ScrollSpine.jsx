/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

/**
 * The "prospectus spine" — a slim vertical rule pinned in the left gutter with
 * a scroll-linked orange progress fill, the current section number above it and
 * the section label set vertically below. It recolours to each numbered
 * section's theme (white over dark grounds, navy over light) as that section
 * enters the viewport centre. Kept narrow so it sits in the margin and never
 * overlaps content. Desktop only.
 */
export default function ScrollSpine() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const [active, setActive] = useState(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-spine]"));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive({
              n: e.target.dataset.spineN,
              label: e.target.dataset.spine,
              dark: e.target.dataset.spineDark === "true",
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  if (!active) return null;
  const tone = active.dark ? "text-white/85" : "text-navy-600";

  return (
    <div className="fixed left-4 2xl:left-8 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-3 pointer-events-none select-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={active.n}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[14px] tabular-nums text-orange-500 leading-none"
        >
          {active.n}
        </motion.span>
      </AnimatePresence>

      <div className="relative w-px h-[34vh]">
        <div className={`absolute inset-0 w-px ${active.dark ? "bg-white/25" : "bg-navy-900/12"}`} />
        <motion.div
          className="absolute left-0 top-0 w-px h-full bg-orange-500 origin-top"
          style={{ scaleY: progress }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.span
          key={active.label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className={`text-[9.5px] tracking-[0.22em] uppercase font-semibold whitespace-nowrap ${tone}`}
          style={{ writingMode: "vertical-rl" }}
        >
          {active.label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
