import React from "react";
import { Gift } from "lucide-react";
import { CAMPAIGNS, bookLink } from "./data";

export default function Campaigns({ onBook }) {
  return (
    <section id="kampanyalar" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Kampanyalar</p>
        <h2 className="font-display text-5xl md:text-6xl mb-14 text-center">Size özel fırsatlar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {CAMPAIGNS.map((c) => (
            <div key={c.title} className="bg-card border border-primary/40 rounded-2xl p-8 text-center">
              <Gift className="w-8 h-8 text-primary mx-auto mb-4" />
              <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs tracking-wide">{c.badge}</span>
              <h3 className="font-display text-3xl mt-4">{c.title}</h3>
              <p className="text-muted-foreground mt-2">{c.desc}</p>
              <a href={bookLink(c.service)} target="_blank" rel="noreferrer" className="mt-6 inline-block px-7 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition">Randevu Al</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}