import React from "react";
import { Instagram } from "lucide-react";
import { GALLERY, INSTAGRAM_URL } from "./data";

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Galeri</p>
        <h2 className="font-display text-5xl md:text-6xl mb-14 text-center">Işıltılı anlar</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY.map((g) => (
            <a key={g.alt} href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden rounded-xl">
              <img src={g.src} alt={g.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Instagram className="w-4 h-4" /> Instagram'da bizi takip edin</a>
        </div>
      </div>
    </section>
  );
}