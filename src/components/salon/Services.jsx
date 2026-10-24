import React from "react";
import { SERVICES, bookLink } from "./data";

export default function Services({ onBook }) {
  return (
    <section id="hizmetler" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Hizmetlerimiz</p>
        <h2 className="font-display text-5xl md:text-6xl mb-14 text-center">Size özel bakım ritüelleri</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article key={s.name} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl">{s.name}</h3>
                <p className="text-muted-foreground mt-2 min-h-[3rem]">{s.desc}</p>
                <a href={bookLink(s.name)} target="_blank" rel="noreferrer" className="mt-5 block w-full py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition text-center">Randevu Al</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}