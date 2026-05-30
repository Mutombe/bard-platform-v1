import { motion } from "framer-motion";

/**
 * Stats Band — the institutional gravitas module. Big numbers, restrained
 * captions, generous whitespace. Models the "Investec — 7 markets, 5,500
 * people" pattern and AfrAsia's market-data tiles.
 *
 * Five figures across, separated by hairlines. Numbers in display-xl,
 * captions in micro-eyebrow style underneath.
 *
 * Numbers here are the institutional posture — directional, not audited.
 * Swap with real audited figures before launch.
 */
const FIGURES = [
  { value: "5",      unit: "",   label: "Institutions in the Group" },
  { value: "40",     unit: "+",  label: "Correspondent banking jurisdictions" },
  { value: "6",      unit: "",   label: "Branches and desks across three continents" },
  { value: "08:00",  unit: " CAT", label: "Day starts. Bankers reachable by 08:01" },
  { value: "MMXX",   unit: "",   label: "Roman numerals optional. The discipline isn't." },
];

export default function StatsBand() {
  return (
    <section className="bg-white border-t-2 border-orange-500 border-b border-bone-200">
      <div className="container-bank py-16 md:py-24">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-[2px] w-12 bg-orange-500" />
            <p className="eyebrow eyebrow-accent">§ 04 · By the numbers</p>
          </div>
          <h2 className="display-xl text-navy-600 text-balance">
            The institution as a measurable thing.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 border-l border-bone-200">
          {FIGURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-r border-bone-200 py-8 md:py-10 px-6 md:px-8"
            >
              <p className="font-display text-[44px] md:text-[56px] lg:text-[64px] font-medium text-navy-600 leading-[0.95] tracking-[-0.03em] mb-3">
                {f.value}
                {f.unit && (
                  <span className="text-orange-500 text-[0.55em] align-baseline ml-0.5">
                    {f.unit}
                  </span>
                )}
              </p>
              <p className="text-[13px] md:text-[13.5px] text-bone-600 leading-relaxed max-w-[200px]">
                {f.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
