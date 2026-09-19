import type { AcademicTier } from '../types';

export const academicTiers: AcademicTier[] = [
  {
    id: 'primary',
    name: 'Primary Wing',
    classes: 'Classes I – V',
    boards: ['ICSE', 'CBSE'],
    description: 'Nurturing curiosity, reading comprehension, mathematical confidence, and regular study habits through patient, engaging mentorship.',
    subjects: ['Mathematics', 'English Language & Reading', 'General Science / EVS', 'Hindi'],
    highlights: ['Small batch sizes', 'Activity-based learning', 'Foundational arithmetic & spelling'],
  },
  {
    id: 'middle',
    name: 'Middle School',
    classes: 'Classes VI – VIII',
    boards: ['ICSE', 'CBSE'],
    description: 'Transitioning from elementary concepts to structured analytical thinking, scientific derivations, and disciplined practice routines.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
    highlights: ['Formula derivations & reasoning', 'Weekly chapter checkpoints', 'Step-by-step homework guidance'],
  },
  {
    id: 'secondary',
    name: 'Secondary Board Prep',
    classes: 'Classes IX – X',
    boards: ['ICSE', 'CBSE'],
    description: 'Targeted preparation for board examinations with emphasis on concept mastery, numerical problem-solving, and precise answer writing.',
    subjects: ['Pure Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature & Grammar'],
    highlights: ['10-year board paper drill', 'Timed mock test series', 'Specialized doubt clearing counters'],
  },
  {
    id: 'senior',
    name: 'Senior Secondary',
    classes: 'Classes XI – XII',
    boards: ['ISC', 'CBSE'],
    description: 'In-depth conceptual mastery for Science (PCM/PCB) streams. Rigorous board mastery combined with analytical foundation for competitive entrances.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Commerce / Economics (On Request)'],
    highlights: ['Mentored by IIT & Engineering alumni', 'In-depth numerical drills', 'Board-focused marking rubrics'],
  },
];
