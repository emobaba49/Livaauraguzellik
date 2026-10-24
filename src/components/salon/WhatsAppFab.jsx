import React from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "./data";

export default function WhatsAppFab() {
  return (
    <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp ile randevu" className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}