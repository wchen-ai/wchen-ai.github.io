"use client";

import EssayList, { type EssayMeta } from "@/components/EssayList";
import { useT } from "@/lib/i18n";

export default function EssaysIndex({ essays }: { essays: EssayMeta[] }) {
  const t = useT();
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">{t.essays.label}</p>
        <h1 className="section-title">{t.essays.title}</h1>
        <p className="section-subtitle">{t.essays.subtitle}</p>
        <EssayList essays={essays} />
      </div>
    </section>
  );
}
