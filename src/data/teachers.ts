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
    name: 'Manish K. Verma',
    qualification: 'B.Tech, M.Tech (IIT Dhanbad)',
    subjects: ['Physics & Advanced Sciences', 'Mathematics'],
    classes: 'Classes IX – XII (ICSE, ISC & CBSE)',
    experience: '10+ Years of Mentorship',
    bio: 'Alumnus of Indian Institute of Technology (IIT Dhanbad). Specializes in breaking down complex physical phenomena and mathematical concepts into crystal-clear intuitive frameworks.',
    image: '/assets/faculty_mentor.jpg',
    isBrochureVerified: true,
  },
  {
    id: 'teacher-2',
    name: 'Mayank Agarwal',
    qualification: 'B.Tech (Engineering Graduate)',
    subjects: ['Mathematics & Logical Aptitude'],
    classes: 'Classes VII – XII (ICSE, ISC & CBSE)',
    experience: '8+ Years Teaching Experience',
    bio: 'Engineering graduate dedicated to building strong computational agility, algebra mastery, and step-by-step problem-solving rigor for school and board examinations.',
    image: '/assets/teacher_mayank.jpg',
    isBrochureVerified: true,
  },
];
