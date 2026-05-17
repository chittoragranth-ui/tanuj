import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-sand py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-luxury uppercase text-gold"
        >
          Reservations
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 font-serif text-4xl leading-[1.1] md:text-6xl lg:text-7xl"
        >
          Speak with us directly.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base font-light text-muted-foreground"
        >
          For availability, private enquiries and tailored stays, our team is a
          message away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <div className="glass border border-border/70 p-8 md:p-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <a href="tel:+919217979141" className="group flex flex-col items-center gap-3 border-b border-border pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.4} />
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Call</div>
                <div className="font-serif text-lg transition-colors group-hover:text-gold">+91 92179 79141</div>
              </a>
              <a href="https://wa.me/919217979141" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 border-b border-border pb-6 md:border-b-0 md:border-r md:pb-0 md:px-6">
                <MessageCircle className="h-5 w-5 text-gold" strokeWidth={1.4} />
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">WhatsApp</div>
                <div className="font-serif text-lg transition-colors group-hover:text-gold">Message Concierge</div>
              </a>
              <a href="mailto:itcsuites1@gmail.com" className="group flex flex-col items-center gap-3 md:pl-6">
                <Mail className="h-5 w-5 text-gold" strokeWidth={1.4} />
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Email</div>
                <div className="font-serif text-lg transition-colors group-hover:text-gold">itcsuites1@gmail.com</div>
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="https://wa.me/919217979141"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition-all hover:bg-gold hover:text-ink"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919217979141"
                className="inline-flex items-center justify-center border border-ink/70 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink transition-all hover:bg-ink hover:text-white"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="text-center md:text-left">
          <div className="font-serif text-lg text-white">Premium ITC Suites</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.28em]">Omaxe ITC · Alpha-2 · Greater Noida</div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.28em]">© {new Date().getFullYear()} Premium ITC Suites</div>
      </div>
    </footer>
  );
}
