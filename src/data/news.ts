export interface NewsItem {
  date: string; // YYYY-MM-DD (month-level precision is fine)
  text: { en: string; zh: string };
  href?: string;
  linkLabel?: { en: string; zh: string };
  image?: string;
  imageAlt?: string;
}

// Keep sorted newest-first.
export const news: NewsItem[] = [
  {
    date: "2026-06-28",
    text: {
      en: "Featured on the RSNA Radiology: Imaging Cancer podcast — “Episode 40: The Next Era of Imaging Intelligence,” with Dr. Yashbir Singh and Dr. Imon Banerjee, on multimodal imaging intelligence, fairness and bias as core design constraints, and trustworthy clinical deployment.",
      zh: "参与 RSNA Radiology: Imaging Cancer 播客《Episode 40: The Next Era of Imaging Intelligence》（嘉宾 Dr. Yashbir Singh、Dr. Imon Banerjee）——探讨多模态影像智能、将公平性与偏差作为核心设计约束，以及可信赖的临床落地。",
    },
    href: "https://rsnaradiologyic.libsyn.com/episode-40-the-next-era-of-imaging-intelligence",
    linkLabel: { en: "Listen", zh: "收听" },
  },
  {
    date: "2026-06-20",
    text: {
      en: "Presented “Multimodal Foundation Models for Opportunistic Cardiovascular Risk Prediction from Routine Clinical Data” during Postdoctoral Fellow Presentation Month at Mayo Clinic Arizona (Science of Medicine Graduate Research), covering foundation-model encoders, parameter-efficient multimodal fusion, and practical hurdles for clinical AI deployment — missing data, cohort shift, robustness, and interpretability.",
      zh: "在梅奥诊所（亚利桑那）博士后报告月（Science of Medicine Graduate Research）作报告《Multimodal Foundation Models for Opportunistic Cardiovascular Risk Prediction from Routine Clinical Data》，介绍基础模型编码器与参数高效的多模态融合，并探讨临床 AI 落地的实际挑战——缺失数据、队列偏移、鲁棒性与可解释性。",
    },
    image: "/talks/mayo-postdoc-presentation-2026.webp",
    imageAlt:
      "Winston Chen presenting at the Mayo Clinic Arizona Postdoctoral Fellow Presentation Month",
  },
  {
    date: "2026-06-01",
    text: {
      en: "Fed-FBD, our federated functional block diversification framework for privacy and surgical unlearning, released on arXiv.",
      zh: "面向隐私与「手术式」遗忘的联邦功能块多样化框架 Fed-FBD 已在 arXiv 发布。",
    },
    href: "https://arxiv.org/abs/2606.12679",
    linkLabel: { en: "arXiv", zh: "arXiv" },
  },
  {
    date: "2026-03-01",
    text: {
      en: "“BAE-ViT” received the Tomography Best Paper Award, selected for originality and impact (citations & downloads).",
      zh: "论文《BAE-ViT》荣获 Tomography 最佳论文奖，基于原创性与影响力（引用与下载量）评选。",
    },
  },
  {
    date: "2026-02-01",
    text: {
      en: "MERIT-CV, our multimodal cardiovascular risk prediction framework, submitted for peer review.",
      zh: "多模态心血管风险预测框架 MERIT-CV 已投稿，正在审稿中。",
    },
  },
  {
    date: "2025-07-01",
    text: {
      en: "Started as Postdoctoral Research Fellow at Mayo Clinic Arizona, working on AI-driven cardiovascular risk prediction.",
      zh: "加入梅奥诊所（亚利桑那）担任博士后研究员，从事 AI 驱动的心血管风险预测研究。",
    },
  },
  {
    date: "2025-07-01",
    text: {
      en: "Completed PhD in Electrical and Computer Engineering at UW–Madison.",
      zh: "获威斯康星大学麦迪逊分校电子与计算机工程博士学位。",
    },
  },
  {
    date: "2025-04-14",
    text: {
      en: "Presented synthetic CT generation from non-attenuation-corrected PET at IEEE ISBI 2025, Houston.",
      zh: "在休斯顿 IEEE ISBI 2025 报告了基于非衰减校正 PET 的合成 CT 生成工作。",
    },
  },
  {
    date: "2025-01-01",
    text: {
      en: "SASWISE-UE published in Computers in Biology and Medicine.",
      zh: "SASWISE-UE 发表于 Computers in Biology and Medicine。",
    },
  },
  {
    date: "2024-12-01",
    text: {
      en: "BAE-ViT published in Tomography.",
      zh: "BAE-ViT 发表于 Tomography。",
    },
  },
  {
    date: "2024-10-17",
    text: {
      en: "Won 1st place (of 48 teams) in the MICCAI HNTS-MRG 2024 challenge.",
      zh: "在 MICCAI HNTS-MRG 2024 挑战赛中获得第一名（共 48 支队伍）。",
    },
  },
];
