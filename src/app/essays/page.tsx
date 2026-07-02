import type { Metadata } from "next";
import { getAllEssays } from "@/lib/essays";
import EssaysIndex from "./EssaysIndex";

export const metadata: Metadata = { title: "Essays" };

export default function EssaysPage() {
  const essays = getAllEssays().map(({ slug, date, en, zh }) => ({
    slug,
    date,
    en: en && { title: en.title, summary: en.summary },
    zh: zh && { title: zh.title, summary: zh.summary },
  }));
  return <EssaysIndex essays={essays} />;
}
