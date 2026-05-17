import { motion } from "framer-motion";
import bedroom1 from "@/assets/bedroom-1.jpeg";
import bedroom2 from "@/assets/bedroom-2.jpeg";
import bedroom3 from "@/assets/bedroom-3.jpeg";
import living from "@/assets/living.jpeg";
import bath1 from "@/assets/bath-1.jpeg";
import bath2 from "@/assets/bath-2.jpeg";
import view from "@/assets/view.jpeg";
import corridor from "@/assets/corridor.jpeg";
import heroSuite from "@/assets/hero-suite.jpeg";

type Item = { src: string; title: string; tag: string; span: string };

const items: Item[] = [
  { src: bedroom2, title: "The Master Suite", tag: "Bedroom", span: "md:col-span-7 md:row-span-2" },
  { src: living, title: "Living Lounge", tag: "Living", span: "md:col-span-5" },
  { src: view, title: "Skyline Outlook", tag: "View", span: "md:col-span-5" },
  { src: bedroom1, title: "Premium King", tag: "Bedroom", span: "md:col-span-6" },
  { src: bath1, title: "Spa Bath", tag: "Washroom", span: "md:col-span-6" },
  { src: bedroom3, title: "Cobalt Suite", tag: "Bedroom", span: "md:col-span-4" },
  { src: bath2, title: "Rain Shower", tag: "Washroom", span: "md:col-span-4" },
  { src: corridor, title: "Private Corridor", tag: "Property", span: "md:col-span-4" },
  { src: heroSuite, title: "Twilight Retreat", tag: "Property", span: "md:col-span-12" },
];

export function Rooms() {
  return (
    <section id="rooms" className="relative bg-sand py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-[10px] tracking-luxury uppercase text-gold">Suites & Spaces</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              A portrait of the property.
            </h2>
          </motion.div>
          <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            Every room is finished with care — warm timber floors, plush bedding and
            considered lighting designed for restful, unhurried evenings.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {items.map((it, i) => (
            <motion.figure
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden ${it.span} aspect-[4/5] md:aspect-auto md:h-[380px]`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold/90">{it.tag}</div>
                  <div className="mt-1 font-serif text-xl md:text-2xl">{it.title}</div>
                </div>
                <span className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/40 transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-ink md:flex">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
