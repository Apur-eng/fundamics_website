/**
 * featuredStudents.ts
 * 
 * Re-exports the single source of truth from rankersData.ts.
 * All placeholder names and fabricated subject scores have been completely removed.
 */

import { rankersData, type RankerRecord } from './rankersData';

export type { RankerRecord };
export type RankerStudent = RankerRecord;

export const rankerStudentsData: RankerRecord[] = rankersData;
export const featuredStudentsData: RankerRecord[] = rankersData;
