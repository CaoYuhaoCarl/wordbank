import { Class } from './class-types';
import { classesData } from './class-data';
import { studentsData } from '../users/students';
import { teachersData } from '../users/teachers';

export function getClassStudents(classId: string) {
  return studentsData.filter(student => student.classId === classId);
}

export function getClassTeacher(classId: string) {
  const classInfo = classesData.find(c => c.id === classId);
  return classInfo ? teachersData.find(t => t.id === classInfo.teacherId) : null;
}

export function getClassProgress(classId: string) {
  const students = getClassStudents(classId);
  
  return {
    averageAccuracy: students.reduce((sum, s) => sum + s.progress.accuracy, 0) / students.length,
    totalWordsLearned: students.reduce((sum, s) => sum + s.progress.wordsLearned, 0),
    averageVocabularyLevel: students.reduce((sum, s) => sum + s.progress.vocabularyLevel, 0) / students.length,
    totalPKWins: students.reduce((sum, s) => sum + s.progress.pkWins, 0)
  };
}

export function getStudentRank(studentId: string) {
  const allStudents = [...studentsData].sort((a, b) => b.progress.wordsLearned - a.progress.wordsLearned);
  return allStudents.findIndex(s => s.id === studentId) + 1;
}