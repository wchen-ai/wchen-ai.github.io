"use client";

import Link from "next/link";
import type { Essay } from "@/lib/essays";
import Markdown from "@/components/Markdown";
import { formatDate, useLocale, useT } from "@/lib/i18n";

export default function EssayView({ essay }: { essay: Essay }) {
  const { locale } = useLocale();
  const t = useT();

  const lang = essay[locale] ?? essay.en ?? essay.zh;
  if (!lang) return null;
  const missingLocale = !essay[locale];

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <p style={{ marginBottom: 32 }}>
          <Link href="/essays" className="view-all">
            {t.essays.back}
          </Link>
        </p>
        {missingLocale && (
          <div className="lang-note">
            {essay.en ? t.essays.onlyEn : t.essays.onlyZh}
          </div>
        )}
        <p className="section-label">{formatDate(essay.date, locale)}</p>
        <h1 className="section-title" style={{ fontSize: 34, marginBottom: 24 }}>
          {lang.title}
        </h1>
        <Markdown>{lang.body}</Markdown>
      </div>
    </section>
  );
}
