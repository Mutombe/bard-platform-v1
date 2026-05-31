import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { HERO } from "../data/images.js";
import { PhoneIcon, EnvelopeSimpleIcon, ChatCircleIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";
import { StackedAside } from "../components/PageHeroAsides.jsx";

const CHANNELS = [
  { icon: PhoneIcon, title: "Telephone", lines: ["+263 861 200 0700", "Mon-Fri, 08:00-17:00 CAT"], href: "tel:+263861200700" },
  { icon: EnvelopeSimpleIcon, title: "Email", lines: ["info@bardsantner.com", "Response within one business day"], href: "mailto:info@bardsantner.com" },
  { icon: ChatCircleIcon, title: "WhatsApp", lines: ["+263 774 954 415", "For existing customers"], href: "https://wa.me/263774954415" },
  { icon: MapPinIcon, title: "Visit a branch", lines: ["5th Floor Beverly Court", "100 Nelson Mandela Avenue, Harare"], href: "/locations" },
];

export default function Contact() {
  const [params] = useSearchParams();
  const initialAudience = params.get("audience") || "personal";
  const initialProduct = params.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    audience: initialAudience,
    product: initialProduct,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update(k, v) { setForm((f) => ({ ...f, [k]: v })); }

  function onSubmit(e) {
    e.preventDefault();
    // Client-only submission marker. A real backend handler is wired post-launch.
    setSubmitted(true);
  }

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Reach Bard Santner. Telephone, email, WhatsApp, or by appointment with a banker at our Harare flagship branch."
        path="/contact"
        jsonLd={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]}
      />

      <PageHero
        eyebrow="§ Contact"
        headline="Open a conversation. It commits nothing."
        body="The first call tells us if we are the right bank for you, and tells you if we are a partner worth a decade."
        image={HERO.contact}
        overlayTint="navy"
        variant="editorial"
        aside={<StackedAside />}
      />

      {/* Channels grid */}
      <section className="bg-milk section">
        <div className="container-bank">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              const Comp = c.href.startsWith("http") || c.href.startsWith("tel:") || c.href.startsWith("mailto:") ? "a" : "a";
              return (
                <a key={c.title} href={c.href} className="block p-8 md:p-9 rounded-xl border border-bone-200 hover:border-orange-500 hover:shadow-[var(--shadow-card)] transition-all">
                  <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center mb-5">
                    <Icon size={20} weight="regular" className="text-orange-600" />
                  </div>
                  <p className="font-display text-[18px] text-navy-600 mb-2">{c.title}</p>
                  {c.lines.map((l, i) => (
                    <p key={i} className={`text-[13.5px] ${i === 0 ? "text-navy-600 font-medium" : "text-bone-500"}`}>
                      {l}
                    </p>
                  ))}
                </a>
              );
            })}
          </div>

          {/* Request a banker — confidence spacing.
              Wider container (6xl, was 5xl), generous gap (16, was 10),
              bigger section heading (display-xl), more vertical
              breathing above the form. The left manifesto and the right
              form both get more room to settle. */}
          <div className="grid grid-cols-12 gap-12 md:gap-16 max-w-6xl mx-auto mt-12 md:mt-20">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[2px] w-12 bg-orange-500" />
                <p className="eyebrow eyebrow-accent">§ Request a banker</p>
              </div>
              <h2 className="display-xl text-navy-600 text-balance mb-7 leading-[1.05]">
                Tell us what you are looking for.
              </h2>
              <p className="text-[16px] md:text-[17px] text-bone-600 leading-relaxed mb-9 max-w-md">
                A relationship banker will call you back within one business day. If your enquiry is urgent, please use the telephone channel above.
              </p>
              <ul className="space-y-5 text-[14px] md:text-[14.5px] text-bone-600">
                <li className="flex items-start gap-4">
                  <CheckCircleIcon size={20} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                  <span>No commitment. No automated chase sequence.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircleIcon size={20} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                  <span>You speak with a banker, not a call-centre agent.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircleIcon size={20} weight="regular" className="text-orange-600 mt-0.5 shrink-0" />
                  <span>Same banker for the duration of the conversation.</span>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-7">
              {submitted ? (
                <div className="p-12 md:p-14 rounded-xl bg-orange-50 border border-orange-200 text-center">
                  <CheckCircleIcon size={44} weight="regular" className="text-orange-600 mx-auto mb-5" />
                  <h3 className="font-display text-[28px] text-navy-600 mb-4">Thank you.</h3>
                  <p className="text-[15px] text-bone-600 max-w-md mx-auto leading-relaxed">
                    A relationship banker has been notified and will be in touch within one business day. We have sent a confirmation to <strong className="text-navy-600">{form.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="p-10 md:p-12 rounded-xl bg-paper border border-bone-200 space-y-7 shadow-[var(--shadow-card)]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} required />
                    <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Telephone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
                    <div>
                      <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">Audience</label>
                      <select
                        value={form.audience}
                        onChange={(e) => update("audience", e.target.value)}
                        className="w-full px-5 py-3.5 text-[15.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500"
                      >
                        {AUDIENCES.map((a) => (
                          <option key={a.id} value={a.id}>{a.label_full}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">Tell us what you need</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={5}
                      required
                      className="w-full px-5 py-3.5 text-[15.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 resize-none"
                      placeholder="What product, what stage, what timeline. The more we know, the better the first call."
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="text-[11.5px] text-bone-500 leading-relaxed max-w-sm">
                      We use your details only to respond to this enquiry. See <a href="/privacy" className="underline hover:text-navy-600">Privacy</a>.
                    </p>
                    <button type="submit" className="btn btn-primary self-start md:self-auto">
                      Request a banker <ArrowRightIcon size={14} weight="bold" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-5 py-3.5 text-[15.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500"
      />
    </div>
  );
}
