import { Link } from "react-router-dom";
import {
  XLogoIcon,
  YoutubeLogoIcon,
  GlobeIcon,
  ArrowSquareOutIcon,
} from "@phosphor-icons/react";

/**
 * Institutional footer, aligned to the current information architecture:
 * Solutions · Who We Serve · Company · Help & legal. External destinations
 * (BGFI, the group site) render as real anchors.
 */

const isExternal = (to) => /^https?:\/\//.test(to);
function FooterLink({ to, className, children }) {
  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <ArrowSquareOutIcon
          size={12}
          weight="bold"
          className="inline-block ml-1 translate-y-[1px] opacity-55"
          aria-label="opens in a new tab"
        />
      </a>
    );
  }
  return <Link to={to} className={className}>{children}</Link>;
}

const COLUMNS = [
  {
    title: "Solutions",
    links: [
      { label: "For Companies and Institutions", to: "/solutions/companies-institutions" },
      { label: "For Individuals", to: "/solutions/individuals" },
      { label: "For Investors", to: "/solutions/investors" },
    ],
  },
  {
    title: "Who We Serve",
    links: [
      { label: "Diaspora and International", to: "/who-we-serve/diaspora-international" },
      { label: "Business, Industry & Mining", to: "/who-we-serve/business-industry-mining" },
      { label: "Agriculture", to: "/who-we-serve/agriculture" },
      { label: "Financial Institutions", to: "/who-we-serve/financial-institutions" },
      { label: "Technology & Innovation", to: "/who-we-serve/technology-innovation" },
      { label: "Public Institutions", to: "/who-we-serve/public-institutions" },
      { label: "Non-Profit & Development", to: "/who-we-serve/non-profit-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Contact us", to: "/contact" },
      { label: "Insights · BGFI", to: "https://bgfi.global" },
      { label: "Bard Santner Group", to: "https://bardsantner.com/" },
      { label: "Online Banking", to: "/login" },
    ],
  },
  {
    title: "Help & legal",
    links: [
      { label: "Security", to: "/security" },
      { label: "Complaints", to: "/complaints" },
      { label: "Accessibility", to: "/accessibility" },
      { label: "Regulatory", to: "/regulatory" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

const SOCIALS = [
  { label: "X", to: "https://x.com/bardsantner", Icon: XLogoIcon },
  { label: "YouTube", to: "https://www.youtube.com/@bardsantner", Icon: YoutubeLogoIcon },
];

const LOCATIONS = [
  { city: "Harare", line: "5th Floor Beverly Court, 100 Nelson Mandela Avenue" },
  { city: "Bulawayo", line: "Branch coming 2026 Q3" },
  { city: "Johannesburg", line: "Representative office, Sandton" },
  { city: "London", line: "Diaspora desk, Canary Wharf" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-500" />
      {/* ─── Top — brand row + columns ─── */}
      <div className="container-bank pt-14 md:pt-24 pb-10 md:pb-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-12">
          <div className="col-span-12 md:col-span-3">
            <Link to="/" aria-label="Bard Santner Microfinance Bank home" className="inline-flex items-center gap-3">
              <img src="/favicon.png" alt="" className="h-11 w-11 md:h-12 md:w-12 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[17px] md:text-[18px] tracking-[0.04em] uppercase">Bard Santner</span>
                <span className="text-[10px] tracking-[0.18em] text-white/55 uppercase mt-1">Microfinance Bank</span>
              </span>
            </Link>
            <p className="mt-6 md:mt-8 text-[16px] text-white/65 leading-relaxed max-w-xs">
              A digital-first microfinance bank, built for the way Africa works.
            </p>
            <p className="mt-6 md:mt-8 eyebrow eyebrow-on-dark mb-3">Open an account</p>
            <Link to="/solutions/individuals" className="btn btn-primary text-[15px] py-3 px-5">
              Get started
            </Link>

            <div className="mt-8 flex items-center gap-2.5">
              {SOCIALS.map(({ label, to, Icon }) => (
                <a
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/25 hover:border-orange-500 hover:bg-orange-500 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <Icon size={18} weight="regular" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div
              key={col.title}
              className={`col-span-6 ${col.title === "Who We Serve" ? "md:col-span-3" : "md:col-span-2"}`}
            >
              <p className="font-display text-[17px] text-white mb-4 md:mb-5">{col.title}</p>
              <ul className="space-y-2.5 md:space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink
                      to={l.to}
                      className="text-[15px] text-white/70 hover:text-white hover-line"
                    >
                      {l.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="hairline-dark" />

      {/* ─── Locations strip ─── */}
      <div className="container-bank py-8 md:py-10">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow eyebrow-on-dark mb-1">Where we operate</p>
            <p className="font-display text-[19px] md:text-[21px] text-white">Offices and desks</p>
          </div>
          {LOCATIONS.map((loc) => (
            <div key={loc.city} className="col-span-6 md:col-span-2 lg:col-span-2">
              <p className="text-[13px] text-white font-medium mb-1">{loc.city}</p>
              <p className="text-[12px] text-white/55 leading-relaxed">{loc.line}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="hairline-dark" />

      {/* ─── Regulatory + © ─── */}
      <div className="container-bank py-7 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-6 text-[13px] text-white/55">
          <div className="flex flex-wrap items-center gap-x-5 md:gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Bard Santner Microfinance Bank</span>
            <Link to="/legal" className="hover-line hover:text-white">Legal</Link>
            <Link to="/privacy" className="hover-line hover:text-white">Privacy</Link>
            <Link to="/cookies" className="hover-line hover:text-white">Cookies</Link>
            <Link to="/terms" className="hover-line hover:text-white">Terms</Link>
            <Link to="/regulatory" className="hover-line hover:text-white">Regulatory</Link>
          </div>
          <div className="flex items-center gap-5 self-start md:self-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-1.5 text-[12.5px] text-white/70">
              <GlobeIcon size={15} weight="regular" />
              Zimbabwe · English
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover-line hover:text-white"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        <p className="mt-5 md:mt-6 text-[12px] text-white/40 leading-relaxed max-w-4xl">
          Bard Santner Microfinance Bank (BSMFB) is a financial services institution
          incorporated in the Republic of Zimbabwe, operating under licence and supervised by
          the relevant prudential authorities. Eligibility, terms and conditions apply to all
          products. Information on this site is provided for general guidance and does not
          constitute financial advice.
        </p>
      </div>
    </footer>
  );
}
