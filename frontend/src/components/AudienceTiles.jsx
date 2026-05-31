import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";
import { AUDIENCE_TILE } from "../data/images.js";

/**
 * The AfrAsia "Banking Experiences" four-up tile module. Five tiles for
 * Bard Santner (we have an extra Institutional audience). Each tile is a
 * full-bleed editorial portrait with overlay caption.
 *
 * Reads from /data/audiences.js so this is the same data the audience
 * strip uses; one source of truth.
 */
export default function AudienceTiles({ heading = "Banking experiences" }) {
  return (
    <section className="section bg-milk">
      <div className="container-bank">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4">§ 02 · How we organise</p>
          <h2 className="display-xl text-navy-600">
            {heading}
            <br />
            <span className="text-navy-600">
              for every life that needs banking.
            </span>
          </h2>
          <p className="mt-6 text-bone-600 max-w-2xl mx-auto leading-relaxed">
            Five clear contexts. One bank. Choose the one your next
            conversation belongs in.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`${i === 4 ? "col-span-2 md:col-span-3 lg:col-span-1" : ""}`}
            >
              <Link to={a.path} className="group block relative overflow-hidden rounded-lg aspect-[3/4]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${AUDIENCE_TILE[a.id] || a.hero_image})`,
                    backgroundColor: "var(--color-navy-700)",
                    filter: "saturate(0.85) brightness(0.92)",
                  }}
                />
                {/* Warm gradient — top half left unblemished, transitions
                    at ~50% through orange-900 into ink-deep at the bottom.
                    The top-region is darkened gently from the top down so
                    the audience label has its own canvas to sit on without
                    overwhelming the photograph. */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-transparent" style={{ height: "40%" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/35 via-50% to-ink/95" />

                {/* Top-pinned audience label — every tile carries its
                    label at the SAME y position regardless of how long
                    or short the headline below grows. Five labels,
                    one horizontal line. */}
                <div className="absolute top-0 inset-x-0 p-7 md:p-8">
                  <p className="eyebrow eyebrow-on-dark underline underline-offset-[6px] decoration-1 decoration-orange-400/70">
                    {a.label}
                  </p>
                </div>

                {/* Bottom-pinned headline + CTA */}
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                  <p className="font-display text-[20px] md:text-[22px] text-white leading-snug">
                    Banking for{" "}
                    <span className="text-white">
                      {a.id === "personal" && "you"}
                      {a.id === "business" && "your business"}
                      {a.id === "private" && "your wealth"}
                      {a.id === "international" && "the diaspora"}
                      {a.id === "institutional" && "institutions"}
                    </span>
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] text-white/80 group-hover:text-white transition-colors">
                    Open the door
                    <ArrowRightIcon size={13} weight="bold" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="btn btn-primary">
            Become a client
            <ArrowRightIcon size={14} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
