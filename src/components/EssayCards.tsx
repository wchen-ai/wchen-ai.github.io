"use client";

import Link from "next/link";
import type { EssayMeta } from "@/components/EssayList";
import { formatDate, useLocale } from "@/lib/i18n";

export default function EssayCards({ essays }: { essays: EssayMeta[] }) {
  const { locale } = useLocale();
  return (
    <div className="card-grid">
      {essays.map((e) => {
        const lang = e[locale] ?? e.en ?? e.zh;
        if (!lang) return null;
        const langBadge = !e[locale]
          ? e.en
            ? "EN"
            : locale === "zh"
              ? "中文"
              : "Chinese"
          : null;
        const cover = e.cover?.[locale] ?? e.cover?.en ?? e.cover?.zh;
        return (
          <Link key={e.slug} href={`/essays/${e.slug}`} className="essay-card">
            {cover ? (
              <div className="essay-card-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cover} alt="" loading="lazy" />
              </div>
            ) : (
              <div className="essay-card-cover essay-card-cover--placeholder">
                <span>随笔 · Essay</span>
              </div>
            )}
            <div className="essay-card-body">
              <span className="card-period">
                {formatDate(e.date, locale)}
                {langBadge && ` · ${langBadge}`}
              </span>
              <h3 className="card-title">{lang.title}</h3>
              <p className="card-summary">{lang.summary}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
