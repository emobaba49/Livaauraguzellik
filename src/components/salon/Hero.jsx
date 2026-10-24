import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { IMAGES, BRAND, waLink, bookLink } from "./data";
import RatingBadge from "./RatingBadge";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-16">
      <motion.img
        src={IMAGES.salon}
        alt={BRAND}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      <motion.div
        className="relative px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Güzellik & Bakım Merkezi</p>
        <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">{BRAND}</h1>
        <div className="w-16 h-px bg-primary mx-auto my-8" />
        <p className="font-display italic text-3xl md:text-4xl text-primary">Güzelliğinize Işıltı Katın</p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a href={bookLink()} target="_blank" rel="noreferrer" className="px-9 py-3.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition inline-block">Randevu Al</a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="px-9 py-3.5 rounded-full border border-primary text-primary bg-background/70 hover:bg-primary hover:text-primary-foreground transition inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
        <div className="mt-12 flex justify-center">
          <RatingBadge />
        </div>
      </motion.div>
    </section>
  );
}