import { motion } from "framer-motion";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919217979141"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 220, damping: 18 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.27c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32zM16.02 5.33c-5.9 0-10.69 4.79-10.69 10.69 0 1.88.49 3.71 1.43 5.33L5 27l5.81-1.71a10.66 10.66 0 0 0 5.21 1.34h.01c5.9 0 10.69-4.79 10.69-10.69 0-2.85-1.11-5.54-3.13-7.55a10.6 10.6 0 0 0-7.57-3.06zm0 19.55h-.01a8.86 8.86 0 0 1-4.51-1.24l-.32-.19-3.45 1.02 1.04-3.36-.21-.34a8.85 8.85 0 0 1-1.36-4.74c0-4.9 3.99-8.88 8.89-8.88 2.37 0 4.6.92 6.28 2.6a8.83 8.83 0 0 1 2.6 6.28c0 4.9-3.98 8.85-8.95 8.85z" />
        </svg>
      </span>
    </motion.a>
  );
}
