"use client";

import { projects } from "@/data/projects";
import { editorial, journalReviews, conferenceReviews } from "@/data/service";
import { useLocale, useT } from "@/lib/i18n";
import ReviewMap from "@/components/ReviewMap";

function Block({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 className="section-title" style={{ fontSize: 20 }}>
        {title}
      </h2>
      <ul className="contrib-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ContributionsContent() {
  const t = useT();
  const { locale } = useLocale();
  const c = t.contributions;
  const openSource = projects.filter((p) => p.code);
  const totalReviews =
    journalReviews.reduce((sum, j) => sum + j.count, 0) +
    conferenceReviews.reduce((sum, j) => sum + j.count, 0);
  const totalVenues = journalReviews.length + conferenceReviews.length;

  return (
    <section className="section">
      <div className="container">
        <p className="section-label">{c.label}</p>
        <h1 className="section-title">{c.title}</h1>
        <p className="section-subtitle">{c.subtitle}</p>

        <Block title={c.awards} items={c.awardsItems} />

        <div style={{ marginBottom: 40 }}>
          <h2 className="section-title" style={{ fontSize: 20 }}>
            {c.editorial}
          </h2>
          <ul className="contrib-list">
            {editorial.map((item) => (
              <li key={item.text.en}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.text[locale]} ↗
                  </a>
                ) : (
                  item.text[locale]
                )}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: 40 }}>
          <h2 className="section-title" style={{ fontSize: 20 }}>
            {c.reviewing}
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 14 }}>
            {c.reviewingVerified
              .replace("{n}", String(totalReviews))
              .replace("{m}", String(totalVenues))}
          </p>

          <h3 className="review-map-title">{c.reviewMapTitle}</h3>
          <p className="review-map-sub">{c.reviewMapSubtitle}</p>
          <ReviewMap />

          <div className="chip-row" style={{ margin: "8px 0 6px" }}>
            {[...journalReviews]
              .sort((a, b) => b.count - a.count)
              .map((j) => (
                <span key={j.name} className="chip">
                  {j.name}
                  <span className="chip-count">{j.count}</span>
                </span>
              ))}
          </div>
          <div className="chip-row" style={{ margin: "0 0 18px" }}>
            {[...conferenceReviews]
              .sort((a, b) => b.count - a.count)
              .map((j) => (
                <span key={j.name} className="chip conf">
                  {j.name}
                  <span className="chip-count conf">{j.count}</span>
                </span>
              ))}
          </div>
        </div>

        <Block title={c.teaching} items={c.teachingItems} />

        <h2 className="section-title" style={{ fontSize: 20 }}>
          {c.openSource}
        </h2>
        <p className="section-subtitle">{c.openSourceIntro}</p>
        <div className="card-grid">
          {openSource.map((p) => (
            <article key={p.id} className="card">
              <h3 className="card-title" style={{ fontSize: 15 }}>
                {p.code?.replace("https://github.com/", "")}
              </h3>
              <p className="card-summary">{p.title}</p>
              <div className="card-links">
                <a href={p.code} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
