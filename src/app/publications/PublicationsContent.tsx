"use client";

import { Item, TabList, TabPanels, Tabs } from "@adobe/react-spectrum";
import { publications, type PubType } from "@/data/publications";
import PublicationList from "@/components/PublicationList";
import { profile } from "@/data/profile";
import { useT } from "@/lib/i18n";

export default function PublicationsContent() {
  const t = useT();

  const byType = (type: PubType) => publications.filter((p) => p.type === type);

  return (
    <section className="section">
      <div className="container">
        <p className="section-label">{t.publications.label}</p>
        <h1 className="section-title">{t.publications.title}</h1>
        <p className="section-subtitle">{t.publications.subtitle}</p>
        <div className="scholar-stats">
          <a href={profile.scholar} target="_blank" rel="noreferrer">
            <b>{profile.scholarStats.citations}</b> {t.publications.citations}
          </a>
          <span>
            <b>{profile.scholarStats.hIndex}</b> {t.publications.hIndex}
          </span>
          <span>
            <b>{profile.scholarStats.i10Index}</b> {t.publications.i10Index}
          </span>
          <span className="scholar-stats-note">{t.publications.scholarNote}</span>
        </div>
        <Tabs aria-label={t.publications.title}>
          <TabList>
            <Item key="all">{`${t.publications.tabAll} (${publications.length})`}</Item>
            <Item key="journal">{`${t.publications.tabJournal} (${byType("journal").length})`}</Item>
            <Item key="conference">{`${t.publications.tabConference} (${byType("conference").length})`}</Item>
            <Item key="preprint">{`${t.publications.tabPreprint} (${byType("preprint").length})`}</Item>
          </TabList>
          <TabPanels UNSAFE_style={{ border: "none", paddingTop: 4 }}>
            <Item key="all">
              <PublicationList pubs={publications} />
            </Item>
            <Item key="journal">
              <PublicationList pubs={byType("journal")} />
            </Item>
            <Item key="conference">
              <PublicationList pubs={byType("conference")} />
            </Item>
            <Item key="preprint">
              <PublicationList pubs={byType("preprint")} />
            </Item>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  );
}
