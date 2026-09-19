/**
 * rankersData.ts
 *
 * SINGLE SOURCE OF TRUTH for all Fundemics Tutorials student results.
 *
 * DATA INTEGRITY POLICY:
 * - Only verified, authentic student data is stored here.
 * - No fabricated subject scores, invented overall percentages, or guessed marks.
 * - If only subject scores are given in the source document, overallPercentage is set to null.
 * - Students appearing across multiple documents (e.g. Anshika Srivastava, Shailja Tiwari)
 *   are merged into a single canonical record containing both their overall result and subject breakdown.
 * - All photographs correspond to verified individual student assets in /assets/rankers/.
 */

export type BoardType = 'ICSE' | 'ISC' | 'CBSE' | 'UP BOARD';

export interface SubjectScore {
  subject: string;
  percentage: number;
}

export interface RankerRecord {
  id: string;
  name: string;
  uid?: string;
  batch?: number;
  /** Academic session e.g. "2024–25", "2025–26", or historical year "2026", "2024", "2019" */
  year: string;
  school: string;
  location?: string;
  board: BoardType;
  /** Primary property: e.g. "Class X", "Class XII" */
  className: string;
  /** Backwards compatibility alias for className */
  class: string;
  /** Official overall percentage. If null, student only has subject-specific scores */
  overallPercentage: number | null;
  /** Backwards compatibility numeric percentage */
  percentage: number;
  /** Optional subject-specific breakdown */
  subjectResults?: SubjectScore[];
  /** Absolute path from /public e.g. "/assets/rankers/anshika_srivastava.png" */
  image: string | null;
  achievementNote?: string;
  isPlaceholder?: boolean;
}

/**
 * ─────────────────────────────────────────────────────────────
 * CANONICAL RANKERS DATASET
 * Source Documents:
 * 1. Top Scorers of Class XII — ISC (2024–25)
 * 2. Top Scorers of I.S.C (2019 till 2026) Archive
 * 3. Top Scorers of Class X — ICSE (2024–25)
 * 4. Top Scorers of Class X — ICSE (2025–26)
 * ─────────────────────────────────────────────────────────────
 */
export const rankersData: RankerRecord[] = [
  // ═════════════════════════════════════════════════════════════
  // 1. CLASS XII · ISC (2024–25 / BATCH 2025)
  // Verified overall percentages + subject records where available
  // ═════════════════════════════════════════════════════════════
  {
    id: 'isc-xii-2025-anshika',
    name: 'Anshika Srivastava',
    uid: '7802948',
    batch: 2025,
    year: '2024–25',
    school: 'City Montessori School',
    location: 'Aliganj - I',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: 96,
    percentage: 96,
    subjectResults: [
      { subject: 'Computer', percentage: 96 },
      { subject: 'Physics', percentage: 92 },
      { subject: 'Maths', percentage: 91 },
      { subject: 'Chemistry', percentage: 90 },
    ],
    image: '/assets/rankers/anshika_srivastava.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2025-shailja',
    name: 'Shailja Tiwari',
    uid: '7840593',
    batch: 2025,
    year: '2024–25',
    school: 'St. Antony Inter College',
    location: 'Aliganj',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: 93,
    percentage: 93,
    subjectResults: [
      { subject: 'Chemistry', percentage: 92 },
      { subject: 'Biology', percentage: 91 },
    ],
    image: '/assets/rankers/shailja_tiwari.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2025-samman',
    name: 'Samman Gupta',
    batch: 2025,
    year: '2024–25',
    school: 'City Montessori School',
    location: 'Mahanagar',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: 91,
    percentage: 91,
    image: '/assets/rankers/samman_gupta.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2025-mahi',
    name: 'Mahi Srivastava',
    batch: 2025,
    year: '2024–25',
    school: 'City Montessori School',
    location: 'Aliganj - I',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: 87,
    percentage: 87,
    image: '/assets/rankers/mahi_srivastava.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2025-anubhav',
    name: 'Anubhav Tiwari',
    batch: 2025,
    year: '2024–25',
    school: 'City Montessori School',
    location: 'Mahanagar',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: 83,
    percentage: 83,
    image: '/assets/rankers/anubhav_tiwari.png',
    isPlaceholder: false,
  },

  // ═════════════════════════════════════════════════════════════
  // 2. HISTORICAL ISC ARCHIVE (2019 TILL 2026)
  // Subject achievements exactly as supplied in official archive poster
  // Note: overallPercentage is null unless explicitly documented
  // ═════════════════════════════════════════════════════════════
  // ── 2019 ──
  {
    id: 'isc-xii-2019-aditi',
    name: 'Aditi Mohan Saxena',
    uid: '6449818',
    batch: 2019,
    year: '2019',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 99,
    subjectResults: [
      { subject: 'Computer', percentage: 99 },
      { subject: 'Maths', percentage: 96 },
    ],
    image: '/assets/rankers/aditi_mohan_saxena.png',
    isPlaceholder: false,
  },

  // ── 2021 ──
  {
    id: 'isc-xii-2021-rashmi',
    name: 'Rashmi Srivastava',
    uid: '6929262',
    batch: 2021,
    year: '2021',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 95,
    subjectResults: [
      { subject: 'Maths', percentage: 95 },
    ],
    image: '/assets/rankers/rashmi_srivastava.png',
    isPlaceholder: false,
  },

  // ── 2022 ──
  {
    id: 'isc-xii-2022-devang',
    name: 'Devang Agarwal',
    uid: '7126539',
    batch: 2022,
    year: '2022',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 98,
    subjectResults: [
      { subject: 'Chemistry', percentage: 98 },
      { subject: 'Computer', percentage: 97 },
      { subject: 'Physics', percentage: 95 },
    ],
    image: '/assets/rankers/devang_agarwal.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2022-mahi',
    name: 'Mahi Gupta',
    uid: '7204165',
    batch: 2022,
    year: '2022',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 97,
    subjectResults: [
      { subject: 'Maths', percentage: 97 },
      { subject: 'Computer', percentage: 93 },
    ],
    image: '/assets/rankers/mahi_gupta.png',
    isPlaceholder: false,
  },

  // ── 2023 ──
  {
    id: 'isc-xii-2023-aditya',
    name: 'Aditya Srivastava',
    uid: '7272686',
    batch: 2023,
    year: '2023',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 92,
    subjectResults: [
      { subject: 'Computer', percentage: 92 },
      { subject: 'Maths', percentage: 91 },
    ],
    image: '/assets/rankers/aditya_srivastava.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2023-shreyash',
    name: 'Shreyash Joshi',
    uid: '7272400',
    batch: 2023,
    year: '2023',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 93,
    subjectResults: [
      { subject: 'Physics', percentage: 93 },
      { subject: 'Chemistry', percentage: 91 },
    ],
    image: '/assets/rankers/shreyash_joshi.png',
    isPlaceholder: false,
  },

  // ── 2024 ──
  {
    id: 'isc-xii-2024-harshangi',
    name: 'Harshangi Gupta',
    uid: '7521349',
    batch: 2024,
    year: '2024',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 95,
    subjectResults: [
      { subject: 'Computer', percentage: 95 },
      { subject: 'Physics', percentage: 90 },
    ],
    image: '/assets/rankers/harshangi_gupta.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2024-ayushman',
    name: 'Ayushman Singh',
    uid: '7640322',
    batch: 2024,
    year: '2024',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 98,
    subjectResults: [
      { subject: 'Biology', percentage: 98 },
      { subject: 'Chemistry', percentage: 92 },
    ],
    image: '/assets/rankers/ayushman_singh.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2024-raghav',
    name: 'Raghav Gupta',
    uid: '7731659',
    batch: 2024,
    year: '2024',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 99,
    subjectResults: [
      { subject: 'Computer', percentage: 99 },
      { subject: 'Maths', percentage: 91 },
      { subject: 'Chemistry', percentage: 90 },
    ],
    image: '/assets/rankers/raghav_gupta.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2024-vriddhi',
    name: 'Vriddhi Mishra',
    uid: '7553408',
    batch: 2024,
    year: '2024',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 92,
    subjectResults: [
      { subject: 'Computer', percentage: 92 },
    ],
    image: '/assets/rankers/vriddhi_mishra.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2024-abhinav',
    name: 'Abhinav Tiwari',
    uid: '7553248',
    batch: 2024,
    year: '2024',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 91,
    subjectResults: [
      { subject: 'Computer', percentage: 91 },
    ],
    image: '/assets/rankers/abhinav_tiwari.png',
    isPlaceholder: false,
  },

  // ── 2026 ──
  {
    id: 'isc-xii-2026-neharika',
    name: 'Neharika Singh',
    uid: '8051493',
    batch: 2026,
    year: '2026',
    school: 'Mount Carmel Mahanagar',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 98,
    subjectResults: [
      { subject: 'Computer', percentage: 98 },
      { subject: 'Chemistry', percentage: 96 },
      { subject: 'Maths', percentage: 95 },
    ],
    image: '/assets/rankers/neharika_singh.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2026-anamika',
    name: 'Anamika Singh',
    uid: '8048172',
    batch: 2026,
    year: '2026',
    school: 'St. Joseph',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 97,
    subjectResults: [
      { subject: 'Computer', percentage: 97 },
      { subject: 'Maths', percentage: 94 },
      { subject: 'Physics', percentage: 94 },
    ],
    image: '/assets/rankers/anamika_singh.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2026-varnit',
    name: 'Varnit Shukla',
    uid: '8187305',
    batch: 2026,
    year: '2026',
    school: 'L.P.S',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 93,
    subjectResults: [
      { subject: 'Maths', percentage: 93 },
      { subject: 'Physics', percentage: 93 },
    ],
    image: '/assets/rankers/varnit_shukla.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2026-urvi',
    name: 'Urvi Singh',
    uid: '8053754',
    batch: 2026,
    year: '2026',
    school: 'St. Joseph',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 98,
    subjectResults: [
      { subject: 'Physics', percentage: 98 },
      { subject: 'Chemistry', percentage: 98 },
      { subject: 'Computer', percentage: 98 },
      { subject: 'Maths', percentage: 97 },
    ],
    image: '/assets/rankers/urvi_singh.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2026-rudransh',
    name: 'Rudransh Singh',
    uid: '8076063',
    batch: 2026,
    year: '2026',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 97,
    subjectResults: [
      { subject: 'Computer', percentage: 97 },
      { subject: 'Chemistry', percentage: 96 },
      { subject: 'Maths', percentage: 94 },
      { subject: 'Physics', percentage: 92 },
    ],
    image: '/assets/rankers/rudransh_singh.png',
    isPlaceholder: false,
  },
  {
    id: 'isc-xii-2026-om',
    name: 'Om Srivastava',
    uid: '8114162',
    batch: 2026,
    year: '2026',
    school: 'City Montessori School',
    board: 'ISC',
    className: 'Class XII',
    class: 'Class XII',
    overallPercentage: null,
    percentage: 95,
    subjectResults: [
      { subject: 'Physics', percentage: 95 },
      { subject: 'Chemistry', percentage: 95 },
      { subject: 'Biotech', percentage: 95 },
      { subject: 'Maths', percentage: 90 },
    ],
    image: '/assets/rankers/om_srivastava.png',
    isPlaceholder: false,
  },

  // ═════════════════════════════════════════════════════════════
  // 3. CLASS X · ICSE (2024–25)
  // ═════════════════════════════════════════════════════════════
  {
    id: 'icse-x-2425-yasharth',
    name: 'Yasharth Tiwari',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    year: '2024–25',
    overallPercentage: 92,
    percentage: 92,
    image: '/assets/rankers/yasharth_tiwari.png',
    school: 'City Montessori School',
    location: 'Mahanagar',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2425-abhinav',
    name: 'Abhinav Verma',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    year: '2024–25',
    overallPercentage: 90,
    percentage: 90,
    image: '/assets/rankers/abhinav_verma.png',
    school: 'St. Joseph Inter College',
    location: 'Sitapur Road',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2425-daksh',
    name: 'Daksh Jain',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    year: '2024–25',
    overallPercentage: 90,
    percentage: 90,
    image: '/assets/rankers/daksh_jain.png',
    school: 'St. Fidelis Inter College',
    location: 'Vikas Nagar',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2425-shivansh',
    name: 'Shivansh Dubey',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    year: '2024–25',
    overallPercentage: 90,
    percentage: 90,
    image: '/assets/rankers/shivansh_dubey.png',
    school: 'City Montessori School',
    location: 'Mahanagar',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2425-priyanshi',
    name: 'Priyanshi Pal',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    year: '2024–25',
    overallPercentage: 83,
    percentage: 83,
    image: '/assets/rankers/priyanshi_pal.png',
    school: 'St. Antony Inter College',
    location: 'Aliganj',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2425-shipra',
    name: 'Shipra Singh',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    year: '2024–25',
    overallPercentage: 80,
    percentage: 80,
    image: '/assets/rankers/shipra_singh.png',
    school: 'Mount Carmel Inter College',
    location: 'Mahanagar',
    isPlaceholder: false,
  },

  // ═════════════════════════════════════════════════════════════
  // 4. CLASS X · ICSE (2025–26)
  // Source: Top_Scorers_Class_X_ICSE_2025-26.docx
  // ═════════════════════════════════════════════════════════════
  {
    id: 'icse-x-2526-adamya',
    name: 'Adamya Pratap Singh',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    batch: 2026,
    year: '2025–26',
    overallPercentage: 97,
    percentage: 97,
    image: '/assets/rankers/adamya_pratap_singh.png',
    school: 'City Montessori School',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2526-shivanshu',
    name: 'Shivanshu Modi',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    batch: 2026,
    year: '2025–26',
    overallPercentage: 96,
    percentage: 96,
    image: '/assets/rankers/shivanshu_modi.png',
    school: 'City Montessori School',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2526-ishansh',
    name: 'Ishansh Srivastava',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    batch: 2026,
    year: '2025–26',
    overallPercentage: 92,
    percentage: 92,
    image: '/assets/rankers/ishansh_srivastava.png',
    school: 'City Montessori School',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2526-prastuti',
    name: 'Prastuti Jain',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    batch: 2026,
    year: '2025–26',
    overallPercentage: 91,
    percentage: 91,
    image: '/assets/rankers/prastuti_jain.png',
    school: 'City Montessori School',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2526-ayush',
    name: 'Ayush Chaudhary',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    batch: 2026,
    year: '2025–26',
    overallPercentage: 89,
    percentage: 89,
    image: '/assets/rankers/ayush_chaudhary.png',
    school: 'St. Joseph Inter College',
    isPlaceholder: false,
  },
  {
    id: 'icse-x-2526-eeha',
    name: 'Eeha Mishra',
    board: 'ICSE',
    className: 'Class X',
    class: 'Class X',
    batch: 2026,
    year: '2025–26',
    overallPercentage: 86,
    percentage: 86,
    image: '/assets/rankers/eeha_mishra.png',
    school: 'City Montessori School',
    isPlaceholder: false,
  },
];

/**
 * Filter helpers
 */
export const getOverallRankers = (records: RankerRecord[] = rankersData): RankerRecord[] => {
  return records
    .filter((r) => r.overallPercentage !== null && r.overallPercentage !== undefined)
    .sort((a, b) => (b.overallPercentage ?? 0) - (a.overallPercentage ?? 0));
};

export const getHistoricalISCRankers = (records: RankerRecord[] = rankersData): RankerRecord[] => {
  return records.filter((r) => r.board === 'ISC');
};
