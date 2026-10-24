import React from "react";
import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import { IMAGES, BRAND } from "./data";

const POINTS = [
  { icon: ShieldCheck, t: "Hijyen", d: "Tek kullanımlık ekipman ve sterilizasyon." },
  { icon: Sparkles, t: "Kişiye özel", d: "Her uygulama öncesi ihtiyaç analizi." },
  { icon: HeartHandshake, t: "Uzman ekip", d: "Sertifikalı ve deneyimli terapistler." },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <img src={IMAGES.facial} alt="Yüz bakımı" className="w-full h-[34rem] object-cover rounded-t-full" />
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Hakkımızda</p>
          <h2 className="font-display text-5xl md:text-6xl leading-tight">Güzellik, huzurla başlar.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {BRAND}, kendinize ayırdığınız zamanı gerçek bir dinlenmeye dönüştürmek için kuruldu. Şık ve sakin atmosferimizde her misafirimize özel, titiz ve güven veren bir hizmet sunuyoruz.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {POINTS.map((p) => (
              <div key={p.t}>
                <p.icon className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-display text-2xl">{p.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}