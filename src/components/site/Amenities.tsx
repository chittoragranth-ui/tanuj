import { motion } from "framer-motion";
import { Wifi, Snowflake, Tv, Sparkles, ShieldCheck, MapPin, BedDouble, Coffee } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: Tv, label: "Smart Television/OTT platforms" },
  { icon: Sparkles, label: "Premium Interiors" },
  { icon: ShieldCheck, label: "Secure Property" },
  { icon: MapPin, label: "Prime Location" },
  { icon: BedDouble, label: "Daily Housekeeping" },
  { icon: Coffee, label: "Comfortable Stay" },
];

export function Amenities() {
  return (
    <section id="amenities" className="relative bg-ink py-28 text-white md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5"
          >
            <span className="text-[10px] tracking-luxury uppercase text-gold">Amenities</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              Considered comforts,<br />quietly delivered.
            </h2>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/70">
              Every detail has been arranged so you arrive, settle and forget the
              world outside.
            </p>
          </motion.div>

          <div className="md:col-span-7">
            <ul className="grid grid-cols-2 gap-px bg-white/10">
              {amenities.map((a, i) => (
                <motion.li
                  key={a.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: (i % 4) * 0.06 }}
                  className="group flex flex-col items-start gap-4 bg-ink p-7 transition-colors hover:bg-[oklch(0.18_0.012_60)]"
                >
                  <a.icon className="h-6 w-6 text-gold transition-transform group-hover:scale-110" strokeWidth={1.25} />
                  <span className="text-sm font-light text-white/90">{a.label}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
