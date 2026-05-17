import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-suite.jpeg";
import bedroom2 from "@/assets/bedroom-2.jpeg";
import living from "@/assets/living.jpeg";
import view from "@/assets/view.jpeg";
import bedroom1 from "@/assets/bedroom-1.jpeg";

const slides = [heroImg, bedroom2, living, view, bedroom1];

export function Hero() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const paginate = useCallback((dir: number) => {
    setState(([i]) => [(i + dir + slides.length) % slides.length, dir]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 5000);
    return () => clearInterval(id);
  }, [paginate, index]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -60 || velocity < -400) paginate(1);
    else if (offset > 60 || velocity > 400) paginate(-1);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.06, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, scale: 1.02, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <AnimatePresence mode="sync" custom={direction}>
        <motion.img
          key={index}
          src={slides[index]}
          alt="Premium ITC Suites — luxury suite interior"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 6, ease: "linear" },
            x: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={onDragEnd}
          className="absolute inset-0 h-full w-full object-cover select-none touch-pan-y cursor-grab active:cursor-grabbing"
          draggable={false}
        />
      </AnimatePresence>
      <div className="absolute inset-0 hero-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mb-6 text-[10px] tracking-luxury uppercase text-gold"
        >
          ◆  Boutique Luxury Suites  ◆
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.1 }}
          className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Premium ITC Suites
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 1 }}
          className="mt-6 max-w-xl text-balance text-base font-light text-white/85 md:text-lg"
        >
          A refined luxury stay experience in the heart of Greater Noida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 pointer-events-auto"
        >
          <a
            href="#rooms"
            className="inline-flex items-center justify-center border border-white/70 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition-all hover:bg-white hover:text-ink"
          >
            View Suites
          </a>
          <a
            href="https://wa.me/919217979141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink transition-all hover:opacity-90"
          >
            Contact on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Desktop nav arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => paginate(-1)}
        className="group absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-white/40 backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:bg-white/10 hover:text-gold md:flex lg:left-10"
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={1.25} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => paginate(1)}
        className="group absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-white/40 backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:bg-white/10 hover:text-gold md:flex lg:right-10"
      >
        <ChevronRight className="h-4 w-4" strokeWidth={1.25} />
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-px w-8 transition-all duration-700 ${i === index ? "bg-gold" : "bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
