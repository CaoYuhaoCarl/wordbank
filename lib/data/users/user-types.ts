import { ProficiencyLevel } from '../classes/class-types';

export interface UserBase {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinedAt: string;
}

export interface StudentProgress {
  wordsLearned: number;
  accuracy: number;
  streak: number;
  pkWins: number;
  lastActive: string;
  completedLessons: number;
  vocabularyLevel: number;
}

export interface Student extends UserBase {
  role: 'student';
  classId: string;
  level: ProficiencyLevel;
  progress: StudentProgress;
  interests: string[];
  nativeLanguage: string;
}

export interface TeacherSpecialization {
  area: string;
  yearsExperience: number;
  certifications: string[];
}

export interface Teacher extends UserBase {
  role: 'teacher';
  specializations: TeacherSpecialization[];
  classIds: string[];
  education: string;
  totalStudentsTaught: number;
}