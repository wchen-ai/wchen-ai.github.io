"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Locale = "en" | "zh";

const STORAGE_KEY = "wc-locale";

const en = {
  nav: {
    research: "Research",
    publications: "Publications",
    contributions: "Contributions",
    essays: "Essays",
  },
  hero: {
    role: "Postdoctoral Research Fellow · Mayo Clinic Arizona",
    tagline: "AI × Cardiovascular Imaging",
    intro:
      "I build trustworthy AI for clinical imaging — vision–language foundation models for cardiovascular risk prediction, uncertainty estimation, and fair, reliable deployment in medicine.",
    email: "Email",
    scholar: "Google Scholar",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  home: {
    newsLabel: "News",
    newsTitle: "Recent news",
    researchLabel: "Research",
    researchTitle: "Selected research",
    pubsLabel: "Publications",
    pubsTitle: "Selected publications",
    essaysLabel: "Essays",
    essaysTitle: "Recent writing",
    viewAllResearch: "All research →",
    viewAllPubs: "All publications →",
    viewAllEssays: "All essays →",
  },
  research: {
    label: "Research",
    title: "Research projects",
    subtitle:
      "From foundation-model cardiology at Mayo Clinic to uncertainty estimation, federated learning, and award-winning tumor segmentation during my PhD at UW–Madison.",
    code: "Code",
    paper: "Paper",
  },
  publications: {
    label: "Publications",
    title: "Publications",
    subtitle:
      "Peer-reviewed journal articles, conference papers, and preprints.",
    tabAll: "All",
    tabJournal: "Journal",
    tabConference: "Conference",
    tabPreprint: "Preprint",
    underReview: "Under review",
    citations: "citations",
    hIndex: "h-index",
    i10Index: "i10-index",
    scholarNote: "Google Scholar",
    doi: "DOI",
    code: "Code",
    pdf: "PDF",
    arxiv: "arXiv",
  },
  contributions: {
    label: "Contributions",
    title: "Academic service & contributions",
    subtitle:
      "Editorial work, peer review, awards, teaching, and open-source software.",
    editorial: "Editorial",
    reviewing: "Peer review",
    reviewingVerified: "{n} reviews across {m} journals & conferences",
    reviewMapTitle: "Reviewing map",
    reviewMapSubtitle:
      "Each venue placed by clinical vs machine-learning orientation; marker size = number of reviews.",
    axisClinical: "Clinical orientation →",
    axisML: "Machine-learning orientation →",
    journalShape: "Journal",
    conferenceShape: "Conference",
    reviewsUnit: "reviews",
    sizeLegendLabel: "Size = reviews",
    awards: "Awards",
    awardsItems: [
      "Tomography Best Paper Award — for “BAE-ViT: An Efficient Multimodal Vision Transformer for Bone Age Estimation”",
      "1st place — MICCAI HNTS-MRG 2024 Challenge, among 48 global teams (Head and Neck Tumor Segmentation for MR-Guided Applications)",
    ],
    teaching: "Teaching & mentoring",
    teachingItems: [
      "Teaching Assistant, Machine Learning — University of Wisconsin–Madison",
      "Mentored junior researchers in high-performance computing and ML best practices, optimizing large-scale experimental pipelines",
    ],
    openSource: "Open source",
    openSourceIntro:
      "Research code released with publications:",
  },
  essays: {
    label: "Essays",
    title: "Essays",
    subtitle:
      "Occasional writing on research, medicine, and life — in English and Chinese.",
    onlyEn: "This essay is only available in English.",
    onlyZh: "This essay is only available in Chinese.",
    back: "← All essays",
  },
  footer: {
    line: "Winston (Weijie) Chen · Mayo Clinic Arizona",
    built: "Built with Next.js + React Spectrum",
  },
};

const zh: typeof en = {
  nav: {
    research: "研究",
    publications: "论文",
    contributions: "学术服务",
    essays: "随笔",
  },
  hero: {
    role: "博士后研究员 · 梅奥诊所（亚利桑那）",
    tagline: "AI × 心血管影像",
    intro:
      "我致力于构建值得信赖的临床影像 AI——利用视觉-语言基础模型进行心血管风险预测、不确定性估计，推动公平可靠的医学 AI 落地。",
    email: "邮箱",
    scholar: "Google 学术",
    github: "GitHub",
    linkedin: "领英",
  },
  home: {
    newsLabel: "动态",
    newsTitle: "近期动态",
    researchLabel: "研究",
    researchTitle: "代表性研究",
    pubsLabel: "论文",
    pubsTitle: "代表性论文",
    essaysLabel: "随笔 · Essays",
    essaysTitle: "近期随笔",
    viewAllResearch: "全部研究 →",
    viewAllPubs: "全部论文 →",
    viewAllEssays: "全部随笔 →",
  },
  research: {
    label: "研究",
    title: "研究项目",
    subtitle:
      "从梅奥诊所的基础模型心脏病学研究，到威斯康星大学麦迪逊分校博士期间的不确定性估计、联邦学习与获奖的肿瘤分割工作。",
    code: "代码",
    paper: "论文",
  },
  publications: {
    label: "论文",
    title: "论文发表",
    subtitle: "同行评审期刊论文、会议论文与预印本。",
    tabAll: "全部",
    tabJournal: "期刊",
    tabConference: "会议",
    tabPreprint: "预印本",
    underReview: "审稿中",
    citations: "引用",
    hIndex: "h 指数",
    i10Index: "i10 指数",
    scholarNote: "Google 学术",
    doi: "DOI",
    code: "代码",
    pdf: "PDF",
    arxiv: "arXiv",
  },
  contributions: {
    label: "学术服务",
    title: "学术服务与贡献",
    subtitle: "编辑工作、同行评审、奖项、教学与开源软件。",
    editorial: "编辑工作",
    reviewing: "同行评审",
    reviewingVerified: "共 {n} 次评审，覆盖 {m} 个期刊与会议",
    reviewMapTitle: "评审版图",
    reviewMapSubtitle:
      "每个平台按临床 vs 机器学习取向定位；标记大小 = 评审数量。",
    axisClinical: "临床取向 →",
    axisML: "机器学习取向 →",
    journalShape: "期刊",
    conferenceShape: "会议",
    reviewsUnit: "次评审",
    sizeLegendLabel: "大小 = 评审数",
    awards: "奖项",
    awardsItems: [
      "Tomography 最佳论文奖 — 论文《BAE-ViT: An Efficient Multimodal Vision Transformer for Bone Age Estimation》",
      "第一名 — MICCAI HNTS-MRG 2024 全球挑战赛（头颈部肿瘤 MR 引导分割），48 支参赛队伍",
    ],
    teaching: "教学与指导",
    teachingItems: [
      "机器学习课程助教 — 威斯康星大学麦迪逊分校",
      "指导初级研究人员掌握高性能计算与机器学习最佳实践，优化大规模实验流程",
    ],
    openSource: "开源",
    openSourceIntro: "随论文发布的研究代码：",
  },
  essays: {
    label: "随笔 · Essays",
    title: "随笔",
    subtitle: "关于研究、医学与生活的偶尔书写——中英双语。",
    onlyEn: "This essay is only available in English. 本文仅有英文版。",
    onlyZh: "本文仅有中文版。",
    back: "← 全部随笔",
  },
  footer: {
    line: "Winston (Weijie) Chen · 梅奥诊所（亚利桑那）",
    built: "基于 Next.js + React Spectrum 构建",
  },
};

export const dictionaries: Record<Locale, typeof en> = { en, zh };

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "zh") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT() {
  const { locale } = useLocale();
  return dictionaries[locale];
}

export function formatDate(iso: string, locale: Locale): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(d);
}
