import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, LockIcon, ListIcon, XIcon, CaretDownIcon } from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";

/**
 * Institutional Nav. Modelled directly on Lloyds + AfrAsia.
 *
 *   ╔══════════════════════════════════════════════════════════════════╗
 *   ║ Personal   Business   Private   International   Institutional   ║   ← dark audience strip
 *   ╠══════════════════════════════════════════════════════════════════╣
 *   ║ [Monogram] BARD SANTNER  Banking  Wealth  Markets  Insights  About    [Search] [Log in] ║
 *   ╚══════════════════════════════════════════════════════════════════╝
 *
 * Active audience tab is highlighted. The primary nav row stays consistent
 * across audiences — only the active audience changes the visible CTA copy
 * deeper inside each page.
 */

const PRIMARY_NAV = [
  { label: "Banking", to: "/banking" },
  { label: "Wealth", to: "/wealth" },
  { label: "Markets", to: "/markets" },
  { label: "Insights", to: "/insights" },
  { label: "Group", to: "/group" },
  { label: "About", to: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on every route change.
  useEffect(() => setMobileOpen(false), [loc.pathname]);

  // The active audience is whichever audience-landing path is in the URL.
  // When the user is on / or a non-audience page, default the visual
  // active state to "Personal" — the largest cohort and the canonical
  // entry point. This keeps the audience strip from feeling unanchored.
  const matchedAudienceId = AUDIENCES.find((a) =>
    loc.pathname.startsWith(a.path)
  )?.id;
  const activeAudienceId = matchedAudienceId || "personal";

  return (
    <>
      {/* ─── Audience strip (top tier, dark) ──────────────────────── */}
      <div className="bg-navy-700 text-white relative z-50">
        <div className="container-bank">
          <div className="flex items-end h-12 overflow-x-auto no-scrollbar gap-0.5 pt-1">
            {AUDIENCES.map((a) => {
              const isActive = activeAudienceId === a.id;
              return (
                <NavLink
                  key={a.id}
                  to={a.path}
                  className={() =>
                    `flex items-center px-5 md:px-7 h-[calc(100%-4px)] text-[13px] tracking-[0.06em] font-medium transition-colors whitespace-nowrap rounded-t-lg ${
                      isActive
                        ? "bg-white text-navy-700 shadow-[0_-1px_0_0_var(--color-orange-500)_inset]"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {a.label}
                </NavLink>
              );
            })}
            <div className="ml-auto flex items-center gap-6 text-[13px] text-white/70 pr-1">
              <Link to="/locations" className="hover:text-white hidden md:inline">
                Locations
              </Link>
              <Link to="/contact" className="hover:text-white hidden md:inline">
                Contact us
              </Link>
              <Link to="/group" className="hover:text-white hidden md:inline">
                Bard Santner Group
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Brand row (white, sticky) ───────────────────────────── */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow ${
          scrolled ? "shadow-[0_1px_0_0_var(--color-bone-200),0_8px_24px_rgba(12,10,20,0.04)]" : "border-b border-bone-200"
        }`}
      >
        <div className="container-bank">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand mark */}
            <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Bard Santner home">
              <img src="/favicon.png" alt="" className="h-9 w-9 md:h-10 md:w-10 object-contain" loading="eager" />
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-display text-[15px] md:text-[17px] tracking-[0.04em] text-navy-600 font-medium uppercase">
                  Bard Santner
                </span>
                <span className="text-[9.5px] tracking-[0.18em] text-bone-500 uppercase mt-0.5">
                  Markets Inc
                </span>
              </span>
            </Link>

            {/* Primary nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {PRIMARY_NAV.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `text-[15px] font-medium transition-colors relative py-2 ${
                      isActive
                        ? "text-orange-600"
                        : "text-navy-600 hover:text-orange-600"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Trailing actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                aria-label="Search"
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-full hover:bg-bone-100 text-navy-600"
              >
                <MagnifyingGlassIcon size={18} weight="regular" />
              </button>
              <a
                href="https://online.bardsantnerbank.com"
                className="btn btn-navy text-[14px] py-3 px-5"
              >
                <LockIcon size={14} weight="bold" />
                Log in
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 text-navy-600"
              >
                <ListIcon size={22} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile drawer ───────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white">
          <div className="container-bank">
            <div className="flex items-center justify-between h-16">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <img src="/favicon.png" alt="" className="h-8 w-8 object-contain" />
                <span className="font-display text-[16px] tracking-[0.04em] text-navy-600 uppercase">
                  Bard Santner
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
                <XIcon size={24} weight="bold" />
              </button>
            </div>

            <hr className="hairline" />

            <div className="py-6">
              <p className="eyebrow mb-3">Choose your context</p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {AUDIENCES.map((a) => (
                  <Link
                    key={a.id}
                    to={a.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block p-3 rounded-md border ${
                      activeAudienceId === a.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-bone-200"
                    }`}
                  >
                    <span className="text-[13px] font-medium text-navy-600">
                      {a.label}
                    </span>
                  </Link>
                ))}
              </div>

              <p className="eyebrow mb-3">The bank</p>
              <nav className="flex flex-col gap-1 mb-8">
                {PRIMARY_NAV.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="display-md py-2 text-navy-600"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <a
                href="https://online.bardsantnerbank.com"
                className="btn btn-navy w-full justify-center"
              >
                <LockIcon size={14} weight="bold" /> Log in to Online Banking
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-ghost-light w-full justify-center mt-3"
              >
                Speak to a banker
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
