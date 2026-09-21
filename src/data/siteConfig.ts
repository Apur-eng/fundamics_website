import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'FUNDEMICS TUTORIALS',
  legalName: 'Fundemics Tutorials LLP',
  tagline: 'Educating for better tomorrow...',
  sinceYear: '2014',
  phones: {
    primary: 'tel:+917617018888',
    secondary: 'tel:+917800001288',
    alternate: 'tel:+918181906139',
    displayPrimary: '7617018888',
    displaySecondary: '7800001288',
    displayAlternate: '8181906139',
  },
  email: 'info@fundemicstutorials.in',
  social: {
    // Official YouTube channel placeholder, waiting for client URL
    youtube: '#youtube-channel-tbd',
    facebook: 'https://www.facebook.com/people/Fundemics-Tutorials-LLP/100064155546202',
    instagram: 'https://www.instagram.com/thefundemicstutorials',
  },
  lms: {
    loginUrl: 'https://app.fundemicstutorials.in/app/login.php',
    enquiryPortalUrl: 'https://app.fundemicstutorials.in/Enquiry/',
  },
  facilities: {
    transportAvailable: true,
    morningBatchesAvailable: true,
    eveningBatchesAvailable: true,
  },
};
