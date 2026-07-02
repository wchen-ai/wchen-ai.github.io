"use client";

import Link from "next/link";
import { Button, ButtonGroup } from "@adobe/react-spectrum";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { news } from "@/data/news";
import { formatDate, useLocale, useT } from "@/lib/i18n";
import ProjectCard from "@/components/ProjectCard";
import { PublicationItem } from "@/components/PublicationList";
import EssayCards from "@/components/EssayCards";
import type { EssayMeta } from "@/components/EssayList";

function SectionHead({
  label,
  title,
  viewAll,
  viewAllHref,
}: {
  label: string;
  title: string;
  viewAll: string;
  viewAllHref: string;
}) {
  return (
    <div className="home-section-head">
      <div>
        <p className="section-label">{label}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <Link href={viewAllHref} className="view-all">
        {viewAll}
      </Link>
    </div>
  );
}

export default function HomeContent({ essays }: { essays: EssayMeta[] }) {
  const t = useT();
  const { locale } = useLocale();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredPubs = publications.filter((p) => p.featured);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-role">
              {t.hero.role}
              <br />
              {t.hero.tagline}
            </p>
            <p className="hero-intro">{t.hero.intro}</p>
            <div className="chip-row">
              {profile.interests[locale].map((interest) => (
                <span key={interest} className="chip">
                  {interest}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <ButtonGroup>
                <Button
                  variant="accent"
                  href={`mailto:${profile.email}`}
                >
                  {t.hero.email}
                </Button>
                <Button
                  variant="primary"
                  style="outline"
                  href={profile.scholar}
                  target="_blank"
                >
                  {t.hero.scholar}
                </Button>
                <Button
                  variant="primary"
                  style="outline"
                  href={profile.github}
                  target="_blank"
                >
                  {t.hero.github}
                </Button>
                <Button
                  variant="primary"
                  style="outline"
                  href={profile.linkedin}
                  target="_blank"
                >
                  {t.hero.linkedin}
                </Button>
              </ButtonGroup>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/avatar.jpeg" alt={profile.name} className="hero-avatar" />
        </div>
      </section>

      {essays.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead
              label={t.home.essaysLabel}
              title={t.home.essaysTitle}
              viewAll={t.home.viewAllEssays}
              viewAllHref="/essays"
            />
            <EssayCards essays={essays} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHead
            label={t.home.researchLabel}
            title={t.home.researchTitle}
            viewAll={t.home.viewAllResearch}
            viewAllHref="/research"
          />
          <div className="card-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">{t.home.newsLabel}</p>
          <h2 className="section-title">{t.home.newsTitle}</h2>
          <ul className="news-list">
            {news.slice(0, 6).map((n, i) => (
              <li key={i}>
                <span className="news-date">{formatDate(n.date, locale)}</span>
                <div className="news-body">
                  <p className="news-text">
                    {n.text[locale]}
                    {n.href && (
                      <>
                        {" "}
                        <a href={n.href} target="_blank" rel="noreferrer">
                          {(n.linkLabel ?? { en: "Link", zh: "链接" })[locale]} ↗
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            label={t.home.pubsLabel}
            title={t.home.pubsTitle}
            viewAll={t.home.viewAllPubs}
            viewAllHref="/publications"
          />
          {featuredPubs.map((p) => (
            <PublicationItem key={p.id} pub={p} />
          ))}
        </div>
      </section>
    </>
  );
}
