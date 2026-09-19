export interface DifferentiationPillar {
  number: string;
  title: string;
  shortHeadline: string;
  description: string;
  metricsOrHighlight: string;
  iconName: string;
  featured?: boolean;
}

export const differentiationPillars: DifferentiationPillar[] = [
  {
    number: '01',
    title: 'Personalized Attention',
    shortHeadline: 'Small batch sizes where every student is known.',
    description: 'We strictly maintain limited batch intake so no child gets lost in a crowded lecture hall. Mentors personally inspect homework, answer doubts individually, and adapt explanation styles to each student’s pace.',
    metricsOrHighlight: 'Max 15–20 Students / Batch · 1:1 Daily Doubt Resolution',
    iconName: 'Users',
    featured: true,
  },
  {
    number: '02',
    title: 'Regular Testing',
    shortHeadline: 'Continuous evaluation that builds exam confidence.',
    description: 'Weekly topic checks, monthly descriptive exams, and comprehensive board-pattern test series simulate real examination pressure and teach students disciplined time management.',
    metricsOrHighlight: 'Weekly Topic Checks · Full-Length Board Mock Drills',
    iconName: 'ClipboardCheck',
  },
  {
    number: '03',
    title: 'Student LMS Portal',
    shortHeadline: 'Digital study ecosystem accessible anywhere, anytime.',
    description: 'Our proprietary student portal gives enrolled students 24/7 access to curated lecture notes, chapter summaries, homework assignments, and self-paced video modules.',
    metricsOrHighlight: '24/7 Cloud Access · Recorded Video Lectures · Question Bank',
    iconName: 'Laptop',
  },
  {
    number: '04',
    title: 'Regular Attendance Tracking',
    shortHeadline: 'Daily accountability and instant parent updates.',
    description: 'Every class session is logged with real-time attendance alerts sent to parents. Consistency and punctuality are reinforced from day one as cornerstones of academic excellence.',
    metricsOrHighlight: 'Automated Parent Notifications · Punctuality Monitoring',
    iconName: 'CalendarCheck',
  },
  {
    number: '05',
    title: 'Results & Performance Tracking',
    shortHeadline: 'Granular analytics revealing strengths and weak zones.',
    description: 'Instead of just giving a percentage, our mentors track accuracy across each chapter concept. Detailed progress reports enable precise remedial coaching before board finals.',
    metricsOrHighlight: 'Concept-Level Score Breakdown · Periodic Parent-Teacher Reviews',
    iconName: 'TrendingUp',
  },
];
