import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function RatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      className="inline-flex flex-col items-center px-8 py-5 rounded-3xl border border-primary/25 bg-background/75 backdrop-blur-md shadow-lg shadow-primary/10"
    >
      <span className="flex items-center gap-2">
        <Star className="w-5 h-5 text-primary fill-current" />
        <span className="font-display text-4xl md:text-5xl leading-none tracking-tight text-foreground">8,9/10</span>
      </span>
      <span className="mt-2 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground">Müşteri Memnuniyeti</span>
    </motion.div>
  );
}