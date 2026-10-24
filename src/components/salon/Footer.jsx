import React from "react";
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";
import { BRAND, ADDRESS, PHONE, PHONE_TEL, HOURS, INSTAGRAM_URL, MAP_SRC, waLink } from "./data";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-foreground text-background pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">İletişim</p>
          <h3 className="font-display text-5xl">{BRAND}</h3>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex gap-3"><MapPin className="w-5 h-5 shrink-0" />{ADDRESS}</li>
            <li className="flex gap-3"><Phone className="w-5 h-5 shrink-0" /><a href={`tel:${PHONE_TEL}`} className="hover:underline">{PHONE}</a></li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 shrink-0" />
              <span className="space-y-1">
                {HOURS.map((h) => (
                  <span key={h.day} className="flex justify-between gap-6">
                    <span>{h.day}</span>
                    <span className={h.hours === "Kapalı" ? "text-background/60" : ""}>{h.hours}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>
          <div className="mt-8 flex gap-3 flex-wrap">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-background/30 hover:bg-background hover:text-foreground transition"><Instagram className="w-4 h-4" /> Instagram</a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-background/30 hover:bg-background hover:text-foreground transition"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
          </div>
        </div>
        <iframe title="Google Maps konumu" src={MAP_SRC} loading="lazy" className="w-full h-80 md:h-full min-h-[18rem] rounded-2xl border-0" />
      </div>
      <p className="max-w-7xl mx-auto mt-14 pt-6 border-t border-background/20 text-sm text-background/60">© 2026 {BRAND}. Tüm hakları saklıdır.</p>
    </footer>
  );
}