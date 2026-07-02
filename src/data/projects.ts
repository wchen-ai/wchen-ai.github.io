export interface ProjectMetric {
  value: string;
  label: { en: string; zh: string };
}

export interface Project {
  id: string;
  title: string;
  period: string;
  affiliation: { en: string; zh: string };
  summary: { en: string; zh: string };
  bullets: string[];
  tags: string[];
  metrics?: ProjectMetric[];
  code?: string;
  paper?: string;
  award?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "merit-cv",
    title: "MERIT-CV: Multimodal MACE Prediction from Opportunistic CT + Clinical Text",
    period: "2025 – Present",
    affiliation: { en: "Mayo Clinic Arizona", zh: "梅奥诊所（亚利桑那）" },
    summary: {
      en: "Parameter-efficient multimodal framework fusing non-gated chest CT with free-form clinical narratives via cross-modal bi-attention on vision–language foundation encoders, for 5-year Major Adverse Cardiovascular Event prediction.",
      zh: "参数高效的多模态框架：基于视觉-语言基础模型编码器与跨模态双向注意力，融合非门控胸部 CT 与自由文本临床记录，预测五年内主要不良心血管事件（MACE）。",
    },
    bullets: [
      "Unified prediagnostic risk pipeline converting heterogeneous EHR (structured fields, radiology reports, vitals, labs) into sentence-form text",
      "Validated across internal in-/out-patient and external cohorts",
      "Detecting, quantifying, and mitigating embedding bias for fair, reliable risk estimates",
    ],
    tags: ["Vision–Language Models", "Cardiac CT", "EHR", "Fairness"],
    metrics: [
      { value: "0.822", label: { en: "AUROC (internal)", zh: "AUROC（内部）" } },
      { value: "8.9", label: { en: "GFLOPs", zh: "GFLOPs" } },
      { value: "+0.09", label: { en: "AUROC vs imaging-only", zh: "AUROC 提升（对比纯影像）" } },
    ],
    featured: true,
  },
  {
    id: "saswise-ue",
    title: "SASWISE-UE: Scalable Uncertainty Estimation for Segmentation & Synthesis",
    period: "2023 – 2025",
    affiliation: { en: "UW–Madison", zh: "威斯康星大学麦迪逊分校" },
    summary: {
      en: "Universal ensemble learning framework integrating CNNs and ViTs for uncertainty estimation in medical image segmentation and synthesis, generating real-time uncertainty maps for clinical performance surveillance.",
      zh: "通用集成学习框架：融合 CNN 与 ViT，为医学图像分割与合成提供不确定性估计，生成实时不确定性图以支持临床性能监控与决策。",
    },
    bullets: [
      "Monitors variance across model variants for interpretable uncertainty",
      "93.75% efficiency gain over standard ensemble methods",
      "Published in Computers in Biology and Medicine (2025)",
    ],
    tags: ["Uncertainty Estimation", "Ensemble Learning", "Trustworthy AI"],
    metrics: [
      { value: "0.98", label: { en: "R² (segmentation)", zh: "R²（分割）" } },
      { value: "0.80", label: { en: "R² (synthesis)", zh: "R²（合成）" } },
      { value: "93.75%", label: { en: "Efficiency gain", zh: "效率提升" } },
    ],
    code: "https://github.com/wchen-ai/SASWISE",
    paper: "https://doi.org/10.1016/j.compbiomed.2025.110258",
    featured: true,
  },
  {
    id: "hnts-mrg",
    title: "Spatial–Temporal Attention for Longitudinal 3D Tumor Segmentation",
    period: "2024",
    affiliation: { en: "UW–Madison", zh: "威斯康星大学麦迪逊分校" },
    summary: {
      en: "Award-winning pyramid CNN with spatial and temporal attention for coarse-to-fine segmentation of head-and-neck tumors across treatment phases in MRI-guided adaptive radiotherapy.",
      zh: "获奖的金字塔 CNN 模型：利用时空注意力机制，在 MRI 引导的自适应放疗中对头颈部肿瘤进行跨治疗阶段的由粗到细分割。",
    },
    bullets: [
      "Longitudinal 3D MR data from 150 patients across treatment phases",
      "DSC 60.7% (primary) / 85.9% (auxiliary) regions",
      "Benchmark for adaptive radiation therapy planning",
    ],
    tags: ["Segmentation", "3D MRI", "Radiotherapy", "MICCAI"],
    metrics: [
      { value: "1st", label: { en: "MICCAI HNTS-MRG 2024", zh: "MICCAI HNTS-MRG 2024" } },
      { value: "48", label: { en: "teams competing", zh: "参赛队伍" } },
    ],
    code: "https://github.com/wchen-ai/HNTS_MRG",
    paper: "https://arxiv.org/abs/2412.00663",
    award: "1st place, MICCAI HNTS-MRG 2024",
    featured: true,
  },
  {
    id: "federated",
    title: "Federated Learning Framework with Modular Block Design",
    period: "2023 – 2025",
    affiliation: { en: "UW–Madison", zh: "威斯康星大学麦迪逊分校" },
    summary: {
      en: "Scalable federated learning framework with weight obfuscation that transmits only essential module weights — resilient against monitoring bypass while safeguarding full-model privacy.",
      zh: "可扩展的联邦学习框架：通过权重混淆仅传输必要的模块权重，在保护完整模型隐私的同时抵御监控绕过。",
    },
    bullets: [
      "Dynamic central coordination with real-time growth tracing to monitor adversarial behavior",
      "Secure inter-site block exchange with individual contribution tracking",
      "Seamless participant onboarding/offboarding with built-in uncertainty estimation",
    ],
    tags: ["Federated Learning", "Privacy", "Unlearning", "Trustworthy AI"],
    paper: "https://arxiv.org/abs/2606.12679",
    featured: true,
  },
  {
    id: "bae-vit",
    title: "BAE-ViT: Multimodal Vision Transformer for Bone Age Estimation",
    period: "2024",
    affiliation: { en: "UW–Madison", zh: "威斯康星大学麦迪逊分校" },
    summary: {
      en: "Transformer with a unified representation of visual and non-visual data, enabling cross-modal interaction between image features and tokenized demographic attributes.",
      zh: "统一表示视觉与非视觉数据的 Transformer：让图像特征与标记化的人口学属性进行跨模态交互，提升骨龄估计精度。",
    },
    bullets: [
      "Benchmarked against no-integration and MLP-integration baselines on the largest public dataset",
      "Attention maps aligned with clinically relevant features",
    ],
    tags: ["Vision Transformer", "Multimodal", "Pediatric Imaging"],
    metrics: [
      { value: "4.1 mo", label: { en: "test error", zh: "测试误差" } },
    ],
    code: "https://github.com/wchen-ai/BAE_ViT",
    paper: "https://doi.org/10.3390/tomography10120146",
    award: "Tomography Best Paper Award",
  },
  {
    id: "nascent",
    title: "Synthetic CT from Non-Attenuation-Corrected PET",
    period: "2024 – 2025",
    affiliation: { en: "UW–Madison", zh: "威斯康星大学麦迪逊分校" },
    summary: {
      en: "Two-stage pipeline converting time-of-flight NAC PET into synthetic CT for whole-body attenuation correction, removing the need for a separate CT or MR acquisition.",
      zh: "两阶段流程：将飞行时间非衰减校正 PET 转换为合成 CT 用于全身衰减校正，免除额外的 CT 或 MR 扫描。",
    },
    bullets: [
      "Leverages a foundation model pretrained on 9M images",
      "Reduces patient radiation exposure and streamlines workflow",
      "Presented at IEEE ISBI 2025",
    ],
    tags: ["PET", "Image Synthesis", "Foundation Models"],
    code: "https://github.com/wchen-ai/NasCent",
  },
];
