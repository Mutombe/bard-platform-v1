import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO, { breadcrumbJsonLd } from "../components/SEO.jsx";
import { BRAND } from "../data/images.js";
import { PhoneIcon, EnvelopeSimpleIcon, ChatCircleIcon, MapPinIcon, CheckCircleIcon, ArrowSquareOutIcon, HeadsetIcon } from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";

// Where enquiries are routed. The form composes a pre-filled message and hands
// it off to the client's WhatsApp or email app, per the channel the user picks.
const WHATSAPP_NUMBER = "263712976761";
const ENQUIRY_EMAIL = "bank@bardsantner.co.zw";

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
  const [sentVia, setSentVia] = useState("email");
  // Which channel the pressed button chose — read synchronously in onSubmit,
  // after native "required" validation has passed.
  const channelRef = useRef("email");

  function update(k, v) { setForm((f) => ({ ...f, [k]: v })); }

  function audienceLabel(id) {
    return AUDIENCES.find((a) => a.id === id)?.label_full || id;
  }

  // Compose a tidy, human-readable enquiry from the form fields.
  function buildMessage() {
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      `Enquiry type: ${audienceLabel(form.audience)}`,
      form.product && `Product: ${form.product}`,
      "",
      form.message,
    ].filter((l) => l !== false && l !== undefined);
    return lines.join("\n");
  }

  function onSubmit(e) {
    e.preventDefault();
    const channel = channelRef.current;
    const body = buildMessage();
    if (channel === "whatsapp") {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      const subject = `Banker enquiry — ${form.name || "new enquiry"}`;
      window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setSentVia(channel);
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
        eyebrow="Contact"
        headline="Open a conversation. It commits nothing."
        body="The first call tells us if we are the right bank for you, and tells you if we are a partner worth a decade."
        image={BRAND.contactHero}
        imagePosition="center 25%"
      />

      {/* Channels grid */}
      <section className="bg-milk section">
        <div className="container-bank">
          {/* Channels — asymmetric bento (deck "table of content" layout) */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-fr gap-4 md:gap-5 mb-14 md:mb-20">
            {/* Big — visit us, arched image */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=100+Nelson+Mandela+Avenue+Harare"
              target="_blank"
              rel="noopener noreferrer"
              className="group md:col-span-6 md:row-span-2 relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[360px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${BRAND.branchInterior})`, filter: "saturate(1.05) contrast(1.02)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, rgba(14,9,3,0.3) 0%, rgba(14,9,3,0.86) 100%)" }} />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500" />
              <div className="relative h-full p-7 md:p-9 flex flex-col justify-between">
                <span className="w-12 h-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                  <MapPinIcon size={22} weight="regular" className="text-white" />
                </span>
                <div>
                  <p className="eyebrow eyebrow-on-dark mb-2">Visit us</p>
                  <h3 className="font-display text-white text-[24px] md:text-[28px] leading-tight mb-2">
                    Head Office — Harare
                  </h3>
                  <p className="text-white/80 text-[15.5px] leading-relaxed max-w-xs">
                    7th Floor, Beverly Court, 100 Nelson Mandela Avenue, Harare
                  </p>
                </div>
              </div>
            </a>

            {/* Telephone — orange */}
            <a href="tel:+263712976761" className="group md:col-span-3 rounded-2xl bg-orange-500 text-white p-6 md:p-7 flex flex-col justify-between min-h-[168px]">
              <PhoneIcon size={26} weight="regular" className="text-white" />
              <div>
                <p className="font-display text-white text-[19px] md:text-[20px] mb-1.5">Telephone</p>
                <p className="text-[15px] font-medium text-white/95">+263 71 297 6761</p>
                <p className="text-[12.5px] text-white/75 mt-0.5">Call or WhatsApp us</p>
              </div>
            </a>

            {/* WhatsApp — navy, external */}
            <a href="https://wa.me/263712976761" target="_blank" rel="noopener noreferrer" className="group relative md:col-span-3 rounded-2xl bg-navy-700 text-white p-6 md:p-7 flex flex-col justify-between min-h-[168px]">
              <ArrowSquareOutIcon size={15} weight="bold" className="absolute top-5 right-5 text-white/50" aria-label="opens in a new tab" />
              <ChatCircleIcon size={26} weight="regular" className="text-white" />
              <div>
                <p className="font-display text-white text-[19px] md:text-[20px] mb-1.5">WhatsApp</p>
                <p className="text-[15px] font-medium text-white/95">+263 71 297 6761</p>
                <p className="text-[12.5px] text-white/70 mt-0.5">Chat with our team</p>
              </div>
            </a>

            {/* Email — white */}
            <a href="mailto:bank@bardsantner.co.zw" className="group md:col-span-3 rounded-2xl bg-white border-2 border-bone-200 hover:border-orange-500 p-6 md:p-7 flex flex-col justify-between min-h-[168px] transition-colors">
              <EnvelopeSimpleIcon size={26} weight="regular" className="text-orange-600" />
              <div>
                <p className="font-display text-[19px] md:text-[20px] text-navy-600 mb-1.5">Email</p>
                <p className="text-[15px] font-medium text-navy-600 break-words">bank@bardsantner.co.zw</p>
                <p className="text-[12.5px] text-bone-500 mt-0.5">We will respond within one business day</p>
              </div>
            </a>

            {/* Status — pre-launch notice (the bank is not yet operational) */}
            <div className="md:col-span-3 rounded-2xl bg-navy-700 text-white p-6 md:p-7 flex flex-col justify-between min-h-[168px]">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
              </span>
              <div>
                <p className="font-display text-white text-[19px] md:text-[20px] mb-1.5">Not yet open</p>
                <p className="text-[12.5px] text-white/75 leading-snug">
                  We're not operational yet — send an early enquiry below and we'll file it ready for the day we open.
                </p>
              </div>
            </div>
          </div>

          {/* Request a banker — different layouts mobile vs desktop.
              Desktop: 5+7 grid with manifesto on the left, form on the right.
              Mobile: stacked, but with a tighter manifesto (no bullet list — those
              three points are inline pill-tags instead) so the form gets to
              be the focal point quickly. */}
          <div className="grid grid-cols-12 gap-y-8 md:gap-16 mt-16 md:mt-32">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <HeadsetIcon size={22} weight="duotone" className="text-orange-500 shrink-0" />
                <p className="eyebrow eyebrow-accent">§ Request a banker</p>
              </div>
              <h2 className="display-xl text-navy-600 text-balance mb-5 md:mb-7 leading-[1.05]">
                Tell us what you are looking for.
              </h2>
              <p className="text-[16.5px] md:text-[18px] text-bone-600 leading-relaxed mb-6 md:mb-9 max-w-md">
                Fill in your details, then choose how you'd like to reach us — send
                straight to our team on <strong className="text-navy-600">WhatsApp</strong> or by
                <strong className="text-navy-600"> email</strong>. A relationship banker replies within one business day.
              </p>

              {/* Mobile-only: collapse the three commitments into a row of
                  compact pill tags. The full sentence bullets stay on
                  desktop where there is room for the editorial pace. */}
              <div className="md:hidden flex flex-wrap gap-2">
                <Pill>No commitment</Pill>
                <Pill>No auto-chase</Pill>
                <Pill>Real banker</Pill>
                <Pill>Same banker</Pill>
              </div>

              <ul className="hidden md:block space-y-5 text-[15.5px] text-bone-600">
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
                <div className="p-7 md:p-14 rounded-xl bg-orange-50 border border-orange-200 text-center">
                  <CheckCircleIcon size={40} weight="regular" className="text-orange-600 mx-auto mb-4 md:mb-5" />
                  <h3 className="font-display text-[22px] md:text-[28px] text-navy-600 mb-3 md:mb-4">Almost there.</h3>
                  <p className="text-[15.5px] md:text-[16px] text-bone-600 max-w-md mx-auto leading-relaxed">
                    We've opened <strong className="text-navy-600">{sentVia === "whatsapp" ? "WhatsApp" : "your email app"}</strong> with your enquiry pre-filled — just press send and a relationship banker will be in touch within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[14px] font-medium text-orange-600 hover:text-orange-700 underline underline-offset-4"
                  >
                    Back to the form
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="p-5 sm:p-7 md:p-12 rounded-xl bg-paper border border-bone-200 space-y-5 md:space-y-7 shadow-[var(--shadow-card)]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                    <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} required />
                    <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Telephone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+263 77 123 4567" />
                    <div>
                      <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">Area of interest</label>
                      <select
                        value={form.audience}
                        onChange={(e) => update("audience", e.target.value)}
                        className="w-full px-4 md:px-5 py-3.5 text-[16px] md:text-[16.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22 fill=%22none%22><path d=%22M1 1L6 6L11 1%22 stroke=%22%234a4942%22 stroke-width=%221.5%22 stroke-linecap=%22round%22/></svg>')] bg-no-repeat bg-[right_16px_center]"
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
                      rows={4}
                      required
                      className="w-full px-4 md:px-5 py-3.5 text-[16px] md:text-[16.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 resize-none min-h-[120px] md:min-h-[140px]"
                      placeholder="What product, what stage, what timeline."
                    />
                  </div>
                  {/* Channel choice — the user picks where their enquiry is
                      sent. Both buttons submit the form (so native "required"
                      validation runs first); the pressed one sets the channel
                      the handler reads. */}
                  <div className="pt-1 space-y-3">
                    <p className="text-[12.5px] font-medium text-navy-600">Choose how to send your enquiry</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="submit"
                        onClick={() => { channelRef.current = "whatsapp"; }}
                        className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full bg-navy-700 hover:bg-navy-900 text-white font-medium text-[15.5px] transition-colors"
                      >
                        <ChatCircleIcon size={18} weight="fill" />
                        Send via WhatsApp
                      </button>
                      <button
                        type="submit"
                        onClick={() => { channelRef.current = "email"; }}
                        className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-[15.5px] transition-colors"
                      >
                        <EnvelopeSimpleIcon size={18} weight="fill" />
                        Send via Email
                      </button>
                    </div>
                    <p className="text-[11.5px] text-bone-500 leading-relaxed">
                      We use your details only to respond to this enquiry. See <a href="/privacy" className="underline hover:text-navy-600">Privacy</a>.
                    </p>
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

function Field({ label, value, onChange, type = "text", required = false, placeholder }) {
  return (
    <div>
      <label className="block text-[12.5px] font-medium text-navy-600 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 md:px-5 py-3.5 text-[16px] md:text-[16.5px] bg-white border border-bone-300 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-bone-400"
      />
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-[12.5px] font-medium border border-orange-200/70">
      {children}
    </span>
  );
}
