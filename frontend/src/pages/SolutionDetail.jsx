import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircleIcon, ArrowUpRightIcon, ArrowLeftIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import NotFound from "./NotFound.jsx";

import { findSolutionBlock, blockSlug } from "../data/solutions.js";

/**
 * /solutions/:slug/:capability — the detail page for one capability block of
 * a solution (e.g. /solutions/individuals/bank-anywhere). Opens from the
 * "What's included" cards on the parent solution page.
 */
export default function SolutionDetail() {
  const { slug, capability } = useParams();
  const found = findSolutionBlock(slug, capability);
  if (!found) return <NotFound />;
  const { solution, block } = found;
  const siblings = solution.blocks.filter((b) => blockSlug(b.heading) !== capability);

  return (
    <PageTransition>
      <SEO
        title={`${block.heading} — ${solution.title}`}
        description={block.body}
        path={`/solutions/${solution.slug}/${blockSlug(block.heading)}`}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: solution.title, path: `/solutions/${solution.slug}` },
            { name: block.heading, path: `/solutions/${solution.slug}/${blockSlug(block.heading)}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={solution.title}
        headline={block.heading}
        body={block.body}
        primaryCTA={solution.cta}
        image={solution.image}
      />

      {/* Back link */}
      <div className="bg-milk pt-8 md:pt-10">
        <div className="container-bank">
          <Link
            to={`/solutions/${solution.slug}`}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-navy-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeftIcon size={15} weight="bold" />
            Back to {solution.title}
          </Link>
        </div>
      </div>

      {/* What's included — product cards */}
      <section className="section bg-milk">
        <div className="container-bank">
          <p className="eyebrow eyebrow-accent mb-4">What's included</p>
          <h2 className="display-md text-navy-600 text-balance max-w-2xl mb-10 md:mb-12">
            Everything under {block.heading.toLowerCase().replace(/\.$/, "")}.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {block.items.map((it, i) => (
              <motion.div
                key={it}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 rounded-2xl border-2 border-bone-200 bg-white p-5 md:p-6"
              >
                <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <CheckCircleIcon size={22} weight="regular" className="text-orange-600" />
                </span>
                <span className="font-display text-navy-600 text-[16px] md:text-[18px] leading-tight">
                  {it}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More in this solution — clickable sibling cards */}
      <section className="section bg-cloud border-t border-bone-200">
        <div className="container-bank">
          <p className="eyebrow eyebrow-accent mb-4">More in {solution.title}</p>
          <h2 className="display-md text-navy-600 text-balance max-w-2xl mb-10 md:mb-12">
            Explore the rest of the toolkit.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {siblings.map((b, i) => (
              <motion.div
                key={b.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/solutions/${solution.slug}/${blockSlug(b.heading)}`}
                  className="group bank-card bank-card-body h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-display font-bold text-orange-500 text-[26px] leading-none tabular-nums">
                      {String(solution.blocks.indexOf(b) + 1).padStart(2, "0")}
                    </span>
                    <span className="w-9 h-9 rounded-full border-2 border-bone-300 group-hover:border-orange-500 flex items-center justify-center transition-colors">
                      <ArrowUpRightIcon size={15} weight="bold" className="text-navy-500 group-hover:text-orange-500 transition-colors" />
                    </span>
                  </div>
                  <h3 className="font-display text-navy-600 text-[19px] md:text-[21px] font-medium leading-tight mb-2">
                    {b.heading}
                  </h3>
                  <p className="text-bone-600 text-[14.5px] leading-relaxed line-clamp-3">{b.body}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryBand />
    </PageTransition>
  );
}
