import type { BranchItem } from '../types';

export const branchesData: BranchItem[] = [
  {
    id: 'triveni-nagar',
    name: 'Triveni Nagar (Main Campus)',
    addressLine1: 'Adarsh Puram, Triveni Nagar - III',
    addressLine2: 'Sitapur Road',
    city: 'Lucknow',
    pincode: '226220',
    landmark: 'Opposite Lodheshwar Lawn',
    phone: '7617018888, 7800001288',
    hours: 'Morning & Evening Batches | Office: 8:00 AM – 8:00 PM',
    isPrimary: true,
    mapEmbedQuery: 'Adarsh+Puram+Triveni+Nagar+III+Sitapur+Road+Lucknow',
  },
  {
    id: 'faizullaganj',
    name: 'Faizullaganj Branch',
    city: 'Lucknow',
    phone: '7617018888, 7800001288',
    hours: 'Morning & Evening Batches | Office: 9:00 AM – 7:30 PM',
    isPrimary: false,
  },
  {
    id: 'aliganj',
    name: 'Aliganj Branch',
    city: 'Lucknow',
    phone: '7617018888, 7800001288',
    hours: 'Morning & Evening Batches | Office: 9:00 AM – 7:30 PM',
    isPrimary: false,
  },
];
