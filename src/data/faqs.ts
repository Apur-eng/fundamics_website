export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    question: 'Which boards and classes does Fundemics Tutorials coach?',
    answer: 'We provide comprehensive academic coaching for students from Classes I to XII across ICSE (Classes I–X), CBSE (Classes I–XII), and ISC (Classes XI–XII) curricula.',
    category: 'Academics',
  },
  {
    question: 'What are the batch sizes at your Lucknow centers?',
    answer: 'We maintain small, disciplined batch sizes to ensure personal attention for every student. Unlike mass commercial batches, our teachers know each child’s pace and monitor individual learning gaps.',
    category: 'Batches',
  },
  {
    question: 'Are early morning batches available for school students?',
    answer: 'Yes, as highlighted in our official brochure, we offer dedicated early morning batch options as well as evening sessions to comfortably accommodate school timetables.',
    category: 'Batches',
  },
  {
    question: 'Is transportation facility provided for students?',
    answer: 'Yes, Fundemics Tutorials provides safe, dedicated conveyance covering key neighborhood routes surrounding our Triveni Nagar, Faizullaganj, and Aliganj branches.',
    category: 'Facilities',
  },
  {
    question: 'Can parents request trial or counseling sessions before enrollment?',
    answer: 'Absolutely. We encourage parents and students to visit our campus, meet our faculty, and attend an introductory counseling session to discuss current academic standing and target goals.',
    category: 'Admissions',
  },
  {
    question: 'How does Fundemics support student doubt resolution?',
    answer: 'In addition to classroom discussions, we run dedicated one-on-one doubt-clearing sessions where students can sit with faculty to resolve complex numerical problems or theoretical hurdles.',
    category: 'Academics',
  },
];
