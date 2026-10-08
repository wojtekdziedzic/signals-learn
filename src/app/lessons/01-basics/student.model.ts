export type Level = 'podstawowa' | 'liceum' | 'matura';

export interface Student {
  readonly id: number;
  readonly name: string;
  readonly subject: string;
  readonly level: Level;
  readonly active: boolean;
}

// Seed data so the lesson is about signals, not about typing fixtures.
export const SEED_STUDENTS: readonly Student[] = [
  { id: 1, name: 'Uczeń A', subject: 'matematyka', level: 'matura', active: true },
  { id: 2, name: 'Uczeń B', subject: 'fizyka', level: 'liceum', active: true },
  { id: 3, name: 'Uczeń C', subject: 'matematyka', level: 'podstawowa', active: false },
  { id: 4, name: 'Uczeń D', subject: 'angielski', level: 'matura', active: true },
  { id: 5, name: 'Uczeń E', subject: 'matematyka', level: 'liceum', active: true },
  { id: 6, name: 'Uczeń F', subject: 'chemia', level: 'matura', active: false },
];
