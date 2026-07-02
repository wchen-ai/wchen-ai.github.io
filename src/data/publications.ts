export type PubType = "journal" | "conference" | "preprint";

export interface Publication {
  id: string;
  title: string;
  /** Author list; "Chen, W." is rendered in bold. */
  authors: string[];
  etAl?: boolean;
  venue: string;
  year: number;
  type: PubType;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  code?: string;
  award?: string;
  underReview?: boolean;
  featured?: boolean;
  /** first two authors are co-first (equal contribution) */
  coFirst?: boolean;
}

export const publications: Publication[] = [
  {
    id: "merit-cv",
    title:
      "MERIT-CV: Multimodal Efficient Risk predIcTion for CardioVascular Disease",
    authors: ["Chen, W."],
    etAl: true,
    venue: "Under review",
    year: 2026,
    type: "conference",
    underReview: true,
    featured: true,
  },
  {
    id: "jacc2026-opportunistic",
    title:
      "Opportunistic Screening for Adverse Cardiovascular Events Using Routine Clinical Chest Computed Tomography",
    authors: ["Tariq, A.", "Chen, W.", "Stib, M."],
    etAl: true,
    venue:
      "Journal of the American College of Cardiology, 87(13_Suppl): A1225 (ACC 2026)",
    year: 2026,
    type: "conference",
  },
  {
    id: "fed-fbd",
    title:
      "Fed-FBD: Federated Functional Block Diversification for Isolation, Privacy, and Surgical Unlearning",
    authors: ["Chen, W."],
    etAl: true,
    venue: "arXiv preprint arXiv:2606.12679",
    year: 2026,
    type: "preprint",
    arxiv: "https://arxiv.org/abs/2606.12679",
    featured: true,
  },
  {
    id: "saswise-ue",
    title:
      "SASWISE-UE: Segmentation and Synthesis with Interpretable Scalable Ensembles for Uncertainty Estimation",
    authors: ["Chen, W."],
    etAl: true,
    venue: "Computers in Biology and Medicine, 194: 110258",
    year: 2025,
    type: "journal",
    doi: "10.1016/j.compbiomed.2025.110258",
    arxiv: "https://arxiv.org/abs/2411.05324",
    code: "https://github.com/wchen-ai/SASWISE",
    featured: true,
  },
  {
    id: "isbi2025-nac-ct",
    title:
      "Synthetic CT Generation from Time-of-Flight Non-Attenuation-Corrected PET for Whole-Body PET Attenuation Correction",
    authors: ["Chen, W."],
    etAl: true,
    venue: "IEEE International Symposium on Biomedical Imaging (ISBI 2025), Houston, TX",
    year: 2025,
    type: "conference",
    arxiv: "https://arxiv.org/abs/2504.07450",
    code: "https://github.com/wchen-ai/NasCent",
    featured: true,
  },
  {
    id: "bae-vit",
    title:
      "BAE-ViT: An Efficient Multimodal Vision Transformer for Bone Age Estimation",
    authors: ["Zhang, J.", "Chen, W."],
    etAl: true,
    coFirst: true,
    venue: "Tomography, 10(12): 2058–2072",
    year: 2024,
    type: "journal",
    doi: "10.3390/tomography10120146",
    code: "https://github.com/wchen-ai/BAE_ViT",
    award: "Tomography Best Paper Award",
    featured: true,
  },
  {
    id: "robmednas",
    title:
      "RobMedNAS: Searching Robust Neural Network Architectures for Medical Image Synthesis",
    authors: ["Zhang, J.", "Chen, W."],
    etAl: true,
    coFirst: true,
    venue: "Biomedical Physics & Engineering Express, 10(5): 055029",
    year: 2024,
    type: "journal",
    doi: "10.1088/2057-1976/ad6b4e",
  },
  {
    id: "hnts-arxiv",
    title:
      "Deep Learning for Longitudinal Gross Tumor Volume Segmentation in MRI-Guided Adaptive Radiotherapy for Head and Neck Cancer",
    authors: ["Tie, X.", "Chen, W."],
    etAl: true,
    venue: "arXiv preprint arXiv:2412.00663",
    year: 2024,
    type: "preprint",
    arxiv: "https://arxiv.org/abs/2412.00663",
    award: "1st place — MICCAI HNTS-MRG 2024",
    featured: true,
  },
  {
    id: "hnts-mrg-2024",
    title:
      "Longitudinal Gross Tumor Volume Segmentation Using a Mask-Aware Network in MRI-Guided Adaptive Radiotherapy for Head and Neck Cancer",
    authors: ["Tie, X.", "Chen, W."],
    etAl: true,
    venue:
      "Head and Neck Tumor Segmentation for MR-Guided Applications (HNTS-MRG @ MICCAI 2024), Houston, TX",
    year: 2024,
    type: "conference",
  },
  {
    id: "pet-motion",
    title: "Motion-Correction Strategies for Enhancing Whole-Body PET Imaging",
    authors: ["Wang, J.", "Bermudez, D.", "Chen, W."],
    etAl: true,
    venue: "Frontiers in Nuclear Medicine, 4",
    year: 2024,
    type: "journal",
    doi: "10.3389/fnume.2024.1257880",
  },
  {
    id: "ismrm2022",
    title: "Exploration of Vision Transformer Models in Medical Image Synthesis",
    authors: ["Chen, W."],
    etAl: true,
    venue:
      "31st Annual Meeting of the International Society for Magnetic Resonance in Medicine (ISMRM 2022), London, UK",
    year: 2022,
    type: "conference",
  },
  {
    id: "low-dose-pet-mr",
    title:
      "Initial Experience With Low-Dose 18F-Fluorodeoxyglucose Positron Emission Tomography/Magnetic Resonance Imaging With Deep Learning Enhancement",
    authors: ["Park, C.", "Chen, W."],
    etAl: true,
    venue: "Journal of Computer Assisted Tomography, 45(4): 637–642",
    year: 2021,
    type: "journal",
    doi: "10.1097/rct.0000000000001174",
  },
  {
    id: "dl-networks",
    title:
      "Application and Construction of Deep Learning Networks in Medical Imaging",
    authors: ["Torres-Velázquez, M.", "Chen, W."],
    etAl: true,
    venue: "IEEE Transactions on Radiation and Plasma Medical Sciences, 5(2): 137–159",
    year: 2021,
    type: "journal",
    doi: "10.1109/trpms.2020.3030611",
  },
  {
    id: "low-light",
    title: "Exploring Low-Light Object Detection Techniques",
    authors: ["Chen, W.", "Shah, T."],
    venue: "arXiv preprint arXiv:2107.14382",
    year: 2021,
    type: "preprint",
    arxiv: "https://arxiv.org/abs/2107.14382",
  },
  {
    id: "sabi2020",
    title:
      "Ultra-Low-Dose FDG PET/MR Enterography with Deep-Learning Image Reconstruction",
    authors: ["Park, C.", "Chen, W."],
    etAl: true,
    venue:
      "43rd Annual Meeting of the Society for Advanced Body Imaging (SABI 2020) & 106th RSNA Annual Meeting (RSNA 2020)",
    year: 2020,
    type: "conference",
  },
  {
    id: "snmmi2020",
    title:
      "Single Subject Deep Learning-Based Partial Volume Correction for PET Using Simulated Data and Cycle Consistent Networks",
    authors: ["Chen, W."],
    etAl: true,
    venue:
      "Society of Nuclear Medicine and Molecular Imaging Annual Meeting (SNMMI 2020), New Orleans, LA",
    year: 2020,
    type: "conference",
  },
  {
    id: "celegans",
    title:
      "Using Microfluidic Impedance Cytometry to Measure C. elegans Worms and Identify Their Developmental Stages",
    authors: ["Zhu, Z.", "Chen, W."],
    etAl: true,
    venue: "Sensors and Actuators B: Chemical, 275: 470–482",
    year: 2018,
    type: "journal",
    doi: "10.1016/j.snb.2018.08.014",
  },
];
