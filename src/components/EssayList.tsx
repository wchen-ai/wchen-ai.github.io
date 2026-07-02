"use client";

import Link from "next/link";
import { formatDate, useLocale } from "@/lib/i18n";

export interface EssayMeta {
  slug: string;
  date: string;
  cover?: { en?: string; zh?: string };
  en?: { title: string; summary: string };
  zh?: { title: string; summary: string };
}

export function EssayItem({ essay }: { essay: EssayMeta }) {
  const { locale } = useLocale();
  const lang = essay[locale] ?? essay.en ?? essay.zh;
  if (!lang) return null;
  const langBadge = !essay[locale]
    ? essay.en
      ? "EN"
      : locale === "zh"
        ? "中文"
        : "Chinese"
    : null;
  return (
    <div className="essay-item">
      <div>
        <h3 className="essay-item-title">
          <Link href={`/essays/${essay.slug}`}>{lang.title}</Link>
          {langBadge && (
            <span className="chip outline" style={{ marginLeft: 10, verticalAlign: "middle" }}>
              {langBadge}
            </span>
          )}
        </h3>
        <p className="essay-item-summary">{lang.summary}</p>
      </div>
      <span className="essay-item-date">{formatDate(essay.date, locale)}</span>
    </div>
  );
}

export default function EssayList({ essays }: { essays: EssayMeta[] }) {
  return (
    <div>
      {essays.map((e) => (
        <EssayItem key={e.slug} essay={e} />
      ))}
    </div>
  );
}
