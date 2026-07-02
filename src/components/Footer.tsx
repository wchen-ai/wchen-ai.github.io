"use client";

import { profile } from "@/data/profile";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          © {year} {t.footer.line}
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          <a href={`mailto:${profile.email}`}>{t.hero.email}</a>
          <a href={profile.scholar} target="_blank" rel="noreferrer">
            {t.hero.scholar}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span style={{ opacity: 0.6 }}>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
