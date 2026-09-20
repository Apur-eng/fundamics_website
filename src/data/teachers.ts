import type { TeacherItem } from '../types';

/**
 * Faculty roster.
 * Core faculty mentors:
 * - Manish K. Verma (B.Tech, M.Tech IIT Dhanbad)
 * - Mayank Agarwal (B.Tech Engineering Graduate)
 */
export const teachersData: TeacherItem[] = [
  {
    id: 'teacher-1',
    name: 'Mayank Aggarwal',
    qualification: 'Founder & Director',
    subjects: ['Physics & Mathematics Direction', 'Conceptual Rigor'],
    classes: 'Classes IX – XII (ICSE, ISC & CBSE)',
    experience: 'Founder & Director',
    bio: 'Leads the academic direction of Fundemics Tutorials, with responsibility for Physics and Mathematics and the institute’s broader teaching standards.',
    image: '/assets/mayank_aggarwal.jpeg',
    isBrochureVerified: true,
  },
  {
    id: 'teacher-2',
    name: 'Manish K. Verma',
    qualification: 'Co-Founder · B.Tech, M.Tech (IIT Dhanbad)',
    subjects: ['Physics & Advanced Sciences', 'Mathematics'],
    classes: 'Classes IX – XII (ICSE, ISC & CBSE)',
    experience: 'Co-Founder · 10+ Years Mentorship',
    bio: 'Alumnus of Indian Institute of Technology (IIT Dhanbad). Co-founder and senior mentor specializing in breaking down complex physical phenomena and mathematical concepts into crystal-clear intuitive frameworks.',
    image: '/assets/manish_k_verma.jpeg',
    isBrochureVerified: true,
  },
];
