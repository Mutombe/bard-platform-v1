import { ShieldCheckIcon, BankIcon, LockKeyIcon, ScalesIcon } from "@phosphor-icons/react";

/**
 * Trust ribbon — embedded throughout the site. Communicates the four
 * trust pillars any serious bank shows on the home page:
 *   1. Regulated and supervised
 *   2. Deposit protection
 *   3. Encryption and security
 *   4. Compliance and AML
 */
const TRUST_PILLARS = [
  {
    icon: BankIcon,
    title: "Regulated",
    body: "BSMFB operates under licence from the prudential authority and is supervised in line with international banking standards.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Deposits protected",
    body: "Customer deposits are held in compliance with the Deposit Protection framework. Coverage limits and terms apply.",
  },
  {
    icon: LockKeyIcon,
    title: "Security first",
    body: "All transactions are encrypted end-to-end. Biometric, device-bound and adaptive authentication on every channel.",
  },
  {
    icon: ScalesIcon,
    title: "AML compliant",
    body: "Customer due diligence, transaction monitoring and reporting performed to international AML / CFT standards.",
  },
];

export default function TrustRibbon() {
  return (
    <section className="section bg-white border-y border-[color:var(--color-bone-200)]">
      <div className="container-bank">
        <div className="text-center mb-10 md:mb-12">
          <p className="eyebrow mb-4">§ 07 · Trust architecture</p>
          <h2 className="display-lg text-[color:var(--color-navy-600)] max-w-2xl mx-auto">
            The obligations a bank inherits the moment it opens its first account.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TRUST_PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title}>
                <div className="w-12 h-12 rounded-lg bg-[color:var(--color-orange-50)] flex items-center justify-center mb-4">
                  <Icon size={22} weight="regular" className="text-[color:var(--color-orange-600)]" />
                </div>
                <p className="font-display text-[17px] text-[color:var(--color-navy-600)] mb-2">
                  {p.title}
                </p>
                <p className="text-[13px] text-[color:var(--color-bone-600)] leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
