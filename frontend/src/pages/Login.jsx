import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GoogleLogoIcon,
  AppleLogoIcon,
  FingerprintIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import SEO from "../components/SEO.jsx";
import { HERO } from "../data/images.js";

/**
 * /login — Online Banking entry surface.
 *
 * Split layout, no public Nav/Footer. Form on the left, editorial
 * branding photograph on the right. Three sign-in vectors:
 *   1. Google (primary OAuth)
 *   2. Apple
 *   3. Email + password (with biometric prompt option)
 *
 * This is a mockup. The buttons all navigate to /app to simulate a
 * successful sign-in. Real OAuth wiring happens server-side and
 * replaces handleSocial / handleEmailLogin.
 */
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(null); // "google" | "apple" | "email" | "bio"

  function go(name) {
    setLoading(name);
    // Brief visual hold so the user feels the auth transition before
    // landing in the dashboard.
    setTimeout(() => navigate("/app"), 700);
  }

  function handleEmailLogin(e) {
    e.preventDefault();
    if (!email || !password) return;
    go("email");
  }

  return (
    <PageTransition>
      <SEO
        title="Log in"
        description="Log in to Bard Santner Online Banking."
        path="/login"
        noindex
      />

      <div className="min-h-screen flex bg-milk">
        {/* ─── LEFT — form panel ────────────────────────────────────── */}
        <div className="flex-1 flex items-center justify-center p-6 sm:p-10 md:p-14 lg:p-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md"
          >
            {/* Brand row */}
            <Link to="/" className="inline-flex items-center gap-3 mb-10 md:mb-14 group">
              <img src="/favicon.png" alt="" className="h-10 w-10 md:h-11 md:w-11 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[15px] md:text-[17px] tracking-[0.04em] uppercase font-medium text-navy-600">
                  Bard Santner
                </span>
                <span className="text-[9.5px] tracking-[0.18em] text-bone-500 uppercase mt-0.5">
                  Online Banking
                </span>
              </span>
            </Link>

            <p className="eyebrow eyebrow-accent mb-4">§ Welcome back</p>
            <h1 className="display-lg text-navy-600 mb-4 leading-tight text-balance">
              Log in to your bank.
            </h1>
            <p className="text-[15px] md:text-[16px] text-bone-600 leading-relaxed mb-9 md:mb-10">
              Continue with Google, Apple, or your Bard Santner credentials. Same banker — without the queue.
            </p>

            {/* OAuth buttons */}
            <div className="space-y-3 mb-7">
              <button
                onClick={() => go("google")}
                disabled={!!loading}
                className="group w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-white border border-bone-300 hover:border-navy-600 hover:shadow-[0_4px_14px_rgba(12,10,20,0.08)] disabled:opacity-60 transition-all text-[14.5px] font-medium text-navy-700"
              >
                <GoogleLogoIcon size={18} weight="bold" className="text-[#4285F4]" />
                {loading === "google" ? "Signing you in…" : "Continue with Google"}
              </button>
              <button
                onClick={() => go("apple")}
                disabled={!!loading}
                className="group w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-ink text-white hover:bg-coal disabled:opacity-60 transition-all text-[14.5px] font-medium"
              >
                <AppleLogoIcon size={18} weight="fill" />
                {loading === "apple" ? "Signing you in…" : "Continue with Apple"}
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-7">
              <hr className="flex-1 border-bone-200" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-bone-500 font-medium">
                Or with email
              </span>
              <hr className="flex-1 border-bone-200" />
            </div>

            {/* Email form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3.5 text-[15px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-bone-400"
                />
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-1.5">
                  <label className="block text-[12.5px] font-medium text-navy-600">Password</label>
                  <Link to="#" className="text-[12px] text-orange-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3.5 pr-12 text-[15px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-bone-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded text-bone-500 hover:text-navy-600 hover:bg-bone-100"
                  >
                    {showPassword ? <EyeSlashIcon size={17} /> : <EyeIcon size={17} />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded border-bone-300 text-orange-500 focus:ring-orange-500/50"
                />
                <span className="text-[13px] text-bone-600">Keep me signed in on this device</span>
              </label>

              <button
                type="submit"
                disabled={!!loading}
                className="btn btn-primary w-full justify-center disabled:opacity-60"
              >
                {loading === "email" ? "Signing you in…" : "Log in"}
                <ArrowRightIcon size={14} weight="bold" />
              </button>

              {/* Biometric */}
              <button
                type="button"
                onClick={() => go("bio")}
                disabled={!!loading}
                className="w-full flex items-center justify-center gap-2 py-3 text-[13.5px] text-navy-600 hover:text-orange-600 transition-colors"
              >
                <FingerprintIcon size={16} weight="regular" />
                {loading === "bio" ? "Verifying…" : "Use biometric sign-in"}
              </button>
            </form>

            {/* Open an account */}
            <p className="mt-9 text-center text-[14px] text-bone-600">
              New to Bard Santner?{" "}
              <Link to="/personal" className="text-orange-600 font-medium hover:underline">
                Open an account
              </Link>
            </p>

            {/* Security footer */}
            <div className="mt-12 pt-6 border-t border-bone-200 flex items-start gap-3 text-[11.5px] text-bone-500 leading-relaxed">
              <ShieldCheckIcon size={14} weight="regular" className="text-bone-400 mt-0.5 shrink-0" />
              <span>
                Online Banking uses biometric authentication, end-to-end encryption (TLS 1.3 / AES-256) and device binding for every session. We will never ask you for your password by phone or email.
              </span>
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT — branding panel ────────────────────────────────── */}
        <div className="hidden lg:flex flex-1 relative bg-ink overflow-hidden">
          {/* Photograph */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HERO.onlineBanking})`,
              filter: "saturate(0.72) brightness(0.78) contrast(1.06)",
            }}
          />
          {/* Layered overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/65" />
          {/* Orange institutional rule */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />

          <div className="relative w-full flex flex-col justify-between p-12 xl:p-16">
            {/* Back link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors self-start"
            >
              <ArrowLeftIcon size={13} weight="bold" />
              Back to bardsantner.com
            </Link>

            {/* Headline */}
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[2px] w-10 bg-orange-500" />
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-orange-400">
                  Online Banking
                </p>
              </div>
              <h2 className="display-xl text-white text-balance leading-[1.04] mb-6">
                Banking that travels with you.
              </h2>
              <p className="text-white/80 text-[15.5px] md:text-[16px] leading-relaxed">
                The same bank, the same banker — without the queue.
                Manage accounts, send and receive, monitor in real time.
              </p>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11.5px] uppercase tracking-[0.18em] text-white/55 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                Biometric
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                TLS 1.3
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                Device-bound
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                Real-time alerts
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
