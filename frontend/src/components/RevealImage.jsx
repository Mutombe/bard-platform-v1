import { useEffect, useRef, useState } from "react";

/**
 * A background-image panel that unmasks with a left-to-right clip-path wipe.
 *
 * Reliability first: the reveal is driven by a local IntersectionObserver with
 * a safety timeout, so the image ALWAYS ends visible even if the observer never
 * fires (the earlier framer whileInView version could leave images masked).
 * The wipe is a plain CSS transition.
 *
 *   onMount → reveal on mount (hero).
 *   default → reveal when scrolled into view.
 */
export default function RevealImage({ image, className = "", onMount = false }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (onMount) {
      const r = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(r);
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    // Safety net — never leave the image masked, whatever the observer does.
    const t = setTimeout(() => setShown(true), 1600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [onMount]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: `url(${image})`,
        filter: "var(--img-grade)",
        clipPath: shown ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        transition:
          "clip-path 900ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
      }}
    />
  );
}
