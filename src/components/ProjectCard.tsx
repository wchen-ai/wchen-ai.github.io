"use client";

import type { Project } from "@/data/projects";
import { useLocale, useT } from "@/lib/i18n";

export default function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const { locale } = useLocale();
  const t = useT();
  const period =
    locale === "zh" ? project.period.replace("Present", "至今") : project.period;
  return (
    <article className="card">
      {project.gif && (
        <div className="card-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.gif} alt={`${project.title} — animated overview`} loading="lazy" />
        </div>
      )}
      <div className="card-period">
        {period} · {project.affiliation[locale]}
      </div>
      <h3 className="card-title">{project.title}</h3>
      {project.award && (
        <div>
          <span className="chip gold">🏆 {project.award}</span>
        </div>
      )}
      <p className="card-summary">{project.summary[locale]}</p>
      {!compact && (
        <ul>
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      <div className="chip-row" style={{ margin: 0 }}>
        {project.tags.map((tag) => (
          <span key={tag} className="chip outline">
            {tag}
          </span>
        ))}
      </div>
      {project.metrics && (
        <div className="card-metrics">
          {project.metrics.map((m) => (
            <div key={m.label.en}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label[locale]}</div>
            </div>
          ))}
        </div>
      )}
      {(project.code || project.paper) && (
        <div className="card-links">
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
    </article>
  );
}
