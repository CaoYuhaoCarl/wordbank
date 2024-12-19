export interface ClassSchedule {
  day: string;
  time: string;
  duration: number; // in minutes
}

export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'master';

export interface Class {
  id: string;
  name: string;
  level: ProficiencyLevel;
  teacherId: string;
  schedule: ClassSchedule[];
  maxStudents: number;
  description: string;
  targetVocabularySize: number;
  focusAreas: string[];
}