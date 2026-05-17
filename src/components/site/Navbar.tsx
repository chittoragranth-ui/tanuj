import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Suites" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a href="#top" className={`flex items-center gap-3 leading-none ${scrolled ? "text-foreground" : "text-white"}`}>
          <img
            src={logo}
            alt="Premium ITC Suites logo"
            className="h-9 w-9 md:h-11 md:w-11 rounded-full object-cover ring-1 ring-white/20"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl md:text-2xl">Premium ITC Suites</span>
            <span className="mt-1 text-[10px] tracking-luxury uppercase opacity-70">Greater Noida</span>
          </span>
        </a>

        <ul className={`hidden items-center gap-9 md:flex ${scrolled ? "text-foreground" : "text-white/90"}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[12px] uppercase tracking-[0.22em] transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+919217979141"
          className={`hidden md:inline-flex items-center gap-2 border px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase transition-all hover:bg-gold hover:text-ink hover:border-gold ${
            scrolled ? "border-foreground/30 text-foreground" : "border-white/40 text-white"
          }`}
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>+91 92179 79141</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
        >
          <div className="space-y-1.5">
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-5 bg-current ml-auto" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border/60">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-3 text-sm uppercase tracking-[0.2em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="tel:+919217979141"
              className="mt-2 inline-flex items-center justify-center border border-foreground/30 py-3 text-xs tracking-[0.22em] uppercase"
            >
              +91 92179 79141
            </a>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
