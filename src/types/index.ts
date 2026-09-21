export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  sinceYear: string;
  phones: {
    primary: string;
    secondary: string;
    alternate: string;
    displayPrimary: string;
    displaySecondary: string;
    displayAlternate: string;
  };
  email: string;
  social: {
    youtube: string;
    facebook?: string;
    instagram?: string;
  };
  lms: {
    loginUrl: string;
    enquiryPortalUrl: string;
  };
  whatsapp: {
    number: string;
    cleanNumber: string;
    display: string;
    link: string;
    defaultMessage: string;
  };
  facilities: {
    transportAvailable: boolean;
    morningBatchesAvailable: boolean;
    eveningBatchesAvailable: boolean;
  };
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface AcademicTier {
  id: string;
  name: string;
  classes: string;
  boards: string[];
  description: string;
  subjects: string[];
  highlights: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RankerItem {
  id: string;
  name: string;
  class: string;
  board: 'ICSE' | 'ISC' | 'CBSE';
  percentage: string;
  year: string;
  achievement: string;
  subjects?: string[];
  image?: string;
  isPlaceholder?: boolean;
}

export type FacultyCategory =
  | 'Strategic Planning'
  | 'Biology'
  | 'Social Sciences'
  | 'Mathematics'
  | 'Physics'
  | 'Operations & Support Team'
  | 'Chemistry'
  | 'Computer Science'
  | 'Commerce'
  | 'Pre-Primary';

export interface TeacherItem {
  id: string;
  name: string;
  category: FacultyCategory;
  designation?: string;
  qualification: string;
  subjects: string[];
  classes: string;
  experience?: string;
  bio: string;
  image?: string;
  isBrochureVerified?: boolean;
}

export type FacultyItem = TeacherItem;

export interface BranchItem {
  id: string;
  name: string;
  addressLine1?: string;
  addressLine2?: string;
  city: string;
  pincode?: string;
  landmark?: string;
  phone?: string;
  hours: string;
  isPrimary?: boolean;
  mapEmbedQuery?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  studentName: string;
  location: string;
  rating: number;
}
