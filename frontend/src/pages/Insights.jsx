import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO, INSIGHT } from "../data/images.js";
import { INSIGHTS } from "../data/insights.js";
import { AUDIENCES } from "../data/audiences.js";

const FILTERS = [{ id: "all", label: "All" }, ...AUDIENCES.map((a) => ({ id: a.id, label: a.label }))];

export default function Insights() {
  const [filter, setFilter] = useState("all");
  const items = filter === "all" ? INSIGHTS : INSIGHTS.filter((i) => i.audience.includes(filter));
  const [lead, ...rest] = items;

  return (
    <PageTransition>
      <SEO
        title="Insights"
        description="Editorial commentary from Bard Santner. On the diaspora, the corridor, the deposit base, and the obligations a bank inherits the moment it opens its first account."
        path="/insights"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])]}
      />
      <PageHero
        eyebrow="§ Insights"
        headline="Reading from the desk."
        body="Editorial commentary by the people who run the desks. Bardiq Journal carries the long form."
        image={HERO.insights}
        overlayTint="navy"
        variant="editorial"
      />

      {/* Filter bar */}
      <section className="bg-milk border-b border-bone-200 sticky top-[64px] md:top-[80px] z-30">
        <div className="container-bank py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap ${
                  filter === f.id
                    ? "bg-navy-600 text-white"
                    : "bg-smoke text-navy-600 hover:bg-bone-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lead article */}
      {lead && (
        <section className="bg-milk section">
          <div className="container-bank">
            <Link to={`/insights/${lead.slug}`} className="group grid grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="col-span-12 md:col-span-7">
                <div
                  className="aspect-[16/10] rounded-lg bg-cover bg-center bg-bone-200 overflow-hidden"
                  style={{
                    backgroundImage: `url(${INSIGHT[lead.slug] || lead.image || ""})`,
                    filter: "saturate(0.85) brightness(0.95)",
                  }}
                />
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="eyebrow eyebrow-accent mb-3">{lead.eyebrow} · Featured</p>
                <h2 className="display-lg text-navy-600 mb-5 group-hover:text-orange-600 transition-colors">
                  {lead.title}
                </h2>
                <p className="text-[16px] text-bone-600 leading-relaxed mb-6">
                  {lead.summary}
                </p>
                <p className="text-[12.5px] text-bone-500 flex items-center gap-3">
                  <span>{lead.author}</span>
                  <span className="w-1 h-1 rounded-full bg-bone-400" />
                  <span>{lead.reading_minutes} min read</span>
                  <span className="w-1 h-1 rounded-full bg-bone-400" />
                  <span>{new Date(lead.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Remaining grid */}
      {rest.length > 0 && (
        <section className="bg-milk section">
          <div className="container-bank">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((it, i) => (
                <motion.article
                  key={it.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bank-card flex flex-col"
                >
                  <Link to={`/insights/${it.slug}`} className="block">
                    <div
                      className="aspect-[16/10] bg-cover bg-center bg-bone-200 overflow-hidden"
                      style={{
                        backgroundImage: `url(${INSIGHT[it.slug] || it.image || ""})`,
                        filter: "saturate(0.85) brightness(0.95)",
                      }}
                    />
                  </Link>
                  <div className="p-8 md:p-9 flex-1 flex flex-col">
                    <p className="eyebrow eyebrow-accent mb-2">{it.eyebrow}</p>
                    <h3 className="font-display text-[20px] text-navy-600 mb-3 leading-tight">
                      <Link to={`/insights/${it.slug}`} className="hover:text-orange-600 transition-colors">
                        {it.title}
                      </Link>
                    </h3>
                    <p className="text-[14px] text-bone-600 leading-relaxed mb-4 flex-1">
                      {it.summary}
                    </p>
                    <p className="text-[12px] text-bone-500 flex items-center gap-2">
                      <span>{it.author}</span>
                      <span className="w-1 h-1 rounded-full bg-bone-400" />
                      <span>{it.reading_minutes} min</span>
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <AdvisoryBand />
    </PageTransition>
  );
}
