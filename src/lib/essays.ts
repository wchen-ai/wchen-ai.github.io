import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Server-only: reads markdown essays from content/essays/<slug>/{en,zh}.md

export interface EssayLang {
  title: string;
  summary: string;
  body: string;
}

export interface Essay {
  slug: string;
  date: string; // YYYY-MM-DD
  cover?: { en?: string; zh?: string }; // first image per language, used as a card cover
  en?: EssayLang;
  zh?: EssayLang;
}

function firstImage(...bodies: (string | undefined)[]): string | undefined {
  for (const body of bodies) {
    const m = body?.match(/!\[[^\]]*\]\(([^)]+)\)/);
    if (m) return m[1];
  }
  return undefined;
}

const ESSAYS_DIR = path.join(process.cwd(), "content", "essays");

function readLang(slug: string, lang: "en" | "zh"): EssayLang | undefined {
  const file = path.join(ESSAYS_DIR, slug, `${lang}.md`);
  if (!fs.existsSync(file)) return undefined;
  const { data, content } = matter(fs.readFileSync(file, "utf-8"));
  return {
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    body: content.trim(),
  };
}

function readDate(slug: string): string {
  for (const lang of ["en", "zh"] as const) {
    const file = path.join(ESSAYS_DIR, slug, `${lang}.md`);
    if (fs.existsSync(file)) {
      const { data } = matter(fs.readFileSync(file, "utf-8"));
      if (data.date instanceof Date) return data.date.toISOString().slice(0, 10);
      if (data.date) return String(data.date).slice(0, 10);
    }
  }
  return "1970-01-01";
}

export function getAllEssays(): Essay[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  return fs
    .readdirSync(ESSAYS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => {
      const en = readLang(e.name, "en");
      const zh = readLang(e.name, "zh");
      return {
        slug: e.name,
        date: readDate(e.name),
        cover: { en: firstImage(en?.body), zh: firstImage(zh?.body) },
        en,
        zh,
      };
    })
    .filter((e) => e.en || e.zh)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEssay(slug: string): Essay | undefined {
  return getAllEssays().find((e) => e.slug === slug);
}
