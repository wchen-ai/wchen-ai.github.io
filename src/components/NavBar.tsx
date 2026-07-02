"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActionGroup, Item, type Selection } from "@adobe/react-spectrum";
import { useLocale, useT } from "@/lib/i18n";

const routes = [
  { href: "/research", key: "research" },
  { href: "/publications", key: "publications" },
  { href: "/contributions", key: "contributions" },
  { href: "/essays", key: "essays" },
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const t = useT();

  const onLanguageChange = (keys: Selection) => {
    if (keys === "all") return;
    const key = [...keys][0];
    if (key === "en" || key === "zh") setLocale(key);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          Winston Chen
        </Link>
        <nav className="nav-links" aria-label="Main">
          {routes.map((r) => (
            <Link
              key={r.key}
              href={r.href}
              className={`nav-link${pathname?.startsWith(r.href) ? " active" : ""}`}
            >
              {t.nav[r.key]}
            </Link>
          ))}
        </nav>
        <ActionGroup
          aria-label="Language"
          density="compact"
          isQuiet
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={[locale]}
          onSelectionChange={onLanguageChange}
        >
          <Item key="en">EN</Item>
          <Item key="zh">中文</Item>
        </ActionGroup>
      </div>
    </header>
  );
}
