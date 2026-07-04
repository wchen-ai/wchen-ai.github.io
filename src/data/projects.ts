export interface ProjectMetric {
  value: string;
  label: { en: string; zh: string };
}

/**
 * Long-form narrative for the project detail page, following a fixed arc:
 * problem → current practice → its shortcomings → our idea → how it works →
 * results → limitations → three takeaways. English-only, like `bullets`.
 */
export interface ProjectDetail {
  problem: string;
  current: string;
  gap: string;
  idea: string;
  method: string;
  results: string;
  limitations: string;
  takeaways: [string, string, string];
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
  /** Sketch-style input→model→output loop, in public/research/. */
  gif?: string;
  detail?: ProjectDetail;
}

export const projects: Project[] = [
  {
    id: "merit-cv",
    gif: "/research/merit-cv.gif",
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
    detail: {
      problem:
        "Major adverse cardiovascular events — heart attack, stroke, cardiovascular death — are a leading cause of mortality, yet most at-risk patients are never flagged before an event. Meanwhile, millions of chest CT scans are acquired every year for unrelated reasons (lung screening, trauma, pre-operative workup) and quietly contain cardiovascular signal that no one reads.",
      current:
        "Risk today is estimated from clinical calculators like the pooled-cohort equations, which need dedicated lab panels and structured risk factors, or from ECG-gated cardiac CT read by a specialist. When routine imaging is used opportunistically at all, it usually relies on a hand-crafted measurement such as coronary artery calcium scoring.",
      gap:
        "Gated cardiac CT and manual calcium scoring are expensive, specialist-dependent, and don't scale to the volume of scans already sitting in the archive. Imaging-only deep models ignore the rich context in the patient's chart, and models tuned on one hospital's population often degrade — unfairly — on another's.",
      idea:
        "We built MERIT-CV, a parameter-efficient framework that reads the CT scan and the free-text clinical record together to predict a patient's 5-year cardiovascular risk from imaging that was never ordered for the heart.",
      method:
        "Non-gated chest CT and free-form clinical narratives are encoded by vision–language foundation models and fused through cross-modal bi-attention, so image regions and clinical phrases attend to one another. Heterogeneous EHR — structured fields, radiology reports, vitals, labs — is first converted into sentence-form text so it can share the language encoder. We also detect, quantify, and mitigate bias in the learned embeddings to keep estimates fair across subgroups.",
      results:
        "MERIT-CV reaches an AUROC of 0.822 on internal data and adds +0.09 AUROC over an imaging-only baseline, while staying lightweight at 8.9 GFLOPs. It was validated across internal in- and out-patient cohorts and an external cohort.",
      limitations:
        "The prediction is only as good as what's documented in the chart, so sparsely-recorded patients carry more uncertainty. Prospective clinical validation and calibration across more diverse health systems are still needed before deployment.",
      takeaways: [
        "Routine chest CT already carries actionable cardiovascular risk — no gated cardiac scan required.",
        "Fusing imaging with the clinical narrative beats imaging alone by a wide margin (+0.09 AUROC).",
        "Fairness is treated as a first-class training objective, not an afterthought.",
      ],
    },
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
    gif: "/research/saswise-ue.gif",
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
    detail: {
      problem:
        "When a segmentation or image-synthesis model is deployed in the clinic, the clinician sees only the output — with no signal for where the model is guessing. Silent, confident errors are exactly the failure mode that erodes trust in medical AI.",
      current:
        "The standard way to get an uncertainty estimate is a deep ensemble: train many independent models and measure their disagreement. Alternatives include Monte-Carlo dropout and Bayesian neural networks.",
      gap:
        "Training and storing a full ensemble multiplies compute and memory several-fold, which is impractical for large 3D imaging models — so uncertainty estimation is often dropped entirely.",
      idea:
        "We turn a single, already-trained model into a family of diverse sub-models, giving ensemble-style uncertainty maps at a fraction of the cost.",
      method:
        "From one well-trained checkpoint, SASWISE-UE derives multiple sub-models, produces several outputs for the same input, fuses them into a final prediction, and estimates uncertainty from the disagreement between those outputs. The same recipe works for convolutional (U-Net) and transformer (UNETR) backbones, and for both segmentation and synthesis, yielding real-time uncertainty maps.",
      results:
        "It reaches a Dice of 0.814 for CT body segmentation and a mean absolute error of 88.17 HU for MR-to-CT synthesis (improved from 89.43 HU by pruning), while cutting the cost of a standard ensemble by 93.75%. Crucially, the uncertainty stays correlated with actual error even under image corruption and undersampling. Published in Computers in Biology and Medicine (2025).",
      limitations:
        "Because the sub-models share a common ancestor checkpoint, their diversity — and thus the uncertainty they express — is bounded by that starting point, and can underestimate error far outside the training distribution.",
      takeaways: [
        "Ensemble-quality uncertainty from one checkpoint, at roughly 1/16 the cost (93.75% saved).",
        "One framework spans both CNNs and transformers, segmentation and synthesis.",
        "Uncertainty tracks real error even under corruption — a prerequisite for clinical monitoring.",
      ],
    },
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
    gif: "/research/hnts-mrg.gif",
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
    detail: {
      problem:
        "MRI-guided adaptive radiotherapy re-plans a patient's treatment as the tumor shrinks, which means the gross tumor volume must be re-delineated on every scan across the whole course of therapy. Doing this by hand is slow and varies from one clinician to the next.",
      current:
        "Tumor contours are drawn manually by radiation oncologists. Automated attempts typically segment each timepoint independently, or simply concatenate the earlier mask onto the current scan as an extra input channel.",
      gap:
        "Manual contouring doesn't scale to daily adaptive workflows and suffers interobserver variability; naive automation throws away the temporal link between a patient's earlier and current scans — exactly the information a human uses to track a shrinking tumor.",
      idea:
        "Competing as team UW LAIR in the MICCAI HNTS-MRG 2024 challenge, we built a longitudinal pipeline that lets a patient's pre-treatment tumor mask actively inform segmentation of their mid-treatment scan — and took 1st place among 48 teams.",
      method:
        "The backbone is a SegResNet with deep supervision, giving a coarse-to-fine signal at multiple resolutions. For pre-treatment scans we train on pooled pre- and mid-treatment MRI to enrich the data. For mid-treatment scans we add mask-aware attention modules, so the pre-treatment tumor mask modulates the intermediate features learned from the current scan rather than being a passive input — a spatial–temporal coupling across timepoints. Final predictions are 10-model ensembles.",
      results:
        "The pre-treatment ensemble reached an aggregated Dice of 0.794 (0.745 primary tumor, 0.844 metastatic nodes); the mid-treatment ensemble reached 0.733 (0.607 primary, 0.859 nodes) — 1st place in the challenge.",
      limitations:
        "Primary-tumor segmentation mid-treatment (Dice 0.607) remains much harder than nodal disease, reflecting how ambiguous a shrinking, treatment-altered boundary becomes; performance also depends on the quality of the earlier mask that seeds the attention.",
      takeaways: [
        "Treating the prior scan's mask as an active attention signal beats concatenating it as input.",
        "Deep-supervised SegResNet ensembles delivered 1st place out of 48 teams at MICCAI 2024.",
        "Shrinking primary tumors are the hard case — nodal disease is far easier to track.",
      ],
    },
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
    gif: "/research/federated.gif",
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
    detail: {
      problem:
        "Hospitals want to train a shared model without pooling patient data, but a shared model is also an attack surface: one malicious or mislabeled site can poison it, no one can audit how much each site contributed, and when a hospital leaves it has a legal right to have its data's influence removed.",
      current:
        "Standard federated learning — FedAvg and its descendants — averages the model updates sent back by every client into a single global model.",
      gap:
        "Averaging treats each client as an opaque black box: there is no way to isolate an adversarial contributor, no per-client audit trail, and 'unlearning' a departed participant means retraining the whole model from scratch.",
      idea:
        "Fed-FBD re-architects the shared model so that isolation, auditability, privacy, and unlearning become structural guarantees rather than bolt-on defenses.",
      method:
        "A ResNet backbone is decomposed into six functional blocks — the stem, four residual groups, and the classification head — and the system keeps a warehouse of N 'color' variants, each assembled from independently tracked, contributor-stamped blocks. This buys three things FedAvg can't offer: architecturally guaranteed block-level isolation (a bad client can only touch its own blocks), privacy-by-design (membership-inference advantage is already near chance before any extra mechanism), and surgical unlearning of a departed client's contribution in under a second, with no retraining.",
      results:
        "Fed-FBD stays within 0.3–3.1% accuracy of FedAvg on adequately-sized IID datasets and within 0.8–4.0% on three of four non-IID benchmarks, while confining a poisoning attack to the affected client's blocks with at most ±0.01 AUC drift on the clean variants.",
      limitations:
        "These guarantees carry a modest accuracy cost versus vanilla FedAvg, and maintaining a warehouse of block variants adds bookkeeping and memory overhead that grows with the number of variants.",
      takeaways: [
        "Isolation, auditability, and unlearning can be architectural properties, not add-on patches.",
        "A departed hospital's contribution can be removed in under a second — no retraining.",
        "The security and privacy cost only a few percent of accuracy relative to FedAvg.",
      ],
    },
    tags: ["Federated Learning", "Privacy", "Unlearning", "Trustworthy AI"],
    paper: "https://arxiv.org/abs/2606.12679",
    featured: true,
  },
  {
    id: "bae-vit",
    gif: "/research/bae-vit.gif",
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
    detail: {
      problem:
        "Pediatric bone age — read from a hand X-ray — guides the diagnosis of growth and endocrine disorders. That reading depends heavily on the child's sex, because boys and girls mature on different timelines, so sex is essential context, not a nice-to-have.",
      current:
        "Radiologists compare the X-ray against reference atlases (Greulich–Pyle, Tanner–Whitehouse). Automated methods are typically CNNs that take the image and, at best, staple sex on at the very end as a single scalar.",
      gap:
        "Manual reading is slow and subjective, and a CNN has no natural way to let a non-visual variable like sex interact with image features — it usually gets concatenated late, so the model can't reason jointly about anatomy and demographics.",
      idea:
        "BAE-ViT is a vision transformer that treats sex as just another token, letting demographic information interact with image content throughout the network.",
      method:
        "Non-visual data is tokenized and concatenated with the image-patch tokens, so every transformer layer can model detailed interactions between visual and non-visual inputs — a fusion CNNs can't do natively. It was trained on the large-scale 2017 RSNA Pediatric Bone Age dataset and benchmarked against no-integration and late MLP-integration baselines.",
      results:
        "BAE-ViT achieves roughly a 4.1-month test error, correlates strongly with ground-truth labels, and is notably more robust to image distortions than existing models; its attention maps land on clinically relevant skeletal regions. It received the Tomography Best Paper Award.",
      limitations:
        "It was validated on a single public challenge dataset, and the multimodal signal demonstrated is limited to sex — richer clinical variables and multi-site validation would test how far the tokenization idea generalizes.",
      takeaways: [
        "Tokenizing sex lets it interact with image features everywhere, not just at the final layer.",
        "A ~4.1-month error, attention that lands on the right bones, and extra robustness to distortion.",
        "The token-fusion recipe is a general template for multimodal medical imaging.",
      ],
    },
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
    gif: "/research/nascent.gif",
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
    detail: {
      problem:
        "PET images must be corrected for how much signal the body absorbs — attenuation correction — which normally needs a CT scan. But PET/MR scanners have no CT, so the attenuation map has to come from somewhere else.",
      current:
        "PET/MR systems estimate attenuation from the MR images or from anatomical atlases, and some workflows acquire an extra CT purely for correction.",
      gap:
        "MR- and atlas-based attenuation maps struggle with bone, and adding a CT means extra radiation, cost, and a second acquisition — defeating much of the point of PET/MR.",
      idea:
        "We generate a synthetic CT directly from the raw, non-attenuation-corrected PET image itself, so no CT and no MR-derived map is needed for correction.",
      method:
        "A two-stage pipeline first pre-trains an image-translation model on large-scale natural images (~9M) via a CT-to-CT reconstruction task, then fine-tunes it on 35 paired time-of-flight NAC-PET/CT volumes. Notably, the natural-image-pretrained model outperformed one trained only on medical data, and reconstructs realistic bone and soft-tissue structure.",
      results:
        "Within the body contour, the synthetic CT reaches a mean absolute error of 74.49 HU and a PSNR of 28.66 dB, with visibly improved bone and soft-tissue detail. Presented at IEEE ISBI 2025.",
      limitations:
        "The study validates image fidelity but not yet the downstream effect on actual PET attenuation correction, and it was fine-tuned on a single institution's 35 volume pairs — broader architectures and datasets remain to be tested.",
      takeaways: [
        "A usable synthetic CT can come from the NAC PET alone — no CT, no MR-derived map.",
        "Pre-training on ~9M natural images beat medical-only pre-training, thanks to scale.",
        "Fidelity is demonstrated; measuring the impact on attenuation correction is the next step.",
      ],
    },
    tags: ["PET", "Image Synthesis", "Foundation Models"],
    code: "https://github.com/wchen-ai/NasCent",
  },
];
