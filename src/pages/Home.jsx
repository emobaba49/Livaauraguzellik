import React, { useState } from "react";
import Nav from "@/components/salon/Nav";
import Hero from "@/components/salon/Hero";
import Services from "@/components/salon/Services";
import About from "@/components/salon/About";
import Gallery from "@/components/salon/Gallery";
import Campaigns from "@/components/salon/Campaigns";
import BookingForm from "@/components/salon/BookingForm";
import Footer from "@/components/salon/Footer";
import WhatsAppFab from "@/components/salon/WhatsAppFab";

export default function Home() {
  const [service, setService] = useState(null);
  const book = (name) => {
    setService({ name, at: Date.now() });
    document.getElementById("randevu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      <Nav />
      <Hero />
      <Services onBook={book} />
      <About />
      <Gallery />
      <Campaigns onBook={book} />
      <BookingForm service={service} />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}