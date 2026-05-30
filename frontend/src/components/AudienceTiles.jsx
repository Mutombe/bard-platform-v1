import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { AUDIENCES } from "../data/audiences.js";

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
    <section className="section bg-white">
      <div className="container-bank">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-4">§ 02 · How we organise</p>
          <h2 className="display-xl text-navy-600">
            {heading}
            <br />
            <span className="italic-accent text-orange-600 font-light">
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
                    backgroundImage: `url(${a.hero_image})`,
                    backgroundColor: "var(--color-navy-700)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                  <p className="eyebrow eyebrow-on-dark mb-4">{a.label}</p>
                  <p className="font-display text-[20px] md:text-[22px] text-white leading-snug">
                    Banking for{" "}
                    <span className="italic-accent text-orange-300 font-light">
                      {a.id === "personal" && "you"}
                      {a.id === "business" && "your business"}
                      {a.id === "private" && "your wealth"}
                      {a.id === "international" && "the diaspora"}
                      {a.id === "institutional" && "institutions"}
                    </span>
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] text-white/80 group-hover:text-white">
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
