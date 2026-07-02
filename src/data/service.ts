export interface ServiceItem {
  text: { en: string; zh: string };
  href?: string;
}

export const editorial: ServiceItem[] = [
  {
    text: {
      en: "Trainee Editorial Board — Radiology: Imaging Cancer",
      zh: "见习编委 — Radiology: Imaging Cancer",
    },
    href: "https://pubs.rsna.org/page/imaging-cancer/teb",
  },
];

export interface ReviewVenue {
  name: string;
  short: string;
  count: number;
  /** 0 (pure ML/methods) → 10 (pure clinical) */
  clinical: number;
  /** 0 (no ML) → 10 (core machine learning) */
  ml: number;
}

// Review counts per venue (verified counts where they exceed the local archive,
// which is not exhaustive).
export const journalReviews: ReviewVenue[] = [
  { name: "Radiology: Imaging Cancer", short: "Rad: Imaging Cancer", count: 18, clinical: 8.3, ml: 5.0 },
  { name: "Radiology Advances", short: "Radiology Advances", count: 9, clinical: 7.4, ml: 6.0 },
  { name: "Machine Learning: Science and Technology", short: "MLST", count: 4, clinical: 2.4, ml: 9.4 },
  { name: "Medical Physics", short: "Medical Physics", count: 4, clinical: 6.8, ml: 4.4 },
  { name: "Physics in Medicine & Biology", short: "Phys Med Biol", count: 3, clinical: 6.0, ml: 5.7 },
  { name: "EJNMMI Physics", short: "EJNMMI Physics", count: 2, clinical: 6.0, ml: 3.2 },
  { name: "European Journal of Public Health", short: "Eur J Public Health", count: 2, clinical: 7.9, ml: 1.2 },
  { name: "Scientific Reports", short: "Scientific Reports", count: 2, clinical: 4.4, ml: 4.2 },
  { name: "Journal of Nuclear Medicine", short: "J Nucl Med", count: 1, clinical: 9.4, ml: 3.7 },
  { name: "BMC Cancer", short: "BMC Cancer", count: 1, clinical: 9.5, ml: 2.2 },
  { name: "Discover Oncology", short: "Discover Oncology", count: 1, clinical: 8.6, ml: 2.9 },
  { name: "Discover Artificial Intelligence", short: "Discover AI", count: 1, clinical: 1.4, ml: 8.4 },
  { name: "Scientific Data", short: "Scientific Data", count: 1, clinical: 3.4, ml: 6.6 },
];

export const conferenceReviews: ReviewVenue[] = [
  { name: "IEEE ISBI", short: "IEEE ISBI", count: 17, clinical: 5.8, ml: 7.8 },
  { name: "IEEE EMBC", short: "IEEE EMBC", count: 12, clinical: 4.2, ml: 7.0 },
  { name: "MICCAI", short: "MICCAI", count: 4, clinical: 5.4, ml: 9.0 },
  { name: "ACL (ARR)", short: "ACL", count: 2, clinical: 0.8, ml: 9.7 },
];
