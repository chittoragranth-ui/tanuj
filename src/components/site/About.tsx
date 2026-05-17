import { motion } from "framer-motion";
import exteriorImg from "@/assets/exterior.jpeg";

export function About() {
  return (
    <section id="about" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-5"
        >
          <span className="text-[10px] tracking-luxury uppercase text-gold">The House</span>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            Quiet luxury,<br />
            <em className="not-italic text-gold">elegantly composed.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="md:col-span-7 md:pt-10"
        >
          <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
            Premium ITC Suites is a discreet collection of fully-appointed luxury suites
            within Omaxe ITC, Alpha-2 — a quiet enclave above the city, moments from
            everything that matters in Greater Noida.
          </p>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
            Each suite is composed with warm interiors, considered lighting and
            modern comforts — designed for travellers who value calm, privacy and
            an effortless sense of home.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "Boutique", v: "Suites" },
              { k: "24 / 7", v: "Concierge" },
              { k: "Prime", v: "Location" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-serif text-2xl text-foreground md:text-3xl">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1 }}
        className="mx-auto mt-24 max-w-7xl px-6 md:px-10"
      >
        <div className="relative aspect-[16/8] w-full overflow-hidden">
          <img src={exteriorImg} alt="Omaxe ITC building exterior" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Address</div>
            <div className="mt-2 font-serif text-2xl md:text-3xl">Omaxe ITC, Alpha-2, Greater Noida</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
