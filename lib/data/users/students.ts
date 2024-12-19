import { Student } from './user-types';

export const studentsData: Student[] = [
  {
    id: "s1",
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    joinedAt: "2024-01-15",
    classId: "c1",
    level: "advanced",
    progress: {
      wordsLearned: 2500,
      accuracy: 92,
      streak: 15,
      pkWins: 45,
      lastActive: "2024-03-10",
      completedLessons: 120,
      vocabularyLevel: 8
    },
    interests: ["Literature", "Academic Writing", "Public Speaking"],
    nativeLanguage: "Spanish"
  },
  {
    id: "s3",
    name: "Emma Davis",
    email: "emma@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    joinedAt: "2024-02-01",
    classId: "c1",
    level: "advanced",
    progress: {
      wordsLearned: 2800,
      accuracy: 94,
      streak: 21,
      pkWins: 52,
      lastActive: "2024-03-10",
      completedLessons: 135,
      vocabularyLevel: 9
    },
    interests: ["Research", "Scientific Writing", "Debate"],
    nativeLanguage: "German"
  },
  {
    id: "s6",
    name: "David Kim",
    email: "david@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    joinedAt: "2024-01-18",
    classId: "c1",
    level: "advanced",
    progress: {
      wordsLearned: 2650,
      accuracy: 91,
      streak: 18,
      pkWins: 48,
      lastActive: "2024-03-10",
      completedLessons: 128,
      vocabularyLevel: 8
    },
    interests: ["Business", "Current Affairs", "International Relations"],
    nativeLanguage: "Korean"
  },
  {
    id: "s7",
    name: "Maria Garcia",
    email: "maria@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    joinedAt: "2024-01-20",
    classId: "c1",
    level: "advanced",
    progress: {
      wordsLearned: 2900,
      accuracy: 95,
      streak: 25,
      pkWins: 55,
      lastActive: "2024-03-10",
      completedLessons: 140,
      vocabularyLevel: 9
    },
    interests: ["Literature", "Poetry", "Creative Writing"],
    nativeLanguage: "Spanish"
  },
  {
    id: "s8",
    name: "Thomas Anderson",
    email: "thomas@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
    joinedAt: "2024-01-25",
    classId: "c1",
    level: "advanced",
    progress: {
      wordsLearned: 2750,
      accuracy: 93,
      streak: 20,
      pkWins: 50,
      lastActive: "2024-03-10",
      completedLessons: 132,
      vocabularyLevel: 8
    },
    interests: ["Technology", "Scientific Articles", "Technical Writing"],
    nativeLanguage: "English"
  }
];