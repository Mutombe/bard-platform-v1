import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { INSIGHT } from "../data/images.js";

/**
 * Editorial insights rail. Three to four article cards plus a "View all
 * insights" link. Used on the home page, on each audience landing, and
 * at the bottom of product pages.
 *
 * Models the editorial card pattern from Investec / Lloyds Insights.
 */
export default function InsightsRail({ heading, eyebrow, items = [] }) {
  return (
    <section className="section bg-white">
      <div className="container-bank">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
          <div>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="display-xl text-navy-600 text-balance max-w-2xl">
              {heading}
            </h2>
          </div>
          <Link to="/insights" className="hover-line text-[14px] font-medium text-orange-600">
            View all insights →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.slice(0, 3).map((it, i) => (
            <motion.article
              key={it.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/insights/${it.slug}`} className="block group">
                <div
                  className="aspect-[16/10] rounded-lg overflow-hidden bg-bone-200 bg-cover bg-center mb-7"
                  style={{
                    backgroundImage: `url(${INSIGHT[it.slug] || it.image || ""})`,
                    filter: "saturate(0.85) brightness(0.95)",
                  }}
                />
                <p className="eyebrow eyebrow-accent mb-4">{it.eyebrow}</p>
                <h3 className="font-display text-[24px] md:text-[26px] text-navy-600 leading-tight mb-4 group-hover:text-orange-600 transition-colors">
                  {it.title}
                </h3>
                <p className="text-[15.5px] text-bone-600 leading-relaxed mb-5">
                  {it.summary}
                </p>
                <p className="text-[13px] text-bone-500 flex items-center gap-3">
                  <span>{it.author}</span>
                  <span className="w-1 h-1 rounded-full bg-bone-400" />
                  <span>{it.reading_minutes} min read</span>
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
