import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { SERVICES, SLOTS, waLink } from "./data";

const EMPTY = { full_name: "", phone: "", service: "", date: "", time: "", note: "" };

export default function BookingForm({ service }) {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (service) {
      setForm((f) => ({ ...f, service: service.name }));
      setDone(false);
    }
  }, [service]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.Appointment.create({ ...form, status: "new" });
    setLoading(false);
    setDone(true);
    setForm(EMPTY);
  };

  const selectCls = "flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm";

  return (
    <section id="randevu" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">Randevu Al</p>
        <h2 className="font-display text-5xl md:text-6xl mb-4 text-center">Randevunuzu oluşturun</h2>
        <p className="text-muted-foreground mb-10 text-center">Formu doldurun, ekibimiz sizi arayarak randevunuzu onaylasın.</p>
        {done ? (
          <div className="p-10 border border-primary rounded-2xl text-center">
            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-3xl">Randevu talebiniz alındı</h3>
            <p className="text-muted-foreground mt-2">En kısa sürede sizinle iletişime geçeceğiz.</p>
            <button onClick={() => setDone(false)} className="mt-6 text-sm text-primary underline">Yeni randevu talebi</button>
          </div>
        ) : (
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4 bg-card border border-border rounded-2xl p-6 md:p-10">
            <Input required placeholder="Ad Soyad" value={form.full_name} onChange={set("full_name")} />
            <Input required type="tel" placeholder="Telefon Numarası" value={form.phone} onChange={set("phone")} />
            <select required className={`${selectCls} sm:col-span-2`} value={form.service} onChange={set("service")}>
              <option value="">Hizmet seçin</option>
              {SERVICES.map((s) => <option key={s.name}>{s.name}</option>)}
            </select>
            <Input required type="date" min={today} value={form.date} onChange={set("date")} />
            <select required className={selectCls} value={form.time} onChange={set("time")}>
              <option value="">Saat seçin</option>
              {SLOTS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <Textarea className="sm:col-span-2" placeholder="Notunuz (isteğe bağlı)" value={form.note} onChange={set("note")} />
            <button disabled={loading} className="sm:col-span-2 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition flex justify-center items-center gap-2 disabled:opacity-60">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />} Randevu Talebi Gönder
            </button>
            <a href={waLink("Merhaba, hızlı randevu almak istiyorum.")} target="_blank" rel="noreferrer" className="sm:col-span-2 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition flex justify-center items-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp ile Hızlı Randevu
            </a>
          </form>
        )}
      </div>
    </section>
  );
}