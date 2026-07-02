"use client";

import type { Publication } from "@/data/publications";
import { useT } from "@/lib/i18n";

function Authors({ pub }: { pub: Publication }) {
  return (
    <p className="pub-authors">
      {pub.authors.map((a, i) => (
        <span key={a}>
          {i > 0 && ", "}
          {a === "Chen, W." ? <strong>{a}</strong> : a}
          {pub.coFirst && i < 2 ? <sup>†</sup> : null}
        </span>
      ))}
      {pub.etAl && ", et al."}
      {pub.coFirst && <span className="pub-cofirst"> · † Co-first authors</span>}
    </p>
  );
}

export function PublicationItem({ pub }: { pub: Publication }) {
  const t = useT();
  const titleLink = pub.doi
    ? `https://doi.org/${pub.doi}`
    : pub.arxiv ?? pub.pdf;
  return (
    <article className="pub-item">
      <h3 className="pub-title">
        {titleLink ? (
          <a href={titleLink} target="_blank" rel="noreferrer">
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h3>
      <Authors pub={pub} />
      <p className="pub-venue">
        {pub.venue}
        {!pub.underReview && ` · ${pub.year}`}
      </p>
      <div className="pub-links">
        {pub.award && <span className="chip gold">🏆 {pub.award}</span>}
        {pub.underReview && (
          <span className="chip outline">{t.publications.underReview}</span>
        )}
        {pub.doi && (
          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">
            {t.publications.doi}
          </a>
        )}
        {pub.arxiv && (
          <a href={pub.arxiv} target="_blank" rel="noreferrer">
            {t.publications.arxiv}
          </a>
        )}
        {pub.pdf && (
          <a href={pub.pdf} target="_blank" rel="noreferrer">
            {t.publications.pdf}
          </a>
        )}
        {pub.code && (
          <a href={pub.code} target="_blank" rel="noreferrer">
            {t.publications.code}
          </a>
        )}
      </div>
    </article>
  );
}

export default function PublicationList({
  pubs,
  groupByYear = true,
}: {
  pubs: Publication[];
  groupByYear?: boolean;
}) {
  if (!groupByYear) {
    return (
      <div>
        {pubs.map((p) => (
          <PublicationItem key={p.id} pub={p} />
        ))}
      </div>
    );
  }
  const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
  return (
    <div>
      {years.map((year) => (
        <section key={year}>
          <h2 className="pub-year">{year}</h2>
          {pubs
            .filter((p) => p.year === year)
            .map((p) => (
              <PublicationItem key={p.id} pub={p} />
            ))}
        </section>
      ))}
    </div>
  );
}
