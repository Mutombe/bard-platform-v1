import { useParams, Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import TrustRibbon from "../components/TrustRibbon.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import Monogram from "../components/Monogram.jsx";
import { findEntity, GROUP_ENTITIES } from "../data/group.js";
import { ArrowRightIcon } from "@phosphor-icons/react";
import NotFound from "./NotFound.jsx";

export default function GroupEntity() {
  const { slug } = useParams();
  const e = findEntity(slug);
  if (!e) return <NotFound />;
  const others = GROUP_ENTITIES.filter((g) => g.id !== e.id);

  return (
    <PageTransition>
      <SEO
        title={e.name}
        description={`${e.tagline} ${e.body}`}
        path={`/group/${e.id}`}
        jsonLd={[breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Group", path: "/group" },
          { name: e.name, path: `/group/${e.id}` },
        ])]}
      />

      {/* Hero */}
      <section className="bg-[color:var(--color-ink)] text-white relative monogram-bg">
        <div
          className="absolute top-0 left-0 right-0 h-[4px]"
          style={{ background: e.accent }}
        />
        <div className="container-bank section-lg">
          <div className="max-w-3xl">
            <p className="eyebrow eyebrow-on-dark mb-6">{e.role}</p>
            <div className="flex items-start gap-6 mb-8">
              <Monogram size={56} color={e.accent} />
            </div>
            <h1 className="display-hero text-white mb-6 text-balance">
              {e.name}
            </h1>
            <p className="font-display italic-accent text-[20px] md:text-[24px] text-white/85 mb-8 max-w-2xl">
              "{e.tagline}"
            </p>
            <p className="text-[16px] md:text-[17px] text-white/80 leading-relaxed max-w-2xl mb-10">
              {e.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                {e.cta} <ArrowRightIcon size={14} weight="bold" />
              </Link>
              <Link to="/group" className="btn btn-ghost-dark">
                Back to the Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other entities */}
      <section className="bg-white section">
        <div className="container-bank">
          <p className="eyebrow mb-4">§ Sister institutions</p>
          <h2 className="display-lg text-[color:var(--color-navy-600)] mb-10">
            Four others on the same shelf.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link key={o.id} to={o.href} className="group block p-6 rounded-xl border border-[color:var(--color-bone-200)] hover:border-[color:var(--color-orange-500)] transition-colors">
                <Monogram size={28} color={o.accent} className="mb-5" />
                <p className="font-display text-[18px] text-[color:var(--color-navy-600)] mb-2">{o.short}</p>
                <p className="text-[13px] text-[color:var(--color-bone-600)] leading-relaxed mb-4">{o.tagline}</p>
                <span className="inline-flex items-center gap-2 text-[12px] font-medium text-[color:var(--color-orange-600)]">
                  {o.cta} <ArrowRightIcon size={12} weight="bold" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryBand />
      <TrustRibbon />
    </PageTransition>
  );
}
