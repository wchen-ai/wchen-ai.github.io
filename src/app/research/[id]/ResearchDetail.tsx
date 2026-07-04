"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLocale, useT } from "@/lib/i18n";

export default function ResearchDetail({ project }: { project: Project }) {
  const { locale } = useLocale();
  const t = useT();
  const period =
    locale === "zh" ? project.period.replace("Present", "至今") : project.period;

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 820 }}>
        <p style={{ marginBottom: 28 }}>
          <Link href="/research" className="view-all">
            {t.research.back}
          </Link>
        </p>

        <p className="section-label">
          {period} · {project.affiliation[locale]}
        </p>
        <h1 className="section-title" style={{ fontSize: 32, marginBottom: 16 }}>
          {project.title}
        </h1>
        {project.award && (
          <div style={{ marginBottom: 20 }}>
            <span className="chip gold">🏆 {project.award}</span>
          </div>
        )}

        {project.gif && (
          <div className="detail-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.gif} alt={`${project.title} — animated overview`} />
          </div>
        )}

        <p className="detail-summary">{project.summary[locale]}</p>

        {project.detail ? (
          (() => {
            const d = project.detail;
            const s = t.research.sections;
            const prose: [string, string][] = [
              [s.problem, d.problem],
              [s.current, d.current],
              [s.gap, d.gap],
              [s.idea, d.idea],
              [s.method, d.method],
              [s.results, d.results],
              [s.limitations, d.limitations],
            ];
            return (
              <>
                {prose.map(([label, text]) => (
                  <section key={label} className="detail-section">
                    <h2 className="detail-heading">{label}</h2>
                    <p className="detail-prose">{text}</p>
                  </section>
                ))}
                <section className="detail-section">
                  <h2 className="detail-heading">{s.takeaways}</h2>
                  <ol className="detail-takeaways">
                    {d.takeaways.map((tk) => (
                      <li key={tk}>{tk}</li>
                    ))}
                  </ol>
                </section>
              </>
            );
          })()
        ) : (
          project.bullets.length > 0 && (
            <>
              <h2 className="detail-heading">{t.research.highlights}</h2>
              <ul className="detail-bullets">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </>
          )
        )}

        {project.metrics && (
          <div className="card-metrics" style={{ marginTop: 28 }}>
            {project.metrics.map((m) => (
              <div key={m.label.en}>
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label[locale]}</div>
              </div>
            ))}
          </div>
        )}

        <div className="chip-row" style={{ marginTop: 24 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="chip outline">
              {tag}
            </span>
          ))}
        </div>

        {(project.paper || project.code) && (
          <div className="card-links" style={{ marginTop: 22 }}>
            {project.paper && (
              <a href={project.paper} target="_blank" rel="noreferrer">
                {t.research.paper} ↗
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer">
                {t.research.code} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
