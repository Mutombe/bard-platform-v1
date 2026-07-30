import {
  ShieldCheckIcon,
  BankIcon,
  LockKeyIcon,
  ScalesIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

/**
 * Trust ribbon — a bento composition (dark statement card on the left, four
 * colour-blocked pillar cards on the right, each with a corner ↗ badge). It
 * communicates the four trust pillars any serious bank shows on the home page:
 *   1. Regulated and supervised
 *   2. Deposit protection
 *   3. Encryption and security
 *   4. Compliance and AML
 */
const TRUST_PILLARS = [
  {
    icon: BankIcon,
    title: "Regulated",
    body: "Licensed by the prudential authority and supervised to international banking standards.",
    tint: "orange",
  },
  {
    icon: ShieldCheckIcon,
    title: "Deposits protected",
    body: "Deposits held under the Deposit Protection framework. Coverage limits and terms apply.",
    tint: "navy",
  },
  {
    icon: LockKeyIcon,
    title: "Security first",
    body: "End-to-end encryption. Biometric, device-bound and adaptive authentication on every channel.",
    tint: "navy",
  },
  {
    icon: ScalesIcon,
    title: "AML compliant",
    body: "Due diligence, transaction monitoring and reporting to international AML / CFT standards.",
    tint: "orange",
  },
];

export default function TrustRibbon() {
  return (
    <section className="section bg-milk border-t border-bone-200">
      <div className="container-bank">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-5 items-stretch">
          {/* Statement card — dark, left */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-navy-900 text-white p-8 md:p-10 flex flex-col shadow-[var(--shadow-hero)]">
            <p className="eyebrow eyebrow-on-dark mb-5">§ 07 · Trust architecture</p>
            <h2 className="display-md text-white text-balance">
              The obligations a bank inherits the moment it opens its first account.
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-white/75 leading-relaxed">
              Regulation, protection and security are not features. They are the
              foundation everything else is built on.
            </p>
            <div className="mt-auto pt-8">
              <div className="flex items-center gap-3 border-t border-white/12 pt-6">
                <span className="w-9 h-9 rounded-full bg-orange-500/15 flex items-center justify-center shrink-0">
                  <ShieldCheckIcon size={18} weight="regular" className="text-orange-400" />
                </span>
                <p className="text-[13px] text-white/70 leading-snug">
                  Regulated &amp; supervised by the prudential authority.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar cards — colour-blocked, right */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {TRUST_PILLARS.map((p) => {
              const Icon = p.icon;
              const isOrange = p.tint === "orange";
              const cardBg = isOrange ? "bg-orange-500" : "bg-navy-700";
              return (
                <div
                  key={p.title}
                  className={`${cardBg} text-white rounded-2xl p-6 md:p-7 flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon size={30} weight="regular" className="text-white" />
                    <span className="w-9 h-9 rounded-full border-2 border-white/45 flex items-center justify-center shrink-0">
                      <ArrowUpRightIcon size={15} weight="bold" className="text-white" />
                    </span>
                  </div>
                  <p className="font-display font-medium text-white text-[19px] md:text-[20px] leading-tight mb-2">
                    {p.title}
                  </p>
                  <p className="text-[13.5px] md:text-[14px] text-white/85 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
