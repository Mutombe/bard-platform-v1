import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  LockIcon,
  ListIcon,
  XIcon,
  ArrowRightIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";
import { NAV_MENU, NAV_UTILITY } from "../data/nav.js";
import SearchModal from "./SearchModal.jsx";

// ─── Dropdown motion — a premium, unhurried reveal ─────────────────────
// The bar eases open on an expo-out curve; its sub-links then cascade in
// with a light stagger and settle. Switching tabs re-keys the row so the
// cascade replays crisply rather than snapping.
const BAR_V = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } },
};
const ROW_V = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};
const LINK_V = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// Some destinations are external (BGFI, the group site). Render those as real
// anchors that open in a new tab; internal routes stay on the Router Link.
const isExternal = (to) => /^https?:\/\//.test(to);
function NavItem({ to, className, onClick, children }) {
  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * Institutional Nav — J.P. Morgan / AfrAsia dropdown pattern.
 *
 *   ╔══════════════════════════════════════════════════════════════════╗
 *   ║ Solutions ▾  Who We Serve ▾  Insights ▾  About Us ▾   Locations … ║  ← dropdown strip
 *   ╠══════════════════════════════════════════════════════════════════╣
 *   ║ [Mark]  BARD SANTNER                              [Search] [Log in]║  ← brand row (centre empty)
 *   ╚══════════════════════════════════════════════════════════════════╝
 *
 * The four top-level items each reveal a dropdown of sub-links on hover /
 * focus (desktop) — the "sub-links under the top link" behaviour from the
 * AfrAsia reference. The brand row's former primary nav (Banking, Wealth,
 * Markets, Insights, Group, About) is intentionally removed; that space is
 * left empty per direction. Mobile carries the same four as accordions
 * inside the drawer.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);       // desktop dropdown (by label)
  const [mobileSection, setMobileSection] = useState(null); // drawer accordion (by label)
  const closeTimer = useRef(null);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer + any open dropdown on every route change. This is a
  // legitimate sync-with-the-router effect, not derived state.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setOpenMenu(null);
  }, [loc.pathname]);

  // Scroll-lock the page body while the drawer is open.
  useEffect(() => {
    if (mobileOpen) document.body.classList.add("scroll-lock");
    else document.body.classList.remove("scroll-lock");
    return () => document.body.classList.remove("scroll-lock");
  }, [mobileOpen]);

  // Global keyboard shortcuts — / and Cmd/Ctrl-K open the search.
  useEffect(() => {
    const onKey = (e) => {
      const inField =
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable;
      if (!inField && (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k"))) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Hover intent — small close delay so the pointer can travel from the
  // trigger into the panel without the menu snapping shut.
  const openNow = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const isSectionActive = (item) =>
    loc.pathname === item.to ||
    (item.to !== "/" && loc.pathname.startsWith(item.to + "/")) ||
    item.children?.some((c) => c.to !== "/" && loc.pathname === c.to);

  // The currently-open top-level item, whose sub-links fill the full-width
  // secondary bar below the strip (the AfrAsia two-tier mechanic).
  const activeItem = NAV_MENU.find((i) => i.label === openMenu) || null;

  return (
    <>
      {/* ─── Dropdown strip (top tier, dark) ──────────────────────────────
          Two-tier mechanic from the AfrAsia reference: the top strip holds
          the four triggers; hovering/focusing one drops a FULL-WIDTH
          secondary bar beneath the strip carrying that section's sub-links
          in a horizontal row. The active tab lifts to white so it connects
          visually to the bar. onMouseLeave lives on the whole wrapper so the
          pointer can travel from a tab down into the bar without it closing
          (the bar is a DOM descendant of this wrapper). */}
      <div
        className="bg-navy-700 text-white relative z-50"
        onMouseLeave={closeSoon}
      >
        <div className="container-bank">
          <div className="flex items-stretch h-11">
            {/* Desktop triggers */}
            <nav className="hidden md:flex items-stretch" aria-label="Primary">
              {NAV_MENU.map((item) => {
                const open = openMenu === item.label;
                const active = isSectionActive(item);
                return (
                  <button
                    key={item.label}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={open}
                    onMouseEnter={() => openNow(item.label)}
                    onFocus={() => openNow(item.label)}
                    onClick={() => setOpenMenu(open ? null : item.label)}
                    className={`flex items-center gap-1.5 px-5 lg:px-6 text-[13px] tracking-[0.04em] font-medium transition-colors whitespace-nowrap ${
                      active || open
                        ? "tab-active"
                        : "text-white/85 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    <CaretDownIcon
                      size={11}
                      weight="bold"
                      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Mobile label filler (triggers live in the drawer on mobile) */}
            <span className="md:hidden flex items-center text-[11px] tracking-[0.18em] text-white/60 uppercase">
              Bard Santner Markets Inc
            </span>

            {/* Utility links — right */}
            <div className="ml-auto hidden md:flex items-center gap-7 text-[13px] text-white/70 pr-1">
              {NAV_UTILITY.map((u) => (
                <NavItem key={u.to} to={u.to} className="hover:text-white transition-colors">
                  {u.label}
                </NavItem>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width secondary bar — the hovered tab's sub-links. It lives in
            normal flow (a height reveal), so it takes its OWN space and pushes
            the brand row down rather than overlaying it, and opens seamlessly.
            Sub-links are left-aligned and held to a single line (they scroll
            rather than wrap, so long menus like "Who We Serve" never break). */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              key="secbar"
              variants={BAR_V}
              initial="hidden"
              animate="show"
              exit="exit"
              onMouseEnter={() => openNow(activeItem.label)}
              className="hidden md:block overflow-hidden bg-white border-b border-bone-200 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
              <div className="container-bank">
                <motion.div
                  key={activeItem.label}
                  variants={ROW_V}
                  initial="hidden"
                  animate="show"
                  className="flex flex-nowrap items-center justify-start py-5 md:py-6 overflow-x-auto no-scrollbar divide-x divide-bone-300"
                >
                  {activeItem.children.map((c) => (
                    <motion.span key={c.label} variants={LINK_V} className="shrink-0 px-2.5 first:pl-0">
                      <NavItem
                        to={c.to}
                        className="hover-line text-[13.5px] xl:text-[14px] font-medium text-navy-600 hover:text-orange-600 tracking-[0.005em] transition-colors whitespace-nowrap"
                      >
                        {c.label}
                      </NavItem>
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Brand row (white, sticky) — centre intentionally empty ─────── */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow ${
          scrolled
            ? "shadow-[0_1px_0_0_var(--color-bone-200),0_8px_24px_rgba(12,10,20,0.04)]"
            : "border-b border-bone-200"
        }`}
      >
        <div className="container-bank">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand mark — full BSMFB lockup */}
            <Link to="/" className="flex items-center shrink-0" aria-label="Bard Santner Microfinance Bank home">
              <img
                src="/logo-bsmfb.png"
                alt="Bard Santner Microfinance Bank"
                className="h-10 md:h-12 w-auto object-contain"
                loading="eager"
              />
            </Link>

            {/* Centre — deliberately empty (primary nav removed per direction) */}

            {/* Trailing actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search Bard Santner"
                className="group hidden md:inline-flex items-center gap-2.5 h-10 pl-3 pr-2.5 rounded-full hover:bg-smoke text-navy-600 transition-colors border border-transparent hover:border-bone-300"
              >
                <MagnifyingGlassIcon size={17} weight="regular" />
                <span className="hidden lg:inline text-[12.5px] font-medium text-bone-500 group-hover:text-navy-600 transition-colors">
                  Search
                </span>
                <kbd className="hidden lg:inline-flex items-center justify-center min-w-[20px] h-[20px] px-1 rounded-sm border border-bone-300 bg-paper text-bone-500 font-mono text-[10px] leading-none">
                  /
                </kbd>
              </button>
              <Link
                to="/login"
                aria-label="Log in to Online Banking"
                className="group hidden md:inline-flex items-center gap-3 h-11 pl-1.5 pr-5 rounded-full bg-white border border-bone-300 hover:border-navy-600 transition-all duration-300 shadow-[0_1px_2px_rgba(12,10,20,0.04)] hover:shadow-[0_6px_18px_rgba(12,10,20,0.12)] hover:-translate-y-[1px]"
              >
                <span className="w-8 h-8 rounded-full bg-navy-700 group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-300 shadow-[inset_0_-1px_0_rgba(0,0,0,0.12)]">
                  <LockIcon size={13} weight="bold" className="text-white" />
                </span>
                <span className="text-[14px] font-medium text-navy-700 group-hover:text-navy-900 transition-colors">
                  Log in
                </span>
              </Link>
              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="md:hidden w-11 h-11 flex items-center justify-center text-navy-600 -mr-1 rounded-md hover:bg-smoke"
              >
                <ListIcon size={24} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile drawer ───────────────────────────────────────────── */}
      {mobileOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-[55] md:hidden bg-ink/40 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-[60] md:hidden w-full max-w-[420px] bg-white shadow-[0_24px_80px_rgba(12,10,20,0.18)] flex flex-col"
          >
            {/* Drawer head */}
            <div className="px-6 pt-5 pb-4 border-b border-bone-200 flex items-center justify-between">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <img src="/logo-bsmfb.png" alt="Bard Santner Microfinance Bank" className="h-9 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 flex items-center justify-center -mr-2 rounded-md hover:bg-smoke text-navy-600"
              >
                <XIcon size={22} weight="bold" />
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto px-6 py-7">
              {/* Search */}
              <button
                onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                className="w-full mb-7 flex items-center gap-3 px-4 py-3.5 rounded-md border border-bone-200 bg-paper hover:border-orange-500 transition-colors text-left"
              >
                <MagnifyingGlassIcon size={17} weight="regular" className="text-bone-500" />
                <span className="text-[14px] text-bone-500 flex-1">Search Bard Santner</span>
                <ArrowRightIcon size={12} weight="bold" className="text-bone-400" />
              </button>

              {/* Menu accordions */}
              <nav className="flex flex-col border-y border-bone-200 mb-8">
                {NAV_MENU.map((item) => {
                  const expanded = mobileSection === item.label;
                  return (
                    <div key={item.label} className="border-b border-bone-100 last:border-b-0">
                      <button
                        onClick={() => setMobileSection(expanded ? null : item.label)}
                        aria-expanded={expanded}
                        className="w-full flex items-center justify-between py-4 text-[16.5px] font-medium text-navy-600"
                      >
                        <span>{item.label}</span>
                        <CaretDownIcon
                          size={15}
                          weight="bold"
                          className={`text-bone-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pb-3">
                              {item.children.map((c) => (
                                <NavItem
                                  key={c.label}
                                  to={c.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="py-2.5 pl-4 text-[14px] text-bone-600 hover:text-orange-600 border-l-2 border-bone-200 hover:border-orange-500 transition-colors"
                                >
                                  {c.label}
                                </NavItem>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* Utility */}
              <p className="eyebrow mb-4">Reach us</p>
              <nav className="flex flex-col gap-3 mb-9">
                {NAV_UTILITY.map((u) => (
                  <NavItem
                    key={u.to}
                    to={u.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-[14.5px] text-bone-600 hover:text-navy-600 transition-colors"
                  >
                    {u.label}
                  </NavItem>
                ))}
              </nav>
            </div>

            {/* Drawer foot */}
            <div className="px-6 py-5 border-t border-bone-200 bg-bone-50/60 space-y-3">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="btn btn-navy w-full justify-center"
              >
                <LockIcon size={14} weight="bold" /> Log in to Online Banking
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-ghost-light w-full justify-center"
              >
                Speak to a banker
                <ArrowRightIcon size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Search modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
