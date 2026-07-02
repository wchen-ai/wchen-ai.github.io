"use client";

import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { useRouter } from "next/navigation";
import { LocaleProvider, useLocale } from "@/lib/i18n";

function SpectrumShell({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  const router = useRouter();
  return (
    <Provider
      theme={defaultTheme}
      colorScheme="light"
      locale={locale === "zh" ? "zh-CN" : "en-US"}
      router={{ navigate: (href) => router.push(href) }}
      UNSAFE_style={{ background: "transparent", fontFamily: "inherit" }}
    >
      {children}
    </Provider>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <SpectrumShell>{children}</SpectrumShell>
    </LocaleProvider>
  );
}
