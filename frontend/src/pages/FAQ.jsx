import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon, ArrowRightIcon } from "@phosphor-icons/react";

import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import AdvisoryBand from "../components/AdvisoryBand.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { BRAND } from "../data/images.js";
import { useComingSoon } from "../components/Toast.jsx";

/**
 * /faq — Frequently asked questions, added per staff feedback (2026-10).
 * Draft answers written to match the site's existing copy (hours, channels,
 * regulator, diaspora offering). Grouped into sections, each an accordion.
 * A FAQPage JSON-LD block is emitted for rich results.
 */

const FAQ_GROUPS = [
  {
    title: "Accounts & getting started",
    items: [
      {
        q: "How do I open an account with Bard Santner?",
        a: "You can start online in minutes or speak to a banker. Apply and share a few details, complete a quick and secure identity verification, and once approved you can start banking. If you would prefer a guided start, request a banker and we will call you back within one business day.",
      },
      {
        q: "What do I need to open an account?",
        a: "As a regulated bank we are required to verify your identity. You will typically need a valid national ID or passport, proof of address, and — depending on the account — proof of income or source of funds. A banker will confirm exactly what is needed for your situation.",
      },
      {
        q: "Who can bank with Bard Santner?",
        a: "Individuals and families, businesses of every size, investors, and institutions. We also serve the Zimbabwean diaspora and international clients. Browse Who We Serve and Solutions to find the context that fits you.",
      },
    ],
  },
  {
    title: "Digital & Online Banking",
    items: [
      {
        q: "Is Online Banking available yet?",
        a: "Online Banking is coming soon. We are putting the finishing touches on it and will activate it once the supporting systems are live. In the meantime you can open an account, reach a banker, and manage your enquiry through our contact channels.",
      },
      {
        q: "Will I still be able to reach a real person?",
        a: "Always. We are digital where it matters and human when it counts — you can call, email or message us on WhatsApp, and a relationship banker stays with you rather than a call-centre queue.",
      },
    ],
  },
  {
    title: "Diaspora & international",
    items: [
      {
        q: "Can I bank with Bard Santner from outside Zimbabwe?",
        a: "Yes. Our Diaspora Wealth Banking helps Zimbabweans abroad receive, save, invest, finance and build at home through one connected ecosystem — including a Diaspora Wealth Account, international money transfers and cross-border banking.",
      },
      {
        q: "How do I send money to or from Zimbabwe?",
        a: "We offer international money transfers and cross-border payments at rates you can see up front. Talk to our Diaspora team and they will set you up with the right channel for where you are sending from.",
      },
    ],
  },
  {
    title: "Security, support & regulation",
    items: [
      {
        q: "How is my money and my data protected?",
        a: "We apply bank-grade protection: identity verification (KYC), anti-money-laundering and sanctions screening, and encryption of your information. We will never ask you for your full password, PIN or one-time code by phone, email or SMS.",
      },
      {
        q: "What are your banking hours?",
        a: "Our team is available Monday to Friday, 08:00–17:00 (Central Africa Time). You can reach us by telephone on +263 861 200 0700, by email at bank@bardsantner.co.zw, or on WhatsApp.",
      },
      {
        q: "How do I make a complaint?",
        a: "We want to hear if something has gone wrong. Email complaints@bardsantner.com, call +263 861 200 0700, or write to us at our Head Office. Every complaint is logged and acknowledged within two business days. See the Complaints page for the full process.",
      },
      {
        q: "Who regulates Bard Santner?",
        a: "Bard Santner Microfinance Bank operates under a microfinance banking licence issued by, and is supervised by, the Reserve Bank of Zimbabwe (RBZ). See the Regulatory and Legal pages for the full framework.",
      },
    ],
  },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-bone-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-5 py-5 md:py-6 text-left group"
      >
        <span className="font-display text-[18px] md:text-[20px] text-navy-600 group-hover:text-orange-700 leading-snug transition-colors">
          {item.q}
        </span>
        <span className="mt-0.5 w-8 h-8 rounded-full border-2 border-bone-300 group-hover:border-orange-500 flex items-center justify-center shrink-0 transition-colors">
          {open ? (
            <MinusIcon size={15} weight="bold" className="text-orange-600" />
          ) : (
            <PlusIcon size={15} weight="bold" className="text-navy-500 group-hover:text-orange-600 transition-colors" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-[16px] md:text-[17px] text-bone-600 leading-relaxed max-w-3xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  // Track the open item by a composite key so only one is open at a time.
  const [openKey, setOpenKey] = useState("0-0");
  const comingSoon = useComingSoon();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_GROUPS.flatMap((g) =>
      g.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      }))
    ),
  };

  return (
    <PageTransition>
      <SEO
        title="Frequently asked questions"
        description="Answers to common questions about opening an account, Online Banking, diaspora banking, security, hours, complaints and how Bard Santner is regulated."
        path="/faq"
        jsonLd={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]),
          faqJsonLd,
        ]}
      />

      <PageHero
        eyebrow="Help"
        headline="Questions, answered."
        body="The things people ask us most, in plain language. If your question isn't here, a banker is one message away."
        image={BRAND.branchInterior}
        imagePosition="center 40%"
        overlayTint="navy"
      />

      <section className="section bg-milk">
        <div className="container-bank grid grid-cols-12 gap-y-10 md:gap-12 items-start">
          {/* Left rail — still-can't-find-it prompt */}
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow eyebrow-accent mb-4">Frequently asked</p>
            <h2 className="display-md text-navy-600 text-balance mb-5">
              Still looking for something?
            </h2>
            <p className="text-[16.5px] text-bone-600 leading-relaxed mb-7 max-w-sm">
              Our team replies within one business day. Reach a real banker — not a bot — whenever you need one.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="btn btn-navy w-full sm:w-auto justify-center">
                Talk to a banker
                <ArrowRightIcon size={15} weight="bold" />
              </Link>
              <button type="button" onClick={comingSoon} className="btn btn-outline w-full sm:w-auto justify-center">
                Explore Online Banking
              </button>
            </div>
          </div>

          {/* Right — grouped accordions */}
          <div className="col-span-12 md:col-span-8">
            {FAQ_GROUPS.map((group, gi) => (
              <div key={group.title} className={gi > 0 ? "mt-10 md:mt-14" : ""}>
                <h3 className="font-mono text-[11px] tracking-[0.22em] uppercase text-orange-600 mb-2">
                  {group.title}
                </h3>
                <div className="border-t border-bone-200">
                  {group.items.map((item, ii) => {
                    const key = `${gi}-${ii}`;
                    return (
                      <FaqItem
                        key={key}
                        item={item}
                        open={openKey === key}
                        onToggle={() => setOpenKey((k) => (k === key ? "" : key))}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdvisoryBand />
    </PageTransition>
  );
}
