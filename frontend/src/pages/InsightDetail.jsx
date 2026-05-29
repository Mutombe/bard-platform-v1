import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import InsightsRail from "../components/InsightsRail.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import SEO, { breadcrumbJsonLd, articleJsonLd } from "../components/SEO.jsx";
import { findInsight, INSIGHTS } from "../data/insights.js";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import NotFound from "./NotFound.jsx";

export default function InsightDetail() {
  const { slug } = useParams();
  const it = findInsight(slug);
  if (!it) return <NotFound />;
  const others = INSIGHTS.filter((i) => i.slug !== it.slug).slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title={it.title}
        description={it.summary}
        path={`/insights/${it.slug}`}
        type="article"
        image={it.image}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: it.title, path: `/insights/${it.slug}` },
          ]),
          articleJsonLd({
            headline: it.title,
            description: it.summary,
            url: `https://bardsantnerbank.com/insights/${it.slug}`,
            image: `https://bardsantnerbank.com${it.image}`,
            datePublished: it.date,
            author: it.author,
          }),
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[color:var(--color-bone-200)]">
        <div className="container-bank py-4">
          <Link to="/insights" className="text-[12.5px] text-[color:var(--color-bone-500)] hover:text-[color:var(--color-navy-600)] inline-flex items-center gap-1.5">
            <ArrowLeftIcon size={12} weight="bold" /> Back to Insights
          </Link>
        </div>
      </div>

      {/* Article hero */}
      <article className="bg-white">
        <header className="container-bank pt-12 md:pt-20 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow eyebrow-accent mb-6">{it.eyebrow}</p>
            <h1 className="display-xl text-[color:var(--color-navy-600)] mb-8 text-balance">
              {it.title}
            </h1>
            <p className="text-[18px] md:text-[20px] text-[color:var(--color-bone-600)] leading-relaxed mb-8">
              {it.summary}
            </p>
            <p className="text-[12.5px] text-[color:var(--color-bone-500)] flex items-center justify-center gap-3 flex-wrap">
              <span className="font-medium text-[color:var(--color-navy-600)]">{it.author}</span>
              {it.author_role && <span>· {it.author_role}</span>}
              <span className="w-1 h-1 rounded-full bg-[color:var(--color-bone-400)]" />
              <span>{new Date(it.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="w-1 h-1 rounded-full bg-[color:var(--color-bone-400)]" />
              <span>{it.reading_minutes} min read</span>
            </p>
          </div>
        </header>

        {it.image && (
          <div className="container-bank pb-12">
            <div
              className="max-w-5xl mx-auto aspect-[16/9] rounded-xl bg-cover bg-center bg-[color:var(--color-bone-200)]"
              style={{ backgroundImage: `url(${it.image})` }}
            />
          </div>
        )}

        {/* Body — editorial placeholder. Real long-form lives in /group/journal */}
        <div className="container-bank pb-16 md:pb-24">
          <div className="max-w-2xl mx-auto prose-bank space-y-6 text-[17px] text-[color:var(--color-bone-700)] leading-relaxed">
            <p className="text-[22px] italic-accent text-[color:var(--color-navy-600)] font-display font-light">
              This insight is a short read. The long-form version, with citations and
              accompanying market data, is published in the next quarterly edition of
              Bardiq Journal.
            </p>
            <p>
              The work of a bank, like any work that touches people for decades, is
              partly the doing and partly the explaining. This page contains the
              explaining — short, signed, and dated. The doing happens at the desk.
            </p>
            <p>
              If this piece has prompted a question your banker should answer, the
              easiest thing is to bring it to them. Use the button below and a member
              of the team will follow up within one business day.
            </p>
            <div className="pt-6">
              <Link to="/contact" className="btn btn-navy">
                Speak to a banker about this
              </Link>
            </div>
          </div>
        </div>
      </article>

      <InsightsRail
        eyebrow="§ Continue reading"
        heading="Other pieces from the desk."
        items={others}
      />

      <AdvisoryBand />
    </PageTransition>
  );
}
