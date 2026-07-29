import { motion } from "framer-motion";

/**
 * A background-image panel that unmasks with a left-to-right clip-path wipe
 * instead of a plain fade — the "a designer touched the motion" tell. Every
 * foreground image shares the one house grade (--img-grade).
 *
 *   onMount  → reveal immediately (hero).
 *   default  → reveal when scrolled into view (cards, features).
 */
export default function RevealImage({ image, className = "", onMount = false }) {
  const shown = { clipPath: "inset(0 0% 0 0)" };
  const hidden = { clipPath: "inset(0 100% 0 0)" };
  const anim = onMount
    ? { animate: shown }
    : { whileInView: shown, viewport: { once: true, margin: "-12%" } };
  return (
    <motion.div
      className={className}
      style={{ backgroundImage: `url(${image})`, filter: "var(--img-grade)" }}
      initial={hidden}
      {...anim}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
