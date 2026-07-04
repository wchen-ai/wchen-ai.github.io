"use client";

import Link from "next/link";
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
  const href = `/research/${project.id}`;
  return (
    <article className="card">
      {project.gif && (
        <Link href={href} className="card-media" aria-label={project.title}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.gif} alt={`${project.title} — animated overview`} loading="lazy" />
        </Link>
      )}
      <div className="card-period">
        {period} · {project.affiliation[locale]}
      </div>
      <h3 className="card-title">
        <Link href={href} className="card-title-link">
          {project.title}
        </Link>
      </h3>
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
      <div className="card-links">
        <Link href={href}>{t.research.details}</Link>
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
    </article>
  );
}
