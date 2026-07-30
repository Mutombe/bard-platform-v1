import { useEffect, useRef, useState } from "react";

/**
 * Typewriter — types a phrase, holds, erases, and types the next, forever.
 *
 * Engineered for a premium feel rather than a mechanical one:
 *   • the first phrase renders in full on mount (clean initial paint + SSR),
 *     then the loop begins by erasing it — no empty flash on load;
 *   • per-character cadence is jittered so the typing reads human, not metronomic;
 *   • erasing runs faster than typing (the way people actually delete);
 *   • the caret holds SOLID while characters move and only blinks when idle,
 *     which is the detail that sells the illusion;
 *   • honours prefers-reduced-motion by showing the first phrase, statically.
 *
 * The animated text is aria-hidden; pass an accessible copy of the sentence
 * around the component for screen readers.
 */
export default function Typewriter({ phrases, className = "" }) {
  const [display, setDisplay] = useState(phrases[0]);
  const [moving, setMoving] = useState(false); // caret solid while true, blinks while false
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const timer = useRef(null);

  useEffect(() => {
    if (reduced) {
      setDisplay(phrases[0]);
      return;
    }

    let alive = true;
    let pi = 0;
    let ci = phrases[0].length; // start with the first phrase fully typed
    let mode = "holding";

    const jitter = (base, spread) => base + Math.random() * spread;

    const step = () => {
      if (!alive) return;
      const word = phrases[pi];

      if (mode === "typing") {
        setMoving(true);
        ci += 1;
        setDisplay(word.slice(0, ci));
        if (ci >= word.length) {
          mode = "holding";
          timer.current = setTimeout(step, 1650); // dwell on the finished phrase
        } else {
          // slower after a space, so words land in beats
          const slow = word[ci - 1] === " ";
          timer.current = setTimeout(step, jitter(slow ? 130 : 52, 60));
        }
      } else if (mode === "holding") {
        setMoving(false); // let the caret blink during the pause
        mode = "erasing";
        timer.current = setTimeout(step, 520);
      } else {
        // erasing
        setMoving(true);
        ci -= 1;
        setDisplay(word.slice(0, Math.max(0, ci)));
        if (ci <= 0) {
          pi = (pi + 1) % phrases.length;
          mode = "typing";
          timer.current = setTimeout(step, jitter(260, 140)); // breath before the next word
        } else {
          timer.current = setTimeout(step, jitter(26, 26));
        }
      }
    };

    timer.current = setTimeout(step, 1650); // hold the initial phrase, then go
    return () => {
      alive = false;
      clearTimeout(timer.current);
    };
  }, [phrases, reduced]);

  return (
    <span className={className} aria-hidden="true">
      {display}
      {!reduced && <span className={`tw-caret${moving ? " tw-caret-solid" : ""}`} />}
    </span>
  );
}
