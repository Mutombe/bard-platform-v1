import { useEffect, useState } from "react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { INSIGHT } from "../data/images.js";

/**
 * Live "Latest from BGFI" cards — fetches the three most recent published
 * articles from the Bard Global Finance Institute partner feed and renders
 * them with an "ambient theme bleed": a blurred, saturated copy of each
 * article's own photograph washes down into the card body, so every card is
 * tinted by its own image's colours automatically.
 *
 * The feed is non-critical: a static fallback keeps the section populated if
 * the request fails. The key is public/embed-scoped per BGFI's handover.
 */
const KEY = "bgfi_live_37c45afb3c7d630cdd8a38e845ff1bd7421d2ae2";
const FEED = `https://bardiq-api-aky0.onrender.com/api/v1/news/partner/feed/?limit=3&api_key=${KEY}`;

// CSS masks that create the bleed — black = visible, transparent = hidden.
const AMBIENT_MASK = "linear-gradient(to bottom, transparent 34%, #000 70%)";
const COVER_FADE = "linear-gradient(to bottom, #000 76%, transparent 100%)";

const FALLBACK = [
  {
    title: "Africa's investment landscape, quarter by quarter.",
    category: "Finance Africa Quarterly",
    excerpt: "In-depth analysis of African economies, financial markets and the emerging opportunities executives and investors are watching.",
    image: INSIGHT["africa-and-the-cross-border-rail"],
    url: "https://bgfi.global/publications/finance-africa-quarterly",
  },
  {
    title: "The corridors moving African trade.",
    category: "Research",
    excerpt: "Why the rails carrying goods between the continent's ports will be African-built within the decade, and what that unlocks.",
    image: INSIGHT["treasury-and-the-discipline-of-the-end-of-day"],
    url: "https://bgfi.global",
  },
  {
    title: "The quiet case for a domestic deposit base.",
    category: "Market Intelligence",
    excerpt: "Wholesale funding looks cheaper on a spreadsheet and crueller in a crisis. An argument for the patient work of a real retail book.",
    image: INSIGHT["the-quiet-case-for-a-deposit-base"],
    url: "https://bgfi.global",
  },
];

export default function BgfiCards() {
  const [items, setItems] = useState(FALLBACK);

  useEffect(() => {
    let alive = true;
    fetch(FEED)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then((d) => {
        const a = (d?.articles || []).filter((x) => x && x.title);
        if (alive && a.length) setItems(a.slice(0, 3));
      })
      .catch(() => {
        /* feed is non-critical — keep the fallback */
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {items.map((a, i) => (
        <a
          key={i}
          href={a.url || "https://bgfi.global"}
          target="_blank"
          rel="noopener noreferrer"
          className="bank-card group relative flex flex-col isolate"
        >
          {/* Ambient bleed — blurred, saturated copy tints the body */}
          {a.image && (
            <img
              src={a.image}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 h-full w-full scale-125 object-cover opacity-25 blur-2xl saturate-150"
              style={{ maskImage: AMBIENT_MASK, WebkitMaskImage: AMBIENT_MASK }}
            />
          )}

          {/* Cover photo — solid, then dissolves into the tint at the bottom */}
          <img
            src={a.image}
            alt={a.title}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ maskImage: COVER_FADE, WebkitMaskImage: COVER_FADE }}
          />

          {/* Body overlaps the fade */}
          <div className="relative -mt-6 flex flex-1 flex-col px-6 md:px-7 pb-7">
            {a.category && <p className="eyebrow eyebrow-accent mb-3">{a.category}</p>}
            <h3 className="font-display text-navy-600 text-[21px] md:text-[23px] leading-tight mb-3 text-balance">
              {a.title}
            </h3>
            {a.excerpt && (
              <p className="text-[16px] text-bone-600 leading-relaxed flex-1 line-clamp-3">
                {a.excerpt}
              </p>
            )}
            <span className="mt-6 inline-flex items-center gap-2 text-[15.5px] font-medium text-navy-600 group-hover:text-orange-600 transition-colors">
              Read on BGFI
              <ArrowSquareOutIcon
                size={14}
                weight="bold"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-label="opens in a new tab"
              />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
