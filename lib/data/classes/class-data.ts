import { Class } from './class-types';

export const classesData: Class[] = [
  {
    id: "c1",
    name: "English Masters A1",
    level: "advanced",
    teacherId: "t1",
    schedule: [
      { day: "Monday", time: "09:00", duration: 90 },
      { day: "Wednesday", time: "09:00", duration: 90 }
    ],
    maxStudents: 20,
    description: "Advanced English course focusing on academic vocabulary and IELTS preparation",
    targetVocabularySize: 3000,
    focusAreas: ["Academic Writing", "IELTS Preparation", "Advanced Vocabulary"]
  },
  {
    id: "c2",
    name: "Business English B1",
    level: "intermediate",
    teacherId: "t2",
    schedule: [
      { day: "Tuesday", time: "14:00", duration: 90 },
      { day: "Thursday", time: "14:00", duration: 90 }
    ],
    maxStudents: 15,
    description: "Business English course focusing on professional communication",
    targetVocabularySize: 2000,
    focusAreas: ["Business Communication", "Professional Writing", "Presentation Skills"]
  },
  {
    id: "c3",
    name: "Beginner Basics",
    level: "beginner",
    teacherId: "t3",
    schedule: [
      { day: "Monday", time: "16:00", duration: 60 },
      { day: "Friday", time: "16:00", duration: 60 }
    ],
    maxStudents: 12,
    description: "Foundation English course for beginners",
    targetVocabularySize: 1000,
    focusAreas: ["Basic Grammar", "Daily Conversation", "Essential Vocabulary"]
  },
  {
    id: "c4",
    name: "TOEFL Preparation",
    level: "advanced",
    teacherId: "t1",
    schedule: [
      { day: "Tuesday", time: "10:00", duration: 120 },
      { day: "Thursday", time: "10:00", duration: 120 }
    ],
    maxStudents: 18,
    description: "Intensive TOEFL preparation course",
    targetVocabularySize: 4000,
    focusAreas: ["TOEFL Strategy", "Academic English", "Test Practice"]
  },
  {
    id: "c5",
    name: "Conversation Club",
    level: "intermediate",
    teacherId: "t4",
    schedule: [
      { day: "Wednesday", time: "18:00", duration: 90 },
      { day: "Saturday", time: "10:00", duration: 90 }
    ],
    maxStudents: 10,
    description: "Interactive conversation practice for intermediate learners",
    targetVocabularySize: 1500,
    focusAreas: ["Speaking Skills", "Listening Comprehension", "Cultural Exchange"]
  }
];