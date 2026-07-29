import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll behaviour on navigation:
//   • No hash        → jump to top (SPA routers don't do this by default).
//   • #section hash  → smooth-scroll to that element, offset for the sticky
//                       brand row. Fires on both route changes and in-page
//                       hash changes (e.g. About dropdown sub-links).
const HEADER_OFFSET = 96;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait for the destination page to render before measuring.
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }, 120);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}
