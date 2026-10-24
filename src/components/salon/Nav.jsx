import React, { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { BRAND, LOGO_URL, INSTAGRAM_URL } from "./data";
import { Image } from "@/components/ui/image";

const LINKS = [
  { href: "#top", label: "Ana Sayfa" },
  { href: "#hizmetler", label: "Hizmetlerimiz" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kampanyalar", label: "Kampanyalar" },
  { href: "#randevu", label: "Randevu Al" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" aria-label={BRAND} className="flex items-center">
            <span className="block h-11 w-11 md:h-14 md:w-14 shrink-0 rounded-full overflow-hidden">
              <Image src={LOGO_URL} alt={BRAND} className="h-full w-full object-cover scale-[1.06]" />
            </span>
          </a>
          <nav className="hidden lg:flex gap-7 text-sm">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-primary transition-colors ${l.label === "Randevu Al" ? "text-primary font-semibold" : ""}`}>{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden xl:inline">Instagram</span>
            </a>
            <button className="lg:hidden" aria-label="Menü" onClick={() => setOpen(true)}><Menu /></button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-background p-8 flex flex-col">
          <button className="self-end" aria-label="Kapat" onClick={() => setOpen(false)}><X /></button>
          <div className="mt-8 flex flex-col gap-5">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl hover:text-primary transition-colors">{l.label}</a>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center gap-2 text-primary">
              <Instagram className="w-5 h-5" /> Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}