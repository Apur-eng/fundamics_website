export interface CmsFeature {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface CmsAchievementSample {
  studentName: string;
  campus: string;
  score: string;
  board: string;
  year: string;
  badge: string;
}

export const cmsBatchFeatures: CmsFeature[] = [
  {
    id: 'cms-pacing',
    title: 'CMS-Focused Curriculum Pacing',
    description: 'Our syllabus timeline is synchronised with the City Montessori School test calendar, ensuring students are thoroughly prepared weeks ahead of campus term exams and pre-boards.',
    tag: 'Syllabus Alignment',
  },
  {
    id: 'targeted-prep',
    title: 'Targeted Academic Preparation',
    description: 'Special emphasis on high-weightage topics, complex numerical problem solving, and analytical question types frequently featured in CMS comparative examinations.',
    tag: 'Comparative Exams',
  },
  {
    id: 'regular-assessment',
    title: 'Continuous Rigorous Assessment',
    description: 'Bi-weekly chapter checks and full-length timed mock tests modelled after standard board rubrics, training students to deliver precise, high-scoring answers.',
    tag: 'Mock Series',
  },
  {
    id: 'performance-tracking',
    title: 'Granular Performance Tracking',
    description: 'Every test result is logged in the Fundemics LMS, providing parents and mentors clear topic-by-topic analytics to remedy weak concepts before board finals.',
    tag: 'Digital LMS',
  },
];

export const cmsAchievementsSample: CmsAchievementSample[] = [
  {
    studentName: 'Aarav Sharma [Sample]',
    campus: 'CMS Gomti Nagar Campus I',
    score: '98.6%',
    board: 'CBSE Class XII',
    year: '2024',
    badge: 'School Merit',
  },
  {
    studentName: 'Diya Patel [Sample]',
    campus: 'CMS Aliganj Campus I',
    score: '98.2%',
    board: 'ICSE Class X',
    year: '2024',
    badge: 'Centum Mathematics',
  },
  {
    studentName: 'Ishaan Mishra [Sample]',
    campus: 'CMS Mahanagar Campus',
    score: '96.8%',
    board: 'CBSE Class XII',
    year: '2023',
    badge: 'Science Stream Distinction',
  },
];
