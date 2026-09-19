export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const threePillarsData: PillarItem[] = [
  {
    id: 'personalized',
    badge: 'PILLAR 01',
    title: 'Personalized Learning',
    subtitle: 'Tailored Attention for Every Learner',
    description: 'We keep batch sizes intentionally small so educators understand each student’s unique pace, identify learning bottlenecks early, and customize doubt-clearing sessions.',
  },
  {
    id: 'foundations',
    badge: 'PILLAR 02',
    title: 'Strong Foundations',
    subtitle: 'Concept Mastery Over Rote Memory',
    description: 'We teach from first principles. Students learn the derivations and intuitive logic behind formulas, building enduring academic competence that carries into competitive exams.',
  },
  {
    id: 'achievement',
    badge: 'PILLAR 03',
    title: 'Proven Achievement',
    subtitle: 'Consistent Board Excellence & Confidence',
    description: 'Through regular, authentic test series and structured feedback, our students consistently achieve 90%+ scores and cultivate lifelong self-assurance in academic performance.',
  },
];
