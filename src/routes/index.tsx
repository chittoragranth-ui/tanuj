import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Rooms } from "@/components/site/Rooms";
import { Amenities } from "@/components/site/Amenities";
import { Location } from "@/components/site/Location";
import { Contact, Footer } from "@/components/site/Contact";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium ITC Suites — Luxury Stay in Greater Noida" },
      {
        name: "description",
        content:
          "Premium ITC Suites — a boutique collection of luxury suites at Omaxe ITC, Alpha-2, Greater Noida. Refined interiors, quiet comfort, prime location.",
      },
      { property: "og:title", content: "Premium ITC Suites — Luxury Stay in Greater Noida" },
      {
        property: "og:description",
        content:
          "Boutique luxury suites at Omaxe ITC, Alpha-2, Greater Noida. Speak with our concierge directly.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
