import { useEffect } from "react";

/**
 * Temporary site-wide holding page. Shown while the licensed photography is
 * being finalised. Toggle back off via the COMING_SOON flag in App.jsx to
 * restore the full site — nothing else needs to change.
 */
export default function ComingSoon() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Bard Santner Microfinance Bank — Coming Soon";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-navy-900 text-white flex flex-col">
      {/* Orange top rule */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-500 z-10" />

      {/* Depth: warm navy gradient + argyle lattice texture + orange glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #1a192a 0%, #11101c 55%, #08070f 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{ backgroundImage: "url(/pattern-argyle.svg)", backgroundSize: "46px 46px" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 90% at 18% 18%, rgba(238,125,54,0.16), transparent 55%)",
        }}
      />

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="w-full max-w-[880px] mx-auto px-6 sm:px-10 py-16 md:py-24 text-center">
          <img
            src="/logo-bsmfb.png"
            alt="Bard Santner Microfinance Bank"
            className="h-14 md:h-16 w-auto object-contain mx-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />

          <div className="mt-10 md:mt-14 flex items-center justify-center gap-3.5">
            <span className="h-[2px] w-10 bg-orange-500" />
            <p className="font-mono text-[11px] md:text-[12px] tracking-[0.28em] uppercase text-orange-300">
              Coming soon
            </p>
            <span className="h-[2px] w-10 bg-orange-500" />
          </div>

          <h1 className="mt-7 font-display text-white text-balance leading-[1.04] text-[clamp(2.3rem,7vw,4.75rem)] [text-shadow:0_2px_28px_rgba(0,0,0,0.45)]">
            Something worth the wait.
          </h1>

          <p className="mt-7 md:mt-8 text-white/85 text-[17px] md:text-[20px] leading-relaxed max-w-xl mx-auto">
            We're putting the finishing touches on a new kind of banking, built
            for the way Africa works. Our full website returns shortly.
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="mailto:bank@bardsantner.co.zw"
              className="group inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-bold text-[16px] transition-colors"
            >
              bank@bardsantner.co.zw
            </a>
            <a
              href="tel:+263861200700"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/45 hover:border-white text-white px-7 py-3.5 rounded-full font-bold text-[16px] transition-colors"
            >
              +263 861 200 0700
            </a>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="relative border-t border-white/12">
        <div className="max-w-[880px] mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12.5px] text-white/50 text-center">
          <span>© {new Date().getFullYear()} Bard Santner Microfinance Bank</span>
          <span>Head Office · 5th Floor, Beverly Court, 100 Nelson Mandela Avenue, Harare</span>
        </div>
      </div>
    </main>
  );
}
