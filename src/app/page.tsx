import HomeContent from "@/components/HomeContent";
import { getAllEssays } from "@/lib/essays";

export default function Home() {
  const essays = getAllEssays()
    .slice(0, 4)
    .map(({ slug, date, cover, en, zh }) => ({
      slug,
      date,
      cover,
      en: en && { title: en.title, summary: en.summary },
      zh: zh && { title: zh.title, summary: zh.summary },
    }));
  return <HomeContent essays={essays} />;
}
