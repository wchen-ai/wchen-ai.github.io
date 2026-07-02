"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { useT } from "@/lib/i18n";

export default function ResearchContent() {
  const t = useT();
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">{t.research.label}</p>
        <h1 className="section-title">{t.research.title}</h1>
        <p className="section-subtitle">{t.research.subtitle}</p>
        <div className="card-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
